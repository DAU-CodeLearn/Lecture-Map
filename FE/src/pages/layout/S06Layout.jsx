import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar.jsx";

export default function S06Layout() {
  return (
    <div className="flex  overflow-hidden h-[93vh]">
      <SideBar />
      <div className="flex-grow overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}