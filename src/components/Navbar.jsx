import { useState } from "react"
import logo from "../assets/logo.webp"
import { RiMenu3Line } from "@remixicon/react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <nav className="border-b-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
            <div className="pl-2">
                <a href="#">
                    <img src={logo} width={150} height={15} alt="VastuSpaze" />
                </a>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl pr-2 
                focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
                    {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar