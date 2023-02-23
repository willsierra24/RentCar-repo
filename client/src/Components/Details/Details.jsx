import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Details.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import moment from 'moment';

export default function Details() {
	const { state } = useLocation();

	const [sw, setsw] = useState(0);
	const [selection, setselection] = useState([]);
	const [Accessories, setAccessories] = useState([]);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [totalDays, setTotalDays] = useState('');

	const handleStartDateChange = (e) => {
		setStartDate(e.target.value);
	};

	const handleEndDateChange = async (e) => {
		setEndDate(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const checkStartDate = new Date(startDate);
		const checkEndDate = new Date(endDate);
		const fechaActual = new Date();
		if (checkStartDate < fechaActual) {
			Swal.fire({
				title: 'The start date is before today',
				icon: 'warning',
				confirmButtonColor: '#e38e15',
				confirmButtonText: 'Exit',
			});
			// alert("The start date is before today");
		} else if (checkStartDate > checkEndDate) {
			Swal.fire({
				title: 'The end date is before to the start date',
				icon: 'warning',
				confirmButtonColor: '#e38e15',
				confirmButtonText: 'Exit',
			});
		} else {
			const diffDays = moment(endDate).diff(moment(startDate), 'days');
			setTotalDays(diffDays);
			// Aquí enviarías el formulario al servidor
			console.log(fechaActual);
			console.log(startDate);
			console.log('Formulario enviado');
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	async function fetchMovies() {
		const response = await fetch(
			'https://back-pf-production.up.railway.app/accessories'
		);
		const accessories = await response.json();
		setAccessories(accessories);
	}
	function addClic(e) {
		let obj = e.target.className;
		let arrayLeno = selection;
		let arrayAux = [];

		if (!totalDays) {
			Swal.fire({
				title: 'Select a date for the reserve',
				icon: 'warning',
				confirmButtonColor: '#e38e15',
				confirmButtonText: 'Exit',
			});
		} else if (arrayLeno.includes(obj)) {
			Swal.fire({
				title: 'The article was excluded!',
				icon: 'warning',
				confirmButtonColor: '#e38e15',
				confirmButtonText: 'Exit',
			});

			arrayAux = arrayLeno.filter((dato) => dato != obj);
			setselection([]);
			setselection(arrayAux);
		} else {
			arrayLeno.push(obj);
			setselection(arrayLeno);
		}
		setsw(sw + 1);
		var data = '';
		selection.map((name) => {
			Accessories.map((accesor) => {
				accesor.name === name
					? (data +=
							accesor.name +
							'|' +
							accesor.price +
							'|' +
							accesor._id +
							'|' +
							'tru' +
							'|' +
							accesor.discount +
							'|' +
							'¬')
					: null;
			});
		});

		let info =
			state.brand +
			' - ' +
			state.line +
			'|' +
			state.price * totalDays +
			'|' +
			state._id +
			'|' +
			'tru' +
			'|' +
			state.discount +
			'¬' +
			data;

		localStorage.setItem('nombre', info);
	}

	return (
		<>
			<NavBar />
			<div className="container1">
				<div className="container1a">
					<div className="form-container">
						<form onSubmit={handleSubmit} className="form-date">
							<label htmlFor="start-date" className="form-label">
								Start date
							</label>
							<input
								type="date"
								id="start-date"
								name="start-date"
								value={startDate}
								onChange={handleStartDateChange}
							/>
							<label htmlFor="end-date" className="form-label">
								End date
							</label>
							<input
								type="date"
								id="end-date"
								name="end-date"
								value={endDate}
								onChange={handleEndDateChange}
							/>
							{totalDays ? (
								<button type="submit" id="form-submit">
									✅Checked
								</button>
							) : (
								<button type="submit" id="form-submit">
									Check
								</button>
							)}
						</form>
					</div>
					<div className="row1">
						<img src={state.image} alt="car" height="300px" />
						<div className="row1colum2">
							<div>
								<h1 className="brand">
									{state.brand} {state.line}
								</h1>
							</div>

							<div className="row1colum21">
								<div className="row1colum211">
									<div className="feature">
										<h1 className="title">Price: </h1>
										<p className="description">${state.price} /Day </p>
									</div>
									<div className="feature">
										<h1 className="title">Discount: </h1>
										<p className="description">${state.discount}% </p>
									</div>
									<div className="feature">
										<h1 className="title">Doors: </h1>
										<p className="description">{state.doors}</p>
									</div>
									<div className="feature">
										<h1 className="title">Fuel Type: </h1>
										<p className="description">{state.fuelType}</p>
									</div>
								</div>

								<div className="row1colum212">
									<div className="feature">
										<h1 className="title">Fuel Consumption: </h1>
										<p className="description">{state.fuelConsumption}</p>
									</div>
									<div className="feature">
										<h1 className="title">Gearbox: </h1>
										<p className="description">{state.typeOfBox}</p>
									</div>
									<div className="feature">
										<h1 className="title">Category: </h1>
										<p className="description">{state.category}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<h1 className="title">Description: </h1>
						<p className="description">{state.description}</p>
					</div>
					<div>
						<br />
						<h1 className="title2">Accessories: </h1>
						<br />
						<div className="listaccesori">
							{Accessories.map((acce) => (
								<h4 className="row2">
									<img className="img" src={acce.image} alt={'No'} />
									<div>{acce.name}</div>{' '}
									<div id="descri">
										{' '}
										{acce.description.slice(0, 38)}{' '}
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See more...{' '}
									</div>
									<div>Cost: ${acce.price}</div>
									<div>Dis: {acce.discount}%</div> <div>Total:{acce.price}</div>
									{selection.includes(acce.name) ? (
										<div id="black" className={acce.name}>
											Reserve
										</div>
									) : (
										<div id="gray" className={acce.name}>
											Available
										</div>
									)}
									{selection.includes(acce.name) ? (
										<div
											id="black2"
											className={acce.name}
											onClick={(e) => addClic(e)}
										>
											❌
										</div>
									) : (
										<div
											id="gray2"
											className={acce.name}
											onClick={(e) => addClic(e)}
										>
											✔️
										</div>
									)}
								</h4>
							))}
						</div>
					</div>
				</div>
				<div className="butondetail">
					<Link to={`/home`} className="link">
						<button> Go back </button>
					</Link>
					<div id="separa"></div>
					{totalDays ? (
						<Link to={`/shopping`} className="link">
							<button onClick={(e) => addClic(e)}> Booking </button>
						</Link>
					) : (
						<button
							onClick={() =>
								Swal.fire({
									title: 'Select dates!',
									icon: 'warning',
									confirmButtonColor: '#e38e15',
									confirmButtonText: 'Exit',
								})
							}
						>
							{' '}
							Booking{' '}
						</button>
					)}
				</div>
				<br />
			</div>
			<Footer />
		</>
	);
}
