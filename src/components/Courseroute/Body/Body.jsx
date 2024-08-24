import YoutubeVid from "../YoutubeVid/YoutubeVid";
import Navtab from "../Navtab/Navtab";
import Righttab from "../Righttab/Righttab";
import Topcourse from "../Topcourse/Topcourse";

const Body = () => {
  return (
    <>
      <div className="2xl:container mx-auto bg-[#FCFCFC]">
        <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div>
            <YoutubeVid></YoutubeVid>
            <Navtab></Navtab>
          </div>
          <div className="flex justify-end">
            <Righttab></Righttab>
          </div>
        </div>
        <Topcourse></Topcourse>
      </div>
    </>
  );
};

export default Body;
