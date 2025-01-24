import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Team from './components/Team';
import HandleShowData from './components/Datashowing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/team" element={<Team />} />
          <Route path="/data-showing" element={<HandleShowData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
