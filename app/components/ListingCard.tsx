import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Edit, Trash2, Eye } from "lucide-react";
import { cn } from "@/app/lib/utils";

export interface ListingCardProps {
  listing: {
    id: number;
    title: string;
    price: number;
    image: string;
    status: "active" | "sold" | "expired";
  };
}

const ListingCard = ({ listing }: ListingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusStyles = {
    active: "bg-green-100 text-green-800",
    sold: "bg-blue-100 text-blue-800",
    expired: "bg-orange-100 text-orange-800",
  };

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-elegant border-border/40 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted/50">
        {/* Status Badge */}
        <div className="absolute top-2 left-2 z-10">
          <span
            className={cn(
              "px-2 py-1 text-xs font-medium capitalize rounded-md",
              statusStyles[listing.status]
            )}
          >
            {listing.status}
          </span>
        </div>

        {/* Image */}
        <div className="w-full h-full">
          {listing.image ? (
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
              No Image
            </div>
          )}
        </div>

        {/* Action Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full w-10 h-10 p-0"
          >
            <Eye size={16} />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full w-10 h-10 p-0"
          >
            <Edit size={16} />
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="rounded-full w-10 h-10 p-0"
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
          {listing.title}
        </h3>
        <p className="mt-1 text-lg font-bold text-foreground">
          ${listing.price.toFixed(2)}
        </p>
      </div>
    </Card>
  );
};

export default ListingCard;
