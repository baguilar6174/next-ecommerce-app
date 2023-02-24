type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): React.ReactNode {
	return (
		<html lang="en">
			<head />
			<body>{children}</body>
		</html>
	);
}
