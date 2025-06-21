import SearchInput from "../components/SearchInput"

export default function Search() {
    return (
        <>
            <SearchInput />
            <div className="pt-4">
                <p className="text-sm text-gray-500">This is a placeholder for search results.</p>
            </div>
        </>
    )
}