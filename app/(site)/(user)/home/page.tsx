import MainNavbar from "@/app/components/MainNavbar";
import LandingPageHeroSection from "@/app/components/LandingPageHeroSection";
import CategoriesSection from "@/app/components/CategoriesSection";
import FeaturedProducts from "@/app/components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <MainNavbar />
      {/* <main> */}
      <LandingPageHeroSection/>
      {/* Add other sections here */}
      <CategoriesSection/>
      <FeaturedProducts />
      {/* Add other sections here */}
      {/* </main> */}
      {/* <Footer /> */}
    </>
  );
}
