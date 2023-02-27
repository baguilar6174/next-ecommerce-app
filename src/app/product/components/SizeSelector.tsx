import { Box, Button } from '@mui/material';
import { ISize } from '../../../interfaces';

type SizeSelectorProp = {
	selectedSize?: ISize;
	sizes: ISize[];
};

export const SizeSelector: React.FC<SizeSelectorProp> = (props): React.ReactElement => {
	const { selectedSize, sizes } = props;
	return (
		<Box display="flex" justifyContent="center">
			<Box>
				{sizes.map((size) => (
					<Button key={size} size="small" color={selectedSize !== size ? 'primary' : 'info'}>
						{size}
					</Button>
				))}
			</Box>
		</Box>
	);
};
