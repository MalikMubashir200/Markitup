import React, { useEffect, useState } from "react";
import Header from "./others/Header";
import Banner from "./others/TopBanner";
import CategoryCard from "./others/Catogries";
import ProductCard from "./others/product";
import axios from "axios";
import Footer from "./others/Footer";

function App() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products`);
        const result = response.data;
        setProduct(result);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching message:", err);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      {/* categories container */}
      <div className="grid w-[85%] mx-auto mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <CategoryCard
          imageUrl="./src/assets/mens.jpg"
          title="Men's Shoes"
          buttonText="See More"
        />
        <CategoryCard
          imageUrl="https://i.pinimg.com/736x/d7/1e/b9/d71eb9948373c4575b01a2c6403464b1.jpg"
          title="Female Shoes"
          buttonText="See More"
        />
        <CategoryCard
          imageUrl="https://i.pinimg.com/736x/46/56/9c/46569c17876de027e784948b8c8ba425.jpg"
          title="Kids Shoes"
        />
      </div>

      {/* Product container */}
      <div className="w-[90%] sm:w-[85%] mx-auto mt-5">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : product.length > 0 ? (
          <div className="flex flex-wrap gap-5">
            {product.map((prod, index) => (
              <ProductCard
                key={index}
                title={prod.name}
                price={`$${prod.price}`}
                condition={prod.condition}
                brand={prod.brand}
                image={prod.imageUrl}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No products found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              We couldn't find any products matching your criteria.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Refresh
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;