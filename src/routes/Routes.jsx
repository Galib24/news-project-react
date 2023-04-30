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
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms/Terms";
import Condition from "../layouts/condition";

 const router = createBrowserRouter([
  {
    path: 'Info',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: 'terms',
        element: <Terms></Terms>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
     
   
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
        loader: ({params}) => fetch(`https://news-project-client-server-galib24.vercel.app/categories/${params.id}`)
      }
    ]
  },
  {
    path: 'news',
    element: <NewsLayout></NewsLayout>,
    children: [
     {
      path: ':id',
      element: <PrivateRoute><News></News></PrivateRoute> ,
      loader: ({params}) => fetch(`https://news-project-client-server-galib24.vercel.app/news/${params.id}`)
     }
    ]

  },
  {
    path: 'Conditions',
    element: <Condition></Condition>,
    children: [
      {
        path: 'terms',
        element: <Terms></Terms>
      }
    ]
  }
  
 ])
export default router;