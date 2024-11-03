import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ConsiderationsPage from './components/considerationsPage';
import DecisionsPage from './components/decisionsPage';
import OptionsIconButton from './components/icon-buttons/optionsIconButton';

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      <div className='flex flex-col items-center w-full'>
				<header className='flex justify-between w-full p-4 text-black bg-white'>
					<div className="text-xl font-bold ">My Decisions</div>
					<div className="text-xl font-bold ">
						<OptionsIconButton />
					</div>
				</header>
				<main className='w-full max-w-[800px]'>
					<Router>
						<Routes>
							<Route path={'/'} element={<DecisionsPage />} />
							<Route path={'/considerations/:id'} element={<ConsiderationsPage />} />
						</Routes>
					</Router>
				</main>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
