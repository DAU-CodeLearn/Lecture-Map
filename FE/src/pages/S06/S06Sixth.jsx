import mapSrc from "../../assets/S06/6th.png";
import { Link } from "react-router-dom";

export default function S06Sixth() {
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
  const period = getCurrentPeriod();
  console.log(period);

  return (
    <div className="relative">
      <img src={mapSrc} alt="Map" className="w-full h-[93vh] object-contain" />
      <Link
        to="/HadanCampusMap/S06/06/0601"
        className="absolute top-[38%] left-[28.5%] w-[2.3%] h-[3%] bg-transparent border-2 border-red-500 cursor-pointer"
      />
      <Link
        to="/HadanCampusMap/S06/06/0602"
        className="absolute top-[38%] left-[34.8%] w-[2.3%] h-[3%] bg-transparent border-2 border-red-500 cursor-pointer"
      />
      <Link
        to="/HadanCampusMap/S06/06/0603"
        className="absolute top-[38%] left-[40.7%] w-[2.3%] h-[3%] bg-transparent border-2 border-red-500 cursor-pointer"
      />
      <Link
        to="/HadanCampusMap/S06/06/0604"
        className="absolute top-[38%] left-[50.1%] w-[2.3%] h-[3%] bg-transparent border-2 border-red-500 cursor-pointer"
      />
      <Link
        to="/HadanCampusMap/S06/06/0606"
        className="absolute top-[16%] left-[73%] w-[2.3%] h-[3%] bg-transparent border-2 border-red-500 cursor-pointer"
      />
      <Link
        to="/HadanCampusMap/S06/06/0607"
        className="absolute top-[27.5%] left-[67%] w-[2.3%] h-[3%] bg-transparent border-2 border-red-500 cursor-pointer"
      />
      <Link
        to="/HadanCampusMap/S06/06/0608"
        className="absolute top-[24%] left-[76.9%] w-[2.3%] h-[3%] bg-transparent border-2 border-red-500 cursor-pointer"
      />
      <Link
        to="/HadanCampusMap/S06/06/0609"
        className="absolute top-[35.5%] left-[71%] w-[2.3%] h-[3%] bg-transparent border-2 border-red-500 cursor-pointer"
      />
      <Link
        to="/HadanCampusMap/S06/06/0611"
        className="absolute top-[66%] left-[63.3%] w-[2.3%] h-[3%] bg-transparent border-2 border-red-500 cursor-pointer"
      />
      <Link
        to="/HadanCampusMap/S06/06/0633"
        className="absolute top-[49%] left-[29.5%] w-[2.3%] h-[3%] bg-transparent border-2 border-red-500 cursor-pointer"
      />
    </div>
  );
}
