import { Footer, Header } from "./parts";
import { About, Contact, Gallery, Hero, Menu, Where } from "./pages";
import { createSignal, onCleanup, onMount } from "solid-js";
import { createScrollDirection } from "./utils/hooks/createScrollDirection";

export default function App() {
  let sectionsRef: HTMLDivElement[] = [];
  const [currentSection, setCurrentSection] = createSignal("");
  const [scrollDirection] = createScrollDirection();

  onMount(() => {
    const options: IntersectionObserverInit = {
      rootMargin: "0px",
      threshold: 0.3,
    };

    /**
     * si entry.intersectionRatio > .3
     */

    const onIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      console.log("========");
      entries.forEach((entry) => {
        console.log(
          entry.target.getAttribute("id"),
          entry.isIntersecting,
          entry.intersectionRatio
        );
      });
      const a = entries.filter((entry) => entry.intersectionRatio > 0.3);
      console.log(a);
    };

    const observer = new IntersectionObserver(onIntersect, options);

    sectionsRef.forEach((section) => {
      observer.observe(section);
    });

    onCleanup(() => {
      sectionsRef.forEach((section) => {
        observer.unobserve(section);
      });
    });
  });

  return (
    <div class="w-full flex flex-col">
      <Header />

      {[Hero, About, Gallery, Menu, Where, Contact].map((Section, i) => (
        <Section ref={sectionsRef![i]} />
      ))}
      {/* <Hero />
      <About />
      <Gallery />
      <Menu />
      <Where />
      <Contact /> */}

      <Footer />
    </div>
  );
}
