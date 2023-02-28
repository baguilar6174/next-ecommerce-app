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
	components: {
		MuiLink: {
			defaultProps: {
				underline: 'none'
			}
		},
		MuiAppBar: {
			defaultProps: {
				elevation: 0,
				position: 'fixed'
			},
			styleOverrides: {
				root: {
					height: 60
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				outlined: {
					borderColor: '#fff'
				},
				root: {
					color: 'white',
					':hover': {
						backgroundColor: '#fff',
						transition: 'all 0.3s ease-in-out',
						color: '#000'
					}
				}
			}
		},
		MuiTypography: {
			styleOverrides: {
				h1: {
					fontSize: 30,
					fontWeight: 600
				},
				h2: {
					fontSize: 20,
					fontWeight: 400
				},
				subtitle1: {
					fontSize: 18,
					fontWeight: 600
				}
			}
		},
		MuiCard: {
			defaultProps: {
				elevation: 0
			},
			styleOverrides: {
				root: {
					boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
					borderRadius: '10px'
				}
			}
		}
	}
});
