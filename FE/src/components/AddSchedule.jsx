import React, { useState } from "react";
import TimeTable from "./TimeTable"; // TimeTable 컴포넌트를 import 합니다.
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

  input.small, select.small {
    width: 100px; /* Adjust width as needed */
  }

  button {
    margin-left: 20px;
    cursor: pointer;
  }
`;

export default function AddSchedule() {
  const [build, setBuild] = useState("");
  const [roomNum, setRoomNum] = useState("");
  const [submittedBuild, setSubmittedBuild] = useState("");
  const [submittedRoomNum, setSubmittedRoomNum] = useState("");
  const [showTimetable, setShowTimetable] = useState(false);

  const [lectureData, setLectureData] = useState({
    lecture_code: "",
    lecture_id: "",
    lecturename: "",
    building: "",
    lecture_room: "",
    lecture_floor: "",
    week: "월",
    lecture_start: "",
    lecture_end: ""
  });

  const handleFetchTimetable = () => {
    setShowTimetable(false);
    setSubmittedBuild(build);
    setSubmittedRoomNum(roomNum);
    setTimeout(() => setShowTimetable(true), 0);
  };
  const handleFetchTimetableUpdate = () => {
    setShowTimetable(false);
    setSubmittedBuild(lectureData.building);
    setSubmittedRoomNum(lectureData.lecture_room);
    setTimeout(() => setShowTimetable(true), 0);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLectureData({ ...lectureData, [name]: value });
  };

  const handleInsert = () => {
    fetch("http://localhost:8080/insertlecture", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        building: lectureData.building,
        lectureFloor: lectureData.lecture_floor,
        lectureRoom: lectureData.lecture_room,
        lectureCode: lectureData.lecture_code,
        lectureId: lectureData.lecture_id,
        lectureName: lectureData.lecturename,
        week: lectureData.week,
        lectureStart: lectureData.lecture_start,
        lectureEnd: lectureData.lecture_end
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          alert("강의가 성공적으로 삽입되었습니다!");
          handleFetchTimetableUpdate();
          return res.json();
        } else {
          throw new Error("삽입에 실패했습니다.");
        }
      })
      .then((data) => {
        console.log("Insert response:", data);
        // 필요한 경우 추가적인 작업을 여기서 수행할 수 있습니다.
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleDelete = () => {
    const { building, lecture_floor, lecture_room, lecture_code, lecture_id } = lectureData;
    fetch("http://localhost:8080/deletelecture", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        building: building,
        lectureRoom: lecture_room,
        lectureCode: lecture_code,
        lectureId: lecture_id,
        lectureFloor: lecture_floor,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          alert("강의가 성공적으로 삭제되었습니다!");
          handleFetchTimetableUpdate();
          return res.json();
        } else {
          throw new Error("삭제에 실패했습니다.");
        }
      })
      .then((data) => {
        console.log("Delete response:", data);
        // 필요한 경우 추가적인 작업을 여기서 수행할 수 있습니다.
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <div>
        <h3>시간표 추가</h3>
        <FormRow>
          <label htmlFor="building">건물:</label>
          <input
            type="text"
            id="building"
            name="building"
            className="small"
            value={lectureData.building}
            onChange={handleInputChange}
          />
          <label htmlFor="lecture_floor">강의실 층:</label>
          <input
            type="number"
            id="lecture_floor"
            name="lecture_floor"
            className="small"
            value={lectureData.lecture_floor}
            onChange={handleInputChange}
          />
          <label htmlFor="lecture_room">강의실 번호:</label>
          <input
            type="text"
            id="lecture_room"
            name="lecture_room"
            className="small"
            value={lectureData.lecture_room}
            onChange={handleInputChange}
          />
          <label htmlFor="lecture_code">강의 코드:</label>
          <input
            type="text"
            id="lecture_code"
            name="lecture_code"
            value={lectureData.lecture_code}
            onChange={handleInputChange}
          />
          <label htmlFor="lecture_id">분반:</label>
          <input
            type="text"
            id="lecture_id"
            name="lecture_id"
            value={lectureData.lecture_id}
            onChange={handleInputChange}
          />
          <label htmlFor="lecturename">강의명:</label>
          <input
            type="text"
            id="lecturename"
            name="lecturename"
            value={lectureData.lecturename}
            onChange={handleInputChange}
          />
          <label htmlFor="week">요일:</label>
          <select
            id="week"
            name="week"
            value={lectureData.week}
            onChange={handleInputChange}
          >
            <option value="월">월</option>
            <option value="화">화</option>
            <option value="수">수</option>
            <option value="목">목</option>
            <option value="금">금</option>
            <option value="토">토</option>
          </select>
          <label htmlFor="lecture_start">시작 교시:</label>
          <input
            type="number"
            id="lecture_start"
            name="lecture_start"
            className="small"
            value={lectureData.lecture_start}
            onChange={handleInputChange}
          />
          <label htmlFor="lecture_end">종료 교시:</label>
          <input
            type="number"
            id="lecture_end"
            name="lecture_end"
            className="small"
            value={lectureData.lecture_end}
            onChange={handleInputChange}
          />
          <button onClick={handleInsert}>삽입</button>
          <button onClick={handleDelete}>삭제</button>
        </FormRow>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>시간표 조회</h3>
        <FormRow>
          <label htmlFor="build">건물:</label>
          <input
            type="text"
            id="build"
            className="small"
            value={build}
            onChange={(e) => setBuild(e.target.value)}
          />
          <label htmlFor="roomNum">강의실 번호:</label>
          <input
            type="text"
            id="roomNum"
            className="small"
            value={roomNum}
            onChange={(e) => setRoomNum(e.target.value)}
          />
          <button onClick={handleFetchTimetable}>조회</button>
        </FormRow>
        {showTimetable && <TimeTable build={submittedBuild} roomNum={submittedRoomNum} />}
      </div>
    </div>
  );
}
