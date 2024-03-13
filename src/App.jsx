import HomePage from "./pages/homepage"
import Login from "./pages/logIn"
import { createBrowserRouter,RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
   path:"/",
   element:<HomePage />

  },
  {
    path:"/login",
    element:<Login />
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
