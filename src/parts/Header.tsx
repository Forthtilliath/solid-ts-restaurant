import { Accessor, createEffect, createSignal } from "solid-js";
import logo from "../assets/logo.webp";
import { createScrollDirection } from "../utils/hooks/createScrollDirection";
import { createMediaQuery } from "../utils/hooks/createMediaQuery";

const INDEX_MENU = {
  Home: 0,
  About: 1,
  Gallery: 2,
  Menu: 3,
  Where: 4,
  Contact: 5,
};

type Props = {
  // currentSectionId: Accessor<number | undefined>;
  currentSectionId: Accessor<string | undefined>;
};

export function Header(props: Props) {
  const [, goingDown] = createScrollDirection();
  const [menuOpen, setMenuOpen] = createSignal(false);
  // const isMobile = createMediaQuery("(max-width: 768px)");

  createEffect(() => {
    console.log("Section active", props.currentSectionId());
  });

  return (
    <div
      class="h-14 fixed w-full z-10 bg-black bg-opacity-50 text-white flex items-center px-4 transition-transform justify-between"
      classList={{ "-translate-y-full": goingDown() }}
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

      <menu
        class="flex gap-5 max-md:flex-col max-md:absolute max-md:w-full max-md:bg-black max-md:bg-opacity-50 max-md:left-0 max-md:top-14 max-md:text-2xl max-md:text-center max-md:pb-5 transition-all duration-500"
        classList={{
          "max-md:opacity-0 max-md:-translate-y-[200%]": !menuOpen(),
        }}
      >
        <li classList={{ active: props.currentSectionId() === "hero" }}>
          <a href="#hero">Accueil</a>
        </li>
        <li classList={{ active: props.currentSectionId() === "about" }}>
          <a href="#about">A propos</a>
        </li>
        <li classList={{ active: props.currentSectionId() === "gallery" }}>
          <a href="#gallery">Galerie</a>
        </li>
        <li classList={{ active: props.currentSectionId() === "menu" }}>
          <a href="#menu">Menu</a>
        </li>
        <li classList={{ active: props.currentSectionId() === "where" }}>
          <a href="#where">Où nous trouver ?</a>
        </li>
        <li classList={{ active: props.currentSectionId() === "contact" }}>
          <a href="#contact">Contact</a>
        </li>
      </menu>
      {/* <menu>
        <li>A propos de nous</li>
        <li>Galerie</li>
        <li>Notre menu</li>
        <li>Où nous trouver ?</li>
        <li>Nous contacter</li>
      </menu> */}
    </div>
  );
}
