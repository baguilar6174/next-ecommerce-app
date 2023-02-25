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
	Divider,
	Drawer,
	IconButton,
	Input,
	InputAdornment,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader
} from '@mui/material';

export const Sidebar = (): React.ReactElement => {
	return (
		<Drawer open={true} anchor="right" sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}>
			<Box sx={{ width: 250, paddingTop: 5 }}>
				<List>
					<ListItem>
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
					</ListItem>

					<ListItemButton>
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

					<ListItemButton sx={{ display: { xs: '', sm: 'none' } }}>
						<ListItemIcon>
							<MaleOutlined />
						</ListItemIcon>
						<ListItemText primary={'Men'} />
					</ListItemButton>

					<ListItemButton sx={{ display: { xs: '', sm: 'none' } }}>
						<ListItemIcon>
							<FemaleOutlined />
						</ListItemIcon>
						<ListItemText primary={'Women'} />
					</ListItemButton>

					<ListItemButton sx={{ display: { xs: '', sm: 'none' } }}>
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
					<Divider />
					<ListSubheader>Admin Panel</ListSubheader>

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
};
