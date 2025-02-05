// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header'; // <-- Import Header here
import Home from './Pages/Home';
import News from './Pages/News';


function App() {
  return (
    <Router>
      <Header /> {/* Now Header is recognized */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      
      </Routes>
    </Router>
  );
}

export default App;
