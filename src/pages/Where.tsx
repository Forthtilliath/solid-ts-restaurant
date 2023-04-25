import { Section } from "../parts";

type Props = {
  ref: HTMLDivElement;
};

export function Where(props: Props) {
  return (
    <Section class="bg-purple-300" id="where" ref={props.ref}>
      Where
    </Section>
  );
}
