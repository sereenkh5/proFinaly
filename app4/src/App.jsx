import { useState } from 'react';
import Home from './Pages/Home/components/Home';
import About from './Pages/About/components/About';
import Login from './Pages/login/components/Login';
import Profile from './Pages/Pronfile/components/Profile';
import Root from './routes/Root';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Singup from './Pages/Singup/components/Singup';
import Cart from './Pages/cart/components/Cart';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/login",
        element:<Login/>

      },
      {
        path:"/sinup",
        element:<Singup/>

      },
      {
        path:"/cart",
        element:<Cart/>

      },
    ]
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
    <RouterProvider router={router} />
  
    </div>
  )
}

export default App
