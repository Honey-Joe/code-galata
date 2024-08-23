import ReactDOM from "react-dom/client"
import Body from "./components/Body/Body";
import "./index.css"
import Footer from "./components/Footer/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Courseroute from "./components/Courseroute/Courseroute";
import Aboutroute from "./components/Aboutroute/Aboutroute";
import Contactroute from "./components/Contactroute/Contactroute";

const Applayout  = ()=>{
  return(
    <>
    <Body></Body>
    <Footer></Footer>
    </>
  )
}
const approuter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout></Applayout>
  },
  {
    path:"/course",
    element:<Courseroute>

    </Courseroute>
  },
  {
    path:"/about",
    element:<Aboutroute></Aboutroute>
  },
  {
    path:"/contact",
    element:<Contactroute></Contactroute>
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}></RouterProvider>)
