import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

// Custom camel icon
const camelIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3448/3448612.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});

const bizerte = [37.2744, 9.8739];
const kairouan = [35.6781, 10.0963];

function Follow() {
    const roadPath = [
        bizerte,
        [37.0, 10.0],       // Near Menzel Bourguiba
        [36.8, 10.1],       // Near Tunis
        [36.8065, 10.1815], // Tunis
        [36.7, 10.3],       // South of Tunis
        [36.4, 10.5],       // Near Hammamet
        [36.3, 10.6],       // Nabeul area
        [36.2, 10.6],       // Road before Sousse
        [35.85, 10.6],      // Sousse
        [35.75, 10.5],      // Near Monastir
        [35.7, 10.4],       // Road heading inland
        kairouan
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                if (prevIndex < roadPath.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    return prevIndex;
                }
            });
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
      <>
        <div className="h-auto w-[75%] mt-10 mx-auto bg-white rounded-[15px] shadow-lg p-6 mb-12">
            <h2 className="text-[30px] text-[#5B1616] font-bold mb-3">
                Artizano suivie commande
            </h2>

            <MapContainer center={[36.5, 10.2]} zoom={7} style={{ height: "500px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <Polyline positions={roadPath} color="blue" weight={3} />

                <Marker position={bizerte}>
                    <Popup>Bizerte, Tunisia</Popup>
                </Marker>

                <Marker position={kairouan}>
                    <Popup>Kairouan, Tunisia</Popup>
                </Marker>

                <Marker position={roadPath[currentIndex]} icon={camelIcon}>
                    <Popup>Delivery in Progress 🐪</Popup>
                </Marker>
            </MapContainer>
        </div>
        <div className="h-auto w-[75%] mt-10 mx-auto bg-white rounded-[15px] shadow-lg p-6 mb-12">
            <div className="flex items-center justify-between">
                <button className="bg-[#a15c5c] text-white text-xs px-2 py-1 rounded-xl hover:bg-opacity-80">
                    List achats
                </button>
                <button className="bg-[#a15c5c] text-white text-xs px-2 py-1 rounded-xl hover:bg-opacity-80">
                    Plus détails
                </button>
                <button className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-xl hover:bg-[#985F5A] hover:text-white">
                    Annuler
                </button>
                <p>
                    NB: Vous pouvez utiliser votre souris pour vous déplacer sur la carte
                </p>
            </div>
        </div>
      </>
    );
}

export default Follow;
