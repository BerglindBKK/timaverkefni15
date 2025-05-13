import type { Expense } from "@/types/types";


const users = [
	{
		id: 0,
		name: "Shrek",
		role: "A beautiful ugly ogre",
		bio: "I’m an ogre with a big heart and a passion for adventure. Living in the swamp, I’ve learned that life is more than just mud and muck—it’s about standing up for what’s right, helping those in need, and finding true friendship. Though I may seem grumpy and misunderstood at times, beneath the surface is a loyal friend and a protector of those who matter most. Whether it's battling dragons, saving princesses, or just enjoying a quiet day in my swamp, I always do things my way. I'm not here for the fame, but I do what I can to make the world a better place—one roar at a time.",
		location: "Reykjavík, Iceland",
		skills: ["Node.js", "TypeScript", "PostgreSQL"],
		avatar: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png",
	},
	{
		id: 1,
		name: "Fiona",
		role: "A beautiful ugly princess",
		bio: "I’m a princess with a fierce heart and an unwavering spirit. Growing up in a tower wasn’t easy, but it taught me the value of self-reliance, resilience, and the importance of embracing who you truly are. While most people see me as royalty, I’ve always believed that true beauty comes from within—and that love and kindness are the most powerful forces in the world. Whether it's leading a kingdom, standing by my family, or sharing a laugh with my beloved Shrek, I always strive to stay true to myself and those I love.",
		location: "Akureyri, Iceland",
		skills: ["Figma", "User Research", "Accessibility"],
		avatar: "https://upload.wikimedia.org/wikipedia/en/b/b9/Princess_Fiona.png",
	},
	{
		id: 2,
		name: "Donkey",
		role: "Shrek's loyal friend who never shuts up",
		bio: "I'm not just Shrek's best friend; I'm the life of the party, the one who's always there with a joke, a song, or an endless supply of energy! I may talk a lot (okay, a lot), but that’s just because I care and love being around people. I’ve got a heart as big as my mouth, and I’ll never back down from an adventure, especially if it means standing by my friends. Whether it’s helping Shrek save the day, making someone laugh, or just being a loyal companion, I’m always ready for what comes next!",
		location: "Selfoss, Iceland",
		skills: ["React", "Tailwind CSS", "JavaScript"],
		avatar: "https://upload.wikimedia.org/wikipedia/en/6/6c/Donkey_%28Shrek%29.png",
	},

];

export type User = (typeof users)[number];

const sleep = async (durationInMs: number) => {
	const coinFlipPromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve("heads");
		}, durationInMs);
	});
	await coinFlipPromise;
	console.log("done sleeping");
};

export const fakeGetAllUsers = async (): Promise<User[]> => {
	await sleep(1000);
	return users;
};

export const fakeGetUserFunction = async (
	name: string | undefined,
): Promise<User | string> => {
	await sleep(1000);

	if (!name || typeof name !== "string") {
		return "Invalid user name";
	}

	console.log("LOOKING FOR:", name);

	const user = users.find(
		(user) => user.name.toLowerCase() === name.toLowerCase()
	);

	console.log("FOUND USER:", user);

	return user ?? "No user";
};



