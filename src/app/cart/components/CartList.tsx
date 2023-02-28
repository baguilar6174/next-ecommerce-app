import { Box, Button, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { ItemCounter } from '../../../components';
import { initialData } from '../../../data';

const products = [initialData.products[0], initialData.products[1], initialData.products[2]];

type CartListProp = {
	editable?: boolean;
};

export const CartList: React.FC<CartListProp> = (props): React.ReactElement => {
	const { editable = false } = props;

	return (
		<>
			{products.map(
				(product): React.ReactElement => (
					<Grid key={product.slug} container spacing={2} sx={{ mb: 1 }} display="flex" alignItems="center">
						<Grid item xs={3}>
							<Link href="product">
								<CardActionArea>
									<CardMedia image={`products/${product.images[0]}`} component="img" sx={{ borderRadius: '5px' }} />
								</CardActionArea>
							</Link>
						</Grid>
						<Grid item xs={7}>
							<Box display="flex" flexDirection="column">
								<Typography variant="body1">{product.title}</Typography>
								<Typography variant="body1">
									Size: <strong>M</strong>
								</Typography>
								{editable ? <ItemCounter /> : <Typography variant="h6">3 items</Typography>}
							</Box>
						</Grid>
						<Grid item xs={2} display="flex" alignItems="center" flexDirection="column">
							<Typography variant="h5">{`$${product.price}`}</Typography>
							{editable && (
								<Button variant="text" color="secondary">
									Remove
								</Button>
							)}
						</Grid>
					</Grid>
				)
			)}
		</>
	);
};
