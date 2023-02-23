import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Home from "../Components/Home/Home";
import LandingPage from "../Components/LandingPage/LandingPage";
import Contact from "../pages/Contact/Contact";
import FaqSection from "../pages/FaqSection/FaqSection";
import Details from "../Components/Details/Details";
import Shopping from "../Components/Shopping/shoping";
import { MPButton } from "../Components/MercadoPago/MercadoPago";
import CreateReview from "../Components/Review/Review";
import ProtectedRoute from "../Components/Auth/ProtectedRoute";
//Dashboard perfil de usuario
import LayoutProfile from "../LayoutProfile/LayoutProfile";
import MyDates from "../LayoutProfile/pages/MyDates";
import Bookings from "../LayoutProfile/pages/Bookings";
import Favorites from "../LayoutProfile/pages/Favorites";
import Reviews from "../LayoutProfile/pages/Reviews";
// Login
import Login from "../Components/Auth/Login/Login";
import Register from "../Components/Auth/Register/Register";
import ForgetPassword from "../Components/Auth/ForgetPassword/ForgetPassword";
// Dashboard Admin
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import HomeAdmin from "../LayoutAdmin/pages/HomeAdmin";
import UsersAdmin from "../LayoutAdmin/pages/UsersAdmin";
import { FormCar } from "../LayoutAdmin/pages/Forms/FormCar";
import { FormAccessory } from "../LayoutAdmin/pages/Forms/FormAccessory";
import CarsAdmin from "../LayoutAdmin/pages/CarsAdmin";
import BookingsAdmin from "../LayoutAdmin/pages/BookingsAdmin";
import AccessoriesAdmin from "../LayoutAdmin/pages/AccessoriesAdmin";
import LayoutAuth from "../LayoutAdmin/Auth/LayoutAuth";
import LoginAdmin from "../LayoutAdmin/Auth/LoginAdmin";
import ForgetPasswordAdmin from "../LayoutAdmin/Auth/ForgetPasswordAdmin";

function RouteApp() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="faq" element={<FaqSection />} />
        <Route exact path="detail/:id" element={<Details />} />
        <Route exact path="shopping" element={<Shopping />} />
        <Route exact path="createReview" element={<CreateReview />} />
        <Route exact path="gopay" element={<MPButton />} />
        {/* Configuración de rutas iniciar sesion */}
        <Route exact path="login" element={<Login />} />
        <Route exact path="register" element={<Register />} />
        <Route exact path="recover-password" element={<ForgetPassword />} />
        {/* Configuración de rutas del perfil de usuario*/}
        <Route element={<ProtectedRoute isAllowed={!!isAuthenticated} />}>
          <Route path="/profile" element={<LayoutProfile />} />
        </Route>

        <Route path="/profile" element={<LayoutProfile />}>
          {/* <Route index element={<MyDates />} /> */}
          <Route path="my-dates" element={<MyDates />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* Configuración de rutas del Dashboard */}
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<LoginAdmin />} />
          <Route path="recover-password" element={<ForgetPasswordAdmin />} />
        </Route>
        <Route path="/dashboard" element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="users" element={<UsersAdmin />} />
          <Route path="cars" element={<CarsAdmin />} />
          <Route path="accessories" element={<AccessoriesAdmin />} />
          <Route path="bookings" element={<BookingsAdmin />} />
          <Route path="create-car" element={<FormCar />} />
          <Route path="create-accessory" element={<FormAccessory />} />
        </Route>

        {/* Configuración de ruta 404 error */}
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RouteApp;
