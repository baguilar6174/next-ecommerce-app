'use client';

import {
	AccountCircleOutlined,
	AdminPanelSettings,
	CategoryOutlined,
	ConfirmationNumberOutlined,
	EscalatorWarningOutlined,
	FemaleOutlined,
	LoginOutlined,
	MaleOutlined,
	SearchOutlined,
	VpnKeyOutlined
} from '@mui/icons-material';
import {
	Box,
	Drawer,
	IconButton,
	Input,
	InputAdornment,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { UIContext } from '../context';

export const Sidebar = (): React.ReactElement => {
	const { isMenuOpen, toggleMenu } = useContext(UIContext);
	const router = useRouter();

	return (
		<Drawer
			open={isMenuOpen}
			anchor="right"
			sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
			onClose={toggleMenu}
		>
			<Box sx={{ width: 300, padding: 3 }}>
				<List>
					<Input
						type="text"
						placeholder="Buscar..."
						endAdornment={
							<InputAdornment position="end">
								<IconButton aria-label="toggle password visibility">
									<SearchOutlined />
								</IconButton>
							</InputAdornment>
						}
					/>

					<ListItemButton sx={{ pt: 3 }}>
						<ListItemIcon>
							<AccountCircleOutlined />
						</ListItemIcon>
						<ListItemText primary={'Profile'} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<ConfirmationNumberOutlined />
						</ListItemIcon>
						<ListItemText primary={'My orders'} />
					</ListItemButton>

					<ListItemButton sx={{ display: { xs: '', sm: 'none' } }} onClick={(): void => navigateTo('men')}>
						<ListItemIcon>
							<MaleOutlined />
						</ListItemIcon>
						<ListItemText primary={'Men'} />
					</ListItemButton>

					<ListItemButton sx={{ display: { xs: '', sm: 'none' } }} onClick={(): void => navigateTo('women')}>
						<ListItemIcon>
							<FemaleOutlined />
						</ListItemIcon>
						<ListItemText primary={'Women'} />
					</ListItemButton>

					<ListItemButton sx={{ display: { xs: '', sm: 'none' } }} onClick={(): void => navigateTo('kid')}>
						<ListItemIcon>
							<EscalatorWarningOutlined />
						</ListItemIcon>
						<ListItemText primary={'Kids'} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<VpnKeyOutlined />
						</ListItemIcon>
						<ListItemText primary={'Signin'} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<LoginOutlined />
						</ListItemIcon>
						<ListItemText primary={'Logout'} />
					</ListItemButton>

					{/* Admin */}
					{/* <Divider /> */}
					<Typography sx={{ py: 2 }} variant="subtitle1">
						Admin Panel
					</Typography>

					<ListItemButton>
						<ListItemIcon>
							<CategoryOutlined />
						</ListItemIcon>
						<ListItemText primary={'Products'} />
					</ListItemButton>
					<ListItemButton>
						<ListItemIcon>
							<ConfirmationNumberOutlined />
						</ListItemIcon>
						<ListItemText primary={'Orders'} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<AdminPanelSettings />
						</ListItemIcon>
						<ListItemText primary={'Users'} />
					</ListItemButton>
				</List>
			</Box>
		</Drawer>
	);

	function navigateTo(url: string): void {
		router.push(`/category/${url}`);
		toggleMenu();
	}
};
