import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdReplayCircleFilled } from "react-icons/md";

function Recap() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="absolute z-10 flex flex-col items-center height-minus-nav ">
        <h1
          data-aos="fade-down"
          data-aos-duration="600"
          className="text-8xl w-fit bg-white bg-opacity-80 rounded-xl p-8 m-20 border-solid border-2 border-greyblue shadow-2xl"
        >
          <span className="text-green-400">Quizz </span>
          <span className="text-greyblue">done !</span>
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
        <button
          className="border border-black bg-lightgreen rounded-lg px-10 py-4 my-10 flex items-center"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <p className="text-2xl">Replay </p>
          <MdReplayCircleFilled className="text-4xl ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Recap;