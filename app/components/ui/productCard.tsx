import { Heart, Star, Eye } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";

interface ProductCardProps {
  id: string;
  title: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  condition: "New" | "Like New" | "Good" | "Fair";
  size: string;
  isLiked?: boolean;
  className?: string;
}

const ProductCard = ({
  title,
  brand,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  condition,
  size,
  isLiked = false,
  className
}: ProductCardProps) => {
  const conditionColors = {
    "New": "bg-emerald-100 text-emerald-800",
    "Like New": "bg-blue-100 text-blue-800",
    "Good": "bg-yellow-100 text-yellow-800",
    "Fair": "bg-orange-100 text-orange-800"
  };

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className={cn(
      "group relative bg-card rounded-xl shadow-card border border-border/40 overflow-hidden hover:shadow-elegant hover:scale-[1.02] transition-all duration-300",
      className
    )}>
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {/* Product Image */}
        <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
          <span className="text-muted-foreground font-medium">{title}</span>
        </div>
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && (
            <span className="px-2 py-1 text-xs font-semibold bg-destructive text-destructive-foreground rounded-md">
              -{discount}%
            </span>
          )}
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-md",
            conditionColors[condition]
          )}>
            {condition}
          </span>
        </div>

        {/* Like Button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-200">
          <Heart className={cn(
            "h-4 w-4 transition-colors",
            isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
          )} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Brand and Rating */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {brand}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-muted-foreground">
              {rating} ({reviewCount})
            </span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        {/* Size */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Size:</span>
          <span className="px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded">
            {size}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Action Button */}
        <Button className="w-full" variant="premium">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;