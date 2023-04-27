import {
  createBrowserRouter,
} from "react-router-dom"
import Main from "../layouts/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../pages/Home/Home/Home";
import Catagory from "../pages/Home/Catagory/Catagory";
import NewsLoayout from "../layouts/NewsLoayout";
import News from "../pages/News/NewsDetails/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/category/:id",
        element: <Catagory></Catagory>,
        loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`)
      }
    ]
  },
  {
    path: 'news',
    element: <NewsLoayout></NewsLoayout>,
    children: [
      {
        path: ':id',
        element: <News></News>
      }
    ]
  }
]);

export default router;