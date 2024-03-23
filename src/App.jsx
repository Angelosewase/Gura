import HomePage from "./pages/homepage"
import Login from "./pages/logIn"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import SignUp from "./pages/singUp"
import Aboutus from "./pages/aboutUs"

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
