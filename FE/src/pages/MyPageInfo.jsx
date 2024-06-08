import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
export default function MyPageInfo() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded); // 디버깅을 위해 디코딩된 토큰 출력
        setUserInfo({
          id: decoded.tokenId,
          name: decoded.tokenName,
          studentId: decoded.tokenStudentId,
          issuedAt: new Date(decoded.iat * 1000).toLocaleString(),
          expiresAt: new Date(decoded.exp * 1000).toLocaleString(),
        });
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);
  //토큰 이용해 유저의 id를 추출하는거 까지 했음. 이 아이디로 서버에서 유저 정보 받아와서 뿌려줘야 함.

  return (
    <div className="flex flex-col items-center p-4">
      {userInfo && (
        <>
          <div className="flex items-center mb-4">
            <p className="font-bold w-16">이름</p>
            <div className="border border-black p-2 w-48 text-left pl-4">
              {userInfo.name}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <p className="font-bold w-16">아이디</p>
            <div className="border border-black p-2 w-48 text-left pl-4">
              {userInfo.id}
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold w-16">학번</p>
            <div className="border border-black p-2 w-48 text-left pl-4">
              {userInfo.studentId}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
