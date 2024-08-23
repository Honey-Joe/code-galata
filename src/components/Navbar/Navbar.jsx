import { Menu } from "lucide-react";
import { navlogo } from "../../assets/image";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="2xl:container mx-auto bg-white">
        <div className="w-[90%]  grid grid-cols-2 mx-auto my-5 items-center justify-between">
          <div className="">
            <img src={navlogo} alt="logo" width={100} />
          </div>
          <div className="flex items-center justify-end">
            <div className="lg:block hidden" id="show">
              <div className=" lg:flex gap-20 absolute  left-0 top-20 lg:static bg-white w-[100%] z-50">
                <div>
                  <ul className=" lg:flex gap-4 items-center justify-center ">
                    <li className=" font-normal text-lg font-[LexendDeca] p-2 text-center lg:p-0 hover:text-[#1176F0]">
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li className=" font-normal text-lg font-[LexendDeca] p-2 text-center lg:p-0 ">
                      <Link to={"/course"} >Course</Link>
                    </li>
                    <li className=" font-normal text-lg font-[LexendDeca] p-2 text-center lg:p-0">
                      <Link to={"/about"}>About us</Link>
                    </li>
                    <li className=" font-normal text-lg font-[LexendDeca] p-2 text-center lg:p-0">
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li className=" font-normal text-lg font-[LexendDeca] p-2 text-center lg:p-0">
                      <p>Blog</p>
                    </li>
                    <li className=" font-normal text-lg font-[LexendDeca] p-2 text-center lg:p-0  px-3 py-2 rounded-lg flex items-center  text-white justify-center">
                      <button className="bg-blue-500 px-3 py-1 rounded-lg text-white ">Log in </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Menu
              className="lg:hidden"
              onClick={() => {
                const nav = document.getElementById("show");
                nav.classList.toggle("hidden");
              }}
            ></Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
