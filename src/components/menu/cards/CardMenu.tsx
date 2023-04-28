import { Show } from "solid-js";
import { formatPrice } from "../../../utils/methods/number";

type Props = {
  name: string;
  price: number;
  desc?: string;
  addPrice?: boolean;
};

export function CardMenu(props: Props) {
  return (
    <div class="mb-4">
      <div class="flex">
        <div class="text-xl font-bold">{props.name}</div>
        <div class="flex-grow border-b-2 border-dotted border-ori-black mx-1 mb-[6px]" />
        <div class="text-xl text-right">
          <Show when={props.addPrice}>
            +
          </Show>
          {formatPrice(props.price)}
        </div>
      </div>
      <div>{props.desc}</div>
    </div>
  );
}
