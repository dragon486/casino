import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-30">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search cars by name, brand, or type..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}