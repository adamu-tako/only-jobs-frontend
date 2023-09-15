import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Overview from "./pages/dashboard/views/Overview";
import JobOffers from "./pages/dashboard/views/JobOffers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="offers" element={<JobOffers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
