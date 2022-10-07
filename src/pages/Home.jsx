import { MdBook, MdNotStarted } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="absolute z-10 flex flex-col items-center height-minus-nav">
        <h1 className="text-8xl mt-20 w-fit">Map Quest</h1>
        <p className="mx-40 mt-20 text-2xl text-center">
          Lorem ipsum dolor sit amet. Qui velit eligendi et explicabo
          consequatur ea saepe tempore et voluptatum? Quo voluptatum debitis eos
          repellat ipsa ut autem neque vel itaque sunt atque omnis. Lorem ipsum
          dolor sit amet. Qui velit eligendi et explicabo consequatur ea saepe
          tempore et voluptatum? Quo voluptatum debitis eos repellat ipsa ut
          autem neque vel itaque sunt atque omnis. Lorem ipsum dolor sit amet.
          Qui velit eligendi et explicabo consequatur ea saepe tempore et
          voluptatum? Quo voluptatum debitis eos repellat ipsa ut autem neque
          vel itaque sunt atque omnis.
        </p>
        <div className="flex justify-evenly mt-48 text-2xl w-full">
          <Link to="/play">
            <button className="flex items-center gap-2 drop-shadow-2xl border-double border-4 p-4 rounded-md border-black bg-teal-500">
              Play <MdNotStarted className="text-2xl" />
            </button>
          </Link>
          <Link to="/learn">
            <button className="flex items-center gap-2 drop-shadow-2xl border-double border-4 p-4 rounded-md border-black bg-red-500">
              <MdBook className="text-2xl" /> Learn
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[url('./assets/images/blurred-map.jpg')] contrast-75 bg-no-repeat bg-cover blur-[2.5px] grayscale height-minus-nav w-screen"></div>
    </div>
  );
}

export default Home;
