import React, { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";

export default function PageTwo() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded); // 디버깅을 위해 디코딩된 토큰 출력
        setUserInfo({
          id: decoded.id,
          name: decoded.name,
          issuedAt: new Date(decoded.iat * 1000).toLocaleString(),
          expiresAt: new Date(decoded.exp * 1000).toLocaleString()
        });
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  return (
    <div className="justify-center flex w-full">
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
