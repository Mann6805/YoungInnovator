/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MainNavbar from "@/app/components/MainNavbar";
import UserProfile from "@/app/components/UserProfile";
import ListingCard from "@/app/components/ListingCard";
import PurchaseCard from "@/app/components/PurchaseCard";
import { ListingCardProps } from "@/app/components/ListingCard";
import { useState, useEffect } from "react";

export default function UserDashboard() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/user");
        if (!res.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    getUser();

    // Fetch user data, listings, and purchases here
  }, []);

  
  if(user)
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />

      <main className="container mx-auto px-4 py-8">
        {/* User Profile Section */}
        <UserProfile user={user} />

        {/* My Listings Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">My Listings</h2>
            <button className="text-sm font-medium text-primary hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {user.items.map((listing:any) => (
              <ListingCard
                key={listing.id}
                listing={listing as ListingCardProps["listing"]}
              />
            ))}
          </div>
        </section>

        {/* My Purchases Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">My Purchases</h2>
            <button className="text-sm font-medium text-primary hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {user.purchases.map((purchase:any) => (
              <PurchaseCard key={purchase.id} purchase={purchase} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
