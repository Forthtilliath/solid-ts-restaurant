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
    <div class="grid gap-x-5 grid-cols-3 mb-4">
      <div class="text-xl col-span-3">{props.desc}</div>
      <For each={props.parts}>
        {(part) => (
          <div class="grid grid-cols-[1fr_80px]">
            <div class="text-xl font-bold">{part.nb} Pers.</div>
            <div class="text-xl text-right">{formatPrice(part.price)}</div>
          </div>
        )}
      </For>
    </div>
  );
}
