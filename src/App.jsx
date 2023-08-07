import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SponsorPage from './pages/SponsorPage';
import Application from './pages/Application';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LandingPage />} />
      <Route path="sponsor" element={<SponsorPage />} />
      <Route path="application" element={<Application />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
