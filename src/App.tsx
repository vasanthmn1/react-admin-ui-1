// import Home from "./pages/Home"
// import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
  // Route,
  // Link,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Users from "./pages/user/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navabar/Navbar";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";

import './styles/global.scss'
import Footer from "./components/footer/Footer";
function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContanier">
            <Menu />
          </div>
          <div className="contentContanier">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/products',
          element: <Products />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
    // {
    //   path: '/users',
    //   element: <Users />
    // },
    // {
    //   path: '/products',
    //   element: <Products />
    // }
  ])



  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
