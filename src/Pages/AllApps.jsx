

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaDownload, FaStar } from "react-icons/fa";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

 
  const handleSearch = (e) => {
    setSearching(true);
    setSearch(e.target.value);
    setTimeout(() => setSearching(false), 400); 
  };

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedApps = [...filteredApps].sort((a, b) => {
    if (sortOrder === "high-low") return b.downloads - a.downloads;
    if (sortOrder === "low-high") return a.downloads - b.downloads;
    return 0;
  });

  const handleAppClick = (id) => navigate(`/apps/${id}`);


  if (loading)
    return (
      <div className="flex justify-center items-center h-80">
        <span className="loading loading-spinner loading-lg text-purple-600"></span>
      </div>
    );

  return (
    <div className="min-h-screen bg-white animate-fadeIn">
      <div className="py-16 px-4">
        <section className="text-center space-y-3 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our All Applications
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore All Applications on the Market developed by us We code for
            Millions
          </p>
        </section>

       
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-sm mb-8">
          <p className="font-semibold text-gray-700 text-lg">
            ({sortedApps.length}) Apps Found
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center w-full md:w-auto">
           
            <div className="relative flex-1 md:flex-none md:w-64">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-purple-600"
                placeholder="Search Apps"
                value={search}
                onChange={handleSearch}
              />
            </div>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select select-bordered border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 hidden md:block md:w-48"
            >
              <option value="default">Sort by Downloads</option>
              <option value="high-low">High → Low</option>
              <option value="low-high">Low → High</option>
            </select>
          </div>
        </div>

       
        {searching && (
          <div className="flex justify-center py-4">
            <span className="loading loading-spinner text-purple-600"></span>
          </div>
        )}

   
        {sortedApps.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-lg font-medium">
            <img
              src="/images/App-Error.png"
              alt="Error Illustration"
              className="w-48 mx-auto mb-4"
            />
            <h2>OPPS!! APP NOT FOUND</h2>
            <h5>
              The App you are requesting is not found on our system. Please try
              another app.
            </h5>
            <Link
              to="/"
              className="text-indigo-600 mt-4 inline-block hover:underline"
            >
              Go Back!
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sortedApps.slice(0, 16).map((app) => (
              <div
                key={app.id}
                onClick={() => handleAppClick(app.id)}
                className="bg-gray-100 rounded-xl p-4 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <figure className="mb-3">
                  <div className="w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </figure>
                <div className="text-center">
                  <h3 className="font-semibold text-sm mb-2 text-gray-800 leading-tight line-clamp-2">
                    {app.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">
                    {app.companyName}
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-green-600 font-medium">↓9M</span>
                    <div className="flex items-center gap-1 text-orange-500">
                      <FaStar className="text-xs" />
                      <span className="font-medium">{app.ratingAvg}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
