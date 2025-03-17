import Category from "@/components/modules/home/category";
import FeaturedProducts from "@/components/modules/home/featureProduct";
import HeroSection from "@/components/modules/home/heroSection";

const HomePage = () => {
  // const user = useUser();
  // console.log(user);
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
