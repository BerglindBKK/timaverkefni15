"use client";

import Link from "next/link";

const Home = () => {
	return (
		<div className="flex items-center justify-center bg-green-200 h-screen m-8">
			<Link
				href={"/blog"} >
				<p className="text-3xl text-center">Welcome to Shrek's World!</p>
				<p className="text-sm text-center">Feel free to walk around the swamp!</p>
			</Link>

		</div>

	);
};

export default Home;
