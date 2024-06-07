import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="flex flex-col w-[10vw] bg-white-500 h-[94vh] text-[18pt] text-sky-600 border-r-2 border-gray-300">
      <ul className="flex flex-col space-y-12 pt-7 items-center">
      <li className="mb-4 border-b-2 border-gray-300 pb-7 w-full text-center">
          <Link to="/HadanCampusMap">
            <button>이전페이지</button>
          </Link>
        </li>
        <li>
          <Link to="/MyPage/Info">
            <button>내 정보</button>
          </Link>
        </li>
        <li>
          <Link to="/MyPage/ChangePassword">
            <button>내 정보 수정</button>
          </Link>
        </li>
        
      </ul>
    </div>
  );
}
