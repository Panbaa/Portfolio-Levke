import { Home, FolderOpen, User, Phone } from "lucide-react"
import { NavbarElement } from "../../../lib/types"

const NavbarElements: NavbarElement[] = [    {
        title: "Startseite",
        path: "/home",
        icon: <Home size={16} />,
        key: "1"
    },
    {
        title: "Projekte",
        path: "/projekte",
        icon: <FolderOpen size={16} />,
        key: "2"
    },
    {
        title: "Über mich",
        path: "/ueber-mich",
        icon: <User size={16} />,
        key: "3" 
    },
    {
        title: "Kontakt",
        path: "/kontakt",
        icon: <Phone size={16} />,
        key: "4"
    },
]
  
  export default NavbarElements
