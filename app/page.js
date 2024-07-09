import Footer from "./components/Footer";
import Header from "./components/Header";
import BrowseReviews from "./components/home/BrowseReviews";
import ComponiesLogo from "./components/home/ComponiesLogo";
import CustomShopNow from "./components/home/CustomShopNow";
import Faq from "./components/home/Faq";
import FollowUs from "./components/home/FollowUs";
import Hero from "./components/home/hero";
import Products from "./components/home/Products";
import Reviews from "./components/home/Reviews";
import ShopBestSellers from "./components/home/ShopBestSellers";
import ShopNow from "./components/home/ShopNow";
import SurpriseOffer from "./components/SurpriseOffer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ComponiesLogo />
      <Products />
      <CustomShopNow />
      <BrowseReviews />
      <ShopBestSellers />
      <ShopNow />
      <Faq />
      <Reviews />
      <FollowUs />
      <Footer />
      <SurpriseOffer />
    </>
  );
}
