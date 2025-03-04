import { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="w-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <img
                        className="h-8 w-auto"
                        src="../public/images/logo.png"
                        alt="Your Company"
                        style={{ width: '120px', height: '70px' }}
                    />
                </a>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-notification_yellow p-1">
                            <div className="rounded-full bg-white w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                                <img
                                    src="../public/images/darbouka.png"
                                    alt="Darbouka"
                                    className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12"
                                />
                            </div>
                        </div>
                        <div className="rounded-full bg-notification_yellow p-1">
                            <div className="rounded-full bg-white w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                                <img
                                    src="../public/images/koffa.png"
                                    alt="Koffa"
                                    className="w-8 h-10 md:w-10 md:h-12 lg:w-12 lg:h-14"
                                />
                            </div>
                        </div>
                        {/* User Icon Container */}
                        <div 
                            className={`rounded-full p-1 relative ${
                                isDropdownOpen ? "bg-Rosy" : "bg-notification_yellow"
                            }`}
                            ref={dropdownRef}
                        >
                            <div 
                                className="rounded-full bg-white w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <img
                                    src="../public/images/user.png"
                                    alt="User"
                                    className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                                />
                            </div>
                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 border border-black">
                                    <div className="py-1">
                                        <Link 
                                            to="/exchange-service" 
                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                                        >
                                            <FaShoppingCart className="mr-2" />
                                            Mes achats
                                        </Link>
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            <FaCog className="mr-2" />
                                            Paramètres
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;