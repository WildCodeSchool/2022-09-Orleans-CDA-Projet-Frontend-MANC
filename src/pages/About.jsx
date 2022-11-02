import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsChevronDoubleDown, BsLinkedin, BsGithub } from "react-icons/bs";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="fixed top-0 -z-10 h-full  w-full ">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          poster="./img_video3.png"
        >
          <source
            src="http://37.187.90.23/mapquest/vid/home3new.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute z-30 top-[80px] flex flex-col items-center">
          <div className="flex flex-col justify-center items-center h-100 md:h-[calc(100vh-80px)]">
            <h1 className=" text-5xl mt-10 md:text-7xl w-fit bg-opacity-70 rounded-md md:p-10 md:m-20 flex flex-col ">
              <div>
                <span className="text-green-400">About </span>
                <span className="text-lightblue">Us</span>
              </div>
              <span className="pt-3 text-white text-center text-3xl">
                Who are we ?
              </span>
            </h1>

            <p className="text-xl text-white bg-slate-800 bg-opacity-70 rounded-md p-8 m-4 mt-6 md:m-20 flex flex-col shadow-2xl">
              We are a group of 4 students currently training at the Orléans
              Wild Code School!
              <br />
              This is our first project using React and Tailwind CSS.
              <br />
              The goal was to pick an API and build a front-end application on
              top of it.
              <br />
              <div className="inline">
                We chose to use the{" "}
                <a
                  className="underline text-blue-500 px-1"
                  target="blank"
                  href="https://restcountries.com/"
                >
                  {" "}
                  REST Countries API{" "}
                </a>{" "}
                with the idea of creating a pedagogic website about the world we
                live in!
              </div>
              <br />
              You can get more information about each member of the crew by
              scrolling down this page.
              <div className="flex justify-around pt-7">
                <BsChevronDoubleDown />
              </div>
            </p>
          </div>
          <div className="container text-white">
            <div
              class="mx-auto pb-10"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div class="shadow-lg flex m-4 flex-col md:flex-row bg-slate-800 bg-opacity-80 rounded-r-3xl">
                <div>
                  <img
                    alt="Arthur"
                    class="w-64 h-64 pt-6 md:p-0 block mx-auto object-cover"
                    src="monkas.jpg"
                  />
                </div>
                <div class="flex-1">
                  <div class="p-6 h-full flex flex-col">
                    <h4 class="font-medium text-2xl mb-3">
                      Arthur Baudoin (Cupcake Lover)
                    </h4>
                    <p class="leading-normal mb-4 md:mb-0">
                      GeoJSON enjoyer.
                      <br />
                      Badge hunter.
                      <br />
                      Hasn't ragequit (yet) this year.
                    </p>
                    <div className="flex grow justify-end items-end text-4xl">
                      <a
                        className="underline pr-6"
                        target="blank"
                        href="https://github.com/Ysedda"
                      >
                        <BsGithub />
                      </a>
                      <a
                        className="underline"
                        target="blank"
                        href="https://www.linkedin.com/in/arthur-baudoin/"
                      >
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mx-auto pb-10"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div class="shadow-lg flex m-4 md:flex-row flex-col-reverse bg-slate-800 bg-opacity-80 rounded-l-3xl">
                <div class="flex-1 card-block">
                  <div class="p-6 flex flex-col h-full">
                    <h4 class="font-medium text-2xl mb-3">Nolwenn Groult</h4>
                    <p class="leading-normal mb-4 md:mb-0">
                      One of the ten fabled LaTeX enjoyers in the galaxy.
                      <br />
                      On the brink of divorce after saying "Javascript is not
                      that bad".
                    </p>
                    <div className="flex grow justify-start items-end text-4xl">
                      <a
                        className="underline pr-6"
                        target="blank"
                        href="https://github.com/ngroult"
                      >
                        <BsGithub />
                      </a>
                      <a
                        className="underline"
                        target="blank"
                        href="https://www.linkedin.com/in/nolwenn-groult-23453a134"
                      >
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    alt="Nolwenn"
                    class="w-64 h-64 pt-6 md:p-0 block mx-auto object-cover"
                    src="nono.jpg"
                  />
                </div>
              </div>
            </div>
            <div
              class="mx-auto pb-10"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div class="shadow-lg flex m-4 flex-col md:flex-row bg-slate-800 bg-opacity-80 rounded-r-3xl">
                <div>
                  <img
                    alt="Maximilian"
                    class="w-64 h-64 pt-6 md:p-0 block mx-auto object-cover"
                    src="max.jpg"
                  />
                </div>
                <div class="flex-1 card-block">
                  <div class="p-6 h-full flex flex-col">
                    <h4 class="font-medium text-2xl mb-3">
                      Maximilian Gliem (Emperor Max)
                    </h4>
                    <p class="leading-normal mb-4 md:mb-0">
                      Very clever, he used every tricks to be top contributor in
                      the project repo.
                      <br />
                      Also code junkie, he can't go to sleep if he hasn't gotten
                      his drug fix even if he had to socialize in a late party
                      with colleagues at a pub.
                    </p>
                    <div className="flex grow justify-end items-end text-4xl">
                      <a
                        className="underline pr-6"
                        target="blank"
                        href="https://github.com/MGliem"
                      >
                        <BsGithub />
                      </a>
                      <a
                        className="underline"
                        target="blank"
                        href="https://www.linkedin.com/in/maximilian-gliem-375383255/"
                      >
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mx-auto pb-10"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div class="shadow-lg flex m-4 md:flex-row flex-col-reverse bg-slate-800 bg-opacity-80 rounded-l-3xl">
                <div class="flex-1 card-block">
                  <div class="p-6 flex flex-col h-full">
                    <h4 class="font-medium text-2xl mb-3">
                      Corentin (Erwann) Delande
                    </h4>
                    <p class="leading-normal pb-2 flex-1 mb-4 md:mb-0">
                      True agility genius Corentin led the group through this
                      project with an iron fist all along! <br />
                      Fun fact, he coded the project without even understanding
                      the basics of a callback function. <br />
                      He is available for an internship from the 23rd of
                      february.
                    </p>
                    <div className="flex grow justify-start items-end text-4xl">
                      <a
                        className="underline pr-6"
                        target="blank"
                        href="https://github.com/codelande"
                      >
                        <BsGithub />
                      </a>
                      <a
                        className="underline"
                        target="blank"
                        href="https://www.linkedin.com/in/corentin-delande/"
                      >
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    alt="Corentin"
                    class="w-64 h-64 pt-6 md:p-0 block mx-auto object-cover"
                    src="coco.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default About;
