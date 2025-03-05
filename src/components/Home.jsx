import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Icône de recherche
import look1 from "../assets/j1.png";
import look2 from "../assets/c.png";
import look3 from "../assets/j2.png";
import SwipeGift from "./SwipeGift";
import { useNavigate } from "react-router-dom";
const looks = [
  { id: 1, image: look1, title: "Jebba", price: "60DT" },
  { id: 2, image: look2, title: "Jebba", price: "15DT" },
  { id: 3, image: look3, title: "Jebba", price: "40DT" }
];

const RecommendationLook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("Pertinence");

  return (
    <div className="min-h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center bg-fixed relative">
      {/* SwipeGift en haut à droite */}
      <div className="absolute top-1 right-1 z-50">
        <SwipeGift />
      </div>

      {/* Conteneur principal */}
      <div className="container mx-auto px-6 py-10 flex flex-col items-center">
        {/* Barre de recherche avec dimensions spécifiques */}
        <div className="relative w-[624px] h-[54px] mb-4">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="...."
            className="w-full h-full pl-10 pr-4 border border-[#985F5A] rounded-full focus:ring-2 focus:ring-[#985F5A] focus:outline-none shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Image au-dessus de la barre de recherche */}
        <div className="relative flex items-center justify-center min-h-screen">
          <img
            src="/src/assets/cs.png"
            className="w-[735px] h-[301px] mt-10 mb-20 object-cover rounded-[15px]"
          />
{/* Bouton gauche */}
<div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-[-300px] translate-y-[-80px] w-[80px] h-[80px] bg-[#A55F5F] rounded-full flex items-center justify-center cursor-pointer">
  <span className="w-[30px] h-[30px]">
    <img src="/src/assets/flecheg.png" alt="flèche gauche" className="w-full h-full object-contain"/>
  </span>
</div>

{/* Bouton droit */}
<div className="absolute right-[50px] top-1/2 transform -translate-y-1/2 translate-x-[300px] translate-y-[-80px] w-[80px] h-[80px] bg-[#A55F5F] rounded-full flex items-center justify-center cursor-pointer">
  <span className="w-[30px] h-[30px]">
    <img src="/src/assets/flechd.png" alt="flèche droite" className="w-full h-full object-contain"/>
  </span>
</div>


          {/* Bouton central */}
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px]   flex items-center justify-center cursor-pointer">
            <span className="text-white text-2xl">cliquer</span>
          </div>
        </div>

      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-10">
        {/* Grid des produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {looks.map((look) => (
            <div
              key={look.id}
              className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center border border-gray-300 w-[308px] h-[490px] mx-auto relative"
            >
              {/* Menu 3 points (En haut) */}
              <div className="absolute top-3 right-3">
                <button className="text-gray-800 text-2xl font-bold">
                  &#8942;
                </button>
              </div>

              {/* Image (En dessous du menu) */}
              <img
                src={look.image}
                alt={look.title}
                className="w-[249px] h-[269px] object-cover  mt-8"
              />

              {/* Nom et prix */}
              <h3 className="text-md font-bold mt-3 text-gray-800">{look.title}</h3>
              <p className="text-sm text-gray-600 font-semibold">{look.price}</p>

              {/* Boutons */}
              <div className="mt-3 flex flex-row w-full justify-center gap-2">
                <button className="bg-[#985F5A] text-white py-1 rounded-full w-[142px] h-[53px] text-xs hover:bg-opacity-80 transition">
                  Ajouter au panier
                </button>
                <button 
    onClick={() => window.location.href = "/avis"}  
    className="border border-[#985F5A] text-[#985F5A] py-2 px-4 rounded-full w-[142px] h-[53px] flex justify-center items-center text-sm font-bold hover:bg-[#985F5A] hover:text-white transition-all"
>
    Voir Détails
</button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationLook;
