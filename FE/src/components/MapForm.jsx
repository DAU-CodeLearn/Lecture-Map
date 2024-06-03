import mapImg from "../assets/DongaMap.png";
import { Link } from "react-router-dom";

export default function MapForm() {
  return (
    <div className="relative">
      <img src={mapImg} alt="Map" className="w-full h-full object-cover" />
      <Link
        to="/one/S06"
        className="absolute top-[16%] left-[42%] w-8 h-8 sm:w-14 sm:h-14 bg-transparent border-2 border-red-500 rounded-full cursor-pointer"
      />
    </div>
  );
}
