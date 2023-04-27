import { Tabulations } from "../components/menu";

type Props = {
  ref: HTMLDivElement;
};

export function Menu(props: Props) {
  return (
    <section
      class="min-h-[calc(100vh_-_4rem)] bg-gradient-radial from-yellow-300 to-ori-black to-60% pt-16"
      id="menu"
      ref={props.ref}
    >
      <div class="w-full min-h-full flex justify-center items-center flex-col">
        <h2 class="h2 max-w-4xl m-2">Nos menus</h2>
        <Tabulations />
      </div>
    </section>
  );
}
