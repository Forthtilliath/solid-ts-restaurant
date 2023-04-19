import { JSX } from "solid-js/jsx-runtime";

type Props = {
  children: JSX.Element;
  class: string;
  id?: string;
  ref?:HTMLDivElement
};

export function Section(props: Props) {
  return (
    <section
      class="min-h-screen grid place-content-center"
      classList={{ [props.class]: true }}
      id={props.id}
      ref={props.ref}
    >
      {props.children}
    </section>
  );
}
