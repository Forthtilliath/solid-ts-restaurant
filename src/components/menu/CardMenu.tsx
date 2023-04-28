import { formatPrice } from "../../utils/methods/number";

type Props = {
  name: string;
  price: number;
  desc: string;
};

export function CardMenu(props: Props) {
  return (
    <div class="grid gap-1 grid-cols-[1fr_100px] mb-4">
      <div class="text-xl font-bold">{props.name}</div>
      <div class="text-xl text-right">{formatPrice(props.price)}</div>
      <div class="">{props.desc}</div>
    </div>
  );
}
