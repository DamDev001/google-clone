import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import TheSearch from './Components/TheSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>

            <Route path='/search' element={<TheSearch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
