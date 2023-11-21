import { Routes, Route } from 'react-router-dom';
import Home  from './components/home-component/home.component';
import Navigation from './components/navigation-component/navigation.component';
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
