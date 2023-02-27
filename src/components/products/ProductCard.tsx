import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { IProduct } from '../../interfaces';

type ProductCardProp = {
	product: IProduct;
};

export const ProductCard: React.FC<ProductCardProp> = (props): React.ReactElement => {
	const { product } = props;

	const [isHover, setIsHover] = useState<boolean>(false);

	const productImage = useMemo((): string => {
		return isHover ? `products/${product.images[1]}` : `products/${product.images[0]}`;
	}, [isHover, product.images]);

	return (
		<Grid item xs={6} sm={4} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
			<Card>
				<CardActionArea>
					<CardMedia className="fadeIn" component="img" image={productImage} alt={product.title} />
				</CardActionArea>
			</Card>
			<Box sx={{ mt: 1 }} className="fadeIn">
				<Typography fontWeight={700}>{product.title}</Typography>
				<Typography fontWeight={500}>{`$${product.price}`}</Typography>
			</Box>
		</Grid>
	);
};
