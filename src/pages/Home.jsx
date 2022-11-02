import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="md:h-[calc(100vh-80px)] flex flex-col items-center overflow-scroll">
      <div className="fixed top-0 -z-10 h-full w-full">
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
      <div className="h-full flex flex-col justify-evenly items-center py-5">
        <h1 className="text-7xl md:text-8xl w-fit mb-10 bg-slate-800 bg-opacity-0 rounded-md flex flex-col">
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
              data-aos-offset="-500"
            >
              <div className=" bg-norepeat rounded-t-md bg-cover bg-[url('/img_video4.png')] h-44"></div>
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
              data-aos-offset="-500"
            >
              <div className=" bg-norepeat rounded-t-md bg-cover bg-[url('/img_video3.png')] h-44"></div>
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
