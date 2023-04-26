import { Section } from "../parts";

type Props = {
  ref: HTMLDivElement;
};

export function Menu(props: Props) {
  return (
    <Section
      class="bg-gradient-radial from-yellow-300 to-ori-black to-60%"
      id="menu"
      ref={props.ref}
    >
    <div class="max-w-4xl m-2">
      <h2 class="h2">Nos menus</h2>
    </div>
      Menu
    </Section>
  );
}
