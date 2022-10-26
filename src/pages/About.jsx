import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

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
            eos repellat ipsa ut autem neque vel itaque sunt atque omnis. Lorem
            ipsum dolor sit amet. Qui velit eligendi et explicabo consequatur ea
            saepe tempore et voluptatum? Quo voluptatum debitis eos repellat
            ipsa ut autem neque vel itaque sunt atque omnis. Lorem ipsum dolor
            sit amet. Qui velit eligendi et explicabo consequatur ea saepe
            tempore et voluptatum? Quo voluptatum debitis eos repellat ipsa ut
            autem neque vel itaque sunt atque omnis. Lorem ipsum dolor sit amet.
            Qui velit eligendi et explicabo consequatur ea saepe tempore et
            voluptatum? Quo voluptatum debitis eos repellat ipsa ut autem neque
            vel itaque sunt atque omnis. Lorem ipsum dolor sit amet. Qui velit
            eligendi et explicabo consequatur ea saepe tempore et voluptatum?
            Quo voluptatum debitis eos repellat ipsa ut autem neque vel itaque
            sunt atque omnis. Lorem ipsum dolor sit amet. Qui velit eligendi et
            explicabo consequatur ea saepe tempore et voluptatum? Quo voluptatum
            debitis eos repellat ipsa ut autem neque vel itaque sunt atque
            omnis.
          </p>
        </div>
        <video
          autoPlay
          loop
          muted
          className="relative z-10 w-auto min-w-full min-h-full max-w-none bg-blend-color-dodge bg-cover"
          poster="/img_video3.png"
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/projet-manc.appspot.com/o/home1reduce.mp4?alt=media&token=ed4bee17-35f1-4d4b-bbf7-80e14eb4a867"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
}

export default About;
