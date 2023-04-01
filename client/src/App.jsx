import MainLayout from "./layouts/main-layout";
import AllRecords from "./pages/AllRecords";
import ImportData from "./pages/ImportData";
import Dashboard from "./pages/Dashboard";
import Diagnosis from "./pages/Diagnosis"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Pathname } from "./utils/get-location";

function App() {
  const header = () => {
    switch (Pathname()) {
      case "/allrecords":
        return "All Records";
      case "/dashboard":
        return "Dashboard";
      case "/importdataset":
        return "Import new Dataset";
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
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/importdataset" element={<ImportData/>} />
      </Routes>
    </MainLayout>
  );
}

export default App;
