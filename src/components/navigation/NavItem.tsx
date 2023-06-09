import { Accessor, JSX, mergeProps } from "solid-js";

type Props = {
  current: Accessor<string | undefined>;
  id: string;
  children: JSX.Element;
  onClick?: () => void;
};

export function NavItem(props: Props) {
  const merged = mergeProps({ onClick: () => {} }, props);
  const active = () => merged.current() === merged.id;

  return (
    <li
      class="hover:text-yellow-300"
      classList={{
        "text-yellow-300 font-bold": active(),
      }}
    >
      <a
        classList={{
          "md:flame-under max-md:flame-around": active(),
        }}
        href={"#" + merged.id}
        onClick={merged.onClick}
      >
        {merged.children}
      </a>
    </li>
  );
}
