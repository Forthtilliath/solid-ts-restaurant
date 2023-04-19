import { Section } from "../parts";

export function Menu(props: { ref: HTMLDivElement }) {
  return (
    <Section class="bg-green-300" id="menu" ref={props.ref}>
      Menu
    </Section>
  );
}
