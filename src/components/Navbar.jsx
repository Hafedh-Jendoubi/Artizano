function Navbar() {
    return(
        <nav className="mt-[73px] h-[87px] bg-[#AE6565] w-full fixed left-0 flex justify-center items-center">
            <ul className="flex text-navSize font-bold space-x-12">
                <li><a href="#" className="text-white">ACCEUIL</a></li>
                <li><a href="#" className="text-white">SUIVIE COMMANDE</a></li>
                <li><a href="#" className="text-white">RECOMMENDATION LOOK</a></li>
                <li><a href="#" className="text-white">EVENEMENTS CULTURELS</a></li>
                <li><a href="#" className="text-white">PODCAST</a></li>
                <li><a href="#" className="text-white">CITATION</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;