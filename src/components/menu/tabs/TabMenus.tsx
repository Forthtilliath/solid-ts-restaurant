import { For } from "solid-js";
import { CardMenu } from "../CardMenu";
import { menus_frites } from "../data/menusData";

export function TabMenus() {
  return (
    <div>
      <For each={menus_frites}>{(menu) => <CardMenu {...menu} />}</For>
    </div>
  );
}
