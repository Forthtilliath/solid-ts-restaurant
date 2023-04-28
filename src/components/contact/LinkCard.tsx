import { Match, ParentProps, Show, Switch } from "solid-js";
import {
  BsMailbox2,
  FaSolidHouseChimney,
  FaSolidPhoneFlip,
} from "./ContactIcons";

type Props = {
  type: "phone" | "mail" | "adress";
  href: string;
  rowspan?: boolean;
};

export function LinkCard(props: ParentProps<Props>) {
  return (
    <div
      class="flex gap-3 items-center p-3 rounded bg-white"
      classList={{
        "row-span-2": props.rowspan,
      }}
    >
      <Switch>
        <Match when={props.type === "phone"}>
          <FaSolidPhoneFlip size={"1.2rem"} />
        </Match>
        <Match when={props.type === "mail"}>
          <BsMailbox2 size={"1.2rem"} />
        </Match>
        <Match when={props.type === "adress"}>
          <FaSolidHouseChimney size={"1.2rem"} />
        </Match>
      </Switch>

      <Show
        when={props.type === "adress"}
        fallback={<a href={props.href}>{props.children}</a>}
      >
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      </Show>
    </div>
  );
}
