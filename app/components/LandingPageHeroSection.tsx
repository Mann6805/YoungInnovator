"use client"
import { Button } from "@/app/components/ui/button";
import { ArrowRight, Sparkles, Recycle } from "lucide-react";
import { toast } from "sonner";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-secondary py-20 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-glow-pulse"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary-glow/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-glow-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Sustainable Fashion Exchange
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Swap Your Style,{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Save the Planet
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Join thousands of fashion lovers exchanging clothes, reducing waste,
                and discovering unique pieces. Your sustainable wardrobe starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group" onClick={()=>{toast.success("Hello")}}>
                Start Swapping
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="premium" size="lg" className="group">
                <Recycle className="mr-2 h-5 w-5" />
                Browse Items
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/40">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Items Swapped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">15K+</div>
                <div className="text-sm text-muted-foreground">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 bg-card rounded-2xl shadow-elegant p-8 border border-border/40">
                <div className="grid grid-cols-2 gap-4">
                  {/* Featured Items Preview */}
                  <div className="space-y-4">
                    <div className="bg-gradient-primary h-32 rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold">Designer Jacket</span>
                    </div>
                    <div className="bg-muted h-20 rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Vintage Dress</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-muted h-20 rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Luxury Bag</span>
                    </div>
                    <div className="bg-gradient-hero h-32 rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold">Trendy Shoes</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  🔥 Trending
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;