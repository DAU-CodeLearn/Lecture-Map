import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mapSrc from "../../assets/S06/S06F6.png";

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
    { room: "0601", top: "38%", left: "28.5%" },
    { room: "0602", top: "38%", left: "34.8%" },
    { room: "0603", top: "38%", left: "40.7%" },
    { room: "0604", top: "38%", left: "50.1%" },
    { room: "0606", top: "16%", left: "73%" },
    { room: "0607", top: "27.5%", left: "67%" },
    { room: "0608", top: "24%", left: "76.9%" },
    { room: "0609", top: "35.5%", left: "71%" },
    { room: "0611", top: "66%", left: "63.3%" },
    { room: "0633", top: "49%", left: "29.5%" },
  ];

  return (
    <div className="relative">
      <img src={mapSrc} alt="Map" className="w-full h-[93vh] object-contain" />
      {roomLinks.map(({ room, top, left }) => (
        <Link
          key={room}
          to={`/HadanCampusMap/S06/06/${room}`}
          className={`absolute ${isNotHighlighted(room) ? "bg-yellow-300 bg-opacity-50" : "bg-transparent"} top-[${top}] left-[${left}] w-[2.3%] h-[3%] border-2 border-red-500 cursor-pointer`}
        />
      ))}
    </div>
  );
}
