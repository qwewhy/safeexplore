import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './MyComponents/HomePage';
import SafetyTips from './MyComponents/SafetyTips';
import Community from './MyComponents/Community';
import About from './MyComponents/About';
import MyIsland from './MyComponents/MyIsland';
import AchievementsPage from './MyComponents/AchievementsPage';
import Layout from './MyComponents/Layout';
import { Rotate3D } from 'lucide-react';
import LocationOverviewPage from './MyComponents/LocationOverviewPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/safety-tips" element={<SafetyTips />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/MyIsland" element={<MyIsland />}/>
          <Route path="/AchievementsPage" element={<AchievementsPage />}/>
          <Route path="/LocationOverviewPage" element={<LocationOverviewPage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;