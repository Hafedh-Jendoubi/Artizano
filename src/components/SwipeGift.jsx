import { useState } from "react";

export default function SwipeGift() {
  const [open, setOpen] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const gifts = [
    "/src/assets/cadeau.png",
    "/src/assets/cadeau.png",
    "/src/assets/cadeau.png",
    "/src/assets/cadeau.png",
    "/src/assets/cadeau.png",
    "/src/assets/cadeau.png",
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {/* Effet de transparence quand la notification s'affiche */}
      {showNotification && (
        <div className="fixed inset-0 bg-black opacity-50 transition duration-300"></div>
      )}

      {/* Demi-cercle noir initial (attache au cercle blanc lors de l'ouverture) */}
      <div
        className={`absolute right-0 top-1/3 w-[143px] h-[218px] bg-black rounded-l-full flex items-center justify-center cursor-pointer transition-all duration-500 ${open ? "translate-x-[350px]" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span
          className={`text-white text-2xl transition-transform duration-500 ${open ? "rotate-90" : ""}`}
        >
          ➤
        </span>
      </div>

      {/* Demi-cercle blanc avec les cadeaux */}
      {open && !selectedGift && (
        <div className="absolute right-0 top-1/4 w-[1005px] h-[1064px] bg-white rounded-l-full shadow-lg p-4 flex flex-col items-center justify-center transition-transform duration-500 translate-x-[100px] translate-y-[50px]">
          <p className="translate-y-[60px] translate-x-[20px] absolute top-4 bg-white border-4 border-[#92C2D0] w-[320px] h-[58px] flex items-center justify-center text-black text-lg font-semibold rounded-[600px]">
            دق الباب و اسمع الجواب
          </p>

          <div className="grid grid-cols-3 gap-x-20 gap-y-20">
            {gifts.map((gift, index) => (
              <button
                key={index}
                className="w-[93px] h-[167px] bg-gray-200 rounded-lg flex items-center justify-center shadow"
                onClick={() => setSelectedGift(gift)}
              >
                <img src={gift} alt="Cadeau" className="w-full h-full object-cover rounded-md" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Affichage du cadeau sélectionné avec message */}
      {open && selectedGift && (
        <div className="absolute right-0 top-1/4 w-[1005px] h-[1064px] bg-white rounded-l-full shadow-lg p-4 flex flex-col items-center justify-center">
          <img src="/src/assets/prix.png" alt="Cadeau Gagné" className="w-[324px] h-[327px] object-cover rounded-lg mb-4" />
          <p className="text-gray-700 font-semibold mb-4 translate-y-[80px]">🎉 Félicitations ! Cliquez ici pour récupérer votre réduction de 30% !</p>
          <button
            className="mt-8 bg-[#A55F5F] text-white w-[212px] h-[53px] rounded-[30px] cursor-pointer shadow-lg flex items-center justify-center relative translate-y-[80px]"
            onClick={() => setShowNotification(true)}
          >
            Récupérer votre prix
          </button>
        </div>
      )}

      {/* Notification de confirmation */}
      {showNotification && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative w-[635px] h-[406px]">
            {/* Icône de fermeture */}
            <button
              className="absolute top-2 right-2 text-gray-600 text-xl"
              onClick={() => setShowNotification(false)}
            >
              <img src="/src/assets/croi.png" alt="Fermer" />
            </button>

            {/* Icône de félicitations */}
            <div className="flex justify-center items-center text-6xl mb-4"><img src="/src/assets/f.png" /></div>

            {/* Message */}
            <p className="text-gray-600"> Bravo ! Votre réduction de 30% est appliquée sur votre prochain achat de vêtements !</p>

            {/* Bouton Voir carte fidélité */}
            <button
              className="mt-4 bg-[#A55F5F] text-white w-[212px] h-[53px] rounded-[30px] shadow-lg"
            >
              Carte de fidélité
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
