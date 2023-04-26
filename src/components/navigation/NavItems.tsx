import { Accessor, For, createEffect, mergeProps } from "solid-js";
import { NavItem } from "./NavItem.jsx";

type Props = {
  current: Accessor<string | undefined>;
  onClick?: () => void;
};

const nav = [
  {
    id: "hero",
    label: "Accueil",
  },
  {
    id: "about",
    label: "A propos",
  },
  {
    id: "gallery",
    label: "Galerie",
  },
  {
    id: "menu",
    label: "Menu",
  },
  {
    id: "where",
    label: "Où nous trouver ?",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export function NavItems(props: Props) {
  createEffect(()=> console.log(props.current()))
  return (
    <For each={nav}>
      {(navItem) => (
        <NavItem
          current={props.current}
          id={navItem.id}
          onClick={props.onClick}
        >
          {navItem.label}
        </NavItem>
      )}
    </For>
  );
}
