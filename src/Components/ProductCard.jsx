
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  if (!product) return null;
  const { id, title, image, downloads, ratingAvg } = product;
  return (
    <div className="card bg-white border rounded shadow-sm hover:shadow-md transition">
      <Link to={`/apps/${id}`} className="block p-4">
        <div className="h-36 bg-gray-50 flex items-center justify-center rounded">
          <img src={image} alt={title} className="h-24 object-contain" />
        </div>
        <h3 className="mt-3 font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{downloads.toLocaleString()} downloads • {ratingAvg}⭐</p>
      </Link>
    </div>
  );
}
