import { Section } from "../parts";

export function Gallery(props: { ref: HTMLDivElement }) {
  return (
    <Section class="bg-red-300" id="gallery" ref={props.ref}>
      Gallery
    </Section>
  );
}
