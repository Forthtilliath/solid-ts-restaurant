import { Section } from "../components";
import video from "../assets/hero.mp4";
import { createTimeBetween } from "../utils/hooks/createTimeBetween";
import { Show } from "solid-js";
import { formatSecondsToFullTime } from "../utils/methods/date";

export function Hero() {
  const [isOpen, openIn] = createTimeBetween("10:30:00", "21:00:00");

  return (
    <Section
      class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3"
      id="hero"
    >
      <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          class="min-w-full min-h-full absolute object-cover"
          src={video}
          autoplay
          muted
          loop
        />
      </div>
      <div class="absolute w-full h-screen flex justify-center items-center flex-col">
        <div class="bg-black/50 p-3 rounded-lg text-yellow-300 font-courgette">
          <h1 class="text-8xl">L'Oriflamme</h1>
          <h3 class="text-6xl">Bienvenue chez l'Oriflamme</h3>
          <Show when={isOpen()}>
            <p class="text-2xl">Nous sommes ouvert jusqu'à 21h !</p>
          </Show>
          <Show when={isOpen() === false}>
            <p class="text-2xl">Nous ouvrons dans {formatSecondsToFullTime(openIn() ?? 0)}</p>
          </Show>
        </div>
      </div>
    </Section>
  );
}
