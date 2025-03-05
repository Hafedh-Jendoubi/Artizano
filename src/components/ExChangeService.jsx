import React from "react";
import { useLocation } from "react-router-dom"; 
import { FaSearch } from "react-icons/fa";

function ExchangeService() {
  const location = useLocation();
  const { look } = location.state || {}; 


  if (!look) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 sm:mx-10 lg:mx-20 mt-20 mb-10">
        <h1 className="text-2xl font-bold mb-4 text-grenat">Service d'échange</h1>
        <p className="text-red-500">No product data found. Please go back and select a product.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:mx-10 lg:mx-20 mt-20 mb-10">
      <h1 className="text-2xl font-bold mb-4 text-grenat">Service d'échange</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <div>
          <img
            src={look.image} 
            alt={look.title}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4">
            <div className="font-bold">
              <p className="pb-4">Nom de l'article:</p>
              <p className="pb-4">Numéro de la commande:</p>
              <p className="pb-4">Prix:</p>
              <p className="pb-4">Somme à payer après l'échange:</p>
            </div>
            <div className="flex flex-col justify-end">
              <p className="pb-4">{look.title}</p>
              <p className="pb-4">BC03F128</p> 
              <p className="pb-4">{look.price}</p> 
              <p className="pb-4">30DT</p>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-Rosy hover:bg-Rosy text-white font-semibold py-2 text-center text-buttonSize rounded-button-radius" style={{ width: '207px', height: '53px' }}>
              Voir détails produit
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-bodySize pt-20 pb-5">Instructions de l'échange</h1>
        <ul className="list-disc list-inside space-y-2 text-greyText">
          <li>
            Insérez une <span className="font-bold">vidéo</span> prouvant que le produit est neuf, jamais utilisé, avec le ticket de caisse attaché.
          </li>
          <li>
            La demande est valable <span className="font-bold">une semaine après l'achat.</span>
          </li>
          <li>
            Indiquez la <span className="font-bold">raison</span> de l'échange.
          </li>
          <li>
            Sélectionnez un ou plusieurs articles d'échange dans votre panier.
          </li>
          <li>
            Si l'article choisi <span className="font-bold">est plus cher</span>, vous payez la différence ; s'il <span className="font-bold">est moins cher</span>, pas de <span className="font-bold">remboursement</span>.
          </li>
          <li>
            <span className="font-bold">Suivez l'état</span> de votre demande dans <span className="font-bold">"Mes demandes d'échange".</span>
          </li>
        </ul>
        <div className="pt-20">
          <h1 className="font-bold text-bodySize">Raison</h1>
          <div className="flex flex-col items-center w-full">
            <textarea
              className="w-full md:w-96 h-24 sm:h-32 md:h-40 lg:h-14 p-3 border-4 border-Rosy rounded-input-radius"
              placeholder="Citez la raison de l’échange de cet article"
              rows="4"
            ></textarea>
          </div>
        </div>

        <div className="pt-20">
          <h1 className="font-bold text-bodySize">Joindre une vidéo</h1>
          <div className="max-w-md mx-auto bg-greyBg p-6 sm:p-10 w-full sm:w-[369px] h-auto sm:h-[280px] rounded-lg flex flex-col items-center justify-center">
            <div className="bg-Rosy rounded-full w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12 sm:w-20 sm:h-20">
                <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
              </svg>
            </div>
            <div className="text-center mt-4">
              <p className="font-bold text-sm sm:text-buttonSize">Insérer une vidéo de validation</p>
              <p className="text-sm sm:text-base text-greyText">ou glisser-déposer</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-bodySize pb-6 pt-20">Article(s) d'échange</h1>
          <div className="flex flex-col items-center">
            <div className="relative w-full sm:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-black w-6 h-6" />
              </div>
              <input className="w-full h-12 border-4 border-Rosy rounded-input-radius pl-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pt-10 mx-4 sm:mx-10 lg:mx-20">
                        <div className="bg-greyBg p-4 rounded-lg max-w-md">
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <img src="../public/images/jebba.webp" alt="Jebba" className="rounded-lg w-full h-auto object-cover" />
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <strong className="font-bold text-lg">Jebba</strong>
                                        <p><strong className="font-bold">Prix:</strong> 90T</p>
                                    </div>
                                    <button className="bg-Rosy hover:bg-rose-600 text-white font-semibold py-2 block text-center text-buttonSize rounded-button-radius px-4 w-full">
                                        Voir détails produit
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-greyBg p-4 rounded-lg max-w-md lg:ml-16">
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <img src="../public/images/jebba.webp" alt="Jebba" className="rounded-lg w-full h-auto object-cover" />
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <strong className="font-bold text-lg">Jebba</strong>
                                        <p><strong className="font-bold">Prix:</strong> 90T</p>
                                    </div>
                                    <button className="bg-Rosy hover:bg-rose-600 text-white font-semibold py-2 block text-center text-buttonSize rounded-button-radius px-4 w-full">
                                        Voir détails produit
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-greyBg p-4 rounded-lg max-w-md">
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <img src="../public/images/jebba.webp" alt="Jebba" className="rounded-lg w-full h-auto object-cover" />
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <strong className="font-bold text-lg">Jebba</strong>
                                        <p><strong className="font-bold">Prix:</strong> 90T</p>
                                    </div>
                                    <button className="bg-Rosy hover:bg-rose-600 text-white font-semibold py-2 block text-center text-buttonSize rounded-button-radius px-4 w-full">
                                        Voir détails produit
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-greyBg p-4 rounded-lg max-w-md lg:ml-16">
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <img src="../public/images/jebba.webp" alt="Jebba" className="rounded-lg w-full h-auto object-cover" />
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <strong className="font-bold text-lg">Jebba</strong>
                                        <p><strong className="font-bold">Prix:</strong> 90T</p>
                                    </div>
                                    <button className="bg-Rosy hover:bg-rose-600 text-white font-semibold py-2 block text-center text-buttonSize rounded-button-radius px-4 w-full">
                                        Voir détails produit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-end md:justify-end sm:justify-center mt-9 mx-4 sm:mx-10 lg:mx-20">
                        <button className="bg-Rosy hover:bg-Rosy text-white font-semibold py-2 text-center text-buttonSize rounded-button-radius" style={{ width: '207px', height: '53px' }}>
                            Confirmer
                        </button>
                        <button className="bg-white text-grenat border border-grenat font-semibold py-2 text-center text-buttonSize rounded-button-radius" style={{ width: '207px', height: '53px' }}>
                            Annuler
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExchangeService;