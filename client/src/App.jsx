import MainLayout from "./layouts/main-layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <MainLayout header="Dashboard">
      <Dashboard />
    </MainLayout>
  );
}

export default App;
