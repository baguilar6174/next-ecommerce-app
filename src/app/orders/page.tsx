'use client';

import { Chip, Grid, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Link from 'next/link';

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'Order Id', width: 100 },
	{ field: 'fullname', headerName: 'Fullname', width: 300 },
	{
		field: 'paid',
		headerName: 'Order status',
		description: 'Show if order is paid',
		width: 200,
		renderCell: (params: GridRenderCellParams): React.ReactElement => {
			return params.row.paid ? (
				<Chip color="success" label="Order paid" variant="outlined" />
			) : (
				<Chip color="error" label="Order no paid" variant="outlined" />
			);
		}
	},
	{
		field: 'order',
		headerName: 'Order details',
		width: 200,
		sortable: false,
		renderCell: (params: GridRenderCellParams): React.ReactElement => {
			return <Link href={`/orders/${params.row.id}`}>View</Link>;
		}
	}
];

const rows: any[] = [
	{ id: 14654165, paid: true, fullname: 'Bryan Aguilar', order: 1 },
	{ id: 113213851, paid: false, fullname: 'Bryan Aguilar', order: 2 }
];

export default function OrdersPage(): React.ReactNode {
	return (
		<>
			<Typography variant="h1" component="h1">
				Orders history
			</Typography>
			<Grid container>
				<Grid item xs={12} sx={{ height: '650px', width: '100%' }}>
					<DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
				</Grid>
			</Grid>
		</>
	);
}
