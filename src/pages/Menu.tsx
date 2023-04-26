import { Tabulations } from "../components/menu";

type Props = {
  ref: HTMLDivElement;
};

export function Menu(props: Props) {
  return (
    <section
      class="min-h-screen bg-gradient-radial from-yellow-300 to-ori-black to-60% py-8"
      id="menu"
      ref={props.ref}
    >
      <div class="w-full min-h-screen flex justify-center items-center flex-col">
        <h2 class="h2 max-w-4xl m-2">Nos menus</h2>
        <Tabulations />
      </div>
    </section>
  );
}
