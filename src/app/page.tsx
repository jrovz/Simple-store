
import { Description } from "../components/home/Description/Description";
import { Hero } from "../components/home/Hero/Hero";
import { MainProducts } from "../components/home/MainProducts/MainProducts";
import { Footer } from "../components/shared/Footer";
import { Gallery } from "app/components/home/Gallery/Gallery";

export default function Home() {
  return (
    <main>
      
      <MainProducts />
      
      <Description />
      
      
      <Gallery />
      
      <Footer />

      
    </main>
  );
}
