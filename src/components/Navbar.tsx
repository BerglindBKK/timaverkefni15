"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
	const pathname = usePathname();
	console.log({ pathname });

	// ensures you're only targeting URLs that are actually part of your blog section
	const isBlog = pathname.startsWith("/blog");

	return (
		<nav>
			<div className="flex justify-between bg-green-700 p-4">
				<div className="text-white font-bold">
					Shreks world
				</div>
				<div className="flex ">
					<ol className=" flex gap-4">
						<li>
							<Link
								className="text-white "
								href="/"
							// style={pathname === "/" ? { backgroundColor: "red" } : {}}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className="text-white "
								// style={pathname.includes("/blog") ? { backgroundColor: "red" } : {}}
								href="/blog"
							>
								Characters
							</Link>
						</li>
					</ol>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
