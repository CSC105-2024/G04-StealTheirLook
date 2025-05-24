import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full mt-[50px]">
            <h2>404 - Page Not Found</h2>
            <Link to="/">Go back to the Home Page</Link>
        </div>
    );
};

export default NotFoundPage;