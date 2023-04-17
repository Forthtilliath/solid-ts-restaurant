import { JSX } from "solid-js/jsx-runtime";

type Props = {
  children: JSX.Element;
  classes: string;
};

export function Hero(props: Props) {
  return (
    <div class="min-h-screen grid place-content-center" classList={{ [props.classes]: true }}>
      {props.children}
    </div>
  );
}
