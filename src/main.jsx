import ReactDOM from "react-dom/client"
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

const Applayout  = ()=>{
  return(
    <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout></Applayout>)
