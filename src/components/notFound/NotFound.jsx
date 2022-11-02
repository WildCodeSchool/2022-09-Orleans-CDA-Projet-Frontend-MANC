import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";

const NotFound = () => (
  <div>
    <div className="absolute top-0 -z-10 w-full h-screen">
      <img
        src="/blackhole.jpg"
        alt="a black hole from space"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="text-white flex flex-col items-start ml-48 mt-48 text-3xl">
      <h1>404 - Not Found!</h1>
      <h1>Looks like your lost in the universe!</h1>

      <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-8">
        <div class="absolute inset-0 w-3 bg-lightblue transition-all duration-[1500ms] ease-out group-hover:w-full"></div>
        <Link class="relative text-black flex items-center pl-5" to="/">
          Go back to earth
          <FaRocket className="pl-1 text-2xl" />
        </Link>
      </button>
    </div>
  </div>
);

export default NotFound;
