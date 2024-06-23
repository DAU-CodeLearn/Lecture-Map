import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mapSrc from "../../assets/S06/S06F3.png";

export default function S06Sixth() {
  const [timetable, setTimetable] = useState([]);
  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [today, setToday] = useState("");
  const tmp_peroid = 10;
  const tmp_week = "수";
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
    const floor = 3; // Update this to reflect the current floor

    fetch("http://localhost:8080/classroomtime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        build: buildnum,
        floor: floor,
        week: day,
        time: period,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("Fetched data:", data);
        setTimetable(data.lectures || []);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const isHighlighted = (room) => {
    return timetable.some(
      (lecture) =>
        lecture.lecture_room === room &&
        lecture.lecture_start <= currentPeriod &&
        lecture.lecture_end >= currentPeriod &&
        lecture.week === today
    );
  };

  const roomLinks = [
    { room: "0302", top: "16%", left: "42.5%", width: "2.3%", height: "3%" },
    { room: "0308", top: "66.5%", left: "80.8%", width: "2.7%", height: "3%" },
    { room: "0319", top: "32.7%", left: "57.4%", width: "3%", height: "3.2%" },
    { room: "0320", top: "32.7%", left: "43.4%", width: "3%", height: "3.2%" },
    { room: "0321", top: "32.7%", left: "32.4%", width: "3%", height: "3.2%" },
    { room: "0322", top: "32.7%", left: "19.8%", width: "3%", height: "3.2%" },
  ];

  return (
    <div className="relative">
      <img src={mapSrc} alt="Map" className="w-full h-[93vh] object-contain" />
      {roomLinks.map(({ room, top, left, width, height }) => (
        <Link
          key={room}
          to={`/HadanCampusMap/S06/03/${room}`}
          style={{
            position: "absolute",
            top: top,
            left: left,
            width: width,
            height: height,
            backgroundColor: isHighlighted(room)
              ? "rgba(255, 0, 0, 0.5)"
              : "rgba(0, 255, 0, 0.5)",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
}
