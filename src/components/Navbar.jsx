function Navbar() {
    return(
        <nav className="h-[87px] bg-[#AE6565] w-full left-0 flex justify-center items-center">
            <ul className="flex text-navSize font-bold space-x-12 text-white">
                <li><a href="#" className="hover:text-gray-200">ACCEUIL</a></li>
                <li><a href="#" className="hover:text-gray-200">SUIVIE COMMANDE</a></li>
                <li><a href="#" className="hover:text-gray-200">RECOMMENDATION LOOK</a></li>
                <li><a href="#" className="hover:text-gray-200">EVENEMENTS CULTURELS</a></li>
                <li><a href="#" className="hover:text-gray-200">PODCAST</a></li>
                <li><a href="#" className="hover:text-gray-200">CITATION</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;