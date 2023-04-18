import { createEffect, createSignal, onCleanup } from "solid-js";

export function createMediaQuery(query: string) {
  const [matches, setMatches] = createSignal(false);
  const media = window.matchMedia(query);

  const listener = () => setMatches(media.matches);
  window.addEventListener("resize", listener);

  createEffect(() => {
    if (media.matches !== matches()) {
      setMatches(media.matches);
    }
  });

  onCleanup(() => window.removeEventListener("resize", listener));

  return matches;
}
