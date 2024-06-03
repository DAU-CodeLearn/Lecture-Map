import MenuBar from "../../components/MenuBar.jsx";
import { Outlet } from "react-router-dom";

export default function IndexLayout() {
    return (
        <>
            <MenuBar />
            <Outlet />
        </>
    )
}