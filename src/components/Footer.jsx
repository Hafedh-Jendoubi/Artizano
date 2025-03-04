function Footer() {
    return (
        <footer className="bg-Rosy text-white  ">
            <div className="flex flex-col items-center px-4 md:px-32 py-6 md:py-10">
                <h1 style={{ fontFamily: 'Amiri' }} className="font-bold text-footerTitle ">
                    ارتيزانو
                </h1>
                <p className="font-light lg:text-footerQuote md:text-footerSubTitles pb-10">
                    -Tradition tissée, élégance affirmée-
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center px-4 md:px-32 py-6 md:py-10 bg-Rosy text-white">
                <div className="mx-4 w-full md:w-1/3 mb-8 md:mb-0">
                    <h2 className="lg:text-footerSubTitles md:text-smallFooterTitleText font-semibold">À propos</h2>
                    <p className="text-white font-light pt-14 md:pt-5 lg:text-bodySize md:text-bodySize sm:text-smallFooterTitleText">
                        Découvrez sur Artizano, votre boutique de référence en Tunisie, une collection unique de vêtements artisanaux alliant tradition et modernité.
                    </p>
                </div>

                <div className="mx-4 w-full md:w-1/3 mb-8 md:mb-0">
                    <h2 className="lg:text-footerSubTitles md:text-smallFooterTitleText font-semibold">Contact</h2>
                    <ul className="text-white pt-3 md:pt-5">
                        <li className="mb-2 flex items-center lg:text-bodySize md:text-bodySize sm:text-smallFooterTitleText font-light">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            Tunisie 2400 Tunis
                        </li>
                        <li className="mb-2 flex items-center lg:text-bodySize md:text-bodySize sm:text-smallFooterTitleText font-light">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Artizano@gmail.com
                        </li>
                        <li className="mb-2 flex items-center lg:text-bodySize md:text-bodySize sm:text-smallFooterTitleText font-light">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            +216 72 352 644
                        </li>
                    </ul>
                </div>
                <div className="mx-4 w-full md:w-1/3">
                    <h2 className="lg:text-footerSubTitles md:text-smallFooterTitleText font-semibold">Social</h2>
                    <div className="flex flex-col space-y-2 md:space-y-4 pt-3 md:pt-5">
                        <a href="#" className="text-white lg:text-bodySize md:text-bodySize sm:text-smallFooterTitleText font-light flex items-center">
                            <img className="h-5 w-5 mr-2" src="../public/images/facebook.png" alt="Facebook" style={{ width: '20px', height: '20px' }} />
                            Facebook
                        </a>
                        <a href="#" className="text-white lg:text-bodySize md:text-bodySize sm:text-smallFooterTitleText font-light flex items-center">
                            <img className="h-5 w-5 mr-2" src="../public/images/instagramm.webp" alt="Instagram" style={{ width: '20px', height: '20px' }} />
                            Instagram
                        </a>
                        <a href="#" className="text-white lg:text-bodySize md:text-bodySize sm:text-smallFooterTitleText font-light flex items-center">
                            <img className="h-5 w-5 mr-2" src="../public/images/twitter.png" alt="Twitter" style={{ width: '20px', height: '20px' }} />
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;