import './App.scss';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import TeamPage from './pages/TeamPage';
import MatchPage from './pages/MatchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/team/:teamName" element={<TeamPage />} />
          <Route path="/team/:teamName/matches/:year" element={<MatchPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
