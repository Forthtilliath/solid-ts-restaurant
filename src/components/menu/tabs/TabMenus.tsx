import { For } from "solid-js";
import { CardMenu } from "../cards/CardMenu";
import { CardPrices } from "../cards/CardPrices";
import { menus_1997, menus_frites } from "../data/menusData";

export function TabMenus() {
  return (
    <div>
      <h3 class="h3 w-fit mx-auto py-4 text-ori-black">Menus Frites</h3>
      <For each={menus_frites}>{(menu) => <CardMenu {...menu} />}</For>

      <h3 class="h3 w-fit mx-auto py-4 text-ori-black">Menus 1997</h3>
      <CardPrices {...menus_1997} />
    </div>
  );
}
