import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mapSrc from "../../assets/S06/S06F8.png";

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
        lecture.lecture_start <= tmp_peroid &&
        lecture.lecture_end >= tmp_peroid &&
        lecture.week === tmp_week
    );
  };

  const roomLinks = [
    { room: "0801", top: "38.4%", left: "53.5%", width: "2.3%", height: "3%" },
    { room: "0802", top: "40%", left: "50.1%", width: "2.3%", height: "3%" },
    { room: "0803", top: "38.2%", left: "46.8%", width: "2.3%", height: "3%" },
    { room: "0806", top: "38.2%", left: "33.8%", width: "2.3%", height: "3%" },
    { room: "0808", top: "38.2%", left: "28%", width: "2.3%", height: "3%" },
    { room: "0809", top: "49.3%", left: "22.1%", width: "2.3%", height: "3%" },
    { room: "0811", top: "49.3%", left: "30.1%", width: "2.3%", height: "3%" },
    { room: "0813", top: "49.3%", left: "38.25%", width: "2.3%", height: "3%" },
    { room: "0815", top: "49.3%", left: "44.5%", width: "2.3%", height: "3%" },
    { room: "0820", top: "57.3%", left: "57.7%", width: "2.3%", height: "3%" },
    { room: "0825", top: "78.3%", left: "63.2%", width: "2.3%", height: "3%" },
    { room: "0827", top: "65.5%", left: "63.2%", width: "2.3%", height: "3%" },
    { room: "0828", top: "38%", left: "69.8%", width: "2.3%", height: "3%" },
    { room: "0830", top: "24.3%", left: "76.7%", width: "2.3%", height: "3%" },
    { room: "0831", top: "16.4%", left: "72.7%", width: "2.3%", height: "3%" },
    { room: "0832", top: "23.2%", left: "69.3%", width: "2.3%", height: "3%" },
    { room: "0833", top: "31.5%", left: "64.95%", width: "2.3%", height: "3%" },
    { room: "0835", top: "38.5%", left: "60.95%", width: "2.3%", height: "3%" },
    
    
    

   
    
   
    
  ];

  return (
    <div className="relative">
      <img src={mapSrc} alt="Map" className="w-full h-[93vh] object-contain" />
      {roomLinks.map(({ room, top, left, width, height }) => (
        <Link
          key={room}
          to={`/HadanCampusMap/S06/08/${room}`}
          style={{
            position: "absolute",
            top: top,
            left: left,
            width: width,
            height: height,
            backgroundColor: isHighlighted(room) ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 255, 0, 0.5)",
            cursor: "pointer"
          }}
        />
      ))}
    </div>
  );
}
