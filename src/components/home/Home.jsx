function Home() {
  return (
    <div>
      <div className="absolute z-10 flex flex-col items-center w-full">
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
          <button className="drop-shadow-2xl border-double border-4 p-4 rounded-md border-black bg-teal-500">
            [icon] bouton
          </button>
          <button className="drop-shadow-2xl border-double border-4 p-4 rounded-md border-black bg-red-500">
            [icon] bouton
          </button>
        </div>
      </div>
      <div className="bg-[url('./src/assets/images/map-flou.jpg')] contrast-75 bg-no-repeat bg-cover blur-[2.5px] grayscale h-screen w-screen"></div>
    </div>
  );
}

export default Home;
