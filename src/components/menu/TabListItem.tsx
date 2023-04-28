import { Accessor, ParentProps, Setter } from "solid-js";

type Props = {
  id: number;
  openTab: Accessor<number>;
  setOpenTab: Setter<number>;
  label: string;
};

export function TabListItem(props: ParentProps<Props>) {
  return (
    <li class="-mb-px flex-auto text-center">
      <button
        type="button"
        class={
          "text-xs font-bold uppercase p-3 shadow-lg rounded leading-normal w-full flex items-center justify-center gap-2"
        }
        classList={{
          "text-ori-black bg-ori-orange": props.openTab() === props.id,
          "text-ori-black bg-white": props.openTab() !== props.id,
        }}
        onClick={(e) => {
          e.preventDefault();
          props.setOpenTab(props.id);
        }}
        data-toggle="tab"
        role="tablist"
        aria-label={props.label}
      >
        {props.children}
      </button>
    </li>
  );
}
