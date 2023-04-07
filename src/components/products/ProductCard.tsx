import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { IProduct } from '../../interfaces';

type ProductCardProp = {
	product: IProduct;
};

export const ProductCard: React.FC<ProductCardProp> = (props): React.ReactElement => {
	const { product } = props;

	const [isHover, setIsHover] = useState<boolean>(false);
	const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

	const productImage = useMemo((): string => {
		return isHover ? `products/${product.images[1]}` : `products/${product.images[0]}`;
	}, [isHover, product.images]);

	return (
		<Grid item xs={6} sm={4} onMouseEnter={(): void => setIsHover(true)} onMouseLeave={(): void => setIsHover(false)}>
			<Card>
				<Link href="/product">
					<CardActionArea>
						<CardMedia
							className="fadeIn"
							component="img"
							image={productImage}
							alt={product.title}
							onLoad={(): void => setIsImageLoaded(true)}
						/>
					</CardActionArea>
				</Link>
			</Card>
			<Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className="fadeIn">
				<Typography fontWeight={700}>{product.title}</Typography>
				<Typography fontWeight={500}>{`$${product.price}`}</Typography>
			</Box>
		</Grid>
	);
};
