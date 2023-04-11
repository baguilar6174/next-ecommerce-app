'use client';

import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useContext } from 'react';
import { UIContext } from '../context';

export const Navbar = (): React.ReactElement => {
	const { toggleMenu } = useContext(UIContext);
	const pathname = usePathname();

	return (
		<nav>
			<AppBar>
				<Toolbar>
					<Link href="/">
						<Typography variant="h6" color="white">
							Next | Shop
						</Typography>
					</Link>
					<Box flex={1} />
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						<Link href="/category/women">
							<Button>
								<span style={{ color: pathname === '/category/women' ? 'pink' : 'white' }}>Women</span>
							</Button>
						</Link>
						<Link href="/category/men">
							<Button>
								<span style={{ color: pathname === '/category/men' ? 'pink' : 'white' }}>Men</span>
							</Button>
						</Link>
						<Link href="/category/kid">
							<Button>
								<span style={{ color: pathname === '/category/kid' ? 'pink' : 'white' }}>Kid</span>
							</Button>
						</Link>
					</Box>
					<Box flex={1} />
					<IconButton className="fadeIn">
						<SearchOutlined />
					</IconButton>
					<Link href="/cart">
						<IconButton>
							<Badge badgeContent={2} color="secondary">
								<ShoppingCartOutlined />
							</Badge>
						</IconButton>
					</Link>
					<Button onClick={toggleMenu}>Menu</Button>
				</Toolbar>
			</AppBar>
		</nav>
	);
};
