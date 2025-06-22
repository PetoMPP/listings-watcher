import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

export default function Root() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col px-12 items-center pt-20">
                <Outlet />
            </div>
        </>
    )

}