import { Match, Switch, createSignal } from "solid-js";
import { TabList } from "./TabList";
import { TabMenus } from "./tabs/TabMenus";
import { TabSandwiches } from "./tabs/TabSandwiches";
import { TabAccompaniement } from "./tabs/TabAccompaniement";
import { TabBasket } from "./tabs/TabBasket";
import { TabChickens } from "./tabs/TabChickens";

export function Tabulations() {
  const [openTab, setOpenTab] = createSignal(1);

  return (
    <div class="flex flex-wrap max-w-4xl m-2">
      <div class="w-full">
        <TabList openTab={openTab} setOpenTab={setOpenTab} />
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <Switch>
                <Match when={openTab() === 0}>
                  <TabMenus />
                </Match>
                <Match when={openTab() === 1}>
                  <TabSandwiches />
                </Match>
                <Match when={openTab() === 2}>
                  <TabAccompaniement />
                </Match>
                <Match when={openTab() === 3}>
                  <TabBasket />
                </Match>
                <Match when={openTab() === 4}>
                  <TabChickens />
                </Match>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
