import ReactDOM from "react-dom/client"
import Body from "./components/Body/Body";
import "./index.css"
import Footer from "./components/Footer/Footer";
import Courseroute from "./components/Courseroute/Courseroute";
import Aboutroute from "./components/Aboutroute/Aboutroute";
import Contactroute from "./components/Contactroute/Contactroute";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const Applayout  = ()=>{
  return(
    <>
    <Navbar></Navbar>
    <Body></Body>
    <Footer></Footer>
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/course",
    element:<Contactroute></Contactroute>
  },
  {
    path:"/",
    element:<Applayout></Applayout>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)
