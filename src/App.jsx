import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SponsorPage from './pages/SponsorPage';
import Login from './pages/Login';
import Dashboard from './pages/HackerDashboard';
import CheckIn from './pages/CheckIn';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LandingPage />} />
      <Route path="sponsor" element={<SponsorPage />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="checkin" element={<CheckIn />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
