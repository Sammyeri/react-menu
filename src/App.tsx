import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsRoute from './components/DetailsRoute';
import Header from './components/Header';
import MenuRoute from './components/MenuRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MenuRoute></MenuRoute>}></Route>
          <Route path="/details/:id" element={<DetailsRoute></DetailsRoute>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
