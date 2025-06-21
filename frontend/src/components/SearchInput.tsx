import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function SearchInput() {
    const navigate = useNavigate();
    const [query, setQuery] = useSearchParams();
    const [inputValue, setInputValue] = useState(query.get("q") ?? "");
    const handleSearch = () => {
        navigate("/search");
        query.set("q", inputValue);
        setQuery(query);
    };
    
    return (
        <div className="join max-w-sm">
            <div className="input-floating w-96">
                <input id="search-input" type="text" className="input join-item" placeholder="Search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <label className="input-floating-label" htmlFor="search-input">Search</label>
            </div>
            <button className="btn btn-outline btn-primary join-item" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}