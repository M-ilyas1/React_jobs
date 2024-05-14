import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";
import NotFound from "./Pages/NotFound";
import JobPage from "./Pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={ <Home /> } />
      <Route path="/jobs" element={ <JobsPage /> } />
      <Route path="/jobs/:id" element={ <JobPage /> } />
      <Route path="/add_jobs" element={ <NotFound /> } />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
