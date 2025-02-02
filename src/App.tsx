import { Route, Routes } from 'react-router'
import Home from './pages/Home';  // Default import

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App