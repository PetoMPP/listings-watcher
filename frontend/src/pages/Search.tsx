import { useState } from "react";
import SearchInput from "../components/SearchInput"
import SearchTargets from "../components/SearchTargets"

export default function Search() {
    const [targets, setTargets] = useState<{ name: string, display: string }[]>([]);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex lg:flex-row flex-col gap-2">
                <SearchInput targets={targets} />
                <SearchTargets onTargetsChanged={ts => setTargets(ts)} />
            </div>
            <div>
                <p className="text-sm text-gray-500">This is a placeholder for search results.</p>
            </div>
        </div>
    )
}