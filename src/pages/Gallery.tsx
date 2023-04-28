import { For, createSignal } from "solid-js";
import { PrevButton, NextButton } from "../components/carousel";

const NB_IMAGES = 11;
const PATH = "/assets/images/";

type Props = {
  ref: HTMLDivElement;
};

export function Gallery(props: Props) {
  const [current, setCurrent] = createSignal(0);

  return (
    <section
      class="min-h-screen bg-ori-black relative overflow-hidden"
      id="gallery"
      ref={props.ref}
    >
      <div class="flex pt-16 pb-4 px-4 min-h-full">
        <For each={[...Array(NB_IMAGES)]}>
          {(_, i) => (
            <div
              // class="duration-700 ease-in-out w-full h-full"
              class="duration-700 ease-in-out w-full h-[calc(100vh_-_5rem)]"
              classList={{
                "-translate-x-full hidden": i() !== current(),
                "translate-x-0": i() === current(),
              }}
            >
              <img
                src={`${PATH}${i()}.webp`}
                class="absolute block max-w-full h-auto max-h-[calc(100vh_-_5rem)] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Photo du restaurant"
              />
            </div>
          )}
        </For>
      </div>
      <div class="absolute inset-0 flex items-center justify-between p-4">
        <PrevButton
          onClick={() => setCurrent((current() - 1 + NB_IMAGES) % NB_IMAGES)}
        />
        <NextButton onClick={() => setCurrent((current() + 1) % NB_IMAGES)} />
      </div>
    </section>
  );
}
