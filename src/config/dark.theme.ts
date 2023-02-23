import { createTheme } from '@mui/material';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
	subsets: ['greek'],
	weight: ['100', '300', '400', '500', '700', '900']
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark'
	},
	typography: {
		fontFamily: roboto.style.fontFamily
	},
	components: {}
});
