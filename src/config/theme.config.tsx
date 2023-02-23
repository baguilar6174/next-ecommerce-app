import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
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

type ThemeProp = {
	children: JSX.Element;
};

export const ThemeConfig: React.FC<ThemeProp> = ({ children }): React.ReactElement => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
