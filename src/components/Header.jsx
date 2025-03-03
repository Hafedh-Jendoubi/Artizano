function Header() {
    return (
        <header className="w-full bg-white fixed top-0 left-0">
            <div className="h-[105px] w-full flex items-center">
            <img src="images/logo.png" alt="logo" class="h-[67px] pl-[68px]" />
            <div className="ml-auto flex space-x-6 pr-[87px]">
                <img src="images/item1.png" alt="item1" className="w-[80px] h-[80px]" />
                <img src="images/item2.png" alt="item2" className="w-[80px] h-[80px]" />
                <img src="images/item3.png" alt="item3" className="w-[80px] h-[80px]" />
            </div>
            </div>
        </header>
    );
}

export default Header;