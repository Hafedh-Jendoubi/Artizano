import React from "react";
import productImage from "../assets/product.png"; 
import userIcon from "../assets/user.png"; 
import { FaPaperPlane } from "react-icons/fa";

const SponsorshipPage = () => {
  return (
    <div className="min-h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center bg-fixed flex flex-col items-center">
      
  
      <div className="bg-white p-8 rounded-lg shadow-md w-[1287px] h-[763px] mt-16">
        <h2 className="text-[30px] font-bold text-[#985F5A] font-['Inter'] mb-6">
          Produit à sponsoriser
        </h2>

        <div className="flex flex-row gap-10">
         
          <div className="w-[548px] h-[612px] flex-shrink-0">
            <img
              src={productImage}
              alt="Produit"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

         
          <div className="flex flex-col justify-start flex-1">
            <h3 className="text-md font-bold text-[#985F5A] mb-4">
              Titre Projet 
              <span className="text-gray-700 font-normal ml-2">Burnous avec Broderie Dorée</span>
            </h3>

            <p className="text-md font-bold text-[#985F5A] mb-4">
              Montant pour moderniser 
              <span className="text-gray-700 font-normal ml-2">200DT</span>
            </p>

            <p className="text-md font-bold text-[#985F5A] mb-4">Description</p>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Découvrez l’élégance du burnous tunisien, en velours noir brodé de fil doré.
              Alliant luxe et authenticité, il sublime chaque occasion tout en valorisant le savoir-faire artisanal tunisien.
              Un choix raffiné pour une touche de tradition et de modernité.
            </p>

            <div className="flex justify-end mt-6">
              <button className="bg-[#985F5A] text-white rounded-full hover:bg-opacity-80 transition" 
                style={{ width: "142px", height: "53px" }}>
                Donner avis
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { amount: "20DT", description: "Mention dans les remerciements" },
            { amount: "50DT", description: "Produit exclusif" },
            { amount: "100DT", description: "Produit personnalisé + invitation au atelier" },
            { amount: "Custom", description: "Personnaliser votre montant" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center w-[308px] h-[314px] flex flex-col justify-between">
              <h3 className="text-lg font-bold">{item.amount}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>

              {item.amount === "Custom" ? (
                <input
                  type="number"
                  placeholder="Entrer votre montant"
                  className="mt-3 px-3 py-2 w-[212px] h-[47px] border rounded-lg text-center"
                />
              ) : null}

              <button className="bg-[#985F5A] text-white rounded-full hover:bg-opacity-80 transition mx-auto"
                style={{ width: "142px", height: "53px" }}>
                Attribuer
              </button>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-white p-6 rounded-lg shadow-md w-[1290px] h-[838px] mx-auto mt-10 mb-20">

        <div className="mt-4 space-y-6">
          {[
            { name: "Wiem ben mansour", comment: "J’ai été invitée à l’atelier et j’ai adoré découvrir la fabrication des vêtements.", date: "04/12/2024" },
            { name: "Wala Ammar", comment: "J’ai bien reçu mon produit, il est magnifique ! Merci pour cette belle initiative.", date: "04/12/2024" },
          ].map((item, index) => (
            <div key={index} className="flex items-center w-full">
           
              <img src={userIcon} alt="User" className="w-12 h-12 rounded-full flex-shrink-0" />

            
              <div className="ml-2 flex-shrink-0 w-[200px]">
                <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>

              <div className="ml-6 w-[637px] h-[60px] bg-white border border-[#985F5A] rounded-full p-3 flex items-center">
                <p className="text-gray-700">{item.comment}</p>
              </div>
            </div>
          ))}
        </div>

    
        <div className="mt-10 flex items-center w-full">
       
          <img src={userIcon} alt="User" className="w-12 h-12 rounded-full flex-shrink-0" />

       
          <div className="ml-2 w-[637px] h-[60px] bg-white border border-[#985F5A] rounded-full p-3 flex items-center">
            <input
              type="text"
              placeholder="Écrire un commentaire..."
              className="w-full border-none focus:ring-0 focus:outline-none"
            />
          </div>

          <button className="ml-[-50px] bg-[#985F5A] text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition"
            style={{ width: "53px", height: "53px" }}>
            <FaPaperPlane className="text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPage;
