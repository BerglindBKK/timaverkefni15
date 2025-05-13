"use client";

import { fakeGetAllUsers, type User } from "@/api/api";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Blog = () => {
	const [users, setUsers] = useState<User[] | null>(null);

	// Function to fetch users from the fake API
	const getUsers = useCallback(async () => {
		const response = await fakeGetAllUsers();
		setUsers(response);  
	}, []); // calleed only on mount. Einu sinni

	// Fetch users when the component mounts
	useEffect(() => {
		getUsers();
	}, [getUsers]);

	// Log the users data to console whenever it changes
	useEffect(() => {
		if (users) {
			console.log("Users:", users); 
		}
	}, [users]);


	if (!users) {
		return <p>Loading...</p>;
	}

	return (
		<div className="flex justify-between py-16 pb-48 gap-8 h-screen">
			{users.map((user) => (
				<div
					key={user.id}
					className="bg-green-200 flex-grow p-4 rounded-2xl w-[30%] text-center"
				>
					<p className="text-lg font-bold">{user.name}</p>
					<p className="text-xs">{user.role}</p>

					{/* Clicking the image will navigate to the user’s blog page */}
					{/* Slug page tekur username sem slug og biður api um upplýsingar um notandann */}
					<Link href={`/blog/${user.name}`} className="bg-transparent">
						<img
							src={user.avatar}
							className="h-70 pt-12 items-center mx-auto"
							alt={user.name}
						/>
					</Link>
					<br />
				</div>
			))}
		</div>
	);
};

export default Blog;
