import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { postUser } from "../../../redux/actions/actions";
import validate from "./validate";
import { FaPhone } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine,
} from "react-icons/ri";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const initialState = {
    name: "",
    lastName: "",
    dni: "",
    telephone: "",
    eMail: "",
    password: "",
  };

  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }
  function handleOnBlur(e) {
    let objErrors = validate(input);
    setErrors(objErrors);
  }

  function handleRegister(e) {
    const newUser = {
      name: input.name,
      lastName: input.lastName,
      dni: input.dni,
      telephone: input.telephone,
      eMail: input.eMail,
      password: input.password,
    };
    e.preventDefault();
    dispatch(postUser(newUser));
    alert("Tu usuario a sido creado");
    setInput(initialState);
  }
  return (
    <React.Fragment>
      <NavBar />
      <div className="mt-[90px] mr-10 flex justify-end items-center  mb-[30px]  ">
        <div className="bg-secondary-100 p-6 rounded-xl  w-auto lg:w-[450px]">
          <h1 className="text-center text-3xl uppercase font-bold tracking-[5px] text-white mb-6">
            Create <span className="text-primary">account</span>
          </h1>
          <form onSubmit={(e) => handleRegister(e)} className="mb-8">
            {/* <button className="flex items-center py-3 px-4 gap-4 bg-secondary-900 w-full justify-center rounded-full mb-5 text-gray-100">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                className="w-4 h4"
              />
              Sign up with google
            </button> */}
            <div className="relative mb-4">
              <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 focus:border text-primary" />
              <input
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                type="text"
                name="name"
                value={input.name}
                placeholder="Name"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleOnBlur(e)}
              />
            </div>
            {errors.name && (
              <p className="text-red-700 font-bold text-center">
                {errors.name}
              </p>
            )}
            <div className="relative mb-4">
              <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type="text"
                name="lastName"
                value={input.lastName}
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Last Name"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleOnBlur(e)}
              />
            </div>
            {errors.lastName && (
              <p className="text-red-700 font-bold text-center">
                {errors.lastName}
              </p>
            )}
            <div className="relative mb-4">
              <HiOutlineIdentification className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type="text"
                name="dni"
                value={input.dni}
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="DNI"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleOnBlur(e)}
              />
            </div>
            {errors.dni && (
              <p className="text-red-700 font-bold text-center">{errors.dni}</p>
            )}
            <div className="relative mb-4">
              <FaPhone className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type="text"
                name="telephone"
                value={input.telephone}
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Telephone"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleOnBlur(e)}
              />
            </div>
            {errors.telephone && (
              <p className="text-red-700 font-bold text-center">
                {errors.telephone}
              </p>
            )}
            <div className="relative mb-4">
              <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type="text"
                name="eMail"
                value={input.eMail}
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Email Address"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleOnBlur(e)}
              />
            </div>
            {errors.eMail && (
              <p className="text-red-700 font-bold text-center">
                {errors.eMail}
              </p>
            )}
            <div className="relative mb-8">
              <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2  text-primary" />
              <input
                type="password"
                name="password"
                value={input.password}
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
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
                disabled={
                  !input.name ||
                  !input.lastName ||
                  !input.dni ||
                  !input.eMail ||
                  !input.password ||
                  Object.keys(errors).length > 0
                }
                className="bg-primary text-white uppercase  font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
              >
                Sign up
              </button>
            </div>
          </form>
          <span className="flex items-center gap-2 justify-center">
            Already have an account?
            <Link
              to="/login"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Log in
            </Link>
          </span>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Register;