
import './app.scss'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Gigs from "./pages/gigs/Gigs"
import Gig from "./pages/gig/Gig"
import Orders from "./pages/orders/Orders"
import Add from "./pages/add/Add"
import Messages from "./pages/messages/Messages"
import Message from "./pages/message/Message"
import MyGigs from "./pages/myGigs/MyGigs"
import Login from "./pages/login/Login"
import Pay from './pages/pay/Pay';
import Success from './pages/success/Success';
import Register from "./pages/register/Register"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


function App() {

  const queryClient = new QueryClient();

  const Layout = () => {
     return (
         <div className="app">
             <QueryClientProvider client={queryClient}>
                <Navbar />
                <Outlet />
                <Footer />
             </QueryClientProvider>
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
              path: "/add",
              element: <Add />
            },
            {
              path: "/gigs",
              element: <Gigs />
            },
            {
              path: "/gig/:id",
              element: <Gig />
            },
            {
              path: "/orders",
              element: <Orders />
            },
            {
              path: "/mygigs",
              element: <MyGigs />
            },
            {
              path: "/messages",
              element: <Messages />
            },
            {
              path: "/message/:id",
              element: <Message />
            },
            {
              path: "/login",
              element: <Login />
            },
            {
              path: "/register",
              element: <Register />
            },
            {
              path: "/pay/:id",
              element: <Pay />
            },
            {
              path: "/success",
              element: <Success />
            }
         ]
      }
  ])

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
