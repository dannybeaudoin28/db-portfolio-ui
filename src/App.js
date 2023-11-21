import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
