'use client';

import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ItemCounter } from '../../../components';
import { useProduct } from '../../../hooks';
import { SizeSelector, Slideshow } from '../components';

type PageParams = {
	slug: string;
};

type PageProps = {
	params: PageParams;
};

export default function ProductsPage(props: PageProps): React.ReactNode {
	const {
		params: { slug }
	} = props;
	const { product, isLoading } = useProduct(`/products/${slug}`);

	if (isLoading) return <h1>Loading...</h1>;
	if (!product) return <h1>Product not fount</h1>;

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
