import MenuBar from "../../components/MenuBar.jsx";
import { Outlet } from "react-router-dom";

export default function IndexLayout() {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <MenuBar />
            <div className="flex-grow overflow-auto">
                <Outlet />
            </div>
        </div>
    );
}
