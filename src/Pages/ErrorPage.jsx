
import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  return (
<div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 text-center animate-bounceIn">
 
  
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 text-center">
     
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-8">
        <img 
          src="/images/error-404.png" 
          alt="Error Illustration" 
          className="w-full h-auto object-contain"
        />
      </div>
      
    
      <p className="mt-4 text-gray-500 text-lg">
        {err?.statusText || err?.message || "Page not found"}
      </p>
      
    
      <Link 
        to="/" 
        className="mt-5 inline-block px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
      >
        Go Home
      </Link>
    </div>
</div>
  );
}





   