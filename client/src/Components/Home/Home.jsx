import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars, getAllUser } from '../../redux/actions/actions';
import './Home.css';
import { useAuth0 } from '@auth0/auth0-react';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import { Filter } from '../filtro/Filter';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import axios from 'axios';

export default function Home() {
	//console.log(localStorage)
	// const [cars, setCars] = useState([]);
	const dispatch = useDispatch();
	const cars = useSelector((state) => state.cars);

	useEffect(() => {
		dispatch(getAllCars());
		dispatch(getAllUser());
	}, [dispatch]);

	//----status------
	let filt0 = [];
	cars.map((objCar) => {
		objCar.status === 'valid' ? filt0.push(objCar) : null;
	});
	//---------------

	try {
		const { user } = useAuth0();

		const allUsers = useSelector((state) => state.usersiD);
		let idUser = '';
		allUsers.map((uS) => (uS.eMail === user.email ? (idUser = uS._id) : null));
		//console.log(allUsers,idUser);
		localStorage.setItem(
			'user',
			user.email + '|' + user.picture + '|' + idUser
		);
	} catch (error) {
		console.log(error);
	}

	// const API_URL = `https://back-pf-production.up.railway.app/cars`;
	// const infoApi = async () => {
	//   try {
	//     const { data } = await axios.get(API_URL);

	//     console.log("-----",data);
	//     // setCars(data);
	//   } catch (e) {
	//   }
	// };
	// infoApi()

	let [ordeno, setordeno] = useState('Ascending');
	let [indexo, setindexo] = useState('Brand');
	let [arCar, setarCar] = useState(filt0);
	let [xclude] = useState([[], [], [], [], []]);
	let ordenado = [];

	let [pag, setPag] = useState(1);
	const [carsPerPege] = useState(6);

	var until = pag * carsPerPege;
	var since = until - carsPerPege;
	let carPag = arCar.slice(since, until);
	let review = cars.map((e) => e.review);
	let rate = review.map((e) => e.map((d) => d.rate));
	// console.log(rate)
	const average = [];
	for (let i in rate) {
		// console.log(cars[i])
		if (rate[i].length) {
			let avg = Math.floor(
				rate[i].reduce((previous, current) => (current += previous)) /
					rate[i].length
			);
			average.push(avg);
		} else {
			average.push(0);
		}
	}
	for (let i in average) {
		cars[i]['avg'] = average[i];
	}
	// console.log(average)
	const paginado = (pageNumber) => {
		setPag(pageNumber);
	};
	useEffect(() => {
		paginado(1);
	}, [filt0]);

	//functions-------------------------------------
	function paginate(e, num) {
		e.preventDefault();
		setPag(num);
	}
	function uddateForFilter(e, obj, index) {
		e.preventDefault();

		let arrayTemp = [],
			filt1 = [],
			filt2 = [],
			filt3 = [],
			filt4 = [],
			filt5 = [];
		xclude[index].includes(obj)
			? ((arrayTemp = xclude[index].filter((dato) => dato != obj)),
			  (xclude[index] = arrayTemp))
			: xclude[index].push(obj);

		//----filter brand----
		filt0.map((objCar) => {
			xclude[0].includes(objCar.brand) ? null : filt1.push(objCar);
		});
		//----filter category----
		filt1.map((objCar) => {
			xclude[1].includes(objCar.category) ? null : filt2.push(objCar);
		});
		//----filter typeOfBox----
		filt2.map((objCar) => {
			xclude[2].includes(objCar.typeOfBox) ? null : filt3.push(objCar);
		});
		//----filter fuelType----
		filt3.map((objCar) => {
			xclude[3].includes(objCar.fuelType) ? null : filt4.push(objCar);
		});
		//----filter discount----
		filt4.map((objCar) => {
			xclude[4].includes(objCar.discount) ? null : filt5.push(objCar);
		});
		setarCar(filt5);
	}

	function ordenate(e) {
		setordeno(e.target.value);
	}
	function ordenate2(e) {
		setindexo(e.target.value);
	}
	function cleanFilters(e) {
		e.preventDefault();
		Swal.fire({
			title: 'you want to clean the filters?',
			icon: 'warning',
			showCancelButton: true,
			cancelButtonColor: '#e38e15',
			confirmButtonColor: '#e38e15',
			confirmButtonText: 'Yes',
			cancelButtonText: 'No',
		}).then((result) => {
			if (result.isConfirmed) {
			}
		});
	}

	//---------------ordenate-------------------------------

	if (ordeno === 'Ascending' && indexo === 'Brand') {
		ordenado = arCar.sort(function (a, b) {
			if (a.brand > b.brand) {
				return 1;
			}
			if (a.brand < b.brand) {
				return -1;
			}
			return 0;
		});
	} else if (ordeno === 'Descending' && indexo === 'Brand') {
		ordenado = arCar.sort(function (a, b) {
			if (a.brand < b.brand) {
				return 1;
			}
			if (a.brand > b.brand) {
				return -1;
			}
			return 0;
		});
	} else if (ordeno === 'Ascending' && indexo === 'Category') {
		ordenado = arCar.sort(function (a, b) {
			if (a.category > b.category) {
				return 1;
			}
			if (a.category < b.category) {
				return -1;
			}
			return 0;
		});
	} else if (ordeno === 'Descending' && indexo === 'Category') {
		ordenado = arCar.sort(function (a, b) {
			if (a.category < b.category) {
				return 1;
			}
			if (a.category > b.category) {
				return -1;
			}
			return 0;
		});
	} else if (ordeno === 'Descending' && indexo === 'Transmission') {
		ordenado = arCar.sort(function (a, b) {
			if (a.typeOfBox > b.typeOfBox) {
				return 1;
			}
			if (a.typeOfBox < b.typeOfBox) {
				return -1;
			}
			return 0;
		});
	} else if (ordeno === 'Ascending' && indexo === 'Transmission') {
		ordenado = arCar.sort(function (a, b) {
			if (a.typeOfBox < b.typeOfBox) {
				return 1;
			}
			if (a.typeOfBox > b.typeOfBox) {
				return -1;
			}
			return 0;
		});
	} else if (ordeno === 'Descending' && indexo === 'Fuel') {
		ordenado = arCar.sort(function (a, b) {
			if (a.fuelType > b.fuelType) {
				return 1;
			}
			if (a.fuelType < b.fuelType) {
				return -1;
			}
			return 0;
		});
	} else if (ordeno === 'Ascending' && indexo === 'Fuel') {
		ordenado = arCar.sort(function (a, b) {
			if (a.fuelType < b.fuelType) {
				return 1;
			}
			if (a.fuelType > b.fuelType) {
				return -1;
			}
			return 0;
		});
	}

	//----------------------------------------------
	// var until = pag * 6;
	// var since = until - 6;

	// let carPag = arCar.slice(since, until);

	// const paginado=pageNumber => {
	//   setPag(pageNumber)
	// }
	// useEffect(() => {
	//   paginado(1);
	// }, [cars]);

	return (
		<React.Fragment>
			<Search />
			<Filter
				cars={filt0}
				filterInHome={uddateForFilter}
				paginate={paginate}
				xclude={xclude}
			/>

			<div className="Filteredout">
				{' '}
				<div>Filtered out</div>{' '}
				<div id="linpFilter" on onClick={(e) => cleanFilters(e)}>
					🗑️
				</div>{' '}
			</div>
			<NavBar />
			<div className="homen">
				{/* {
          carPag?.map((e) => {})
        } */}
				{/* {console.log(review.map(e=>e.map(d=>d.rate)))} */}
				<Cards cars={carPag} ttFilt={arCar.length} />
				<Pagination total={arCar.length} paginate={paginate} />
			</div>
			<div className="ordenado">
				<div></div>
				<div id="inorder" className="DeaZ2">
					Order for_
				</div>

				<select id="Deaz2" className="DeaZ2" onChange={(e) => ordenate2(e)}>
					<option value={'Brand'}>Brand</option>
					<option value={'Category'}>Category</option>
					<option value={'Transmission'}>Transmission</option>
					<option value={'Fuel'}>Fuel Type</option>
				</select>

				<div id="inorder" className="DeaZ2">
					In order_
				</div>

				<select id="Deaz2" className="DeaZ2" onChange={(e) => ordenate(e)}>
					<option value={'Ascending'}>Ascending</option>
					<option value={'Descending'}>Descending</option>
				</select>
			</div>
			<Footer />
		</React.Fragment>
	);
}
