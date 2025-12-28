import './App.css'
import 'antd/dist/reset.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './components/pages/MainPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
