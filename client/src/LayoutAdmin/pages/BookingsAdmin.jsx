import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import loading from '../../assets/loading.gif';

import {
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TablePagination,
} from '@mui/material';
const API_URL = `https://back-pf-production.up.railway.app/billing`;

function BookingsAdmin() {
	const dispatch = useDispatch();
	const [bookings, setBookings] = useState([]);
	const dataInfo = async () => {
		try {
			const { data } = await axios.get(API_URL);
			setBookings(data);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		dispatch(dataInfo);
	}, [dispatch]);

	return (
		<div className="bg-white">
			<TableContainer>
				<Table>
					<TableHead className="bg-[#8ECAE6]">
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell>Invoice-number</TableCell>
							<TableCell>Discount</TableCell>
							<TableCell>Full-value</TableCell>
							<TableCell>Active</TableCell>
							{/* <TableCell>Accions</TableCell> */}
						</TableRow>
					</TableHead>
					<TableBody>
						{bookings.length !== 0 ? (
							bookings.map((b) => {
								return (
									<TableRow key={b.id}>
										<TableCell>{b._id}</TableCell>
										<TableCell>{b.invoice_number}</TableCell>
										<TableCell>{b.discount}</TableCell>
										<TableCell>{b.full_value}</TableCell>
										<TableCell>{b.active}</TableCell>
										{/* <TableCell>
                      <Edit className="cursor-pointer" color="primary" />
                      &nbsp;&nbsp;&nbsp;
                      <Delete color="error" className="cursor-pointer" />
                    </TableCell> */}
									</TableRow>
								);
							})
						) : (
							<div className="flex">
								<img className="items-center" src={loading} alt="loading" />
							</div>
						)}
					</TableBody>
				</Table>
				<TablePagination rowsPerPageOptions={[5, 8]} />
			</TableContainer>
		</div>
	);
}

export default BookingsAdmin;
