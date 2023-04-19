import { Section } from "../parts";

export function Where(props: { ref: HTMLDivElement }) {
  return (
    <Section class="bg-purple-300" id="where" ref={props.ref}>
      Where
    </Section>
  );
}
