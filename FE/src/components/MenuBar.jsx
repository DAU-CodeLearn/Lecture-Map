import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function MenuBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-full h-[7vh] bg-gray-200 flex justify-between items-center">
      <div className="w-1/6 text-center">
        <Link to="/">
          <p>로고</p>
        </Link>
      </div>
      <div className="w-4/6 flex justify-around">
        <Link to="/one">
          <button>캠퍼스 지도</button>
        </Link>
        <Link to="/two">
          <button>마이페이지</button>
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
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}
