import { Card, CardMedia } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type SlideshowProp = {
	images: string[];
};

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 1
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

export const Slideshow: React.FC<SlideshowProp> = (props): React.ReactElement => {
	const { images } = props;
	return (
		<div className="slide-container">
			<Carousel responsive={responsive} showDots>
				{images.map(
					(image, index): React.ReactElement => (
						<Card key={index}>
							<CardMedia component="img" height="auto" image={`/products/${image}`} />
						</Card>
					)
				)}
			</Carousel>
		</div>
	);
};
