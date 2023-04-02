import MainLayout from "./layouts/main-layout";
import AllRecords from "./pages/AllRecords";
import Dashboard from "./pages/Dashboard";
import AdminConsole from "./pages/AdminConsole";

// import Diagnosis from "./pages/Diagnosis";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <MainLayout header="Dashboard">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allrecords" element={<AllRecords />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminConsole />} />
        
        {/* <Route path="/diagnosis" element={<Diagnosis />} /> */}
      </Routes>
    </MainLayout>
  );
}

export default App;
