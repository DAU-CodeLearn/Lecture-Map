import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import '../components/styles.css'; // CSS 파일 임포트

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

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold mb-4 custom-font">{"< 기본 회원 정보 >"}</h1>
      <div className="grid grid-cols-2 gap-0 border border-black" style={{ width: '80%', maxWidth: '600px' }}>
        {userInfo && (
          <>
            <div className="flex items-center justify-center border-t-2 bg-gray-300 border border-black p-4 h-20">
              <p style={{ fontSize: "20pt" }} className="font-bold custom-font text-left">이름</p>
            </div>
            <div className="flex items-center border border-t-2 border-black p-4 h-20">
              <div className="w-full text-left pl-6 font-bold custom-font" style={{ fontSize: "16pt" }}>
                {userInfo.name}
              </div>
            </div>
            <div className="flex items-center justify-center bg-gray-300 border border-black p-4 h-20">
              <p style={{ fontSize: "20pt" }} className="font-bold custom-font">아이디</p>
            </div>
            <div className="flex items-center border border-black p-4 h-20">
              <div className="w-full text-left pl-6 font-bold custom-font" style={{ fontSize: "16pt" }}>
                {userInfo.id}
              </div>
            </div>
            <div className="flex items-center justify-center bg-gray-300 border border-black p-4 h-20">
              <p style={{ fontSize: "20pt"}} className="font-bold custom-font">학번</p>
            </div>
            <div className="flex items-center border border-black p-4 h-20 ">
              <div className="w-full text-left pl-6 font-bold custom-font " style={{ fontSize: "16pt" }}>
                {userInfo.studentId}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
