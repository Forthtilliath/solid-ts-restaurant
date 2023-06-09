type Props = {
  ref: HTMLDivElement;
};

export function About(props: Props) {
  return (
    <section
      class="min-h-[calc(100vh_-_4rem)] bg-gradient-radial from-ori-green to-ori-black to-60% pt-16"
      id="about"
      ref={props.ref}
    >
      <div class="w-full min-h-[calc(100vh_-_4rem)] flex justify-center items-center flex-col">
        <h2 class="h2 max-w-4xl m-2">Rôtisserie Sandwichs Maison</h2>
        <div class="bg-black/70 p-6 rounded-lg shadow-hero shadow-yellow-300 max-w-4xl m-4">
          <p class="text-yellow-300 text-xl font-courgette leading-8 indent-6 md:text-justify">
            Cette rôtisserie traditionnelle est née ici, place de la Visitation
            (gare). Echoppe toujours digne d'un roman de Rabelais où les poulets
            fermiers ou Label Rouge voisinent avec pintades, rôti de porc,
            jambonneau ou travers de porc et rissolent de concert. Dans des
            faitouts les pommes de terre déclinées en plusieurs préparations,
            campagnarde ou landaise, mijotent à côté des champignons. Les
            saucisses de Toulouse, de Montbéliard ou de Morteau attendent leur
            tour en compagnie des andouillettes.
          </p>
          <p class="text-yellow-300 text-xl font-courgette leading-8 indent-6 md:text-justify mt-4">
            Tout cela taquine agréablement les narines et fleure bon la France.
            Les sauces variées de fabrication maison relèvent à merveille toutes
            ces viandes cuites comme on les aime. Le midi, on se régale de gros
            sandwichs préparés à la demande, pas de jambon-beurre ici mais par
            exemple à la saucisse de légumes, crème ciboulette et champignons
            (humm !). Possibilité de commander par téléphone, à emporter à
            l'heure de votre choix.
          </p>
        </div>
      </div>
    </section>
  );
}
