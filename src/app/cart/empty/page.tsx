'use client';

import { Box, Button, Typography } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import Link from 'next/link';

export default function EmptyPage(): React.ReactElement {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="calc(100vh - 200px)"
			sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
		>
			<ShoppingCartOutlined sx={{ fontSize: 100 }} />
			<Box display="flex" flexDirection="column" alignItems="center">
				<Typography variant="h1" component="h1">
					Empty cart
				</Typography>
				<Link href="/">
					<Typography sx={{ mt: 1 }} variant="h6" color="white">
						Go to home page
					</Typography>
				</Link>
			</Box>
		</Box>
	);
}
