import { Outlet } from "react-router-dom";
import MyPageSideBar from "../../components/MyPageSideBar.jsx";

export default function MyPageLayout() {
  return (
    <div className="flex  overflow-hidden h-[93vh]">
      <MyPageSideBar />
      <div className="flex-grow overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}