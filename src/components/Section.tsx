import { JSX } from "solid-js/jsx-runtime";

type Props = {
  children: JSX.Element;
  class: string;
};

export function Section(props: Props) {
  return (
    <div class="min-h-screen grid place-content-center" classList={{ [props.class]: true }}>
      {props.children}
    </div>
  );
}
