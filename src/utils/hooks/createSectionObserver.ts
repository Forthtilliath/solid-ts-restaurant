import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { createSignal, onMount } from "solid-js";

export function createSectionObserver() {
  const [currentSectionId, setCurrentSectionId] = createSignal<string>("");
  const useVisibilityObserver = createVisibilityObserver(
    // TODO Fixer l'élément visible
    { threshold: 0.1 },
    (entry) => {
      if (entry.isIntersecting) {
        setCurrentSectionId(entry.target.id);
      }
      return entry.isIntersecting;
    }
  );
  let sectionsRef: HTMLDivElement[] = [];

  // Met en place l'observeur pour chaque section
  onMount(() => {
    sectionsRef.forEach(useVisibilityObserver);
  });

  return [sectionsRef, currentSectionId] as const;
}
