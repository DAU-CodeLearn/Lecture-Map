import React, { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  padding: 20px;
  text-align: center;
`;

const TableStyles = styled.div`
  display: block;
  max-width: 100%;
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    table-layout: fixed;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
    th {
      &:first-child,
      &:last-child {
        width: 80px; /* 교시 및 시간 칸 크기 조정 */
      }
    }
    td {
      &:first-child,
      &:last-child {
        width: 80px; /* 교시 및 시간 칸 크기 조정 */
      }
    }
  }
`;

const days = ["월", "화", "수", "목", "금"];
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
];

export default function S06C0606() {
  const [timetable, setTimetable] = useState([]);
  const [period, setPeriod] = useState("");

  useEffect(() => {
    console.log("Fetching timetable...");
    const fetchTimetable = () => {
      fetch("http://localhost:8080/getTimetable", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lecture_room: "606" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            console.log("Fetched timetable:", data);
            setTimetable(data);
          } else {
            console.error("Received non-array data");
          }
        })
        .catch((error) => console.error("Error:", error));
    };

    fetchTimetable();
  }, []);

  const getCurrentPeriod = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    let totalMinutes = (hours - 8) * 60 + minutes;
    if (totalMinutes < 0) {
      return 0;
    }

    if (totalMinutes < 10 * 60) {
      return Math.floor(totalMinutes / 30) + 1;
    }

    totalMinutes -= 10 * 60;
    return Math.floor(totalMinutes / 25) + 21;
  };

  useEffect(() => {
    setPeriod(getCurrentPeriod());
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "시간",
        accessor: "time",
      },
      ...days.map((day) => ({
        Header: day,
        accessor: day,
      })),
      {
        Header: "교시",
        accessor: "period",
      },
    ],
    []
  );

  const data = useMemo(() => {
    const rows = periods.map((period, periodIndex) => {
      const row = {
        time: period,
        period: `${periodIndex + 1}교시`,
      };
      days.forEach((day) => {
        const lecture = timetable.find(
          (lec) =>
            lec.week === day &&
            lec.lecture_start <= periodIndex + 1 &&
            lec.lecture_end >= periodIndex + 1
        );
        row[day] = lecture ? lecture.lecturename : "";
      });
      return row;
    });
    return rows;
  }, [timetable]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="flex h-[93vh] w-[90vw]">
      <Container>
        <p>{period}교시 입니다.</p>
        <TableStyles>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableStyles>
      </Container>
    </div>
  );
}
