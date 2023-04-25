import { Section } from "../parts";

type Props = {
  ref: HTMLDivElement;
};

export function Gallery(props: Props) {
  return (
    <Section class="bg-red-300" id="gallery" ref={props.ref}>
      Gallery
    </Section>
  );
}
