"use client";

import { useCart } from "@/contexts/cartcontext";
import { Property } from "@/types/types";
import Image from "next/image";

export default function PropertyCard({ property }: { property: Property }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg overflow-hidden">
      <Image
        src={property.image}
        alt={property.title}
        width={300}
        height={200}
        className="w-full"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{property.title}</h2>
        <p className="text-gray-600 mb-2">{property.description}</p>
        <p className="text-lg font-bold mb-2">${property.price} / night</p>
        <p className="text-sm text-gray-500 mb-2">
          Location: {property.location}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Bedrooms: {property.bedrooms}
        </p>
        <button
          onClick={() => addToCart(property)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
