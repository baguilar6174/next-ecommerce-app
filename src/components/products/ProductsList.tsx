import { Grid } from '@mui/material';
import { IProduct } from '../../interfaces';
import { ProductCard } from './ProductCard';

type ProductsListProp = {
	products: IProduct[];
};

export const ProductsList: React.FC<ProductsListProp> = (props): React.ReactElement => {
	const { products } = props;

	return (
		<Grid container spacing={4}>
			{products.map(
				(product): React.ReactNode => (
					<ProductCard product={product} key={product.slug} />
				)
			)}
		</Grid>
	);
};
