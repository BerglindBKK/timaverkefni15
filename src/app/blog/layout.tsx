export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (


		<div className="p-8 ">{children}</div>

	);
}
