import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-green-400 to-blue-500 shadow-md py-3 px-6 mb-10">
      <div className="flex flex-row items-center gap-4">
        <img
          src="https://dynamic.brandcrowd.com/asset/logo/930c7327-88cf-466d-9aad-4c87f280f46b/logo-search-grid-2x?logoTemplateVersion=1&v=637553764152900000&text=food"
          alt="Logo"
          className="h-[60px] w-[100px] object-contain cursor-pointer"
        />
        <h1 className="text-2xl font-bold text-white">OrderNow</h1>
      </div>
      <div className="w-full lg:w-auto mt-4 lg:mt-0">
        <input
          className="p-3 border border-gray-300 text-sm rounded-lg outline-none w-full lg:w-[25vw] focus:border-green-200 focus:ring-2 focus:ring-green-200 transition-all duration-300"
          type="search"
          placeholder="Search for restaurants or dishes"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;

