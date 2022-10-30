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
      <header className="flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute z-30 top-[100px] flex flex-col items-center height-minus-nav ">
          <h1 className="text-7xl w-fitbg-opacity-70 rounded-md p-10 m-20 flex flex-col ">
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
            <div className="flex">
              We choose to use the{" "}
              <a
                className="underline text-blue-500 px-1"
                target="blank"
                href="https://restcountries.com/"
              >
                {" "}
                REST Countries API{" "}
              </a>{" "}
              with the idea of creating a pedagogic website about the world we
              live in !
            </div>
            <br />
            You can get more info about each member of the crew by scrolling
            down this page.
            <div className="flex justify-around pt-7">
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
                    src="/arthur.png"
                  />
                </div>
                <div class="flex-1 card-block relative">
                  <div class="p-6">
                    <h4 class="font-medium text-2xl mb-3">Arthur Baudoin</h4>
                    <p class="leading-normal">
                      Magni inventore repellat dignissimos eveniet dolore ex sit
                      illo adipisci accusamus quos.
                    </p>
                    <div className="flex justify-end text-4xl pt-8 px-5">
                      <a className="underline pr-6" target="blank" href="">
                        <BsGithub />
                      </a>
                      <a className="underline" target="blank" href="">
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
              <div class="relative m-0 shadow-lg flex bg-slate-800 bg-opacity-80 rounded-3xl">
                <div class="flex-1 card-block relative">
                  <div class="p-6">
                    <h4 class="font-medium text-2xl mb-3">Nolwenn Groult</h4>
                    <p class="leading-normal">
                      Magni inventore repellat dignissimos eveniet dolore ex sit
                      illo adipisci accusamus quos.
                    </p>
                    <div className="flex justify-end text-4xl pt-8 px-5">
                      <a className="underline pr-6" target="blank" href="">
                        <BsGithub />
                      </a>
                      <a className="underline" target="blank" href="">
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex-no-shrink">
                  <img alt="" class="w-64 h-64 block mx-auto" src="nono.jpg" />
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
                  <img alt="" class="w-64 h-64 block mx-auto" src="max.jpg" />
                </div>
                <div class="flex-1 card-block relative">
                  <div class="p-6">
                    <h4 class="font-medium text-2xl mb-3">Maximilian Gliem</h4>
                    <p class="leading-normal">
                      Very clever, he used every tricks to push most lines on
                      the project.
                      <br />
                      Also code junkie, he can't go to sleep if he hasn't gotten
                      his drug fix even if he had to socialize in a late party
                      with colleagues at a pub.
                    </p>
                    <div className="flex justify-end text-4xl pt-8 px-5">
                      <a className="underline pr-6" target="blank" href="https://github.com/MGliem">
                        <BsGithub />
                      </a>
                      <a className="underline" target="blank" href="https://www.linkedin.com/in/maximilian-gliem-375383255/">
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
              <div class="relative m-0 shadow-lg flex bg-slate-800 bg-opacity-80 rounded-3xl">
                <div class="flex-1 card-block relative">
                  <div class="p-6">
                    <h4 class="font-medium text-2xl mb-3">Corentin Delande</h4>
                    <p class="leading-normal pb-2">
                      True agility genius Corentin lead the group threw this
                      project with an iron fist all along ! <br />
                      Fun fact, he code the project without even understanding
                      the basic principal of a callback function. <br />
                      He is available for an internship from the 23 of february.
                    </p>
                    <div className="flex justify-end text-4xl pt-8 px-5">
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
                <div class="flex-no-shrink">
                  <img alt="" class="w-64 h-64 block mx-auto" src="coco.jpg" />
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
