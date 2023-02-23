import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <button
      // className="flex items-center py-3 px-4 gap-4 bg-secondary-900 w-full justify-center rounded-full mb-8 text-gray-100"
      onClick={() => loginWithPopup()}
    >
      {/* <img
        src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
        className="w-4 h4"
      /> */}
      Login
    </button>
  );
};
