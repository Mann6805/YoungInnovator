import { User, Package, ShoppingBag, Heart } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface UserStats {
  itemsListed: number;
  itemsSold: number;
  itemsPurchased: number;
  //favoriteItems: number;
}

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    image: string;
    stats: UserStats
  };
  
}

const UserProfile = ({ user }: UserProfileProps) => {
  console.log(user.stats);
  return (
    <Card className="border-border/40 shadow-elegant overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-[250px_1fr] gap-6">
          {/* Left Side - Avatar and Basic Info */}
          <div className="bg-muted/30 p-8 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-background border-4 border-primary/20 overflow-hidden mb-4">
              {user?.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                  <User size={64} className="text-primary/50" />
                </div>
              )}
            </div>

            <h1 className="text-2xl font-bold text-foreground mb-1">
              {user?.name}
            </h1>
            <p className="text-muted-foreground mb-4">{user?.email}</p>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Edit Profile
              </Button>
              <Button variant="hero" size="sm">
                Add Listing
              </Button>
            </div>
          </div>

          {/* Right Side - Stats & Details */}
          <div className="p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Account Overview
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Listed Items */}
              <div className="bg-card rounded-lg border border-border/40 p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Package size={20} className="text-primary" />
                </div>
                <span className="text-2xl font-bold text-foreground">
                  {user.stats.itemsListed}
                </span>
                <span className="text-sm text-muted-foreground">
                  Items Listed
                </span>
              </div>

              {/* Sold Items */}
              <div className="bg-card rounded-lg border border-border/40 p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <ShoppingBag size={20} className="text-green-600" />
                </div>
                <span className="text-2xl font-bold text-foreground">
                  {user.stats.itemsSold}
                </span>
                <span className="text-sm text-muted-foreground">
                  Items Sold
                </span>
              </div>

              {/* Purchased Items */}
              <div className="bg-card rounded-lg border border-border/40 p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <ShoppingBag size={20} className="text-blue-600" />
                </div>
                <span className="text-2xl font-bold text-foreground">
                  {user.stats.itemsPurchased}
                </span>
                <span className="text-sm text-muted-foreground">
                  Items Purchased
                </span>
              </div>

              {/* Favorite Items
              <div className="bg-card rounded-lg border border-border/40 p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-2">
                  <Heart size={20} className="text-red-500" />
                </div>
                <span className="text-2xl font-bold text-foreground">
               {user.stats.favoriteItems}
                </span>
                <span className="text-sm text-muted-foreground">Favorites</span>
              </div> */}
            </div>

            {/* Additional Info/Links */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <h3 className="font-medium text-foreground">Quick Actions</h3>
                <div className="space-y-2 text-sm">
                  <button className="block text-primary hover:underline">
                    Create new listing
                  </button>
                  <button className="block text-primary hover:underline">
                    View messages
                  </button>
                  <button className="block text-primary hover:underline">
                    Manage payment methods
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-foreground">
                  Account Settings
                </h3>
                <div className="space-y-2 text-sm">
                  <button className="block text-primary hover:underline">
                    Update profile
                  </button>
                  <button className="block text-primary hover:underline">
                    Change password
                  </button>
                  <button className="block text-primary hover:underline">
                    Notification preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
