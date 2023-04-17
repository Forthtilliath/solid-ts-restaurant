import logo from '../assets/logo.webp';

export function Header() {
    return <div class="h-14 fixed w-full z-10 bg-black bg-opacity-50 text-white flex items-center px-2">
        <div>
            <img src={logo} alt="logo" class="h-12" />
        </div>
    </div>
}