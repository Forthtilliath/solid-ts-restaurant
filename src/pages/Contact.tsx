import { Section } from "../parts";

type Props = {
  ref: HTMLDivElement;
};

export function Contact(props: Props) {
  return (
    <Section class="bg-teal-300" id="contact" ref={props.ref}>
      Contact
    </Section>
  );
}
