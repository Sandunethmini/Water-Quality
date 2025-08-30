"use client";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Box from './components/Box';
import Table from './components/Table';

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col p-4 gap-6 bg-gray-50">
        <Header />
        <Box />
        <Table />
      </div>
    </div>
  );
}
