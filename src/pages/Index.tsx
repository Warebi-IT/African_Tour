import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Piliers from "@/components/Piliers";
import HomeDestinations from "@/components/HomeDestinations";
import GalleryCarousel from "@/components/GalleryCarousel";
import HomeTeasers from "@/components/HomeTeasers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Piliers />
      <HomeDestinations />
      <GalleryCarousel />
      <HomeTeasers />
      <Footer />
    </div>
  );
};

export default Index;
