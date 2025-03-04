import { FaPaperPlane } from "react-icons/fa";
function WorkshopDetails() {
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-6 sm:mx-10 lg:mx-20 mt-20 mb-10 ">
                <h1 className="text-2xl font-bold mb-4 text-grenat">Détails atelier</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div>
                        <img src="../public/images/nasij.jpg" alt="Jebba" className="rounded-lg w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="font-bold">
                                <p className="pb-4 text-grenat">Titre</p>
                                <p className="pb-4 text-grenat">Lieu</p>
                                <p className="pb-4 text-grenat">Date</p>
                                <p className="pb-4 text-grenat">Heure</p>
                            </div>
                            <div className="flex flex-col justify-end">
                                <p className="pb-4">Atelir créatif en broderie</p>
                                <p className="pb-4">Tunisie ,sidi bou said</p>
                                <p className="pb-4">Samedi 15 avril 2025</p>
                                <p className="pb-4">14h00</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <h1 className="font-bold text-bodySize pt-20 text-grenat pb-5">Description</h1>
                <p className="font-light text-greyText text-bodySize">
                    Plongez au cœur de l'artisanat tunisien dans cet authentique atelier familial de Sidi Bou Saïd. Assistez en direct à la création de pièces uniques en poterie, céramique et peinture sur bois. Laissez-vous captiver par le savoir-faire ancestral des artisans. Une expérience inoubliable au cœur de la culture tunisienne.
                </p>
                <div className="flex items-center flex-wrap gap-4 pt-20">
                    <h1 className="font-bold text-bodySize text-grenat">Nombre de participants:</h1>
                    <p className="font-light text-greyText pl-20 text-bodySize">100</p>
                </div>

                <div className="flex justify-end">
                    <button className="bg-Rosy hover:bg-Rosy text-white font-semibold py-2 block text-center text-buttonSize rounded-button-radius" style={{ width: '207px', height: '53px' }}>
                        Réservez une place
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 sm:mx-10 lg:mx-20 mt-10 mb-20">
                <h1 className="font-bold text-bodySize text-grenat pb-10">Avis</h1>
                <div className="flex flex-col gap-4">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="rounded-full border-2 border-black w-16 h-16 flex items-center justify-center">
                                        <img src="../public/images/user.png" alt="User" className="w-14 h-14 rounded-full" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold">Wiem Ben Mansour</span>
                                    <span className="font-medium text-gray-500">15/03/2025</span>
                                </div>
                                <div className="flex-1 pl-7 py-3 border border-grenat rounded-input-radius">Formation très intéressante</div>
                            </div>
                            <div className="flex justify-between items-center mt-2 sm:mt-0 sm:ml-60">
                                <div className="font-light"><p>15 j'aime</p></div>
                                <button className="border-grenat">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5B1616">
                                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-4">
  <div className="relative">
    <div className="rounded-full border-2 border-black w-16 h-16 flex items-center justify-center">
      <img src="../public/images/user.png" alt="User" className="w-14 h-14 rounded-full" />
    </div>
  </div>    
  <div className="relative w-full">
   
    <input
        className="w-full pl-7 py-3 border border-grenat rounded-input-radius pr-10" 
        placeholder="Ecrire un commentaire ...."
        aria-label="Comment or feedback"
    />
   
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <FaPaperPlane className="text-grenat w-6 h-6" />
    </div>
</div>
                </div>
            </div>
        </div>
    );
}

export default WorkshopDetails;