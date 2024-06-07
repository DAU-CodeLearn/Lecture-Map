import { Link } from "react-router-dom";

export default function S06SideBar() {
  return (
    <div className="flex flex-col w-[10vw] bg-white-500 h-[94vh] text-[18pt] text-sky-600 border-r-2 border-gray-300">
      <ul className="flex flex-col space-y-12 pt-7 items-center">
      <li className="mb-4 border-b-2 border-gray-300 pb-7 w-full text-center">
          <Link to="/HadanCampusMap">
            <button>이전페이지</button>
          </Link>
        </li>
        <li>
          <Link to="/HadanCampusMap/S06/02">
            <button>2층</button>
          </Link>
        </li>
        <li>
          <Link to="/HadanCampusMap/S06/03">
            <button>3층</button>
          </Link>
        </li>
        <li>
          <Link to="/HadanCampusMap/S06/04">
            <button>4층</button>
          </Link>
        </li>
        <li>
          <Link to="/HadanCampusMap/S06/05">
            <button>5층</button>
          </Link>
        </li>
        <li>
          <Link to="/HadanCampusMap/S06/06">
            <button>6층</button>
          </Link>
        </li>
        <li>
          <Link to="/HadanCampusMap/S06/07">
            <button>7층</button>
          </Link>
        </li>
        <li>
          <Link to="/HadanCampusMap/S06/08">
            <button>8층</button>
          </Link>
        </li>
        <li>
          <Link to="/HadanCampusMap/S06/09">
            <button>9층</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
