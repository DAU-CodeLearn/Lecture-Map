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
  width: 90%;
  table-layout: fixed;
  th, td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 1px;
    width: calc(100% / 8);
    word-wrap: break-word;
    height: 20px;
  }
  th {
    background-color: #f2f2f2;
    height: 45px;
    font-size: 18px;
  }
`;

const getColor = (key, colorMap) => {
  if (!colorMap[key]) {
    const colors = [
      "#FFDDC1", "#FFABAB", "#FFC3A0", "#FF677D", "#D4A5A5",
      "#FFA500", "#00A5CF", "#A3D6D4", "#FFD700", "#7B68EE",
      "#66CDAA", "#FF69B4", "#8A2BE2"
    ];
    const newColor = colors[Object.keys(colorMap).length % colors.length];
    colorMap[key] = newColor;
  }
  return colorMap[key];
};

const StyledTd = styled.td`
  word-wrap: break-word;
  hyphens: auto;
  height: 20px;
  background-color: ${(props) => props.color || "transparent"};
`;

function TimeTable({ build, roomNum }) {
  const [timetable, setTimetable] = useState([]);
  const colorMap = {}; // lecture_code와 lecture_id 조합에 따라 색상을 매핑하기 위한 객체

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
          //console.log("Fetched data:", data);
          if (Array.isArray(data.lectures)) {
            setTimetable(data.lectures);
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
      const key = `${lecture_code}-${lecture_id}`;
      for (let i = lecture_start - 1; i < lecture_end; i++) {
        merged[i][week] = {
          lecture_code,
          lecture_id,
          lecturename,
          span: lecture_end - lecture_start + 1,
          start: lecture_start - 1,
          key
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
                  <StyledTd key={day} rowSpan={cell.span} color={getColor(cell.key, colorMap)}>
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
