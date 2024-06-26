import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
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

export default function CreateUserTimeTable() {
  const [userInfo, setUserInfo] = useState(null);
  const [timetable, setTimetable] = useState([]);
  const [lectureCode, setLectureCode] = useState("");
  const [lectureId, setLectureId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        //console.log(decoded); // 디버깅을 위해 디코딩된 토큰 출력
        setUserInfo({
          id: decoded.tokenId,
          name: decoded.tokenName,
          studentId: decoded.tokenStudentId,
          issuedAt: new Date(decoded.iat * 1000).toLocaleString(),
          expiresAt: new Date(decoded.exp * 1000).toLocaleString(),
        });
        // Fetch timetable using the user's ID
        fetchTimetable(decoded.tokenId);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  const fetchTimetable = (userId) => {
    fetch("http://localhost:8080/myschedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("Fetched data:", data);
        if (Array.isArray(data.lecture)) {
          setTimetable(data.lecture);
        } else {
          console.error("Received non-array data");
          setTimetable([]); // 비어 있는 경우에도 빈 배열 설정
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleLectureCodeChange = (e) => {
    setLectureCode(e.target.value);
  };

  const handleLectureIdChange = (e) => {
    setLectureId(e.target.value);
  };

  const handleInsert = () => {
    if (!userInfo) {
      console.error("User info is not available.");
      return;
    }

    fetch("http://localhost:8080/insertuserschedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userInfo.id,
        lectureCode: lectureCode,
        lectureId: lectureId,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          alert("강의가 성공적으로 삽입되었습니다!");
          fetchTimetable(userInfo.id); // 삽입 후 시간표 다시 불러오기
          return res.json();
        } else {
          throw new Error("삽입에 실패했습니다.");
        }
      })
      .then((data) => {
        //console.log("Insert response:", data);
        // 필요한 경우 추가적인 작업을 여기서 수행할 수 있습니다.
      })
      .catch((error) => console.error("Error:", error));
    //console.log(`id: ${userInfo.id}, code: ${lectureCode}, ID: ${lectureId}`);
  };

  const handleDelete = () => {
    // 삭제 기능 구현 필요
    if (!userInfo) {
      console.error("User info is not available.");
      return;
    }

    fetch("http://localhost:8080/deleteuserschedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userInfo.id,
        lectureCode: lectureCode,
        lectureId: lectureId,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          alert("강의가 성공적으로 삭제되었습니다!");
          fetchTimetable(userInfo.id); // 삽입 후 시간표 다시 불러오기
          return res.json();
        } else {
          throw new Error("삭제에 실패했습니다.");
        }
      })
      .then((data) => {
        //console.log("Delete response:", data);
        // 필요한 경우 추가적인 작업을 여기서 수행할 수 있습니다.
      })
      .catch((error) => console.error("Error:", error));
    //console.log(`id: ${userInfo.id}, code: ${lectureCode}, ID: ${lectureId}`);
    //deleteuserschedule
  };

  return (
    <div className="h-[93vh]">
      <p className="pl-4 pt-4 text-2xl font-bold custom-font text-orange-500">2024년 1학기</p>
      <div className="flex items-center justify-between pl-5 pt-4 pb-4">
        <p className="text-5xl">내 시간표</p>
        <div className="flex items-center mr-96">
          {/* 약간의 오른쪽 여백 추가 */}
          <label htmlFor="lecture_code" className="mr-2 text-xl custom-font font-bold">강의 코드:</label>
          <input
            type="text"
            id="lecture_code"
            value={lectureCode}
            onChange={handleLectureCodeChange}
            className="small mr-4 rounded border border-gray-300"
          />
          <label htmlFor="lecture_id" className="mr-2 text-xl custom-font font-bold">분반:</label>
          <input
            type="text"
            id="lecture_id"
            value={lectureId}
            onChange={handleLectureIdChange}
            className="small mr-4 rounded border border-gray-300"
          />
          <button onClick={handleInsert} className="pl-7 mr-2 text-xl custom-font font-bold">삽입</button>
          <button onClick={handleDelete} className="pl-5 text-xl custom-font font-bold">삭제</button>
        </div>
      </div>
      <MyTimeTableCreate timetable={timetable} />
    </div>
  );
  
}
