'use client';

import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { initialData } from '../../data';

const product = initialData.products[0];

export default function ProductsPage(): React.ReactNode {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={7}>
				{/* TODO: slideshow */}
			</Grid>
			<Grid item xs={12} sm={5}>
				<Box display="flex" flexDirection="column">
					<Typography variant="h1" component="h1">
						{product.title}
					</Typography>
					<Typography variant="subtitle1" component="h2">
						$ {product.price}
					</Typography>
					<Box sx={{ my: 2 }}>
						<Typography variant="subtitle2">Quantity</Typography>
						{/* Itemcounter */}
					</Box>
					<Button color="secondary" className="circular-btn">
						Add to cart
					</Button>
					{/* <Chip label="No available" color="error" variant="outlined" /> */}
					<Box sx={{ mt: 3 }}>
						<Typography variant="subtitle2">Description</Typography>
						<Typography variant="body2">{product.description}</Typography>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
}