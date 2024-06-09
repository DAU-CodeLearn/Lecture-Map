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
    <div className="flex flex-col items-center justify-center h-max p-5">
      <div className="w-full text-left mb-10 mt-2">
        <h1 className="text-4xl font-bold text-gray-500 custom-font">
          나의 정보
          <span className="text-xl ml-2 custom-font text-gray-400">가입하신 회원 정보입니다.</span>
        </h1>
        <hr className="border-t-2 border-gray-300 mt-6" />
      </div>
    
      
      {userInfo && (
  <>
    <div className="flex items-center mb-5 mt-8">
      <p className="font-bold w-40 custom-font text-right" style={{ fontSize: "16pt", marginRight: "50px" }}>이름</p>
      <div className="border border-black p-2 w-80 text-left pl-4 font-bold custom-font" style={{ fontSize: "15pt" }}>
        {userInfo.name}
      </div>
    </div>
    <div className="flex items-center mb-5">
      <p className="font-bold w-40 custom-font text-right" style={{ fontSize: "16pt", marginRight: "50px" }}>아이디</p>
      <div className="border border-black p-2 w-80 text-left pl-4 font-bold custom-font" style={{ fontSize: "15pt" }}>
        {userInfo.id}
      </div>
    </div>
    <div className="flex items-center mb-5">
      <p className="font-bold w-40 custom-font text-right" style={{ fontSize: "16pt", marginRight: "50px" }}>학번</p>
      <div className="border border-black p-2 w-80 text-left pl-4 font-bold custom-font" style={{ fontSize: "15pt" }}>
        {userInfo.studentId}
      </div>
    </div>
    <hr className="border-t-2 border-gray-300 w-full mb-14 mt-16" />
  </>
)}
      </div>
  );
}
