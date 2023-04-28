import { For } from "solid-js";
import { formules, sandwiches } from "../data/menusData";
import { CardMenu } from "../cards/CardMenu";

export function TabSandwiches() {
  return (
    <div role="tabpanel">
      <h3 class="h3 w-fit mx-auto py-4 text-ori-black">Sandwiches</h3>
      <For each={sandwiches}>{(sand) => <CardMenu {...sand} />}</For>

      <h3 class="h3 w-fit mx-auto py-4 text-ori-black">Formules</h3>
      <For each={formules}>{(form) => <CardMenu {...form} addPrice />}</For>
    </div>
  );
}
