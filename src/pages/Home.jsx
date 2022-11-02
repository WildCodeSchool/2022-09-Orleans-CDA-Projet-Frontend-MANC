import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="absolute top-0 -z-10 h-[1100px] w-full md:h-screen min-h-[700px]">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          poster="./imgHome.png"
        >
          <source
            src="http://37.187.90.23/mapquest/vid/home1reduce.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute z-30 top-[200px] gap-24 flex flex-col justify-center items-center align">
        <h1 className="text-7xl md:text-8xl w-fit bg-slate-800 bg-opacity-0 rounded-md flex flex-col">
          <div>
            <span className="text-green-400">Map</span>
            <span className="text-lightblue">Quest</span>
          </div>
          <span className="pt-3 text-white font-medium text-center text-4xl">
            Have fun learning!
          </span>
        </h1>

        <div className="flex flex-col md:flex-row gap-20">
          <Link to="/learn">
            <div
              className="card w-80 hover:shadow-2xl"
              data-aos="fade-in"
              data-aos-duration="500"
            >
              <div className=" bg-norepeat rounded-t-md bg-cover bg-[url('/compass.jpg')] h-44"></div>
              <p className="text-xl bg-slate-800 text-white bg-opacity-80 p-4 text-center rounded-b-md ">
                Explore new countries
              </p>
            </div>
          </Link>
          <Link to="/play">
            <div
              className="card w-80 hover:shadow-2xl"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-offset="-10"
            >
              <div className=" bg-norepeat rounded-t-md bg-cover bg-[url('/time.jpg')] h-44"></div>
              <p className="text-xl bg-slate-800 text-white bg-opacity-80 p-4 text-center rounded-b-md ">
                Test your knowledge
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
