'use client';

import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { initialData } from '../data';

export default function HomePage(): React.ReactNode {
	return (
		<>
			<Typography variant="h1" component="h1">
				Next Store
			</Typography>
			<Typography variant="h2" sx={{ marginBottom: 1 }}>
				All products
			</Typography>
			<Grid container spacing={4}>
				{initialData.products.map(
					(product): React.ReactNode => (
						<Grid item xs={6} sm={4} key={product.slug}>
							<Card>
								<CardActionArea>
									<CardMedia component="img" image={`products/${product.images[0]}`} alt={product.title} />
								</CardActionArea>
							</Card>
						</Grid>
					)
				)}
			</Grid>
		</>
	);
}
