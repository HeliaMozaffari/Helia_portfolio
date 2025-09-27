import { NavLink } from 'react-router-dom'
import logo from '../assets/logomain.png'

const linkBase = "px-3 py-2 rounded-full transition font-medium"
const linkInactive = "text-purple-800/80 hover:bg-purple-100"
const linkActive = "bg-purple-600 text-white shadow-brand"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-4 flex items-center justify-between glass rounded-2xl shadow-md px-4 py-2">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Helia & Lucky logo" className="h-9 w-9"/>
            <span className="font-bold text-lg text-purple-700">Helia Mozaffari</span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive?linkActive:linkInactive}`}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive?linkActive:linkInactive}`}>About</NavLink>
            <NavLink to="/projects" className={({isActive}) => `${linkBase} ${isActive?linkActive:linkInactive}`}>Projects</NavLink>
            <NavLink to="/services" className={({isActive}) => `${linkBase} ${isActive?linkActive:linkInactive}`}>Services</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive?linkActive:linkInactive}`}>Contact</NavLink>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer px-3 py-2 rounded-xl bg-purple-600 text-white">Menu</summary>
              <div className="absolute right-0 mt-2 w-48 glass rounded-xl shadow-md p-2 flex flex-col">
                <NavLink to="/" end className="px-3 py-2 rounded-lg hover:bg-purple-100">Home</NavLink>
                <NavLink to="/about" className="px-3 py-2 rounded-lg hover:bg-purple-100">About</NavLink>
                <NavLink to="/projects" className="px-3 py-2 rounded-lg hover:bg-purple-100">Projects</NavLink>
                <NavLink to="/services" className="px-3 py-2 rounded-lg hover:bg-purple-100">Services</NavLink>
                <NavLink to="/contact" className="px-3 py-2 rounded-lg hover:bg-purple-100">Contact</NavLink>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  )
}
