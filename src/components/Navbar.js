import React from "react";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./nav.css"
import "./h1custom.css"
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <>
      <nav className="custom-container1">
        <Link to={"/"}>
          <div className="ml-5">
               <h1 class="custom-heading">
  Deal-Dynamo
</h1>
           
          </div>
        </Link>
        <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
          <Link to={"/"}>
            {/* <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Home
            </li> */}
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in font-bold text-xl sm:text-2xl md:text-3xl text-gray-800">
  Home
</li>

          </Link>
          <Link to={"/cart"}>
            <div className="relative">
              <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

              {cart.length > 0 && (
                <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
