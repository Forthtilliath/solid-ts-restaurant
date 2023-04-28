import { For } from "solid-js";
import { accompaniement } from "../data/menusData";
import { CardAccompaniement } from "../cards/CardAccompaniement";

export function TabAccompaniement() {
  return (
    <div>
      <For each={accompaniement}>
        {(acc) => <CardAccompaniement {...acc} />}
      </For>
    </div>
  );
}
