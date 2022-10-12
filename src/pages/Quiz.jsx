import { useLocation } from "react-router-dom";
import Map from "../components/map/Map";
import Question from "../components/question/Question";

const Quiz = () => {
  const location = useLocation();
  const gameModes = location.state;
  return (
    <div className="height-minus-nav">
      <Map />
      <Question gameModes={gameModes} />
    </div>
  );
};

export default Quiz;
