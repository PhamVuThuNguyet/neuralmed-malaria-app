import MainLayout from "./layouts/main-layout";
import AllRecords from "./pages/AllRecords";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <MainLayout header="Dashboard">
      {/* <Dashboard /> */}
      <AllRecords />
    </MainLayout>
  );
}

export default App;
