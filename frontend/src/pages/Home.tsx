import { Link } from "react-router"

function Home() {
    return (
        <div className="flex flex-col items-center italic font-semibold text-4xl text-center pb-8">
            <p className="">Hello there!</p>
            <p>Maybe you'd consider<Link className="px-3 text-primary" to="/search">searching</Link>for something?</p>
        </div>
    )
}

export default Home