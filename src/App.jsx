import HomePage from "./pages/homepage"
import Login from "./pages/logIn"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import SignUp from "./pages/singUp"
import Aboutus from "./pages/aboutUs"
import Contact from "./pages/contact"
import Account from "./pages/account"
import Cart from "./pages/cart"

const router = createBrowserRouter([
  {
   path:"/",
   element:<HomePage />

  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/signup",
    element:<SignUp />
  },
  {
    path:"/aboutUs",
    element:<Aboutus />
  },
  {
     path:"/contact",
     element:<Contact />
  },
  {
    path:"/account",
    element:<Account />
  },
  {
    path:"/cart",
    element: <Cart />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
