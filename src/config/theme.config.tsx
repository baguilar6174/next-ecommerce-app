import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { darkTheme } from './';

type ThemeProp = {
	children: React.ReactNode;
};

export const ThemeConfig: React.FC<ThemeProp> = ({ children }): React.ReactElement => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
