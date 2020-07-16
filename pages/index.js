import Hero from "../components/Hero";
import HomeProducts from "../components/Products/HomeProducts";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";

function Home() {
  return (
    <main>
      <Hero />
      <HomeProducts title="Featured Products" />
      <Testimonials />
      <Features />
    </main>
  );
}

export default Home;
