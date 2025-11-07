
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaDownload, FaStar } from "react-icons/fa6";

const Home = () => {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data.slice(0, 8)))
      .catch((err) => console.error("Error loading apps:", err));
  }, []);


  const handleAppClick = (id) => {
    navigate(`/apps/${id}`);
  };


  const handleShowAll = () => {
    navigate("/apps");
  };

  return (

    <div className="min-h-screen bg-white ">


      <section className="  px-4 py-2 text-center bg-white">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
            Productive Apps
          </span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-10">
          At HEROJO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-6 inline mr-2"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-6 inline mr-2"
            />
          </a>
        </div>

        <div>
          <img src="/images/hero.png" alt="hero.png" className="mx-auto" />
        </div>
      </section>


      <section className=" pb-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted By Millions, Built For You
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">29.6M</h3>
            <p className="text-purple-200">Total Downloads</p>
            <p className="text-sm text-purple-100">21% More Last Month</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">906K</h3>
            <p className="text-purple-200">Total Reviews</p>
            <p className="text-sm text-purple-100">48% More Last Month</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">132+</h3>
            <p className="text-purple-200">Active Apps</p>
            <p className="text-sm text-purple-100">31 Will Launch</p>
          </div>
        </div>
      </section>


      <section className="py-16 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Trending Apps</h2>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              onClick={() => handleAppClick(app.id)}
              className="bg-gray-100 rounded-xl p-4 cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <figure className="mb-2">
                <div className="w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </figure>
              <h3 className="font-semibold text-sm mb-1">{app.title}</h3>
              <p className="text-xs text-gray-500 mb-2">
                {app.companyName || "HEROJO"}
              </p>
              <div className="flex justify-between items-center text-xs">
                <span className="text-green-600">↓9M</span>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500 text-xs" />
                  <span>5</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleShowAll}
            className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition cursor-pointer"
          >
            Show All
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
