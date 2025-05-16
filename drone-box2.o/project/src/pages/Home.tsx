import React from "react";
import { Link, useNavigate } from "react-router-dom";
import drones from "../data/drones.json";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Home() {
  const featuredDrones = drones.drones.filter((drone) => drone.featured);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative flex justify-center items-center bg-gray-200 h-[400px] sm:h-[500px] md:h-[600px]">
        {/* Image scales responsively */}
        <div className="z-10">
          {" "}
          <img
            src="/drone.png"
            alt="Hero"
            className="w-full md:w-[80vw] lg:w-[60vw] p-10 h-full object-cover  "
          />
        </div>

        {/* Large Number "01" scales well on all screens */}
        <h1 className="hading01 text-black text-[100vw]  md:text-[50vw] absolute tracking-wider z-0 font-mono">
          01
        </h1>

        {/* Centered button with responsive padding */}
        
      </div>

      {/* best deals */}
      <div className="flex justify-center items-center w-full p-4 md:p-10 flex-col">
        <h1 className="text-3xl md:text-5xl mb-6 md:mb-10">Best Deals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDrones.slice(0, 3).map((drone) => (
            <Link
              key={drone.id}
              to={`/product/${drone.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={drone.img}
                alt={drone.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{drone.name}</h3>
                <p className="text-gray-600 mb-4">{drone.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 line-through">
                      ${drone.price.old}
                    </span>
                    <span className="text-2xl font-bold text-blue-600 ml-2">
                      ${drone.price.new}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      drone.stock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {drone.stock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* new arrailval */}
      <div className="w-full linarbg p-6 md:p-10 flex flex-col overflow-hidden justify-center ">
        {/* Title Section */}
        <div className="flex justify-center md:justify-start">
          <h1 className="text-3xl md:text-4xl my-3 mx-4 md:mx-6 text-gray-900 font-semibold">
            New Arrival
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          {/* Left Section: Title, Description, Rating */}
          <div className="flex flex-col space-y-6 w-full lg:w-[40%] text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold my-5 mx-4 lg:mx-6 k2box">
              Drox K2 Pro
            </h1>
            <p className="px-4 lg:px-6 text-lg md:text-xl text-gray-700">
              done k2 pro, amet consectetur adipisicing elit. Minima officiis
              reiciendis deserunt fugiat ipsa unde, excepturi possimus nobis,
              illo voluptates quae.
            </p>

            {/* Rating & Review */}
            <div className="flex flex-col items-center lg:items-start">
              <ul className="flex mx-4 lg:mx-6 text-amber-600 my-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </ul>
              <span className="text-xl mx-4 lg:mx-6">Review</span>
            </div>
          </div>

          {/* Right Section: Image + "PRO" Heading */}
          <div className="relative flex justify-center items-center mt-5 w-full lg:w-[60%]">
            {/* Keeping "PRO" Heading CSS unchanged */}
            <h1 className="text-black text-[200px] hading01 md:text-[500px]   absolute tracking-wider z-10 font-mono">
              PRO
            </h1>

            <div className="z-20 flex justify-center">
              <img
                src="/product.3.png"
                className="w-[80%] md:w-[60%] lg:w-[50vw] max-w-[500px]"
                alt="Product"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Drones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDrones.slice(2, 5).map((drone) => (
            <Link
              key={drone.id}
              to={`/product/${drone.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={drone.img}
                alt={drone.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{drone.name}</h3>
                <p className="text-gray-600 mb-4">{drone.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 line-through">
                      ${drone.price.old}
                    </span>
                    <span className="text-2xl font-bold text-blue-600 ml-2">
                      ${drone.price.new}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      drone.stock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {drone.stock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* gallaey */}
      <div className="w-full flex flex-col md:flex-row p-4 md:p-10 space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-4 md:p-16 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold backdroP tracking-widest mb-6 md:mb-10">
            Great <br /> skills
          </h1>
          <p className="w-full md:w-[80%] m-2 md:m-6 text-sm md:text-base">
            moon  sit amet consectetur adipisicing elit. Dolor
            autem quo veniam nisi aspernatur voluptates, magnam delectus qui
            eaque voluptatum reiciendis eligendi natus commodi doloribus
            adipisci placeat, aliquid eos ad. Dignissimos, ex?
          </p>

          <a href="#" className="px-4 py-2 md:px-5 md:py-2 hover:scale-105 font-semibold hover:shadow-2xl bbgforbtn rounded-2xl text-sm md:text-base" onClick={()=>{navigate("/products")}}>
            Shop now
          </a>
        </div>

        {/* Right Section - Image Grid */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 rounded-lg">
            {/* Column 1 */}
            <div className="grid gap-2 md:gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1524512099866-c65c6bfb2617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGRyb25lfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1504890135076-e4fcdd71043c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGRyb25lfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1539213465191-6046fe072ade?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGRyb25lfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="grid gap-2 md:gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1487304655522-c039cc299c9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGRyb25lfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1572957074841-b50579abd4b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGRyb25lfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1482050340796-deca383195b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGRyb25lfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="grid gap-2 md:gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1514505213055-b456c4420f67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGRyb25lfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1504392964536-1eeba96e9d0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGRyb25lfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1602526214925-4fedda6a53df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxkcm9uZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
            </div>

            {/* Column 4 */}
            <div className="grid gap-2 md:gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1527441385177-3dad16222699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGRyb25lfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1603903918943-67df1fd0f616?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGRyb25lfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1456615913800-c33540eac399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxkcm9uZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
