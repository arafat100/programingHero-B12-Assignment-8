import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50">
      <span className="loading loading-spinner loading-lg text-purple-600"></span>
    </div>
  );
}
