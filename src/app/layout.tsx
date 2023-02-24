'use client';

import { Navbar } from '../components';
import { ThemeConfig } from '../config';
import './globals.css';

type RootLayoutProps = {
	children: React.ReactNode;
	pageDescription: string;
	imageFullUrl?: string;
};

export default function RootLayout({ children }: RootLayoutProps): React.ReactNode {
	return (
		<html lang="en">
			<head />
			<body>
				<ThemeConfig>
					<>
						<nav>
							<Navbar />
						</nav>
						{/* TODO: create sidebar */}
						<main
							style={{
								margin: '80px auto',
								maxWidth: '1440px',
								padding: '0 30px'
							}}
						>
							{children}
						</main>
						{/* TODO: create footer */}
					</>
				</ThemeConfig>
			</body>
		</html>
	);
}
