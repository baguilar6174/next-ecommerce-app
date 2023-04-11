'use client';

import { Typography } from '@mui/material';
import { ProductsList, ScreenLoading } from '../../../components';
import { useProducts } from '../../../hooks';

export default function CategoryPageMen(): React.ReactNode {
	const { error, isLoading, products } = useProducts('/products?gender=men');
	if (error) return <div>failed to load</div>;

	return (
		<>
			<Typography variant="h1" component="h1">
				Next Store
			</Typography>
			<Typography variant="h2" sx={{ marginBottom: 1 }}>
				Men Section
			</Typography>
			{isLoading ? <ScreenLoading /> : <ProductsList products={products} />}
		</>
	);
}
