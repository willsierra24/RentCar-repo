import React, { useState } from "react";
import {
  RiLogoutCircleRLine,
  RiArrowRightLine,
  RiMenu3Line,
  RiCloseLine,
  RiCarFill,
  RiHome7Fill,
} from "react-icons/ri";
import { GiCarSeat } from "react-icons/gi";
import { FaUsers, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Sidebar() {
  //overflow-y-scroll
  const { logout } = useAuth0();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`xl:h-[100vh]  fixed xl:static w-[50%] md:w-[40%] lg:w-[30%] xl:w-auto h-full  top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50  ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-4xl font-bold text-white mb-10">
            Admin<span className="text-primary  ">.</span>
          </h1>
          <ul>
            <li>
              <Link
                to="bookings"
                className="flex text-2xl items-center gap-4  py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <FaShoppingBag className="text-primary" />
                Bookings
              </Link>
            </li>

            <li>
              <Link
                to="cars"
                className="flex text-2xl items-center gap-4  py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <RiCarFill className="text-primary" />
                Cars
              </Link>
            </li>
            <li>
              <Link
                to="accessories"
                className="flex text-2xl items-center gap-4  py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <GiCarSeat className="text-primary" />
                Accessories
              </Link>
            </li>
            <li>
              <Link
                to="users"
                className="flex text-2xl items-center gap-4  py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <FaUsers className="text-primary" />
                Users
              </Link>
            </li>
            {/* <li>
              <button
                onClick={() => setShowSubMenu(!showSubMenu)}
                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <span className="flex items-center gap-4 text-2xl">
                  <FaUsers className="text-primary " /> Users
                </span>
                <RiArrowRightLine
                  className={`mt-1 ${
                    !showSubMenu && "rotate-90"
                  } transition-all`}
                />
              </button>

              <ul className={`my-2 ${showSubMenu && "hidden"}`}>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative
                   before:w-3 before:h-3 before:absolute before:bg-primary
                    before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2
                     before:border-secondary-100 before:border-4 hover:text-primary transition-colors 
                     rounded-lg hover:bg-secondary-900 text-lg"
                  >
                    Admin
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative
                   before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full
                    before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2
                     before:border-secondary-100 before:border-4 hover:text-primary transition-colors 
                     rounded-lg hover:bg-secondary-900 text-lg"
                  >
                    User
                  </Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link
                to="/home"
                className="flex text-2xl items-center gap-4  py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <RiHome7Fill className="text-primary" />
                Back Home
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <div className="flex flex-col">
            <Link
              to="#"
              onClick={() => logout({ returnTo: window.location.origin })}
              className="flex text-2xl items-center gap-4 my-6 py-3 pl-5 rounded-lg hover:bg-secondary-900 hover:text-white transition-colors bg-primary"
            >
              <RiLogoutCircleRLine className="text-white  " />
              LOG OUT
            </Link>
          </div>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed xl:hidden bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50 "
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
}

export default Sidebar;
