import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Page/Home/HomePage";
import JumpPage from "./Page/Jump/JumpPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/jump", element: <JumpPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
