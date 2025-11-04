


import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

export default function MainLayout() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      const timeout = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [navigation.state]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {loading && <LoadingSpinner />} 
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

