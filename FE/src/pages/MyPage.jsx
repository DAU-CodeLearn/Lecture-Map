import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import MyPageSideBar from "../components/MyPageSideBar";

export default function MyPage() {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(`asd: ${decoded}`); // 디버깅을 위해 디코딩된 토큰 출력
        setUserInfo({
          id: decoded.tokenId,
          name: decoded.tokenName,
          issuedAt: new Date(decoded.iat * 1000).toLocaleString(),
          expiresAt: new Date(decoded.exp * 1000).toLocaleString(),
        });
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  return (
      <div className="flex w-full">
        <p>2번페이지</p>
        {userInfo && (
          <div>
            <p>아이디: {userInfo.id}</p>
            <p>이름: {userInfo.name}</p>
            <p>발급 시간: {userInfo.issuedAt}</p>
            <p>만료 시간: {userInfo.expiresAt}</p>
          </div>
        )}
      </div>
  );
}
