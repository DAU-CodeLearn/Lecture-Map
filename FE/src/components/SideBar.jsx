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
          <Link to="/one/S06/2">
            <button>2층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/3">
            <button>3층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/4">
            <button>4층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/5">
            <button>5층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/6">
            <button>6층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/7">
            <button>7층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/8">
            <button>8층</button>
          </Link>
        </li>
        <li>
          <Link to="/one/S06/9">
            <button>9층</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}