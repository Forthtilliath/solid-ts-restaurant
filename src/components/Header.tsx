import logo from "../assets/logo.webp";
import { createScrollDirection } from "../utils/hooks/createScrollDirection";

export function Header() {
  const [, goingDown] = createScrollDirection();

  return (
    <div
      class="h-14 fixed w-full z-10 bg-black bg-opacity-50 text-white flex items-center px-4 transition-transform justify-between"
      classList={{ "-translate-y-full": goingDown() }}
    >
      <div>
        <img src={logo} alt="logo" class="h-12" />
      </div>
      <menu class="flex gap-4">
        <li><a href="#about">A propos</a></li>
        <li><a href="#gallery">Galerie</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#where">Où nous trouver ?</a></li>
        <li><a href="#contact">Contact</a></li>
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
