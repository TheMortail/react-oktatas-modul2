import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import NavigationComponent from './components/NavigationComponent';
import NativePage from './pages/NativePage';
import RHFPage from './pages/RHFPage';
import RHFCompPage from './pages/RHFCompPage';
import ZodPage from './pages/ZodPage';
import FieldArrayPage from './pages/FieldArrayPage';
import TorlesztoPage from './pages/TorlesztoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<NavigationComponent />}>
          <Route index element={<p>Modul 2 hazi</p>} />
          <Route path={'native'} element={<NativePage />} />
          <Route path={'rhf'} element={<RHFPage />} />
          <Route path={'rhfc'} element={<RHFCompPage />} />
          <Route path={'zod'} element={<ZodPage />} />
          <Route path={'fieldArray'} element={<FieldArrayPage />} />
          <Route path={'torleszto'} element={<TorlesztoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
