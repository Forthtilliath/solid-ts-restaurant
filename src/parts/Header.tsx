import { Accessor, Show, createEffect, createSignal } from "solid-js";
import logo from "../assets/logo.webp";
// import { createScrollDirection } from "../utils/hooks/createScrollDirection";
import { createMediaQuery } from "../utils/hooks/createMediaQuery";
import { Nav, NavMobile } from "../components/navigation";

type Props = {
  currentSectionId: Accessor<string | undefined>;
};

export function Header(props: Props) {
  // const [, goingDown] = createScrollDirection();
  const [menuOpen, setMenuOpen] = createSignal(false);
  const isMobile = createMediaQuery("(max-width: 768px)");

  createEffect(() => {
    if (isMobile()) setMenuOpen(false);
  });

  return (
    <div
      class="h-14 fixed w-full z-10 bg-black bg-opacity-50 text-white flex items-center px-4 md:transition-transform justify-between shadow shadow-yellow-400"
      // classList={{ "-translate-y-full": goingDown() }}
    >
      <div>
        <img src={logo} alt="logo" class="h-12" />
      </div>

      <button
        class="md:hidden relative w-8 h-6 z-20"
        classList={{ open: menuOpen() }}
        type="button"
        aria-label={menuOpen() ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setMenuOpen(!menuOpen())}
      >
        <span
          class="absolute block w-full h-0.5 bg-white rounded-sm transition-all duration-300"
          classList={{
            "rotate-45 top-2.5": menuOpen(),
            "top-0": !menuOpen(),
          }}
        />
        <span
          class="absolute block w-full h-0.5 bg-white rounded-sm transition-all duration-300 top-2.5"
          classList={{ "opacity-0 translate-x-3": menuOpen() }}
        />
        <span
          class="absolute block w-full h-0.5 bg-white rounded-sm transition-all duration-300"
          classList={{
            "-rotate-45 top-2.5": menuOpen(),
            "top-5": !menuOpen(),
          }}
        />
      </button>

      {/* Menus séparés pour palier à l'animation de fermeture lors d'un resize */}
      <Show
        when={isMobile()}
        fallback={<Nav current={props.currentSectionId} />}
      >
        <NavMobile
          current={props.currentSectionId}
          open={menuOpen}
          close={() => setMenuOpen(false)}
        />
      </Show>
    </div>
  );
}
