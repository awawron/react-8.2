import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

function getXY() {
  const nums = new URLSearchParams(window.location.search);
  const x = nums.get('x');
  const y = nums.get('y');
  return { x, y };
}

function Add() {
  const { x, y } = getXY();
  return <h3>{parseInt(x) + parseInt(y)}</h3>;
}

function Sub() {
  const { x, y } = getXY();
  return <h3>{parseInt(x) - parseInt(y)}</h3>;
}

function Mul() {
  const { x, y } = getXY();
  return <h3>{parseInt(x) * parseInt(y)}</h3>;
}

function Div() {
  const { x, y } = getXY();
  return <h3>{parseInt(x) / parseInt(y)}</h3>;
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/mul" element={<Mul />} />
        <Route path="/div" element={<Div />} />
      </Routes>
    </div>
  );
}
