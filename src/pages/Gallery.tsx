import { Accessor, createEffect } from "solid-js";
import { Section } from "../parts";

export function Gallery(props: {
  visible: Accessor<boolean>;
  ref: HTMLDivElement;
}) {
  createEffect(() => console.log("Gallery", props.visible()));
  return (
    <Section class="bg-red-300" id="gallery" ref={props.ref}>
      Gallery
    </Section>
  );
}
