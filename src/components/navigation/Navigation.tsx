import { Accessor, mergeProps } from "solid-js";
import { NavItems } from "./NavItems.jsx";
import { createMediaQuery } from "../../utils/hooks/createMediaQuery.js";

type Props = {
  current: Accessor<string | undefined>;
  open?: Accessor<boolean>;
  close?: () => void;
};

export function Navigation(props: Props) {
  const merged = mergeProps({ open: () => false }, props);
  const isMobile = createMediaQuery("(max-width: 768px)");

  return (
    <menu
      class="flex"
      classList={{
        "gap-5": !isMobile(),
        "gap-3 py-2 flex-col absolute w-full bg-black/70 left-0 top-14 text-2xl text-center pb-5 transition-all duration-500 backdrop-blur":
          isMobile(),
        "opacity-0 -translate-y-[200%]": isMobile() && !merged.open(),
      }}
    >
      <NavItems current={props.current} onClick={props.close} />
    </menu>
  );
}
