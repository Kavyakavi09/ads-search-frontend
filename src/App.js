import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Navigate to='/ads' replace />} />
          <Route path={'/ads'} element={<Home />} />
          <Route path={'/ads/search'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
