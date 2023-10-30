import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./Components/AppLayout"
import Home from "./Components/Home"
import About from "./Components/About";
import Error from "./Components/Error";
import Buy from "./Components/Buy";
import Brand from "./Components/Brand";
import './index.css'


const route = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/buy", element: <Buy /> },
      { path: "/buy/:params", element: <Brand /> },
    ],
  },
]);

const App = () => {
  
  return (
    <RouterProvider router={route} >
    App
    </RouterProvider>
  )
}

export default App