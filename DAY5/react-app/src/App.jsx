import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import User from './components/User'
import ReactHookForm from "./components/ReactHookForm";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
      <Navbar />
      <Login />
      </>
    },
    {
      path:'/home',
      element: <>
      <Navbar />
      <Home />
      </>
    },
    {
      path: '/about',
      element: <><Navbar /><About /></>
    },
    {
      path: '/contact',
      element: <><Navbar /> <Contact /></>
    },
    {
      path: '/login',
      element: <>
      <Navbar />
      <Login />
      </>
    },
    {
      path: '/reacthookform',
      element: <>
      <Navbar />
      <ReactHookForm />
      </>
    },
    {
      path: '/user/:username',
      element: <>
      <Navbar />
      <User />
      </>
    }
  ])



  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
