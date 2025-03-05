import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import look1 from "../assets/j1.png";
import look2 from "../assets/c.png";
import look3 from "../assets/j2.png";
import SwipeGift from "./SwipeGift";
import { useNavigate } from "react-router-dom";
import flecheg from "../assets/flecheg.png"; 
import flechd from "../assets/flechd.png"; 

const looks = [
  { id: 1, image: look1, title: "Jebba", price: "60DT" },
  { id: 2, image: look2, title: "Jebba", price: "15DT" },
  { id: 3, image: look3, title: "Jebba", price: "40DT" },
];

const RecommendationLook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("Pertinence");
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate("/WorkshpDetails");
  };

  return (
    <div className="min-h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center bg-fixed relative">
    
      <div className="absolute top-1 right-1 z-50">
        <SwipeGift />
      </div>

     
      <div className="container mx-auto px-6 py-10 flex flex-col items-center">
       
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

      
        <div className="relative w-full max-w-4xl flex items-center justify-center">
      
          <div className="absolute left-0 top-[calc(50%-40px)] w-[80px] h-[80px] bg-[#A55F5F] rounded-full flex items-center justify-center cursor-pointer z-50">
            <span className="w-[30px] h-[30px]">
              <img src={flecheg} alt="flèche gauche" className="w-full h-full object-contain" />
            </span>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
            <div className="flex h-[400px]">
              <div className="w-1/2">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="../public/images/nasij.jpg"
                    alt="Atelier de broderie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h1 className="text-bodySize font-semibold mb-2">
                    Titre : <span className="font-light text-buttonSize">Atelir créatif en broderie</span>
                  </h1>
                  <h1 className="text-bodySize font-semibold mb-2">
                    Description :{" "}
                    <span className="font-light text-buttonSize">
                      Plongez au cœur de l'artisanat tunisien ...
                    </span>
                  </h1>
                </div>
                <button
                  onClick={handleButtonClick}
                  className="bg-Rosy text-white border px-6 py-2 rounded-full hover:bg-[#A55F5F] hover:text-white transition-colors"
                >
                  plus détails sur l'atelier
                </button>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-[calc(50%-40px)] w-[80px] h-[80px] bg-[#A55F5F] rounded-full flex items-center justify-center cursor-pointer z-50">
            <span className="w-[30px] h-[30px]">
              <img src={flechd} alt="flèche droite" className="w-full h-full object-contain" />
            </span>
          </div>
        </div>
      </div>

     
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {looks.map((look) => (
            <div
              key={look.id}
              className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center border border-gray-300 w-[308px] h-[490px] mx-auto relative"
            >
            
              <div className="absolute top-3 right-3">
                <button className="text-gray-800 text-2xl font-bold">
                  ⋮
                </button>
              </div>

              
              <img
                src={look.image}
                alt={look.title}
                className="w-[249px] h-[269px] object-cover mt-8"
              />

            
              <h3 className="text-md font-bold mt-3 text-gray-800">{look.title}</h3>
              <p className="text-sm text-gray-600 font-semibold">{look.price}</p>

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