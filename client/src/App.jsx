import MainLayout from "./layouts/main-layout";
import AllRecords from "./pages/AllRecords";
import Dashboard from "./pages/Dashboard";
import Diagnosis from "./pages/Diagnosis";

function App() {
  return (
    <MainLayout header="Dashboard">
      <Diagnosis />
    </MainLayout>
  );
}

export default App;
