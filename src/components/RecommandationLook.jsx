import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Icône de recherche
import look1 from "../assets/look1.png";
import look2 from "../assets/look2.png";
import look3 from "../assets/look3.png";
import look4 from "../assets/look4.png";
import look5 from "../assets/look5.png";
import look6 from "../assets/look6.png";
import look7 from "../assets/look7.png";
import look8 from "../assets/look8.png";
import look9 from "../assets/look9.png";

const looks = [
  { id: 1, image: look1, title: "Jebba", price: "90DT" },
  { id: 2, image: look2, title: "Jebba", price: "150DT" },
  { id: 3, image: look3, title: "Jebba", price: "50DT" },
  { id: 4, image: look4, title: "Jebba", price: "100DT" },
  { id: 5, image: look5, title: "Jebba", price: "75DT" },
  { id: 6, image: look6, title: "Jebba", price: "80DT" },
  { id: 7, image: look7, title: "Jebba", price: "70DT" },
  { id: 8, image: look8, title: "Jebba", price: "70DT" },
  { id: 9, image: look9, title: "Jebba", price: "20DT" },
];

const RecommendationLook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("Pertinence");

  return (
    <div className="min-h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center bg-fixed">
      {/* Conteneur principal */}
      <div className="container mx-auto px-6 py-10 flex flex-col items-center">
        
        {/* Barre de recherche avec dimensions spécifiques */}
        <div className="relative w-[624px] h-[54px] mb-4">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Jebba"
            className="w-full h-full pl-10 pr-4 border border-[#985F5A] rounded-full focus:ring-2 focus:ring-[#985F5A] focus:outline-none shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Barre des résultats avec dimensions spécifiques */}
        <div className="w-[1287px] h-[104px] bg-white p-6 rounded-lg shadow-md flex flex-row justify-between items-center">
          <span className="text-[#985F5A] font-semibold text-lg">
            Résultats de recherche : <span className="font-bold">"{searchTerm || "Jebba"}"</span>
          </span>
          <div className="flex flex-row items-center gap-4">
            <span className="text-gray-700 text-sm">
              Affichage de 1-9 sur 20 résultats
            </span>
            <select
              className="bg-[#985F5A] text-white px-4 py-2 rounded-full cursor-pointer"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="Pertinence">Pertinence</option>
              <option value="Prix croissant">Prix croissant</option>
              <option value="Prix décroissant">Prix décroissant</option>
            </select>
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
                className="w-[249px] h-[269px] object-cover rounded-lg mt-8"
              />

              {/* Nom et prix */}
              <h3 className="text-md font-bold mt-3 text-gray-800">{look.title}</h3>
              <p className="text-sm text-gray-600 font-semibold">{look.price}</p>

              {/* Boutons */}
              <div className="mt-3 flex flex-row w-full justify-center gap-2">
                <button className="bg-[#985F5A] text-white py-1 rounded-full w-[142px] h-[53px] text-xs hover:bg-opacity-80 transition">
                  Ajouter au panier
                </button>
                <button className="border border-[#985F5A] text-[#985F5A] py-1 rounded-full w-[142px] h-[53px] text-xs hover:bg-[#985F5A] hover:text-white transition">
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
