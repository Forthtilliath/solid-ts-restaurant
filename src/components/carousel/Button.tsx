import { Show } from "solid-js";

type Props = {
  d: string;
  label?: string;
  onClick: () => void;
};

export function Button(props: Props) {
  return (
    <button
      type="button"
      class="z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
      onClick={props.onClick}
    >
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ori-green group-hover:bg-[hsl(163,100%,25%)] group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <svg
          aria-hidden="true"
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d={props.d}
          ></path>
        </svg>
        <Show when={props.label}>
          <span class="sr-only">{props.label}</span>
        </Show>
      </span>
    </button>
  );
}
