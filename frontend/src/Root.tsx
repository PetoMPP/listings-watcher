import { Link, Outlet } from "react-router";
import logo from "/logo.svg"; // Adjust the path as necessary

export default function Root() {
    return (
        <div className="flex flex-col px-12 pt-2 max-h-[100lvh] relative">
            <Link to="/" className="flex gap-4 mb-2">
                <img className="h-10" src={logo} />
                <h1 className="font-semibold text-3xl pb-4">Listings watcher</h1>
            </Link>
            <Outlet />
        </div>
    )

}