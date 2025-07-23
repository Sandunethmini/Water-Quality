"use client";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Box from './components/Box';
import Table from './components/Table';

export default function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1">
        <Header />
        <Box />
        <Table />
      </div>
    </div>
  );
}
