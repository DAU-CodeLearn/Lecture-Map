import React, { useState, useEffect } from "react";
import {jwtDecode}  from "jwt-decode";
import MyTimeTableCreate from "../components/MyTimeTableCreate";
import styled from "styled-components";

const FormRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;

  label {
    margin-right: 10px;
  }

  input, select, button {
    margin-right: 20px;
    margin-bottom: 10px; /* to ensure proper spacing in small screens */
    border: 1px solid #000; /* Adding border to all input, select, and button */
    padding: 5px;
  }

  input.small {
    width: 100px; /* Adjust width as needed */
  }

  button {
    margin-left: 20px;
    cursor: pointer;
  }
`;

export default function UserTimeTable() {
  const [userInfo, setUserInfo] = useState(null);
  const [timetable, setTimetable] = useState([]);
  const [lectureCode, setLectureCode] = useState("");
  const [lectureId, setLectureId] = useState("");

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

  const handleLectureCodeChange = (e) => {
    setLectureCode(e.target.value);
  };

  const handleLectureIdChange = (e) => {
    setLectureId(e.target.value);
  };

  const handleInsert = () => {
    // 실제 삽입 동작은 여기에서 구현할 수 있습니다.
    console.log(`Inserting lecture with code: ${lectureCode} and ID: ${lectureId}`);
  };

  return (
    <div>
      <p>개인 시간표 페이지</p>
      <div>
        <FormRow>
          <label htmlFor="lecture_code">강의 코드:</label>
          <input
            type="text"
            id="lecture_code"
            value={lectureCode}
            onChange={handleLectureCodeChange}
            className="small"
          />
          <label htmlFor="lecture_id">분반:</label>
          <input
            type="text"
            id="lecture_id"
            value={lectureId}
            onChange={handleLectureIdChange}
            className="small"
          />
          <button onClick={handleInsert}>삽입</button>
        </FormRow>
      </div>
      {timetable.length > 0 ? <MyTimeTableCreate timetable={timetable} /> : <p>Loading timetable...</p>}
    </div>
  );
}
