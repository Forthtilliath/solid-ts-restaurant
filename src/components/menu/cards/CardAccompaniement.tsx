import { For } from "solid-js";
import { formatPrice } from "../../../utils/methods/number";

type Props = {
  name: string;
  type: {
    name: string;
    price: number;
  }[];
};

export function CardAccompaniement(props: Props) {
  return (
    <div class="mb-4">
      <h3 class="h3 w-fit mx-auto py-4 text-ori-black">{props.name}</h3>

      <div class="max-w-[500px] mx-auto">
        <For each={props.type}>
          {(part) => (
            <div class="flex">
              <div class="text-xl">{part.name}</div>
              <div class="flex-grow border-b-2 border-dotted border-ori-black mx-1 mb-[6px]" />
              <div class="text-xl text-right">{formatPrice(part.price)}</div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
