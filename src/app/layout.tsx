'use client';

import { ThemeConfig } from '../config';
import './globals.css';

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): React.ReactNode {
	return (
		<html lang="en">
			<head />
			<body>
				<ThemeConfig>
					<>{children}</>
				</ThemeConfig>
			</body>
		</html>
	);
}
