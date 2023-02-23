import React from "react";
import { Link } from "react-router-dom";
import { RiMailLine } from "react-icons/ri";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";

function ForgetPassword() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="mt-[90px] mr-10 flex justify-end items-center  mb-[30px]  ">
        <div className="bg-secondary-100 p-8 rounded-xl  w-auto lg:w-[450px]">
          <h1 className="text-center text-3xl uppercase font-bold tracking-[5px] text-white mb-8">
            Recover <span className="text-primary">password</span>
          </h1>
          <form className="mb-8">
            <div className="relative mb-8">
              <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type="email"
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Email Address"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary text-white uppercase  font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
              >
                Send instructions
              </button>
            </div>
          </form>
          <div className="flex  flex-col items-center gap-4">
            <span className="flex items-center gap-2">
              Already have an account?
              <Link
                to="/login"
                className="text-primary hover:text-gray-100 transition-colors"
              >
                Log in
              </Link>
            </span>
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

export default ForgetPassword;
