import { For } from "solid-js";
import { formatPrice } from "../../../utils/methods/number";

type Props = {
  desc: string;
  parts: {
    nb: number;
    price: number;
  }[];
};

export function CardPrices(props: Props) {
  return (
    <div class="mb-4">
      <div class="text-xl col-span-3">{props.desc}</div>

      <div class="grid md:grid-cols-3 gap-5">
        <For each={props.parts}>
          {(part) => (
            <div class="flex">
              <div class="text-xl font-bold">{part.nb} Pers.</div>
              <div class="flex-grow border-b-2 border-dotted border-ori-black mx-1 mb-[6px]" />
              <div class="text-xl text-right">{formatPrice(part.price)}</div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
