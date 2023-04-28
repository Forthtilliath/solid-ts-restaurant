import { For } from "solid-js";
import { pique_nique } from "../data/menusData";
import { CardMenu } from "../cards/CardMenu";

export function TabBasket() {
  return (
    <div>
    <h3 class="h3 w-fit mx-auto py-4 text-ori-black">Panier pique-nique</h3>
    <For each={pique_nique}>{(menu) => <CardMenu {...menu} />}</For>
    </div>
  );
}
