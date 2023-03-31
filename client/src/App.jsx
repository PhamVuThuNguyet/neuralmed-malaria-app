import MainLayout from "./layouts/main-layout";
import AllRecords from "./pages/AllRecords";
import Dashboard from "./pages/Dashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const location = useLocation();
  const header = () => {
    switch (location.pathname) {
      case "/allrecords":
        return "All Records";
      case "/dashboard":
        return "Dashboard";
      default:
        return "";
    }
  };
  return (
    <MainLayout header={header()}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allrecords" element={<AllRecords />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
