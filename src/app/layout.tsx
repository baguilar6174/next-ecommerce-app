'use client';

import { SWRConfig } from 'swr';
import { Navbar, Sidebar } from '../components';
import { ThemeConfig } from '../config';
import './globals.css';

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): React.ReactNode {
	const isLogin = true;

	return (
		<html lang="en">
			<head />
			<body>
				<SWRConfig
					value={{
						fetcher: (resource, init) => fetch(resource, init).then((res) => res.json())
					}}
				>
					<ThemeConfig>
						<>
							{isLogin && (
								<>
									<Navbar />
									<Sidebar />
								</>
							)}
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
				</SWRConfig>
			</body>
		</html>
	);
}
