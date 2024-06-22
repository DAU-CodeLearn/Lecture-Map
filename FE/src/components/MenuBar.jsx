import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import logo from "../assets/Loginlogo.png";

export default function MenuBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        //console.log(decoded); // 디버깅을 위해 디코딩된 토큰 출력
        setUserInfo({
          id: decoded.tokenId,
          name: decoded.tokenName,
          manager: decoded.tokenManager,
          issuedAt: new Date(decoded.iat * 1000).toLocaleString(),
          expiresAt: new Date(decoded.exp * 1000).toLocaleString()
        });
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-full h-[7vh] bg-sky-500 flex justify-between items-center text-[16pt] text-white ">
      <div className="w-1/6 text-center pl-9">
        <img src={logo} alt="로고" className="h-full" />
      </div>
      <div className="w-4/6 flex justify-around">
        <Link to="/HadanCampusMap">
          <button>캠퍼스 지도</button>
        </Link>
        <Link to="/MyTimeTable">
          <button>내 시간표</button>
        </Link>
        {userInfo && userInfo.manager === 1 && (
          <Link to="/addTime">
            <button>관리자 시간표</button>
          </Link>
        )}
      </div>
      <div className="w-1/6 text-center flex justify-around">
        <Link to="/MyPage/Info">
          {userInfo && (
            <button>
              {userInfo.name}님 환영합니다.
            </button>
          )}
        </Link>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}
