import { Footer, Header } from "./parts";
import { About, Contact, Gallery, Hero, Menu, Where } from "./pages";
import {
  Accessor,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import { createScrollDirection } from "./utils/hooks/createScrollDirection";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";

export default function App() {
  const [visible, setVisible] = createSignal<Accessor<boolean>[]>([]);
  const [currentSectionId, setCurrentSectionId] = createSignal<string>("hero");
  const useVisibilityObserver = createVisibilityObserver(
    { threshold: 0.5 },
    (entry) => {
      console.log("entry", entry.target.id, entry.intersectionRatio);
      if (entry.isIntersecting) {
        setCurrentSectionId(entry.target.id);
      }
      return entry.isIntersecting;
    }
  );
  let sectionsRef: HTMLDivElement[] = [];

  // Met en place l'observeur pour chaque section
  onMount(() => {
    setVisible(sectionsRef.map(useVisibilityObserver));
  });

  // const currentSectionId = () =>
  //   visible()
  //     .map((v, i) => (v() ? i : -1))
  //     .filter((n) => ~n)
  //     .at(0);

  createEffect(() => {
    console.log(visible().map((v, i) => (v() ? i : -1)));
  });
  // createEffect(() => visible().map((v) => console.log(v())));

  return (
    <div class="w-full flex flex-col">
      <Header currentSectionId={currentSectionId} />

      {[Hero, About, Gallery, Menu, Where, Contact].map((Section, i) => (
        <Section ref={sectionsRef![i]} visible={visible()[i]} />
      ))}

      <Footer />
    </div>
  );
}
