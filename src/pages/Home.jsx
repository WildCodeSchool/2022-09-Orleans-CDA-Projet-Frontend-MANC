import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="absolute z-30 flex flex-col items-center height-minus-nav pt-10">
        <h1
          data-aos="fade-down"
          data-aos-duration="600"
          className="text-8xl w-fit bg-white bg-opacity-80 rounded-xl p-8 m-20 border-solid border-2 border-greyblue shadow-2xl"
        >
          <span className="text-green-400">Map</span>
          <span className="text-greyblue">Quest</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          className="mx-40 text-2xl bg-white bg-opacity-80 rounded-xl p-10 text-center border-solid border-2 border-greyblue"
        >
          Lorem ipsum dolor sit amet. Qui velit eligendi et explicabo
          consequatur ea saepe tempore et voluptatum? Quo voluptatum debitis eos
          repellat ipsa ut autem neque vel itaque sunt atque omnis. Lorem ipsum
          dolor sit amet. Qui velit eligendi et explicabo consequatur ea saepe
          tempore et voluptatum? Quo voluptatum debitis eos repellat ipsa ut
          autem neque vel itaque sunt atque omnis. Lorem ipsum dolor sit amet.
          Qui velit eligendi et explicabo consequatur ea saepe tempore et
          voluptatum? Quo voluptatum debitis eos repellat ipsa ut autem neque
          vel itaque sunt atque omnis. Lorem ipsum dolor sit amet. Qui velit
          eligendi et explicabo consequatur ea saepe tempore et voluptatum? Quo
          voluptatum debitis eos repellat ipsa ut autem neque vel itaque sunt
          atque omnis. Lorem ipsum dolor sit amet. Qui velit eligendi et
          explicabo consequatur ea saepe tempore et voluptatum? Quo voluptatum
          debitis eos repellat ipsa ut autem neque vel itaque sunt atque omnis.
          Lorem ipsum dolor sit amet. Qui velit eligendi et explicabo
          consequatur ea saepe tempore et voluptatum? Quo voluptatum debitis eos
          repellat ipsa ut autem neque vel itaque sunt atque omnis.
        </p>
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
