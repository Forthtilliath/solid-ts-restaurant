import { Section } from "../parts";

export function Contact(props: { ref: HTMLDivElement }) {
  return (
    <Section class="bg-teal-300" id="contact" ref={props.ref}>
      Contact
    </Section>
  );
}
