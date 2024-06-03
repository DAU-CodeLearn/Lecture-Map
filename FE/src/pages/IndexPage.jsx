import { Link } from "react-router-dom";

export default function IndexPage() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Link to="/login">
                <button className="mb-10 text-3xl">로그인</button>
            </Link>
            <Link to="/register">
                <button className="text-3xl">회원가입</button>
            </Link>
        </div>
    );
}