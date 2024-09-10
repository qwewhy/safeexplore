import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './MyComponents/HomePage';
import SafetyTips from './MyComponents/SafetyTips';
import Community from './MyComponents/Community';
import About from './MyComponents/About';
import UnityGame from './MyComponents/UnityGame';
import AchievementsPage from './MyComponents/AchievementsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/safety-tips" element={<SafetyTips />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/UnityGame" element={<UnityGame />}/>
          <Route path="/AchievementsPage" element={<AchievementsPage />}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;