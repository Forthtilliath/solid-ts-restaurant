import { Footer, Header } from "./parts";
import { About, Contact, Gallery, Hero, Menu, Where } from "./pages";

export default function App() {
  return (
    <div class="w-full flex flex-col">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Menu />
      <Where />
      <Contact />
      <Footer />
    </div>
  );
}
