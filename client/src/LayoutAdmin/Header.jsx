import React from "react";
import {
  RiArrowDownSLine,
  RiLogoutCircleRLine,
  RiProfileLine,
} from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegCalendarAlt, FaArrowCircleRight } from "react-icons/fa";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

const Header = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  return (
    isAuthenticated && (
      <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
        <nav className="flex items-center gap-2">
          <button className="items-center flex gap-x-2 hover:text-white ">
            <Link
              className="text-[#023047] font-bold hover:text-white"
              to="/home"
            >
              Go Home
            </Link>
            <FaArrowCircleRight />
          </button>
          <button className="items-center flex gap-x-2 hover:text-white">
            <FaRegCalendarAlt className="hover-white" />
            <h1>{`${day}/${month}/${year}`}</h1>
          </button>
          <Menu
            menuButton={
              <MenuButton className="flex bg-primary items-center gap-x-2 hover:bg-[#219EBC] p-2 rounded-lg transition-colors">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-6 h-6 object-cover rounded-full"
                />
                <span>{user.name}</span>
                <RiArrowDownSLine />
              </MenuButton>
            }
            align="end"
            arrow
            arrowClassName="bg-secondary-100"
            transition
            menuClassName="bg-secondary-100 p-4"
          >
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="#"
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
              >
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-8 h-8 object-cover rounded-full"
                />
                <div className="flex flex-col text-sm">
                  <span className="text-sm">{user.name} </span>
                  <span className="text-xs text-gray-500">{user.email}</span>
                </div>
              </Link>
            </MenuItem>
            <hr className="my-4 border-gray-500" />
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/dashboard"
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
              >
                <RiProfileLine /> My Profile
              </Link>
            </MenuItem>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="#"
                onClick={() => logout({ returnTo: window.location.origin })}
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
              >
                <RiLogoutCircleRLine /> Log Out
              </Link>
            </MenuItem>
          </Menu>
        </nav>
      </header>
    )
  );
};

export default Header;
