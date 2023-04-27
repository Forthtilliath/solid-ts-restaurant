import {
  BsMailbox2,
  FaSolidHouseChimney,
  FaSolidPhoneFlip,
} from "../components/contact/ContactIcons";

type Props = {
  ref: HTMLDivElement;
};

export function Contact(props: Props) {
  return (
    <section
      class="min-h-[calc(100vh_-_4rem)] bg-gradient-radial from-teal-300 to-ori-black to-60% pt-16"
      id="contact"
      ref={props.ref}
    >
      <div class="w-full h-[calc(100vh_-_4rem)] flex justify-center items-center flex-col">
        <h2 class="h2 max-w-4xl m-2">Comment nous contacter</h2>
        <div class="grid mt-8">
          <div class="flex">
            <FaSolidPhoneFlip size={"1rem"} />
            <span>
              <a href="tel:+33241879700">02.41.87.97.00</a>
            </span>
          </div>
          <div class="flex">
            <BsMailbox2 size={"1rem"} />
            <span>
              <a href="mailto:saveurrotie@gmail.com">saveurrotie@gmail.com</a>
            </span>
          </div>
          <div class="flex">
            <FaSolidHouseChimney size={"1rem"} />
            <span>
              2 Pl. de la Visitation, Quartier Gare St Laud 49100 Angers, France
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
