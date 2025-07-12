// 'use client'
// import LandingPageHeroSection from "@/app/components/LandingPageHeroSection"

// export default function page() {
//   return (
//     <>
//     <LandingPageHeroSection></LandingPageHeroSection>
//     </>
//   )
// }

import MainNavbar from "@/app/components/MainNavbar";
import LandingPageHeroSection from "@/app/components/LandingPageHeroSection";

export default function Home() {
  return (
    <>
      <MainNavbar />
      {/* <main> */}
      <LandingPageHeroSection/>
      {/* Add other sections here */}
      {/* <FeaturedProducts /> */}
      {/* Add other sections here */}
      {/* </main> */}
      {/* <Footer /> */}
    </>
  );
}
