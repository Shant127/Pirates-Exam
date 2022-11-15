import './App.css';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element = {<Create />} />
        <Route path="/pirates" element = {<Dashboard />} />
        <Route path="/pirates/detail/:pirate_id" element = {<Detail />} />
      </Routes>
    </fieldset>

  );
}

export default App;
