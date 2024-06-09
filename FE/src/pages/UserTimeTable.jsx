import React, { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import MyTimeTableCreate from "../components/MyTimeTableCreate";

export default function UserTimeTable() {
  const [userInfo, setUserInfo] = useState(null);
  const [timetable, setTimetable] = useState([]);

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
        // Fetch timetable using the user's ID
        fetch("http://localhost:8080/myschedule", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: decoded.tokenId }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Fetched data:", data);
            if (Array.isArray(data.lecture)) {
              setTimetable(data.lecture);
            } else {
              console.error("Received non-array data");
            }
          })
          .catch((error) => console.error("Error:", error));
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  return (
    <div>
      <p>개인 시간표 페이지</p>
      {timetable.length > 0 ? <MyTimeTableCreate timetable={timetable} /> : <p>Loading timetable...</p>}
    </div>
  );
}
