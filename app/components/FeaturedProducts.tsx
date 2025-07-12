'use client'
import ProductCard from "@/app/components/ui/productCard";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { useState } from "react";

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: "1",
      title: "Vintage Chanel Quilted Bag",
      brand: "Chanel",
      price: 2800,
      originalPrice: 3500,
      image: "/api/placeholder/300/400",
      rating: 4.9,
      reviewCount: 124,
      condition: "Like New" as const,
      size: "Medium"
    },
    {
      id: "2",
      title: "Designer Silk Evening Dress",
      brand: "Valentino",
      price: 650,
      originalPrice: 1200,
      image: "/api/placeholder/300/400",
      rating: 4.8,
      reviewCount: 89,
      condition: "New" as const,
      size: "S"
    },
    {
      id: "3",
      title: "Limited Edition Sneakers",
      brand: "Nike",
      price: 320,
      originalPrice: 450,
      image: "/api/placeholder/300/400",
      rating: 4.7,
      reviewCount: 156,
      condition: "Good" as const,
      size: "9"
    },
    {
      id: "4",
      title: "Luxury Swiss Watch",
      brand: "Rolex",
      price: 8500,
      originalPrice: 12000,
      image: "/api/placeholder/300/400",
      rating: 5.0,
      reviewCount: 67,
      condition: "Like New" as const,
      size: "42mm"
    },
    {
      id: "5",
      title: "Cashmere Winter Coat",
      brand: "Burberry",
      price: 890,
      originalPrice: 1400,
      image: "/api/placeholder/300/400",
      rating: 4.6,
      reviewCount: 203,
      condition: "Good" as const,
      size: "M"
    },
    {
      id: "6",
      title: "Designer Leather Boots",
      brand: "Saint Laurent",
      price: 420,
      originalPrice: 780,
      image: "/api/placeholder/300/400",
      rating: 4.8,
      reviewCount: 91,
      condition: "Like New" as const,
      size: "8"
    }
  ];

  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Trending Now</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Featured Items
            </h2>
            <p className="text-muted-foreground mt-2">
              Discover the most popular items from our community
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-4 gap-6 animate-scale-in">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                className="animate-fade-in"
              />
            ))}
          </div>

          {/* Tablet View */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 animate-scale-in">
            {products.slice(0, 2).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                className="animate-fade-in"
              />
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {products.map((product) => (
                  <div key={product.id} className="w-full flex-shrink-0 px-2">
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? "bg-primary w-6" 
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="group">
            View All Featured Items
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;