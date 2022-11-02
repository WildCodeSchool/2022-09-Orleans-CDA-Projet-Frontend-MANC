import { useEffect } from "react";
import "./chrono.css";

const Chrono = () => {
  useEffect(() => {
    const defaults = {},
      one_second = 1000,
      one_minute = one_second * 60,
      one_hour = one_minute * 60,
      one_day = one_hour * 24,
      startDate = new Date(),
      face = document.getElementById("lazy");

    const requestAnimationFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    tick();

    function tick() {
      const now = new Date(),
        elapsed = now - startDate,
        parts = [];

      parts[0] = "" + Math.floor(elapsed / one_hour);
      parts[1] = "" + Math.floor((elapsed % one_hour) / one_minute);
      parts[2] =
        "" + Math.floor(((elapsed % one_hour) % one_minute) / one_second);

      parts[0] = parts[0].length == 1 ? "0" + parts[0] : parts[0];
      parts[1] = parts[1].length == 1 ? "0" + parts[1] : parts[1];
      parts[2] = parts[2].length == 1 ? "0" + parts[2] : parts[2];

      face.innerText = parts.join(":");

      requestAnimationFrame(tick);
    }
  }, []);

  return (
    <div className="z-50 absolute  -left-20">
      <div className="p-4">
        <div className="text-white taille">
          <div className="timer-group">
            <div className="timer hour">
              <div className="hand">
                <span></span>
              </div>
              <div className="hand">
                <span></span>
              </div>
            </div>
            <div className="timer minute">
              <div className="hand">
                <span></span>
              </div>
              <div className="hand">
                <span></span>
              </div>
            </div>
            <div className="timer second">
              <div className="hand">
                <span></span>
              </div>
              <div className="hand">
                <span></span>
              </div>
            </div>
            <div className="face">
              <p id="lazy">00:00:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chrono;
