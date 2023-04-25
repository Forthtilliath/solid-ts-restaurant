import { Section } from "../parts";

type Props = {
  ref: HTMLDivElement;
};

export function About(props: Props) {
  return (
    <Section class="bg-[#0e0b0d]" id="about" ref={props.ref}>
      {/* <Section class="bg-blue-300" id="about"> */}

      <div class="absolute w-full h-screen flex justify-center items-center flex-col">
        <div class="bg-black/50 p-3 rounded-lg text-yellow-300 font-courgette shadow-hero shadow-yellow-300 max-w-4xl m-2">
          <h2>Rôtisserie Sandwichs Maison</h2>
          <p>
            Cette rôtisserie traditionnelle, née ici place de la Visitation
            (gare). Echoppe toujours digne d'un roman de Rabelais où les poulets
            fermiers ou Label Rouge voisinent avec pintades, rôti de porc,
            jambonneau ou travers de porc et rissolent de concert. Dans des
            faitouts les pommes de terre déclinées en plusieurs préparations,
            campagnarde ou landaise, mijotent à côté des champignons. Les
            saucisses de Toulouse, de Montbéliard ou de Morteau attendent leur
            tour en compagnie des andouillettes. Tout cela taquine agréablement
            les narines et fleur bon la France Les sauces variées de fabrication
            maison relèvent à merveille toutes ces viandes cuites comme on les
            aime. Le midi on se régale de gros sandwichs préparés à la demande,
            pas de jambon-beurre ici mais par exemple à la saucisse de légumes,
            crème ciboulette et champignons (humm !). Possibilité de commander
            par téléphone, à emporter à l'heure de votre choix.
          </p>
        </div>
      </div>
    </Section>
  );
}
