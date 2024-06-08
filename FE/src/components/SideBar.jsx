import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="flex flex-col w-[10vw] bg-gray-500 h-[94vh]">
      <ul className="flex flex-col space-y-2 pt-6 items-center">
        <li className="mb-4">
          <Link to="/one">
            <button>이전페이지</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/02">
            <button>2층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/03">
            <button>3층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/04">
            <button>4층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/05">
            <button>5층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/06">
            <button>6층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/07">
            <button>7층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/08">
            <button>8층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/09">
            <button>9층</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}