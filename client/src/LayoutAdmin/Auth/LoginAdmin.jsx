import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithPopup } = useAuth0();

  return (
    <React.Fragment>
      <div className="bg-secondary-100 p-8 rounded-xl  w-auto lg:w-[450px]">
        <h1 className="text-center text-5xl uppercase font-bold tracking-[5px] text-white mb-9">
          Rent <span className="text-primary">Car</span>
        </h1>

        <form className="mb-8">
          <button
            onClick={() => loginWithPopup()}
            className="flex items-center py-3 px-4 gap-4 bg-secondary-900 w-full justify-center rounded-full mb-8 text-gray-100"
          >
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              className="w-4 h4"
            />
            Log in with google
          </button>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Email Address"
            />
          </div>
          <div className="relative mb-8">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2  text-primary" />
            <input
              type="password"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Password"
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
            to="recover-password"
            className="hover:text-primary transition-colors"
          >
            Did you forget your password?
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginAdmin
;
