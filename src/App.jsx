import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home.jsx';
import Warning from './pages/warning.jsx';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/warning" element={<Warning/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
