import { createSignal, onCleanup } from "solid-js";

type Direction = "up" | "down";

export function createScrollDirection() {
  const [scrollDirection, setScrollDirection] = createSignal<Direction>("up");
  const [lastScrollY, setLastScrollY] = createSignal<number>(window.scrollY);

  const updateScrollDirection = () => {
    const scrollY = window.scrollY;
    const direction = scrollY > lastScrollY() ? "down" : "up";
    if (
      direction !== scrollDirection() &&
      Math.abs(scrollY - lastScrollY()) > 5
    ) {
      setScrollDirection(direction);
    }
    setLastScrollY(scrollY > 0 ? scrollY : 0);
  };

  window.addEventListener("scroll", updateScrollDirection);

  onCleanup(() => {
    window.removeEventListener("scroll", updateScrollDirection);
  });

  const goingDown = () => scrollDirection() === "down";

  return [scrollDirection, goingDown] as const;
}
