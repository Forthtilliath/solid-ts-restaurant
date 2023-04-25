import { Section } from "../parts";

type Props = {
  ref: HTMLDivElement;
};

export function Menu(props: Props) {
  return (
    <Section class="bg-green-300" id="menu" ref={props.ref}>
      Menu
    </Section>
  );
}
