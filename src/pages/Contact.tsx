import { FormContact } from "../components/contact/FormContact";
import { LinkCard } from "../components/contact/LinkCard";

type Props = {
  ref: HTMLDivElement;
};

export function Contact(props: Props) {
  return (
    <section
      class="min-h-screen bg-gradient-radial from-teal-300 to-ori-black to-50% pt-16"
      id="contact"
      ref={props.ref}
    >
      <div class="max-w-4xl w-full flex justify-center items-center flex-col mx-auto">
        <h2 class="h2 m-2">Comment nous contacter ?</h2>
        {/* Tel, mail & adresse */}
        <div class="grid sm:grid-rows-2 sm:grid-flow-col mt-8 gap-2">
          <LinkCard href="tel:+33241879700" type="phone">
            02.41.87.97.00
          </LinkCard>
          <LinkCard href="mailto:saveurrotie@gmail.com" type="mail">
            saveurrotie@gmail.com
          </LinkCard>
          <LinkCard
            href="https://www.google.com/maps/place/L'Oriflamme/@47.4669875,-0.5575424,17z/data=!4m6!3m5!1s0x480878bf5b09aee3:0xc4bacb9b5d817998!8m2!3d47.4668679!4d-0.556845!16s%2Fg%2F1td5qng0"
            type="adress"
            rowspan
          >
            <span>2 place de la Visitation</span>
            <br />
            <span>Quartier Gare St Laud</span>
            <br />
            <span>49100 Angers, France</span>
          </LinkCard>
        </div>

        {/* Formulaire */}
        <h3 class="h3 m-2 mt-10">Envoyez-nous un message</h3>
        <FormContact />
      </div>
    </section>
  );
}
