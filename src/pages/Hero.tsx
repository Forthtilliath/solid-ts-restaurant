import { Section } from "../components";
import video from "../assets/hero.mp4";

export function Hero() {
  return (
    <Section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
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
        <h1 class="font-light text-6xl">L'Oriflamme</h1>
        <h3 class="font-light text-3xl">Bienvenue chez l'Oriflamme</h3>
      </div>
    </Section>
  );
}
