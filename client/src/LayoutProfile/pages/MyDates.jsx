import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";

function MyDates() {

  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [infoUser, setInfoUser] = useState({
    name:"",
    lastName:"",
    email:"",
    dni:"",
    telephone:"",
    country:"",
    city:"",
    adress:""
  })

  const handleChange = (e) => {
    setInfoUser(
      e.target.id = e.target.value
    )
  }

  return (
    <div className="flex flex-col">
      {/* <p>User data</p> */}
      
      {/* <form>
        <div>
          <label>Name</label>
          <input type="text" value={user.name}/>
        </div>
        <div>
          <label>LastName</label>
          <input type="text" placeholder="Enter your lastName" />
        </div>
        <div>
          <label>DNI</label>
          <input type="text" placeholder="Enter your DNI" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" placeholder="Enter your phone" />
        </div>
        <div>
          <label>Location</label>
          <input type="text" placeholder="Enter your location" />
        </div>
        <div>
          <label>kindOfPerson:</label>
          <input type="text" placeholder="Enter your kindOfPerson" />
        </div>
      </form> */}
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="md:col-span-1">
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <h1 className="block text-xl font-bold text-secondcolor mb-8">Personal Information</h1>
                  <div></div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                        First name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10"
                        // placeholder={user.name}
                        onChange={() => {handleChange}}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10"
                        value={user.email}
                        disabled="true"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        DNI
                      </label>
                      <input
                        type="text"
                        name="dni"
                        id="dni"
                        className="mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Colombia</option>
                        <option>Perú</option>
                        <option>Argentina</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Cell phone
                      </label>
                      <input
                        type="text"
                        name="cell-phone"
                        id="cell-phone"
                        // autoComplete="postal-code"
                        className="mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-secondcolor py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-secondcolor focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDates;
