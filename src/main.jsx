import ReactDOM from "react-dom/client"
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import "./index.css"


const Applayout  = ()=>{
  return(
    <>
    <Body></Body>
    <Footer></Footer>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout></Applayout>)
