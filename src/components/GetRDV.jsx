import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function GetRDV() {
    const [date, setDate] = useState(null);
    const [heure, setHeure] = useState("");
    const [objet, setObjet] = useState("");

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center p-8 md:p-20"
        style={{ backgroundImage: "url('/images/background.jpg')" }}>
        
        {/* Grand cadre blanc */}
        <div className="bg-white bg-opacity-85 p-20 md:p-24 rounded-lg shadow-lg w-full max-w-6xl min-h-[75vh] flex flex-col justify-center">
        
        {/* Titre avec plus d'espacement */}
        <h2 className="text-2xl font-bold text-center text-[#5B1616] mt-[-60px] mb-12">
            Prendre rendez-vous
        </h2>

        {/* Formulaire */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Date alignée horizontalement */}
            <div className="flex items-center space-x-4 w-full">
                <label className="text-[#5B1616] font-bold w-20">Date</label>
                <div className="border border-gray-300 p-3 rounded-2xl bg-white flex-grow">
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        className="w-full focus:ring-2 focus:ring-[#AE6565] text-center outline-none bg-transparent"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Sélectionner une date"
                    />
                </div>
            </div>

            {/* Colonne de droite : Heure et Objet en colonne avec espace entre eux */}
            <div className="flex flex-col space-y-10 w-full">

                {/* Heure */}
                <div className="flex items-center space-x-4">
                    <label className="text-[#5B1616] font-bold w-20">Heure</label>
                    <input 
                        type="time" 
                        value={heure}
                        onChange={(e) => setHeure(e.target.value)}
                        className="border border-gray-300 p-3 rounded-full w-full focus:ring-2 focus:ring-[#AE6565] outline-none"
                    />
                </div>

                {/* Objet avec plus d'espace en dessous de Heure */}
                <div className="flex items-center space-x-4">
                    <label className="text-[#5B1616] font-bold w-20">Objet</label>
                    <input 
                        type="text" 
                        value={objet}
                        onChange={(e) => setObjet(e.target.value)}
                        className="border border-gray-300 p-3 rounded-full w-full focus:ring-2 focus:ring-[#AE6565] outline-none"
                    />
                </div>

            </div>

            {/* Bouton Envoyer à droite */}
            <div className="md:col-span-2 flex justify-end mt-12">
                <button 
                    type="submit"
                    className="bg-[#AE6565] text-white px-6 py-2 rounded-full hover:bg-[#8B4F4F] transition-all"
                >
                    Envoyer
                </button>
            </div>

        </form>

        </div>
        </div>
    );
}

export default GetRDV;
