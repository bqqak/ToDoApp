import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import FilterTabs from './components/FilterTabs/FilterTabs'
import AddTaskButton from './components/AddTaskButton'
function App() {
  

  return (
    <>
      <Header />
      <div>
        <FilterTabs />
        
      </div>
    </>
  )
}

export default App
