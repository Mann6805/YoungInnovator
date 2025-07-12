"use client";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ShoppingBag, User, Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/app/components/Navbar";
import { cn } from "@/app/lib/utils";

const MainNavbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SwapStyle
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* <Link href="/"> */}
                  <NavigationMenuLink>Home</NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Browse</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[200px]">
                  <div className="p-4 space-y-2">
                    <Link
                      href="/"
                      className="block p-2 hover:bg-accent rounded-md transition-colors"
                    >
                      Clothing
                    </Link>
                    <Link
                      href="/"
                      className="block p-2 hover:bg-accent rounded-md transition-colors"
                    >
                      Accessories
                    </Link>
                    <Link
                      href="/"
                      className="block p-2 hover:bg-accent rounded-md transition-colors"
                    >
                      Shoes
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                {/* <Link href="/"> */}
                  <NavigationMenuLink>How It Works</NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>

              <NavigationMenuItem>
                {/* <Link href="/"> */}
                  <NavigationMenuLink>About</NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden lg:block w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search items..."
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>

            <Button variant="outline" size="icon" className="md:hidden">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
