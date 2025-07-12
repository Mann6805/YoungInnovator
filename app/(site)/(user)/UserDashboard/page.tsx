"use client";

import MainNavbar from "@/app/components/MainNavbar";
import UserProfile from "@/app/components/UserProfile";
import ListingCard from "@/app/components/ListingCard";
import PurchaseCard from "@/app/components/PurchaseCard";
import { ListingCardProps } from "@/app/components/ListingCard";
import { useState, useEffect } from "react";

// Mock data - replace with actual API calls
const mockListings = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    price: 45,
    image: "/images/placeholder.jpg",
    status: "active",
  },
  {
    id: 2,
    title: "Designer Silk Scarf",
    price: 75,
    image: "/images/placeholder.jpg",
    status: "sold",
  },
  {
    id: 3,
    title: "Leather Boots",
    price: 120,
    image: "/images/placeholder.jpg",
    status: "active",
  },
  {
    id: 4,
    title: "Summer Dress",
    price: 65,
    image: "/images/placeholder.jpg",
    status: "expired",
  },
];

const mockPurchases = [
  {
    id: 101,
    title: "Cashmere Sweater",
    price: 95,
    image: "/images/placeholder.jpg",
    date: "2023-04-15",
    seller: "Jane Doe",
  },
  {
    id: 102,
    title: "Designer Handbag",
    price: 250,
    image: "/images/placeholder.jpg",
    date: "2023-03-22",
    seller: "Mike Smith",
  },
  {
    id: 103,
    title: "Vintage Watch",
    price: 320,
    image: "/images/placeholder.jpg",
    date: "2023-02-10",
    seller: "Sarah Johnson",
  },
  {
    id: 104,
    title: "Formal Shoes",
    price: 150,
    image: "/images/placeholder.jpg",
    date: "2023-01-05",
    seller: "Alex Brown",
  },
];

export default function UserDashboard() {
  const [listings, setListings] = useState(mockListings);
  const [purchases, setPurchases] = useState(mockPurchases);
  const [user, setUser] = useState(null);

  // Replace with actual data fetching
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

  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />

      <main className="container mx-auto px-4 py-8">
        {/* User Profile Section */}
        <UserProfile user={user as any} />

        {/* My Listings Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">My Listings</h2>
            <button className="text-sm font-medium text-primary hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {listings.map((listing) => (
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
            {purchases.map((purchase) => (
              <PurchaseCard key={purchase.id} purchase={purchase} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
