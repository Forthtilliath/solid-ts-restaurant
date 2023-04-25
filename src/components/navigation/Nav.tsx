import { Accessor } from "solid-js";
import { NavItems } from "./NavItems.jsx";

type Props = {
  current: Accessor<string | undefined>;
};

/** Navigation for tablet & desktop */
export function Nav(props: Props) {
  return (
    <menu class="flex gap-5">
      <NavItems current={props.current} />
    </menu>
  );
}
