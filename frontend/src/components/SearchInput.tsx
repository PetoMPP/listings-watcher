import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function SearchInput({targets}: {targets: {name: string, display: string}[]}) {
    const navigate = useNavigate();
    const [query, setQuery] = useSearchParams();
    const [inputValue, setInputValue] = useState(query.get("q") ?? "");
    const handleSearch = () => {
        navigate("/search");
        query.set("q", inputValue);
        setQuery(query);
    };
    
    const btnClassName = `btn btn-outline transition-all duration-200 btn-primary join-item ${targets.length === 0 ? "btn-disabled" : ""}`;
    return (
        <div className="join">
            <div className="input-floating w-72">
                <input id="search-input" type="text" className="input join-item" placeholder="Search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <label className="input-floating-label" htmlFor="search-input">Search</label>
            </div>
            <button className={btnClassName} onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}