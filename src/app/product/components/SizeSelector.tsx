import { Box, Button } from '@mui/material';
import { ISize } from '../../../interfaces';

type SizeSelectorProp = {
	selectedSize?: ISize;
	sizes: ISize[];
};

export const SizeSelector: React.FC<SizeSelectorProp> = (props): React.ReactElement => {
	const { selectedSize, sizes } = props;
	return (
		<Box display="flex" justifyContent="center" sx={{ my: 2 }}>
			<Box>
				{sizes.map(
					(size): React.ReactElement => (
						<Button key={size} size="small" variant="outlined" color={selectedSize !== size ? 'primary' : 'secondary'}>
							{size}
						</Button>
					)
				)}
			</Box>
		</Box>
	);
};
