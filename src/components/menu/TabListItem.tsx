import { Accessor, ParentProps, Setter } from "solid-js";

type Props = {
  id: number;
  openTab: Accessor<number>;
  setOpenTab: Setter<number>;
};

export function TabListItem(props: ParentProps<Props>) {
  return (
    <li class="-mb-px flex-auto text-center">
      <button
        class={
          "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded leading-normal w-full flex items-center justify-center gap-2"
        }
        classList={{
          "text-white bg-yellow-600": props.openTab() === props.id,
          "text-yellow-600 bg-white": props.openTab() !== props.id,
        }}
        onClick={(e) => {
          e.preventDefault();
          props.setOpenTab(props.id);
        }}
        data-toggle="tab"
        role="tablist"
      >
        {props.children}
      </button>
    </li>
  );
}
