"use client";

import { fakeGetUserFunction, type User } from "@/api/api";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const BlogWithInfo = () => {
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<string | null>(null);

	// Hook to get route parameters
	const params = useParams();

	// Extracting the slug from route parameters if it's a string only
	const slug = typeof params.slug === "string" ? params.slug : undefined;

	// Function to fetch user data, memoized with useCallback to avoid unnecessary re-renders. 
	// Callback notað því utan useEffect. Breytist bara ef slug breytist
	const getUser = useCallback(async () => {
		if (!slug) {
			setError("Missing slug.");
			return;
		}

		// Fetch user using the provided fake API function
		const response = await fakeGetUserFunction(slug);

		// If the response is a string, treat it as an error message
		if (typeof response === "string") {
			setError(response);
		} else {
			// Otherwise, set the user data
			setUser(response);
		}
	}, [slug]);

	// Call getUser on component mount and whenever slug changes
	useEffect(() => {
		getUser();
	}, [getUser]);

	// Show error if any
	if (error) {
		return <p>{error}</p>;
	}

	// Show loading state while user is null and not yet fetched
	if (user === null) {
		return <p>Loading...</p>;
	}

	// Render the user's information when available
	return (
		<div className="p-20 bg-green-200 m-12">
			{/* Display user's name */}
			<p className="font-bold text-center text-4xl">{user.name}</p>
			<br />

			{/* Link to the "about" page with user's name as a query parameter.
			    Also displays the user's avatar inside the link. */}

			<Link href={`/about?blog=${user.name}`}>{/* Þetta triggerar nýtt blog value fyrir QueryParams og blogName  */}
				<img
					src={user.avatar}
					className="items-center text-center mx-auto p-8"
					alt={user.name}
				/>
			</Link>
		</div>
	);
};

export default BlogWithInfo;
