import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <div className="w-full h-[7vh] bg-gray-200 flex justify-between items-center">
      <div className="w-1/6 text-center">
        <Link to="/">
          <p>로고</p>
        </Link>
      </div>
      <div className="w-4/6 flex justify-around">
        <Link to="/one">
          <button>페이지1</button>
        </Link>
        <Link to="/two">
          <button>페이지2</button>
        </Link>
        <Link to="/three">
          <button>페이지3</button>
        </Link>
        <Link to="/four">
          <button>페이지4</button>
        </Link>
      </div>
      <div className="w-1/6 text-center flex justify-around">
        <Link to="/login">
          <button>로그인</button>
        </Link>
        <Link to="/register">
            <button>회원가입</button>
        </Link>
      </div>
    </div>
  );
}
