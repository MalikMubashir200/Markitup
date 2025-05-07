import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import axios from "axios";

function Header() {
  // Menu open state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Searching query state
  const [searchQuery, setSearchQuery] = useState("");
  
  // Search results state
  const [searchResults, setSearchResults] = useState([]);

  // Handle menu toggle
  function handleClick(event) {
    setIsMenuOpen(!isMenuOpen);
  }

  // Handle search query change
  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  // Handle search form submit and make API call
  async function handleSubmit(event) {
    event.preventDefault(); 

    try {
      // Make GET request to backend with search query
      const response = await axios.get(`http://localhost:3000/api/products?search=${searchQuery}`);
      setSearchResults(response.data); // Set the response data to state
      console.log('Search Results:', response.data); // Log the results (optional)
    } catch (error) {
      console.error('Error fetching search results:', error);
      // Optionally handle errors here, like showing a message to the user
    }
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-[#eeeeee] flex items-center justify-between px-6 py-4 shadow-md">
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          <RiMenu2Line className="text-3xl cursor-pointer" onClick={handleClick} />
          <div className="flex items-center text-2xl font-bold">
            <CiShoppingCart className="text-3xl font-extrabold mr-1" />
            Markitup
          </div>
        </div>

        {/* Center - Search Bar */}
        <form onSubmit={handleSubmit} className="flex-1 flex justify-center px-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleChange}
            name="product"
            className="w-full max-w-md px-5 py-2.5 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
        </form>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <div className="text-3xl cursor-pointer">
            <CiUser />
          </div>
          <div className="text-3xl cursor-pointer">
            <CiShoppingCart />
          </div>
        </div>
      </nav>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed left-0 top-0 h-full w-65 bg-gray-600 text-white p-4 shadow-lg z-50">
          <button
            className="text-white text-2xl absolute top-4 right-4"
            onClick={handleClick}
          >
            X
          </button>
          <div className="flex flex-col mt-8 space-y-4">
            <a href="#" className="hover:bg-gray-700 p-2 rounded">Home</a>
            <a href="#" className="hover:bg-gray-700 p-2 rounded">About</a>
            <a href="#" className="hover:bg-gray-700 p-2 rounded">Services</a>
            <a href="#" className="hover:bg-gray-700 p-2 rounded">Contact</a>
          </div>
        </div>
      )}

      {/* Display Search Results */}
      {searchResults.length > 0 && (
        <div className="p-4 mt-4 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Search Results:</h3>
          <ul>
            {searchResults.map((item) => (
              <li key={item.id} className="py-2 border-b border-gray-300">
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
