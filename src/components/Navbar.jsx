function Navbar() {
    return (
        <div className="bg-Rosy py-4 md:py-6">
            <nav className="mx-8 md:mx-16 lg:mx-24 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6">
                <a href="#" className="text-white font-bold text-sm md:text-base lg:text-navSize p-2 md:p-3 lg:p-4">ACCEUIL</a>
                <a href="#" className="text-white font-bold text-sm md:text-base lg:text-navSize p-2 md:p-3 lg:p-4">SUIVIE COMMANDE</a>
                <a href="#" className="text-white font-bold text-sm md:text-base lg:text-navSize p-2 md:p-3 lg:p-4">RECOMMANDATION LOOK</a>
                <a href="#" className="text-white font-bold text-sm md:text-base lg:text-navSize p-2 md:p-3 lg:p-4">ÉVÉNEMENTS CULTURELS</a>
                <a href="#" className="text-white font-bold text-sm md:text-base lg:text-navSize p-2 md:p-3 lg:p-4">PODCAST</a>
                <a href="#" className="text-white font-bold text-sm md:text-base lg:text-navSize p-2 md:p-3 lg:p-4">CITATION</a>
            </nav>
        </div>
    );
}

export default Navbar;