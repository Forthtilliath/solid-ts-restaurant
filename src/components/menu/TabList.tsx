import { Accessor, For, Setter } from "solid-js";
import { TabListItem } from "./TabListItem";
import { TABS } from "./data/tabsData";

type Props = {
  openTab: Accessor<number>;
  setOpenTab: Setter<number>;
};

export function TabList(props: Props) {
  return (
    <ul
      class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-2"
      role="tablist"
    >
      <For each={TABS}>
        {(tab) => (
          <TabListItem
            id={tab.id}
            openTab={props.openTab}
            setOpenTab={props.setOpenTab}
          >
            {tab.icon({ size: "1rem" })} {tab.label}
          </TabListItem>
        )}
      </For>
    </ul>
  );
}
