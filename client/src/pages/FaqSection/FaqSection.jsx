import React, {useState} from 'react';
import styled from 'styled-components';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import Faq from './Faq';
import './FaqSection.css'

function FaqSection() {

		const [isOpen, setIsOpen] = useState(false);
	  
		const toggleAccordion = () => {
		  setIsOpen(!isOpen);
		};

	return (
		<ContainerStyled>
			<NavBar />
	<h1 className='faq-title'>FREQUENTLY ASKED QUESTIONS ABOUT OUR CAR RENTALS</h1>	
			
			<br />
      <Faq
        pregunta="How old do you have to be to rent a car?"
        respuesta="Renting a car under 25 is possible, however, because drivers under 25
		years of age are statistically more prone to getting into an accident,
		most rental companies will charge you an underage fee. Some car
		rental companies may even consider the minimum age to rent as being 21
		but their daily underage surcharges tend to be even steeper.
		Furthermore, if you’re under 25, you will typically only be allowed to
		rent smaller cars such as vehicles categorized as Compact or Economic.
		Most car rental companies will, altogether, not allow you to rent larger
		categories such as SUVs, Minivans and Luxury Vehicles."
      />
      <Faq
        pregunta="Why Rentcar is the best option to rent a car?"
        respuesta="Whether you're traveling with friends, family, or need an easy solution
		for business appointments, renting a car can save you time and money.
		With us you can rest easy because at Rentcars we specialize in price
		comparison and car rental, offering more than 200 rental companies in
		more than 160 countries."
      />
	        <Faq
        pregunta="Can I modify or cancel my reservation through Rentcars?"
        respuesta="Yes, and it’s quite simple. You can modify or cancel your reservation
		through your account using your registered login and password. We
		recommend, however, that you thoroughly read the conditions for changing
		or cancelling a booking beforehand. These can be found in the
		confirmation voucher sent to your e-mail or by accessing the My Bookings
		section in your account page. It is important to note that all requested
		modifications will be subject to availability and possible price
		changes. Always assess the pros and cons of changing your booking,
		especially during high season."
      />
	        <Faq
        pregunta="Which documents will be required of me when picking up my vehicle?"
        respuesta="A valid driver’s license held for at least 2 years. A valid
		passport. A valid credit card, issued under your name, with
		sufficient funds for a credit hold (safety deposit)."
      />
	        <Faq
        pregunta="Can I rent a child booster seat or an infant car seat?"
        respuesta="The option of selecting this Extra during the booking process is made
		available. If you place your reservation, make sure you request that
		this extra be included. In locations where this Extra is not available
		during the booking process, you may always reach out to the office and
		check if they have any available."
      />
	        <Faq
        pregunta="Can I rent a car with GPS?"
        respuesta="Yes, RentCar offer the option of including a GPS during the
		booking process. If you place your reservation through
		our Booking Center, make sure to request that this extra be included."
      />
	  


			{/* <h1>Frequently asked questions about our car rentals</h1>
      <br/>
			
			<h2>
				Which documents will be required of me when picking up my vehicle?
			</h2>
			<h3>
				A valid driver’s license held for at least 2 years.<br></br>A valid
				passport.<br></br>A valid credit card, issued under your name, with
				sufficient funds for a credit hold (safety deposit).
			</h3>
      <br/>

			<h2>Can I rent a child booster seat or an infant car seat?</h2>
			<h3>
				The option of selecting this Extra during the booking process is made
				available. If you place your reservation, make sure you request that
				this extra be included. In locations where this Extra is not available
				during the booking process, you may always reach out to the office and
				check if they have any available.
			</h3>
      <br/>

			<h2>Can I rent a car with GPS?</h2>
			<h3>
				Yes, RentCar offer the option of including a GPS during the
				booking process. If you place your reservation through
				our Booking Center, make sure to request that this extra be included.
			</h3> */}

			<Footer />
		</ContainerStyled>
	);
}

export const ContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	color: #023047;
	margin-top: 150px;
	justify-content: center;
	align-items: center;
	align-content: center;
	margin-bottom: 200px;
`;

export default FaqSection;
