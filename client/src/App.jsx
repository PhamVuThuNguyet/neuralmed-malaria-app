import MainLayout from "./layouts/main-layout";
import AllRecords from "./pages/AllRecords";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <MainLayout header="Dashboard">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allrecords" element={<AllRecords />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
