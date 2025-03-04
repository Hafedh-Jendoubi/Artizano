function Header() {
    return (
        <header className="w-full bg-white">
            <div className="h-[105px] w-full flex flex-wrap items-center justify-between px-4 md:px-10">
                {/* Logo */}
                <img src="images/logo.png" alt="logo" className="h-[67px] pl-4 md:pl-[68px]" />

                {/* Icônes avec gestion responsive */}
                <div className="ml-auto flex space-x-2 md:space-x-6 pr-4 md:pr-[87px]">
                    <img src="images/item1.png" alt="item1" className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]" />
                    <img src="images/item2.png" alt="item2" className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]" />
                    <img src="images/item3.png" alt="item3" className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]" />
                </div>
            </div>
        </header>
    );
}

export default Header;
