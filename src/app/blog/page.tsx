"use client";

// Import necessary modules and types
import { fakeGetAllUsers, type User } from "@/api/api";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Blog = () => {
	// State to hold the list of users
	const [users, setUsers] = useState<User[] | null>(null);

	// Function to fetch users from the fake API
	const getUsers = useCallback(async () => {
		const response = await fakeGetAllUsers();
		setUsers(response);  // Store the fetched users in state
	}, []);

	// Fetch users when the component mounts
	useEffect(() => {
		getUsers();
	}, [getUsers]);

	// Log the users data to console whenever it changes
	useEffect(() => {
		if (users) {
			console.log("Users:", users);  // Helpful for debugging
		}
	}, [users]);

	// Display a loading message until users are fetched
	if (!users) {
		return <p>Loading...</p>;
	}

	// Render the list of users in cards
	return (
		<div className="flex justify-between py-16 pb-48 gap-8 h-screen">
			{users.map((user) => (
				<div
					key={user.id}
					className="bg-green-200 flex-grow p-4 rounded-2xl w-[30%] text-center"
				>
					{/* Display user name and role */}
					<p className="text-lg font-bold">{user.name}</p>
					<p className="text-xs">{user.role}</p>

					{/* Clicking the image will navigate to the user’s blog page */}
					<Link href={`/blog/${user.name}`} className="bg-transparent">
						<img
							src={user.avatar}
							className="h-70 pt-12 items-center mx-auto"
							alt={user.name}
						/>
					</Link>

					{/* Line break for spacing */}
					<br />
				</div>
			))}
		</div>
	);
};

export default Blog;
