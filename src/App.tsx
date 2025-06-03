import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landindpage from './Components/LandingPageComponent/Landindpage'
import DemoPage from './Pages/DemoPage'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landindpage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Router>
  )
}

export default App
