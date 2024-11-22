import React from 'react';
import { Timer, Gauge, Award } from 'lucide-react';

const featuredCars = [
  {
    id: 1,
    name: "Bugatti Chiron",
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&q=80&w=800",
    speed: "304 mph",
    acceleration: "2.4s",
    price: "$3,000,000"
  },
  {
    id: 2,
    name: "Koenigsegg Jesko",
    image: "https://images.unsplash.com/photo-1627454819213-0e8d8a69c10e?auto=format&fit=crop&q=80&w=800",
    speed: "300+ mph",
    acceleration: "2.5s",
    price: "$2,800,000"
  },
  {
    id: 3,
    name: "Pagani Huayra",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800",
    speed: "238 mph",
    acceleration: "2.8s",
    price: "$2,400,000"
  }
];

export default function FeaturedCars() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Supercars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{car.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-red-500" />
                    <span>Top Speed: {car.speed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="w-5 h-5 text-red-500" />
                    <span>0-60 mph: {car.acceleration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-red-500" />
                    <span>Starting at {car.price}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}