import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Homepage from './pages/Home';
import RoomPage from './pages/Room';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/room/:roomId" element={<RoomPage />} />

      </Routes>

    </div>
  );
}

export default App;
