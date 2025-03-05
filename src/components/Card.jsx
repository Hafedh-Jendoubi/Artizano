function Card() {
    return (
        <main className="md:px-20">
            <div className="relative max-w-[526px] mt-10 ml-6 md:ml-0">
                <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#AE6565]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35M16.65 10.5a6.15 6.15 0 1 1-12.3 0 6.15 6.15 0 0 1 12.3 0z"
                    />
                </svg>
                <input
                    className="bg-white border-[4px] border-[#AE6565] w-full pl-10 rounded-full placeholder:text-[#AE6565] placeholder:italic placeholder:font-semibold focus:outline-none focus:ring-2 focus:ring-[#AE6565]"
                    placeholder="Rechercher un article"
                />
            </div>

            <div className="flex flex-col md:flex-row gap-36 mt-10 items-start">
                <div className="h-auto max-w-full mt-10 ml-6 md:ml-0 bg-white rounded-[15px] shadow-lg p-6 mb-12">
                    <h2 className="text-[30px] text-[#5B1616] font-bold">
                        Artizano petite livraison
                    </h2>
                    <p className="text-[18px] md:text-[16px] text-gray-600 mt-2">
                        Livraison prévue au plus tard le 31/07/2025
                    </p>
                    <div className="h-1 bg-[#AE6565] mt-4"></div>

                    <div className="overflow-x-auto">
                        <table className="mt-5 w-full border-collapse">
                            <thead>
                                <tr className="text-black text-center">
                                    <th className="p-3 border-gray-300 font-medium">Produit</th>
                                    <th className="p-3 border-gray-300 font-medium">Prix</th>
                                    <th className="p-3 border-gray-300 font-medium">Qty</th>
                                    <th className="p-3 border-gray-300 font-medium">
                                        Prix Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100 text-[#5B1616] text-center">
                                    <td className="p-3 flex flex-col md:flex-row items-center text-left">
                                        <img
                                            src="images/product.png"
                                            className="w-20 h-32 object-cover rounded-lg shadow-md md:w-40 md:h-60"
                                            alt="Product"
                                        />
                                        <div className="ml-4 text-xs">
                                            <p className="font-semibold">Jebba</p>
                                            <p className="text-gray-500">RCCP/128</p>
                                            <p className="text-xs mt-1">
                                                Cet article n'est pas éligible pour PayPal
                                            </p>
                                            <div className="flex gap-2 mt-2">
                                                <button className="bg-[#a15c5c] text-white text-xs px-2 py-1 rounded-xl hover:bg-opacity-80">
                                                    Modifier
                                                </button>
                                                <button className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-xl hover:bg-[#985F5A] hover:text-white">
                                                    Supprimer
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        <p className="text-gray-300 text-sm">Etait 860.00 TND</p>
                                        <p className="text-red-600 font-semibold">
                                            Maintenant 699.00 TND
                                        </p>
                                    </td>
                                    <td className="p-3 text-sm">1</td>
                                    <td className="p-3 text-gray-300 text-sm">699.00 TND</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a
                        href="#"
                        className="mt-3 ml-5 pb-2 text-[#AE6565] cursor-pointer hover:underline"
                    >
                        &lt; Continuer vos achats
                    </a>
                </div>
                <div>
                    <div className="max-w-[309px] mt-10 ml-6 md:ml-0 bg-white rounded-[15px] shadow-lg p-6">
                        <h2 className="text-[30px] text-[#5B1616] font-bold">Résumé</h2>
                        <div className="h-1 bg-[#AE6565] mt-4 p-0"></div>
                        <div className="flex justify-between mt-5">
                            <h3 className="font-bold">Total:</h3>
                            <p className="text-gray-300">699.00 TND</p>
                        </div>
                        <div className="flex justify-between mt-3">
                            <h3 className="underline">Artizano petite livraison:</h3>
                            <p className="text-gray-300">19.00 TND</p>
                        </div>
                        <div className="flex justify-between mt-3">
                            <h3>Tax:</h3>
                            <p className="text-gray-300">--</p>
                        </div>
                        <div className="h-1 bg-[#AE6565] mt-4 p-0"></div>
                        <div className="flex justify-between mt-3">
                            <h3 className="font-bold">Total estimé:</h3>
                            <p className="text-gray-300">718.00 TND</p>
                        </div>
                        <p className="text-xs mt-4">
                            A partir de 83TND/mois soit 0% TAEG avec affirmation. Verifiez
                            votre pouvoir d'achat.
                        </p>
                        <button className="bg-[#a15c5c] text-white py-2 px-4 rounded-full mt-4 w-full hover:bg-opacity-80">
                            Confirmer
                        </button>
                    </div>

                    <div>
                        <div className="max-w-[309px] mt-10 ml-6 md:ml-0 bg-white rounded-[15px] shadow-lg p-6">
                            <div>
                                <h3 className="text-[30px] text-[#5B1616] font-bold">Vous avez un code promo ?</h3>
                                <div className="h-1 bg-[#AE6565] mt-4 p-0"></div>
                                <div className="flex mt-2">
                                    <input
                                        className="border border-gray-300 rounded-l-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#AE6565]"
                                        placeholder="Promo Code"
                                    />
                                    <button className="bg-[#a15c5c] text-white py-2 px-4 rounded-r-full hover:bg-opacity-80">
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-auto w-auto ml-6 md:ml-0 bg-white rounded-[15px] shadow-lg p-6 max-w-[810px] mb-12">
                <h2 className="text-[30px] text-[#5B1616] font-bold mb-5">
                    Produits recommandés
                </h2>
                <div className="h-1 bg-[#AE6565] mt-4 p-0"></div>
                <div className="flex overflow-x-auto space-x-4 pb-4">
                    <div className="bg-white rounded-[15px] shadow-lg p-4 w-[150px] md:w-[200px]">
                        <img
                            src="images/product.png"
                            alt="Jebba"
                            className="w-20 h-32 object-cover rounded-lg shadow-md md:w-40 md:h-60 hover:cursor-pointer"
                        />
                        <p className="text-center text-sm font-semibold mt-2">Jebba 60DT</p>
                    </div>
                    <div className="bg-white rounded-[15px] shadow-lg p-4 w-[150px] md:w-[200px]">
                        <img
                            src="images/product.png"
                            alt="Jebba"
                            className="w-20 h-32 object-cover rounded-lg shadow-md md:w-40 md:h-60 hover:cursor-pointer"
                        />
                        <p className="text-center text-sm font-semibold mt-2">Jebba 60DT</p>
                    </div>
                    <div className="bg-white rounded-[15px] shadow-lg p-4 w-[150px] md:w-[200px]">
                        <img
                            src="images/product.png"
                            alt="Koffa"
                            className="w-20 h-32 object-cover rounded-lg shadow-md md:w-40 md:h-60 hover:cursor-pointer"
                        />
                        <p className="text-center text-sm font-semibold mt-2">Koffa 60DT</p>
                    </div>
                    <div className="bg-white rounded-[15px] shadow-lg p-4 w-[150px] md:w-[200px]">
                        <img
                            src="images/product.png"
                            alt="Jebba"
                            className="w-20 h-32 object-cover rounded-lg shadow-md md:w-40 md:h-60 hover:cursor-pointer"
                        />
                        <p className="text-center text-sm font-semibold mt-2">Jebba 60DT</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Card;