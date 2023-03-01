import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export const Navbar = (): React.ReactElement => {
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
						<Link href="/category">
							<Button variant="text">Men</Button>
						</Link>
						<Link href="/category">
							<Button variant="text">Women</Button>
						</Link>
						<Link href="/category">
							<Button variant="text">Kid</Button>
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
					<Button>Menu</Button>
				</Toolbar>
			</AppBar>
		</nav>
	);
};
