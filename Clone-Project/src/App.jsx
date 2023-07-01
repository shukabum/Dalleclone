import React from 'react'

import './App.css'
import Layout from './Components/Layout'
import Home from './Components/Home'
import { Route,Routes } from 'react-router-dom'
import CreatePost from './Components/CreatePost'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="/" element={<Home/>}/>
          <Route  path="/Home" element={<Home/>}/>
          <Route path="/Create" element={<CreatePost/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
