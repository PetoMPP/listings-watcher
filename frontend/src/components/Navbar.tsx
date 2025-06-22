import { Link } from "react-router";
import Logo from "./icons/Logo";

export default function Navbar() {
    return (
        <div className="absolute fixed z-10 navbar border-b border-primary p-0 justify-between">
            <Link to="/" className="text-primary-content bg-primary inline-flex w-72 p-2 justify-between">
                <Logo className="h-10 w-10" />
                <div className="font-semibold text-3xl">Listings watcher</div>
            </Link>
            <div className="p-2 flex gap-2">
                <Link to="/search" className="btn">
                    Search
                </Link>
                <Link to="/searches" className="btn">
                    Saved searches
                </Link>
                <Link to="/profile" className="btn">
                    Profile
                </Link>
            </div>
        </div>
    )
}