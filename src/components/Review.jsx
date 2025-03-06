import { useState } from "react";
import Notification from "./Notification";

function Review() {
    const [rating, setRating] = useState(4); 

    return (
<div>
<Notification />
        <div className="max-w-5xl mx-auto mt-10 pt-[40px] px-4">

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                
            
                <div className="w-full md:w-1/2 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-2 text-[#AE6565] text-left">Détail produit</h2>
                <div className="p-2  rounded-lg shadow-lg">
                        <img src="/images/product.png" alt="Jebba" className="w-72 h-96 object-cover rounded-lg shadow-md" />
                    </div>
                </div>

              
                <div className=" pt-10"> 
                    <h3 className="text-xl font-semibold">Jebba <span className="text-gray-700">60DT</span></h3>

                    <h4 className="text-lg font-bold mt-3 text-[#AE6565]">Description du produit</h4>
                    <p className="text-gray-600">
                        Vêtement fait main, inspiré des traditions locales, fabriqué avec des matériaux naturels et nobles.
                    </p>

                    <h4 className="text-lg font-bold mt-3 text-[#AE6565]">Avis</h4>
                    <p className="text-gray-600 italic">
                        "Confortable, bien taillé et de bonne qualité, mais le tissu pourrait être un peu plus doux."
                    </p>

                   
                    <h4 className="text-lg font-bold mt-3 text-[#AE6565]">Donner des étoiles de 1 à 5 :</h4>
                    <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="cursor-pointer text-2xl text-yellow-500">★</span>
                        ))}
                    </div>

                 
                    <button className="mt-4 bg-[#AE6565] text-white px-5 py-2 rounded-lg hover:bg-[#8B4F4F] w-full md:w-auto">
                        Ajouter au panier
                    </button>
                </div>
            </div>

           
            <div className="mt-8"></div>

<div className="flex justify-end mt-6">
   
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 max-w-md opacity-85 text-center ml-auto">
        <h4 className="font-semibold text-red-700 text-xl">Code Promo 🎉</h4>
        <ul className="text-gray-600 list-disc pl-5 text-lg">
            <li>Connectez-vous</li>
            <li>Mettez 10 avis authentiques</li>
            <li>Code de promo -5DT</li>
        </ul>
    </div>
</div>


        </div>
        </div>
    );
}

export default Review;