import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

 const router = createBrowserRouter([
  {
    path: 'Info',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: 'news',
    element: <NewsLayout></NewsLayout>,
    children: [
     {
      path: ':id',
      element: <News></News>,
      loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
     }
    ]
  }
 ])
export default router;