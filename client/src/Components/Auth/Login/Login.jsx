import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";
import { LoginButton } from "../LoginButton";
import validate from "./validate";
// import {loginUser} from "../../../redux/actions/actions"

import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const initialState = {
    email: "",
    password: "",
    loading: "valid",
  };
  const [login, setLogin] = useState(initialState);
  const [errors, setErrors] = useState({});
  // const [navigate] = useLocation();

  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  function handleOnBlur(e) {
    let objError = validate(login);
    setErrors(objError);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(loginUser())
    // navigate("/home");
  }
  return (
    <React.Fragment>
      <NavBar />
      <div className="mt-[90px] mr-10 flex justify-end items-center mb-[30px]  ">
        <div className="bg-secondary-100 p-8 rounded-xl  w-auto lg:w-[450px]">
          <h1 className="text-center text-3xl uppercase font-bold tracking-[5px] text-white mb-8">
            Sign <span className="text-primary">in</span>
          </h1>
          <form onSubmit={(e) => handleSubmit(e)} className="mb-8">
            <LoginButton />
            <div className="relative mb-4">
              <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                type="text"
                name="email"
                value={login.email}
                placeholder="Email Address"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleOnBlur(e)}
              />
            </div>
            {errors.email && (
              <p className="text-red-700 font-bold text-center">
                {errors.email}
              </p>
            )}
            <div className="relative mb-8">
              <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2  text-primary" />
              <input
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                type="password"
                name="password"
                value={login.password}
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleOnBlur(e)}
              />

              {showPassword ? (
                <RiEyeOffLine
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer  text-primary"
                />
              ) : (
                <RiEyeLine
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer  text-primary"
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-700 font-bold text-center">
                {errors.password}
              </p>
            )}
            <div>
              <button
                type="submit"
                className="bg-primary text-white uppercase  font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
              >
                Log in
              </button>
            </div>
          </form>
          <div className="flex  flex-col items-center gap-4">
            <Link
              to="/recover-password"
              className="hover:text-primary transition-colors"
            >
              Did you forget your password?
            </Link>
            <span className="flex items-center gap-2">
              You do not have an account?
              <Link
                to="/register"
                className="text-primary hover:text-gray-100 transition-colors"
              >
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Login;
