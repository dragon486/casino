import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FeaturedCars from './components/FeaturedCars';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <SearchBar />
        <FeaturedCars />
      </main>
    </div>
  );
}

export default App;