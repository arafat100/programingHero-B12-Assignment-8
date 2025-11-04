import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";
import { loadInstalled, saveInstalled } from "../utils/localStorage";

export default function AppDetails() {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch("/appsData.json")
      .then((r) => r.json())
      .then((data) => {
        const found = data.find((d) => String(d.id) === id);
        setApp(found);
      });
    const installedIds = loadInstalled();
    setInstalled(installedIds.includes(Number(id)));
  }, [id]);

  if (!app)
    return (
      <div className="text-center py-16">
   <div className="flex items-center justify-center">
  <img src="/images/App-Error.png" alt="Error" className="max-w-xs" />
</div>
        <Link
          to="/apps"
          className="text-indigo-600 mt-4 inline-block hover:underline"
        >
          ← Back to Apps
        </Link>
      </div>
    );

  const chartData = app.ratings.map((r, i) => ({
    name: `${i + 1}★`,
    value: r.count,
  }));

  const handleInstall = () => {
    const ids = loadInstalled();
    if (!ids.includes(app.id)) {
      ids.push(app.id);
      saveInstalled(ids);
      setInstalled(true);
      toast.success("App installed successfully");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 animate-slideUp">
  {/* details content */} 
   <div className="w-full max-w-6xl mx-auto px-4 py-10">
  
      <div className="bg-white rounded-xl shadow-md p-6 md:flex items-center gap-8 border">
     
        <div className="flex justify-center md:w-1/3">
          <img
            src={app.image}
            alt={app.title}
            className="w-40 h-40 object-contain"
          />
        </div>

      
        <div className="md:w-2/3 space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            {app.title}
          </h2>
          <p className="text-sm text-gray-500">
            Developed by{" "}
            <span className="text-indigo-600 hover:underline font-medium">
              {app.companyName}
            </span>
          </p>

       
          <div className="flex flex-wrap gap-10 mt-4">
            <div className="text-center">
              <img src="/images/icon-downloads.png" alt="" />
              <p className="text-gray-500 text-sm">Downloads</p>
            
            
              <p className="font-bold text-2xl text-gray-800">9M+</p>
            </div>
            <div className="text-center">
                <img src="/images/icon-ratings.png" alt="" />
              <p className="text-gray-500 text-sm">Average Ratings</p>
              <p className="font-bold text-2xl text-gray-800">
                {app.ratingAvg}
              </p>
            </div>
            <div className="text-center">
               <img src="/images/icon-review.png" alt="" />
              <p className="text-gray-500 text-sm">Total Reviews</p>
              <p className="font-bold text-2xl text-gray-800">
                {app.reviews.toLocaleString()}
              </p>
            </div>
          </div>

          <button
            disabled={installed}
            onClick={handleInstall}
            className={`mt-5 px-6 py-2 rounded font-semibold ${
              installed
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

    
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Ratings</h3>
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={60} />
              <Tooltip />
              <Bar dataKey="value" fill="#f97316" radius={[4, 4, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Description
        </h3>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>
    </div>
</div>

 
  );
}



