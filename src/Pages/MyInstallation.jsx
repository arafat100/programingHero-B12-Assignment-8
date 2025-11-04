import React, { useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";
import { loadInstalled, saveInstalled } from "../utils/localStorage";

export default function MyInstallation() {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("size");

  useEffect(() => {
    const ids = loadInstalled();
    fetch("/appsData.json")
      .then(r => r.json())
      .then(data => {
        const items = data.filter(d => ids.includes(d.id));
        setInstalledApps(items);
      });
  }, []);

  const handleUninstall = (id) => {
    const ids = loadInstalled().filter(i => i !== id);
    saveInstalled(ids);
    setInstalledApps(prev => prev.filter(a => a.id !== id));
    toast.info("App uninstalled");
  };


  const sortedApps = useMemo(() => {
    let sorted = [...installedApps];
    if (sortBy === "downloads-high") {
      sorted.sort((a, b) => (b.downloads || 0) - (a.downloads || 0)); 
    } else if (sortBy === "downloads-low") {
      sorted.sort((a, b) => (a.downloads || 0) - (b.downloads || 0)); 
    }
    return sorted;
  }, [installedApps, sortBy]);

  return (
    <div className="min-h-screen bg-white animate-fadeIn">

      <div className="min-h-screen bg-white">

        <div className="py-16 px-4">

          <section className="text-center space-y-3 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Your Installed Apps
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore All Trending Apps on the Market developed by us
            </p>
          </section>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white rounded-lg shadow-sm p-4">
            <div className="font-semibold text-gray-700 text-lg">
              {installedApps.length} Apps Found
            </div>
            <div className="relative w-full md:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg w-full focus:outline-none focus:border-purple-600 pl-3 pr-8 py-2 appearance-none bg-white"
              >
                <option value="size">Sort by Size</option>
                <option value="downloads-high">Downloads: High-Low</option>
                <option value="downloads-low">Downloads: Low-High</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <span className="text-gray-400">▼</span>
              </div>
            </div>
          </div>

          {installedApps.length === 0 ? (
            <div className="text-center py-20 text-gray-500 text-lg font-medium">
              No installed apps yet.
            </div>
          ) : (
            <div className="space-y-6">
              {sortedApps.map(a => (
                <div key={a.id} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-gray-800">{a.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                      <span>↓{a.downloads || 0}M</span>
                      <span className="text-yellow-500 flex items-center gap-0.5">
                        ★ {a.ratingAvg || 5}
                      </span>
                      <span>{a.size || 'Unknown'} MB</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleUninstall(a.id)}
                    className="px-4 py-2 bg-green-500 text-white rounded text-sm font-semibold hover:bg-green-600 transition"
                  >
                    Uninstall
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
