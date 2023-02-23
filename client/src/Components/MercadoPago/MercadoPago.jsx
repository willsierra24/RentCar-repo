import { useEffect, useContext } from 'react';

export function MPButton() {
	// aqui se recibe el body
	const dataMP = {
		eMail: 'test_user_1309324893@testuser.com',
		dni: '1231212',
		image:
			'http://mydogger.com/wp-content/uploads/2019/06/logo-mercado-pago-png-7-1024x312.png',
		quantity: 1,
		price: 12,
		discount: 0,
		line: ['concat'],
	};
	//-----------------------

	useEffect(() => {
		const fetchCheckout = async () => {
			const res = await fetch(
				'https://back-pf-production.up.railway.app/payment',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						dataMP,
						// aqui se manda la data recibida en el body
					}),
				}
			);
			const data = await res.json();

			if (data) {
				const script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'https://sdk.mercadopago.com/js/v2';
				script.setAttribute('data-preference-id', data.id);
				document.body.appendChild(script);

				const mp = new window.MercadoPago(
					'APP_USR-01eba9fa-b636-4383-88d4-edff9d5a2e8c',
					{
						locale: 'es-CO',
					}
				);

				mp.checkout({
					preference: {
						id: data.id,
					},
					render: {
						container: '.cho-container',
						label: 'GO PAY',
					},
				});
			}
		};

		fetchCheckout();
	}, []);

	return (
		<>
			<div>Tittle</div>
			<div className="cho-container"></div>
		</>
	);
}
