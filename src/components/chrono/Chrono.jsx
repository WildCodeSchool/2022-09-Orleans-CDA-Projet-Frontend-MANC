import { useEffect, useState } from "react";
import "./chrono.css";

const Chrono = ({ timer }) => {
  const [timeString, setTimeString] = useState("00:00:00");

  useEffect(() => {
    let timeLeftAfterOperation = timer;
    let hour = 0;
    let minute = 0;
    let seconde = 0;

    if (timer >= 3600) {
      hour = Math.floor(timer / 3600);
      timeLeftAfterOperation = timeLeftAfterOperation % (3600 * hour);
    }

    if (timeLeftAfterOperation >= 60) {
      minute = Math.floor(timeLeftAfterOperation / 60);
      timeLeftAfterOperation = timeLeftAfterOperation % (60 * minute);
    }

    seconde = timeLeftAfterOperation;

    setTimeString(
      `${hour > 10 ? `${hour}` : `0${hour}`}:${
        minute > 10 ? `${minute}` : `0${minute}`
      }:${seconde > 10 ? `${seconde}` : `0${seconde}`}`
    );
  }, [timer]);

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
              <p>{timeString}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chrono;
