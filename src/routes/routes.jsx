import {
  createBrowserRouter,
} from "react-router-dom"
import Main from "../layouts/Main";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
      }
    ]
  },
]);

export default router;