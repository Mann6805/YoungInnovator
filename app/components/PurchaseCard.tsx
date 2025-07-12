import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { MessageSquare, Star, ShoppingBag } from "lucide-react";

interface PurchaseCardProps {
  purchase: {
    id: number;
    title: string;
    price: number;
    image: string;
    date: string;
    seller: string;
  };
}

const PurchaseCard = ({ purchase }: PurchaseCardProps) => {
  // Format the date nicely
  const formattedDate = new Date(purchase.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-elegant border-border/40 group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted/50">
        {/* Purchase Badge */}
        <div className="absolute top-2 left-2 z-10">
          <span className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 text-blue-800">
            Purchased
          </span>
        </div>

        {/* Date Badge */}
        <div className="absolute top-2 right-2 z-10">
          <span className="px-2 py-1 text-xs font-medium rounded-md bg-background/80 backdrop-blur-sm text-muted-foreground">
            {formattedDate}
          </span>
        </div>

        {/* Image */}
        <div className="w-full h-full">
          {purchase.image ? (
            <img
              src={purchase.image}
              alt={purchase.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
              <ShoppingBag size={32} />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
          {purchase.title}
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          From: {purchase.seller}
        </p>

        <p className="mt-1 text-lg font-bold text-foreground">
          ${purchase.price.toFixed(2)}
        </p>

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <MessageSquare size={14} className="mr-1" /> Contact
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Star size={14} className="mr-1" /> Review
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PurchaseCard;
