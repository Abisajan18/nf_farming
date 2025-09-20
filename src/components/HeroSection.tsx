import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import plantationImage1 from "../assets/7acf5aafd868c7a5c5fc56cda8a12adfc56c602d.png";
import plantationImage2 from "../assets/a5d1f92894d19171fdbeb686d8411e54b2edfab6.png";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: plantationImage1,
      alt: "NF Plantation - Natural aloe vera cultivation"
    },
    {
      url: plantationImage2,
      alt: "NF Plantation - Aloe vera plants in greenhouse"
    },
    {
      url: "https://images.unsplash.com/photo-1677146337204-a37c12d6b7c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZ3JlZW4lMjBwbGFudGF0aW9uJTIwZmFybWluZ3xlbnwxfHx8fDE3NTc2NzA5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Natural green plantation farming"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel Images */}
      <div className="relative h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image.url})`
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Welcome to Nature Farming Pvt ltd
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 opacity-90"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Cultivating Nature, Nurturing Future
          </p>
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto opacity-80"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            We are dedicated to sustainable farming practices and organic cultivation methods that preserve our environment while providing the highest quality agricultural products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-8 py-3"
              style={{ 
                backgroundColor: 'var(--primary-green)', 
                color: 'white',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              Our Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}