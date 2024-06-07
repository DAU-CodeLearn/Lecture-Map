import GoToMapPage from "../components/GoToMapPage.jsx";
import S06SideBar from "../components/S06SideBar.jsx";
import S06Second from "./S06/S06Second.jsx";
import { Outlet } from "react-router-dom";

export default function S06Page() {
  return (
    <>
      <div className="flex h-full w-[90vw]">
        <S06SideBar />
      </div>
      <Outlet />
    </>
  );
}
