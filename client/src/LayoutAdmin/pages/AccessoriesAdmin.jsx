import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Edit, Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import loading from '../../assets/loading.gif';
import {
	FormControlLabel,
	Radio,
	RadioGroup,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TextField,
	Modal,
	Button,
} from '@mui/material';

const API_URL = `https://back-pf-production.up.railway.app/accessories/`;

function AccessoriesAdmin() {
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const [modalEdit, setModalEdit] = useState(false);
	const [modalDelete, setModalDelete] = useState(false);
	const [accesorioSeleccionado, setAccesorioSeleccionado] = useState({
		name: '',
		price: '',
		description: '',
		quantity: '',
		status: '',
		discount: '',
	});
	function handleChange(e) {
		setAccesorioSeleccionado({
			...accesorioSeleccionado,
			[e.target.name]: e.target.value,
		});
		console.log(e.target.value);
	}
	const openCloseModalEdit = () => {
		setModalEdit(!modalEdit);
	};
	const openCloseModalDelete = () => {
		setModalDelete(!modalDelete);
	};

	const selecionarAccesorio = (a, caso) => {
		setAccesorioSeleccionado(a);
		caso === 'Edit' ? openCloseModalEdit() : openCloseModalDelete();
	};

	// const peticionDelete = async () => {
	//   await axios.delete(API_URL + accesorioSeleccionado._id).then((response) => {
	//     setData(data.filter((a) => a._id !== accesorioSeleccionado._id));
	//   });
	//   openCloseModalDelete();
	// };

	const PutAccesories = async () => {
		await axios
			.put(API_URL + accesorioSeleccionado._id, accesorioSeleccionado)
			.then((response) => {
				var dataNew = data;
				console.log(dataNew);
				dataNew.map((accesorio) => {
					if (accesorioSeleccionado._id === accesorio._id) {
						accesorio.status = accesorioSeleccionado.status;
					}
				});
				setData(dataNew);
				openCloseModalDelete();
			});
	};

	const peticionPut = async () => {
		await axios
			.put(API_URL + accesorioSeleccionado._id, accesorioSeleccionado)
			.then((response) => {
				var dataNew = data;
				console.log(dataNew);
				dataNew.map((accesorio) => {
					if (accesorioSeleccionado._id === accesorio._id) {
						accesorio.name = accesorioSeleccionado.name;
						accesorio.price = accesorioSeleccionado.price;
						accesorio.status = accesorioSeleccionado.status;
						accesorio.discount = accesorioSeleccionado.discount;
					}
				});
				setData(dataNew);
				openCloseModalEdit();
			});
	};
	const dataInfo = async () => {
		try {
			const { data } = await axios.get(API_URL);
			setData(data);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		dispatch(dataInfo);
	}, [dispatch]);

	const bodyEdit = (
		<div>
			<div className="bg-white  pl-2 pr-2">
				<h3 className="text-center pt-2 font-bold text-2xl ">
					EDIT ACCESSORIES
				</h3>
				<br />
				<TextField
					name="name"
					margin="normal"
					fullWidth
					label="Name"
					onChange={(e) => handleChange(e)}
					value={accesorioSeleccionado && accesorioSeleccionado.name}
				/>
				<br />
				<TextField
					name="description"
					margin="normal"
					fullWidth
					label="Description"
					onChange={(e) => handleChange(e)}
					value={accesorioSeleccionado && accesorioSeleccionado.description}
				/>
				<br />
				<TextField
					name="price"
					margin="normal"
					fullWidth
					label="Price"
					onChange={(e) => handleChange(e)}
					value={accesorioSeleccionado && accesorioSeleccionado.price}
				/>
				<br />
				<TextField
					name="quantity"
					margin="normal"
					fullWidth
					label="Quantity"
					onChange={(e) => handleChange(e)}
					value={accesorioSeleccionado && accesorioSeleccionado.quantity}
				/>
				<br />
				<TextField
					name="discount"
					margin="normal"
					fullWidth
					label="Discount"
					onChange={(e) => handleChange(e)}
					value={accesorioSeleccionado && accesorioSeleccionado.discount}
				/>
				<br />
				<br />
				<fieldset>
					<legend>Status</legend>
					<RadioGroup
						row
						name="status"
						value={accesorioSeleccionado && accesorioSeleccionado.status}
						style={{ marginLeft: '200px' }}
						onChange={handleChange}
					>
						<FormControlLabel
							value={'valid'}
							control={<Radio size="small" />}
							label="Valid"
						/>
						<FormControlLabel
							value={'invalid'}
							control={<Radio size="small" />}
							label="Invalid"
						/>
					</RadioGroup>
				</fieldset>
				<br />
				<br />
				<div className="text-center pb-2">
					<Button variant="contained" color="success" onClick={peticionPut}>
						Edit
					</Button>
					<Button
						variant="contained"
						color="error"
						onClick={openCloseModalEdit}
					>
						Cancel
					</Button>
				</div>
			</div>
		</div>
	);

	const bodyDelete = (
		<div className="bg-white  pl-2 pr-2">
			<p className="text-center pt-12 pb-10 font-bold text-2xl ">
				To confirm if you want to deactivate the accessory{' '}
				<b>{accesorioSeleccionado && accesorioSeleccionado.name}</b> select the
				invalid option
			</p>
			<fieldset>
				<RadioGroup
					row
					name="status"
					value={accesorioSeleccionado && accesorioSeleccionado.status}
					style={{ marginLeft: '300px' }}
					onChange={handleChange}
				>
					<FormControlLabel
						value={'invalid'}
						control={<Radio size="small" />}
						label="Invalid"
					/>
				</RadioGroup>
			</fieldset>
			<div className="text-center pt-4 pb-4 ">
				<Button variant="contained" color="success" onClick={PutAccesories}>
					Yes
				</Button>
				<Button
					variant="contained"
					color="error"
					onClick={openCloseModalDelete}
				>
					No
				</Button>
			</div>
		</div>
	);

	return (
		<>
			<div className="flex font-bold text-3xl">
				<Link to="/dashboard/create-accessory">
					<button
						type="button"
						className="absolute top-20 right-4 flex px-6 py-2.5 text-[#023047] font-bold bg-primary text-xs leading-tight uppercase rounded shadow-md hover:bg-[#219EBC] hover:shadow-lg focus:bg-[#219EBC] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#219EBC] active:shadow-lg  duration-150 ease-in-out"
					>
						Create new accessory
					</button>
				</Link>
			</div>
			<div className="bg-white mt-[40px]">
				<TableContainer>
					<Table>
						<TableHead className="bg-[#8ECAE6]">
							<TableRow>
								<TableCell>Id</TableCell>
								<TableCell>Name</TableCell>
								<TableCell>Price</TableCell>
								<TableCell>Quantity</TableCell>
								<TableCell>Status</TableCell>
								<TableCell>Accions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.length !== 0 ? (
								data.map((a) => {
									return (
										<TableRow key={a.id}>
											<TableCell>{a._id}</TableCell>
											<TableCell>{a.name}</TableCell>
											<TableCell>{a.price}</TableCell>
											<TableCell>{a.quantity}</TableCell>
											<TableCell>{a.status}</TableCell>
											<TableCell>
												<Edit
													className="cursor-pointer"
													onClick={() => selecionarAccesorio(a, 'Edit')}
													color="primary"
												/>
												&nbsp;&nbsp;&nbsp;
												<Delete
													onClick={() => selecionarAccesorio(a, 'Delete')}
													color="error"
													className="cursor-pointer"
												/>
											</TableCell>
										</TableRow>
									);
								})
							) : (
								<img src={loading} alt="loading" />
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<Modal
					className=" rounded-[10px] mt-40 overflow-y-scroll  w-[600px] h-[60%] top-0 left-0 right-0 fixed m-auto scroll-m-2  border-2 border-[#000]  "
					open={modalEdit}
					onClose={() => openCloseModalEdit()}
				>
					{bodyEdit}
				</Modal>

				<Modal
					className=" mt-40  w-[700px] h-[33%] top-0 left-0 right-0 fixed m-auto scroll-m-2"
					open={modalDelete}
					onClose={() => openCloseModalDelete()}
				>
					{bodyDelete}
				</Modal>
			</div>
		</>
	);
}

export default AccessoriesAdmin;
