import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const days = ["월", "화", "수", "목", "금", "토"];
const periods = [
  "08:00-08:30",
  "08:30-09:00",
  "09:00-09:30",
  "09:30-10:00",
  "10:00-10:30",
  "10:30-11:00",
  "11:00-11:30",
  "11:30-12:00",
  "12:00-12:30",
  "12:30-13:00",
  "13:00-13:30",
  "13:30-14:00",
  "14:00-14:30",
  "14:30-15:00",
  "15:00-15:30",
  "15:30-16:00",
  "16:00-16:30",
  "16:30-17:00",
  "17:00-17:30",
  "17:30-18:00",
  "18:00-18:25",
  "18:25-18:50",
  "18:50-19:15",
  "19:15-19:40",
  "19:40-20:05",
  "20:05-20:30",
  "20:30-20:55",
  "20:55-21:20",
  "21:20-21:45",
  "21:45-22:10",

];

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 84%; /* 전체 표의 너비를 줄임 */
  table-layout: fixed; /* 고정된 레이아웃 사용 */
  th, td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 1px; /* 셀의 패딩을 줄임 */
    width: calc(100% / 8); /* 모든 열의 너비를 동일하게 설정, 요일 수에 따라 변경 */
    word-wrap: break-word; /* 단어 단위로 줄바꿈 */
    height: 20px; /* 셀의 높이를 줄임 */
  }
  th {
    background-color: #f2f2f2;
    height: 30px; /* 헤더 셀의 높이 */
  }
`;

const StyledTd = styled.td`
  word-wrap: break-word;
  hyphens: auto; /* 단어 단위로 줄바꿈 */
  height: 20px; /* 셀의 높이를 줄임 */
`;

function TimeTable({ build, roomNum }) {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    const fetchTimetable = () => {
      fetch("http://localhost:8080/classroom", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomNum, build }),
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
    };

    fetchTimetable();
  }, [build, roomNum]);

  const mergeLectures = (lectures) => {
    const merged = Array.from({ length: periods.length }, () =>
      days.reduce((acc, day) => {
        acc[day] = null;
        return acc;
      }, {})
    );

    lectures.forEach(({ lecture_code, lecture_id, lecturename, week, lecture_start, lecture_end }) => {
      for (let i = lecture_start - 1; i < lecture_end; i++) {
        merged[i][week] = {
          lecture_code,
          lecture_id,
          lecturename,
          span: lecture_end - lecture_start + 1,
          start: lecture_start - 1,
        };
      }
    });

    return merged;
  };

  const mergedTimetable = mergeLectures(timetable);

  return (
    <div className="h-[93vh] w-[90vw] overflow-auto">
      <StyledTable>
        <thead>
          <tr>
            <th>시간</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
            <th>교시</th>
          </tr>
        </thead>
        <tbody>
          {mergedTimetable.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{periods[rowIndex]}</td>
              {days.map((day) => {
                const cell = row[day];
                if (!cell) return <StyledTd key={day}></StyledTd>;
                if (cell.start !== rowIndex) return null;
                return (
                  <StyledTd key={day} rowSpan={cell.span}>
                    {cell.lecturename}<br />
                    {cell.lecture_code}-{cell.lecture_id}
                  </StyledTd>
                );
              })}
              <td>{rowIndex + 1}교시</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}

TimeTable.propTypes = {
  build: PropTypes.string.isRequired,
  roomNum: PropTypes.string.isRequired,
};

export default TimeTable;
