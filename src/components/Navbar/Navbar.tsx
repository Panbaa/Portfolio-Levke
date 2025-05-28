import './Navbar.css'
import { NavbarElement } from '../../lib/types'
import Desktop from "./Desktop/Desktop"
import Phone from "./Phone/Phone"

export interface INavbarProps {
  elements: NavbarElement[];
}

const Navbar = ({ elements }: INavbarProps) => {
  return (
    <div id="navbar-wrapper" className="w-full h-16 border-b border-primary-200/10 bg-neutral-50/90 backdrop-blur-md">
      <Desktop elements={elements}/>
      <Phone elements={elements}/>
    </div>
  )
}

export default Navbar

