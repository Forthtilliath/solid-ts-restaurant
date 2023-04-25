import { Accessor } from "solid-js";
import { NavItems } from "./NavItems.jsx";

type Props = {
  current: Accessor<string | undefined>;
  open: Accessor<boolean>;
  close: () => void;
};

export function NavMobile(props: Props) {
  return (
    <menu
      class="flex gap-3 py-2 flex-col absolute w-full bg-black bg-opacity-50 left-0 top-14 text-2xl text-center pb-5 transition-all duration-500"
      classList={{
        "opacity-0 -translate-y-[200%]": !props.open(),
      }}
    >
      <NavItems current={props.current} onClick={props.close} />
    </menu>
  );
}
