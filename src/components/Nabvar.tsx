import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export const Navbar = (): React.ReactElement => {
	return (
		<AppBar>
			<Toolbar>
				<Link href="/">
					<Typography variant="h6">Next | Shop</Typography>
				</Link>
				<Box flex={1} />
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					<Link href="/category">
						<Button>Men</Button>
					</Link>
					<Link href="/category">
						<Button>Women</Button>
					</Link>
					<Link href="/category">
						<Button>Kid</Button>
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
	);
};
