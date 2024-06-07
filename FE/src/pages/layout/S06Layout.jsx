import { Outlet } from "react-router-dom";
import S06SideBar from "../../components/S06SideBar.jsx";

export default function S06Layout() {
  return (
    <div className="flex  overflow-hidden h-[93vh]">
      <S06SideBar />
      <div className="flex-grow overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}