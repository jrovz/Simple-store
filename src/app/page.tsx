
import { Description } from "../components/home/Description/Description";
import { Hero } from "../components/home/Hero/Hero";
import { MainProducts } from "../components/home/MainProducts/MainProducts";
import { Footer } from "../components/shared/Footer"

export default function Home() {
  return (
    <main>
      
      <Hero />
      
      <Description />
      
      <MainProducts />
      <Footer />
    </main>
  );
}
