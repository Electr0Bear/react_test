import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Task1 from '../pages/task1/task1';
import Task2 from '../pages/task2/task2';

function App() {
  return (
    <Routes>
      {/* <Route index element={<Navigate to="/task1" />} /> */}
      <Route path='/' element={<Task1 />} />
      <Route path='/task2' element={<Task2 />} />
    </Routes>
  );
}

export default App;
