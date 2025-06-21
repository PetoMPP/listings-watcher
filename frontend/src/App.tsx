import './App.css'

function App() {
  return (
    <div className="w-96">
      <h1 className="font-semibold text-3xl pb-4">Listings watcher</h1>
      <div className="join max-w-sm">
        <input className="input join-item" placeholder="Search" />
        <button className="btn btn-outline btn-primary join-item">Search</button>
      </div>
    </div>
  )
}

export default App
