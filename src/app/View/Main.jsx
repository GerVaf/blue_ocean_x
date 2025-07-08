import logo from "../../assets/classic.webp";
import About from "../components/About";
import CurvedLoop from "../components/CurveLoop";
import Player from "../components/Player";
import Poster from "../components/Poster";
import Pricing from "../components/Pricing";
import Tuto from "../components/Tuto";
const Main = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[30vh]">
        <img className="w-full h-full object-cover" src={logo} alt="" />
        {/* <div className=" text-[30px] font-bold col-span-2">
          Best Channel <br /> Service
        </div> */}
      </div>
      <div>
        <div className="bg-primary text-[12px] text-white px-5 p-2 flex flex-col gap-2 items-center rounded-t-md">
          🔥 LIMITED-TIME DEAL! GET 1 OR 2 MONTHS FREE WHEN YOU CHOOSE A 12 OR
          6-MONTHS PLAN
        </div>
        <Player />
        <div className="bg-primary text-white p-5 flex flex-col gap-2 items-center rounded-b-md">
          <div className="">
            🔥LIMITED OFFER: BUY 1 YEAR PLAN AND GET 2 MONTHS FREE!
          </div>
          <div>
            <button className="bg-white text-primary rounded-md p-2 px-5">
              GET NOW
            </button>
          </div>
        </div>
        <CurvedLoop
          marqueeText=" SPORT ✦ MOVIES ✦ SERIES ✦ ENT ✦ CHILL ✦"
          speed={2}
          curveAmount={300}
          interactive={false}
          className={""}
        />
      </div>
      <div className="p-2 flex flex-col gap-5">
        <Poster/>
        <About />
        <Pricing />
        <Tuto />
      </div>
    </div>
  );
};

export default Main;
