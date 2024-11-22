import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=1600",
    title: "Ferrari F8 Tributo",
    description: "Pure racing DNA meets unrivaled performance"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1600",
    title: "Porsche 911 GT3",
    description: "Where precision meets passion"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1600",
    title: "McLaren P1",
    description: "Pushing the boundaries of possibility"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white">
              <h1 className="text-6xl font-bold mb-4 transform transition-all duration-700 translate-y-0 opacity-100">
                {slide.title}
              </h1>
              <p className="text-xl mb-8">{slide.description}</p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}