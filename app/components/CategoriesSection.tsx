import { Shirt, Gem, ShoppingBag, Watch, Crown, Footprints } from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Dresses",
      icon: Shirt,
      count: "1,234 items",
      gradient: "from-pink-500 to-rose-500",
      description: "Elegant & casual dresses"
    },
    {
      name: "Accessories",
      icon: Gem,
      count: "856 items",
      gradient: "from-purple-500 to-indigo-500",
      description: "Jewelry, scarves & more"
    },
    {
      name: "Handbags",
      icon: ShoppingBag,
      count: "672 items",
      gradient: "from-blue-500 to-cyan-500",
      description: "Designer & vintage bags"
    },
    {
      name: "Watches",
      icon: Watch,
      count: "298 items",
      gradient: "from-emerald-500 to-teal-500",
      description: "Luxury & smartwatches"
    },
    {
      name: "Designer",
      icon: Crown,
      count: "189 items",
      gradient: "from-yellow-500 to-orange-500",
      description: "Premium brand items"
    },
    {
      name: "Shoes",
      icon: Footprints,
      count: "945 items",
      gradient: "from-red-500 to-pink-500",
      description: "Sneakers, heels & boots"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing pieces across all fashion categories. From designer dresses to luxury accessories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-scale-in">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group relative bg-card rounded-xl p-6 shadow-card border border-border/40 hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Category Info */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <p className="text-xs font-medium text-primary">
                      {category.count}
                    </p>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary hover:text-primary-foreground bg-transparent hover:bg-gradient-primary border-2 border-primary rounded-lg transition-all duration-300 hover:shadow-elegant">
            View All Categories
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;