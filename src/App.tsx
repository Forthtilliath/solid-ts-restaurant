import { Footer, Header } from "./parts";
import { About, Contact, Gallery, Hero, Menu, Where } from "./pages";
import { createSectionObserver } from "./utils/hooks/createSectionObserver.js";

export default function App() {
  const [sectionsRef, sectionId] = createSectionObserver();

  return (
    <div class="w-full flex flex-col">
      <Header currentSectionId={sectionId} />

      {[Hero, About, Gallery, Menu, Where, Contact].map((Section, i) => (
        <Section ref={sectionsRef![i]} />
      ))}

      <Footer />
    </div>
  );
}
