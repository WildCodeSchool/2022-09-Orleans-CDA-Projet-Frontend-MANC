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
      <div className="absolute z-30 gap-24 flex flex-col items-center height-minus-nav ">
        <h1 className="text-7xl w-fit bg-slate-800 bg-opacity-90 rounded-md p-8 m-20 flex flex-col shadow-2xl">
          <div>
            <span className="text-green-400">Map</span>
            <span className="text-lightblue">Quest</span>
          </div>
          <span className="pt-3 text-white text-center text-3xl">
            Have fun learning!
          </span>
        </h1>

        <div className="flex gap-20">
          <Link to="/learn">
            <div
              className="card w-64 hover:shadow-2xl"
              data-aos="fade-in"
              data-aos-duration="500"
            >
              <div className=" bg-norepeat rounded-t-md bg-cover bg-[url('./img_video4.png')] h-32"></div>
              <p className="text-xl bg-slate-800 text-white bg-opacity-90 p-4 text-center rounded-b-md ">
                Explore new countries
              </p>
            </div>
          </Link>
          <Link to="/play">
            <div
              className="card w-64 hover:shadow-2xl"
              data-aos="fade-in"
              data-aos-duration="1200"
            >
              <div className=" bg-norepeat rounded-t-md bg-cover bg-[url('./img_video3.png')] h-32"></div>
              <p className="text-xl bg-slate-800 text-white bg-opacity-90 p-4 text-center rounded-b-md ">
                Test your knowledge
              </p>
            </div>
          </Link>
          <Link to="/play">
            <div
              className="card w-64 hover:shadow-2xl"
              data-aos="fade-in"
              data-aos-duration="1900"
            >
              <div className=" bg-norepeat rounded-t-md bg-cover bg-[url('./img_video2.png')] h-32"></div>
              <p className="text-xl bg-slate-800 text-white bg-opacity-90 p-4 text-center rounded-b-md ">
                Compete
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="z-10 h-full absolute w-full">
        <video
          autoPlay
          loop
          muted
          poster="/imgHome.png"
          className="absolute object-fill w-full h-full"
        >
          <source
            src="http://37.187.90.23/mapquest/vid/home1reduce.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Home;
