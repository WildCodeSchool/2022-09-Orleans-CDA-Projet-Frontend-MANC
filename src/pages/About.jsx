import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <header className="flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute z-30 top-[100px] flex flex-col items-center height-minus-nav ">
          <h1 className="text-7xl w-fit bg-slate-800 bg-opacity-70 rounded-md p-10 m-20 flex flex-col shadow-2xl">
            <div>
              <span className="text-green-400">About </span>
              <span className="text-lightblue">Us</span>
            </div>
            <span className="pt-3 text-white text-center text-3xl">
              Who are we ?
            </span>
          </h1>

          <p className="text-2xl text-white w-fit bg-slate-800 bg-opacity-70 rounded-md p-8 m-20 flex flex-col shadow-2xl">
            We are a group of 4 students actually in formation at the Orléans
            Wild Code School !<br />
            This is our first project using REACT.JS and the CSS library
            Tailwind.
            <br />
            For this project we had to build an application based on an API of
            our choice.
            <br />
            We choose to use the REST Countries API with the idea of creating a
            pedagogic website about the world we live in !<br />
            You can get more info about each member of the crew by scrolling
            down this page.
            <div className="flex justify-around pt-7">
              <BsChevronDoubleDown />
              <BsChevronDoubleDown />
              <BsChevronDoubleDown />
            </div>
          </p>

          <div className="container text-white max-w-5xl">
            <div
              class="mx-auto pb-10"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div class="relative m-0 shadow-lg flex bg-slate-800 bg-opacity-80 rounded-3xl">
                <div class="flex-no-shrink">
                  <img
                    alt=""
                    class="w-64 h-64 block mx-auto"
                    src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                  />
                </div>
                <div class="flex-1 card-block relative">
                  <div class="p-6">
                    <h4 class="font-medium text-2xl mb-3">Card title</h4>
                    <p class="leading-normal">
                      Magni inventore repellat dignissimos eveniet dolore ex sit
                      illo adipisci accusamus quos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mx-auto pb-10"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div class="relative m-0 shadow-lg flex bg-slate-800 bg-opacity-80 rounded-3xl">
                <div class="flex-1 card-block relative">
                  <div class="p-6">
                    <h4 class="font-medium text-2xl mb-3">Card title</h4>
                    <p class="leading-normal">
                      Magni inventore repellat dignissimos eveniet dolore ex sit
                      illo adipisci accusamus quos.
                    </p>
                  </div>
                </div>
                <div class="flex-no-shrink">
                  <img
                    alt=""
                    class="w-64 h-64 block mx-auto"
                    src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                  />
                </div>
              </div>
            </div>
            <div
              class="mx-auto pb-10"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div class="relative m-0 shadow-lg flex bg-slate-800 bg-opacity-80 rounded-3xl">
                <div class="flex-no-shrink">
                  <img
                    alt=""
                    class="w-64 h-64 block mx-auto"
                    src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                  />
                </div>
                <div class="flex-1 card-block relative">
                  <div class="p-6">
                    <h4 class="font-medium text-2xl mb-3">Card title</h4>
                    <p class="leading-normal">
                      Magni inventore repellat dignissimos eveniet dolore ex sit
                      illo adipisci accusamus quos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mx-auto pb-10"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div class="relative m-0 shadow-lg flex bg-slate-800 bg-opacity-80 rounded-3xl">
                <div class="flex-1 card-block relative">
                  <div class="p-6">
                    <h4 class="font-medium text-2xl mb-3">Card title</h4>
                    <p class="leading-normal">
                      Magni inventore repellat dignissimos eveniet dolore ex sit
                      illo adipisci accusamus quos.
                    </p>
                  </div>
                </div>
                <div class="flex-no-shrink">
                  <img
                    alt=""
                    class="w-64 h-64 block mx-auto"
                    src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 h-full fixed w-full">
          <video
            autoPlay
            loop
            muted
            className="absolute object-fill w-full h-full"
            poster="/img_video3.png"
          >
            <source
              src="http://37.187.90.23/mapquest/vid/video3new.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </header>
    </div>
  );
}

export default About;
