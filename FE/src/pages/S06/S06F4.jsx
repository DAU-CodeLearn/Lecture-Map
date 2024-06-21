import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mapSrc from "../../assets/S06/S06F4.png";

export default function S06Sixth() {
  const [timetable, setTimetable] = useState([]);
  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [today, setToday] = useState("");
  const tmp_peroid = 5;

  useEffect(() => {
    function getCurrentPeriod() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Calculate the total minutes from 08:00
      let totalMinutes = (hours - 8) * 60 + minutes;

      // If before 08:00, it is not within the period range
      if (totalMinutes < 0) {
        return 0; // 0 교시 (이전 시간)
      }

      // Periods 1 to 20 are every 30 minutes starting from 08:00
      if (totalMinutes < 10 * 60) {
        // Before 18:00 (20th period end)
        return Math.floor(totalMinutes / 30) + 1;
      }

      // After 18:00, periods are every 25 minutes
      totalMinutes -= 10 * 60; // Subtract 600 minutes (18:00)

      return Math.floor(totalMinutes / 25) + 21;
    }

    function getToday() {
      const now = new Date();
      const days = ["일", "월", "화", "수", "목", "금", "토"];
      return days[now.getDay()];
    }

    const period = getCurrentPeriod();
    const day = getToday();
    setCurrentPeriod(period);
    setToday(day);

    const buildnum = "S06"; // Update this to reflect the current building number
    const floor = 6; // Update this to reflect the current floor

    fetch("http://localhost:8080/classroomtime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        build: buildnum,
        floor: floor,
        week: day,
        time: tmp_peroid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setTimetable(data.lectures || []);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const isNotHighlighted = (room) => {
    return !timetable.some(
      (lecture) =>
        lecture.lecture_room === room &&
        lecture.lecture_start <= tmp_peroid &&
        lecture.lecture_end >= tmp_peroid &&
        lecture.week === today
    );
  };

  const roomLinks = [
    { room: "0401", top: "16%", left: "27.9%", width: "2.5%", height: "3%" },
    { room: "0405", top: "16%", left: "54.4%", width: "2.6%", height: "3%" },
    { room: "0408", top: "53.8%", left: "80.7%", width: "2.6%", height: "3%" },
    { room: "0409", top: "72.4%", left: "80.7%", width: "2.6%", height: "3%" },
    { room: "0420", top: "32.4%", left: "59%", width: "2.7%", height: "3.2%" },
    { room: "0421", top: "32.4%", left: "52.8%", width: "2.7%", height: "3.2%" },
    { room: "0424", top: "32.2%", left: "36.9%", width: "3.2%", height: "3.4%" },
    { room: "0425", top: "32.2%", left: "27.6%", width: "3.2%", height: "3.4%" },
  
  ];

  return (
    <div className="relative">
      <img src={mapSrc} alt="Map" className="w-full h-[93vh] object-contain" />
      {roomLinks.map(({ room, top, left, width, height }) => (
        <Link
          key={room}
          to={`/HadanCampusMap/S06/04/${room}`}
          style={{
            position: "absolute",
            top: top,
            left: left,
            width: width,
            height: height,
            backgroundColor: isNotHighlighted(room) ? "rgba(255, 255, 0, 0.5)" : "transparent",
            border: "2px solid red",
            cursor: "pointer"
          }}
        />
      ))}
    </div>
  );
}
