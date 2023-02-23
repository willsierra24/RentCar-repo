import React, { useEffect, useState } from 'react';
import './card.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Rating } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useLocalStorage } from './useLocalStorage';

const API_URL = `https://back-pf-production.up.railway.app/users`;
const Card = ({ car }) => {
	const dispatch = useDispatch();
	const [users, setUsers] = useState([]);
	const [click, setClick] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const { user, isAuthenticated, isLoading } = useAuth0();
	const navigate = useNavigate();

	const dataInfo = async () => {
		try {
			const { data } = await axios.get(API_URL);
			setUsers(data);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		dispatch(dataInfo);
	}, [dispatch]);
	// console.log("u",users.map(u=>u.favorites))
	const onClick = () => {
		if (isAuthenticated && user) {
			if (!click) {
				setClick(true);
				setFavorites([...users, car]);
			} else {
				setClick(false);
			}
		} else {
			navigate('/login');
			// Swal.fire({
			//   title: 'Error!',
			//   text: 'You need to log in,do you want to continue',
			//   icon: 'error',
			//   confirmButtonText: 'Cool'
			// })
		}
	};
	//console.log("favs" ,favorites)
	return (
		<div className="cardd">
			<div></div>
			<div>
				<div className="start">
					<Rating name="half-rating-read" value={car.avg} readOnly />
					{car.avg !== null && (
						<div style={{ marginTop: '0px', fontSize: '17px' }} sx={{ ml: 2 }}>
							{'(' + car.avg + ')'}
						</div>
					)}
				</div>
				<img className="img" src={car.image} alt={'No'} />
			</div>

			<div className="texts">
				<div className="text1">
					{car.brand}-{car.line}
				</div>
				<div className="conText">
					<div className="text2">Category: {car.category} </div>
					<div className="text2">Transmision: {car.typeOfBox} </div>
					<div className="text2">Doors: {car.doors} </div>
					<div className="text2">Fuel Type: {car.fuelType} </div>
				</div>
				<div className="text3">US$ {car.price}</div>
				<div className="text4">{car.location} </div>
			</div>

			<div className="cardPart3">
				<div></div>
				<div className="Desc">discount</div>
				<div className="DescVal">{car.discount}%</div>
				<div></div>
				<Link to={`/detail/${car.licensePlate}`} state={car} className="link">
					<button> Details </button>
				</Link>
				<div></div>
			</div>
			<div>
				<div id="heart" className="heart">
					<span className="icon" onClick={onClick}>
						{click ? (
							<MdFavorite className="heart-border" />
						) : (
							<MdFavoriteBorder className="heart-fill" />
						)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
