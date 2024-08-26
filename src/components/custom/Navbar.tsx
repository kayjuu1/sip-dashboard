// import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation-menu.tsx";
import {Link} from "react-router-dom";
// import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import {IoCloseOutline, IoMenu} from "react-icons/io5";
// import {ThemeModeToggle} from "@/components/custom/theme-mode-toggle.tsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("");
    // const navigateTo = useNavigate();

    return (
        <nav className="p-4 fixed top-0 left-0 w-full z-10 bg-transparent backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link onClick={() => setActive("home")} to="/">
                    <img src="src/assets/logo.png" alt="Logo" className="h-10"/>
                </Link>
                <Avatar className="w-9">
                    <AvatarImage src="src/assets/logo.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>


                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ?
                                <IoCloseOutline className="h-6 w-6"/> :
                                <IoMenu className="h-6 w-6"/>
                        }
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
