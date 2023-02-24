import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import NextLink from 'next/link';

export const Navbar = (): React.ReactElement => {
	return (
		<AppBar>
			<Toolbar>
				<NextLink href="/" passHref legacyBehavior>
					<Link display="flex" alignItems="center">
						<Typography variant="h6"> Next |</Typography>
						<Typography sx={{ ml: 0.5 }}>Shop</Typography>
					</Link>
				</NextLink>
				<Box flex={1} />
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					<NextLink href="/category/men" passHref legacyBehavior>
						<Link>
							<Button>Men</Button>
						</Link>
					</NextLink>
					<NextLink href="/category/women" passHref legacyBehavior>
						<Link>
							<Button>Women</Button>
						</Link>
					</NextLink>
					<NextLink href="/category/kid" passHref legacyBehavior>
						<Link>
							<Button>Kid</Button>
						</Link>
					</NextLink>
				</Box>
				<Box flex={1} />
				<IconButton className="fadeIn">
					<SearchOutlined />
				</IconButton>
				<NextLink href="/cart" passHref legacyBehavior>
					<Link>
						<IconButton>
							<Badge badgeContent={2} color="secondary">
								<ShoppingCartOutlined />
							</Badge>
						</IconButton>
					</Link>
				</NextLink>
				<Button>Menu</Button>
			</Toolbar>
		</AppBar>
	);
};
