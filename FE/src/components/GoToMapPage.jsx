import { Link } from "react-router-dom";

export default function GoToMapPage() {
    return (
        <div>
            <Link to="/one">
                <button>이전페이지</button>
            </Link>
        </div>
    )
}