import { For } from "solid-js";
import { chickens, othersMeats } from "../data/menusData";
import { CardMenu } from "../cards/CardMenu";

export function TabChickens() {
  return (
    <div role="tabpanel">
      <h3 class="h3 w-fit mx-auto py-4 text-ori-black">Nos Poulets</h3>
      <For each={chickens}>{(acc) => <CardMenu {...acc} />}</For>

      <h3 class="h3 w-fit mx-auto py-4 text-ori-black">Autres Rôtisseries</h3>
      <For each={othersMeats}>{(acc) => <CardMenu {...acc} />}</For>
    </div>
  );
}
