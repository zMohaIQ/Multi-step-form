import ActiveStates from "./components/ActiveStates";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/active",
    element: <ActiveStates />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
