import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import DecisionPage from './components/decisionPage';
import DecisionsPage from './components/decisionsPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center w-full'>
				<header className='flex justify-between w-full p-4 bg-white'>
					<div className="text-xl font-bold ">My Decisions</div>
					<div className="text-xl font-bold ">Display options</div>
				</header>
				<main className='w-full max-w-[800px]'>
					<Router>
						<Routes>
							<Route path={'/'} element={<DecisionsPage />} />
							<Route path={'/decision/:id'} element={<DecisionPage />} />
						</Routes>
					</Router>
				</main>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
