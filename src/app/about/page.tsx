"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { fakeGetUserFunction, type User } from "@/api/api";

const About = () => {
    // To store the fetched user
    const [user, setUser] = useState<User | null>(null);

    // Get query parameters from the URL (td. ?blog=Shrek) þegar linkurinn í slug page er notaður
    const queryParams = useSearchParams();
    // extracts the value of the blog query parameter from the URL.
    const blogName = queryParams.get("blog"); //skilar "Shrek"/"Fiona"/"Donkey"

    // When the blogName changes, fetch the corresponding user data
    useEffect(() => {
        if (blogName) {
            const fetchUser = async () => {
                const userData = await fakeGetUserFunction(blogName); // Fetch user by name
                if (typeof userData !== "string") {
                    setUser(userData); // Store the user data if it's valid
                }
            };
            fetchUser(); // Call the async function
        }
    }, [blogName]); // Re-run if blogName changes

    // Show a loading message while the user is being fetched
    if (!user) {
        return <p>Loading user data...</p>;
    }

    // Render the user's information once it's available
    return (
        <div className="p-20 bg-green-200 m-12">
            <p className="font-bold text-center text-4xl">{user.name}</p>
            <p className="py-2">Role: {user.role}</p>
            <p className="py-2">Location: {user.location}</p>
            <p className="py-2">Skills: {user.skills.join(", ")}</p>
            <p className="py-2">Bio: {user.bio}</p>
            <img
                src={user.avatar}
                className="items-center text-center mx-auto p-8"
                alt={user.name}
            />
        </div>
    );
};

export default About;
