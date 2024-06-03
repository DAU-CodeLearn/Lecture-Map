import GoToMapPage from "../components/GoToMapPage.jsx";
import SideBar from "../components/SideBar.jsx";
import S06Second from "./S06/S06Second.jsx";
import { Outlet } from "react-router-dom";

export default function S06Page() {
  return (
    <>
      <div className="flex h-full">
        <SideBar />
      </div>
      <Outlet />
    </>
  );
}
