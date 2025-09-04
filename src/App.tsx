import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MissionPage from './components/MissionPage';
import ContactPage from './components/ContactPage';
import TeamPage from './components/TeamPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;