import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [backgroundVideo, setBackgroundVideo] = useState("");

  useEffect(() => {
    const videos = "src/assets/videos/video_home_1.mp4";
    setBackgroundVideo(videos);
  }, []);

  if (backgroundVideo) {
    return (
      <div>
        <header className="relative flex items-center justify-center h-screen overflow-hidden">
          <div className="absolute z-30 flex flex-col items-center height-minus-nav ">
            <h1
              data-aos="fade-down"
              data-aos-duration="600"
              className="text-8xl w-fit m-24"
            >
              <span className="text-green-400">Map</span>
              <span className="text-greyblue">Quest</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              className="mx-40 text-2xl"
            >
              Lorem ipsum dolor sit amet. Qui velit eligendi et explicabo
              consequatur ea saepe tempore et voluptatum? Quo voluptatum debitis
              eos repellat ipsa ut autem neque vel itaque sunt atque omnis.
              Lorem ipsum dolor sit amet. Qui velit eligendi et explicabo
              consequatur ea saepe tempore et voluptatum? Quo voluptatum debitis
              eos repellat ipsa ut autem neque vel itaque sunt atque omnis.
              Lorem ipsum dolor sit amet. Qui velit eligendi et explicabo
              consequatur ea saepe tempore et voluptatum? Quo voluptatum debitis
              eos repellat ipsa ut autem neque vel itaque sunt atque omnis.
              Lorem ipsum dolor sit amet. Qui velit eligendi et explicabo
              consequatur ea saepe tempore et voluptatum? Quo voluptatum debitis
              eos repellat ipsa ut autem neque vel itaque sunt atque omnis.
              Lorem ipsum dolor sit amet. Qui velit eligendi et explicabo
              consequatur ea saepe tempore et voluptatum? Quo voluptatum debitis
              eos repellat ipsa ut autem neque vel itaque sunt atque omnis.
              Lorem ipsum dolor sit amet. Qui velit eligendi et explicabo
              consequatur ea saepe tempore et voluptatum? Quo voluptatum debitis
              eos repellat ipsa ut autem neque vel itaque sunt atque omnis.
            </p>
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-blend-color-dodge"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>
      </div>
    );
  }
}

export default Home;
