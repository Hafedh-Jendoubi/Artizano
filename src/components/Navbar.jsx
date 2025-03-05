import { useState } from "react";
import { Link } from "react-router-dom"; 
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#AE6565] w-full flex flex-col md:flex-row md:justify-center items-center px-4 py-6">
           
            <button 
                className="md:hidden text-white text-2xl focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

       
            <ul className={`${
                menuOpen ? "block" : "hidden"
            } md:flex flex-wrap justify-center text-sm md:text-navSize font-bold text-white text-center space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0`}>
                <li><Link to="/" className="hover:text-gray-200 block px-3">ACCEUIL</Link></li>
                <li><a href="/Follow" className="hover:text-gray-200 block px-3">SUIVIE COMMANDE</a></li>
                <li><a href="/RecommandationLook" className="hover:text-gray-200 block px-3">RECOMMENDATION LOOK</a></li>
                <li><a href="#" className="hover:text-gray-200 block px-3">EVENEMENTS CULTURELS</a></li>
                <li><a href="/SponsorshipPage" className="hover:text-gray-200 block px-3">PODCAST</a></li>
                <li><a href="#" className="hover:text-gray-200 block px-3">CITATION</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;