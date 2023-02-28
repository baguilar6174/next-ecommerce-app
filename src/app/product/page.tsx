'use client';

import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ItemCounter } from '../../components';
import { initialData } from '../../data';
import { SizeSelector, Slideshow } from './components';

const product = initialData.products[0];

export default function ProductsPage(): React.ReactNode {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={7}>
				<Slideshow images={product.images} />
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
						<Box display="flex" alignItems="center">
							<Typography variant="subtitle2">Quantity</Typography>
							<ItemCounter />
						</Box>
						<SizeSelector sizes={product.sizes} />
					</Box>
					<Button variant="outlined">Add to cart</Button>
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
