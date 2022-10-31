import "./chrono.css";
import { Helmet } from "react-helmet";

const Chrono = () => {
  return (
    <div className="z-50 absolute top-10 -left-20">
      <Helmet>
        <script src="/src/components/chrono/Chrono_logic.js"></script>
      </Helmet>
      <div className="my-10 p-4">
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
