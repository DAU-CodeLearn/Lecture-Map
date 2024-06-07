import mapImg from "../assets/DongaMap.png";
import { Link } from "react-router-dom";

export default function HadanMapForm() {
  return (
    <div className="relative">
      <img src={mapImg} alt="Map" className="w-full h-full object-contain" />
      <Link
        to="/HadanCampusMap/S06"
        className="absolute top-[14%] left-[42%] w-[8%] h-[9%]  bg-transparent border-2 border-red-500 rounded-full cursor-pointer"
      />
    </div>
  );
}
