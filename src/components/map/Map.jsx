import countries from "../../assets/countriesData.json";
import "./map.css";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const Map = ({
  actionOnClick,
  clickedCountry,
  markerCoordinates,
  markerFoundCoordinate,
  preventClickCountry,
  correctAnswer,
  isConfirmed,
}) => {
  const findDefaultCountryColor = (id) => {
    const foundCountryData = countries.find((data) => {
      return data.id === id;
    });
    if (foundCountryData) {
      return `svg-fill-${foundCountryData.color}`;
    }
    return "fill-white";
  };

  return (
    <>
      <ComposableMap
        className="bg-cyan-900 h-full w-full"
        projectionConfig={{
          scale: 120,
          center: [0, 0],
        }}
        width={500}
        height={350}
      >
        <ZoomableGroup>
          <Geographies geography="/mapGeometry.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                  className={`${
                    geo.id.includes(clickedCountry) && clickedCountry !== ""
                      ? !correctAnswer && isConfirmed
                        ? "fill-red-500"
                        : isConfirmed && correctAnswer
                        ? "fill-green-500"
                        : "fill-yellow-200"
                      : findDefaultCountryColor(geo.id)
                  } 
                  stroke-[0.1px] stroke-slate-900  hover:fill-slate-400 hover:stroke-0`}
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    !preventClickCountry && actionOnClick(geo.id);
                  }}
                />
              ))
            }
          </Geographies>
          {markerFoundCoordinate ||
            (markerCoordinates && (
              <Marker
                coordinates={
                  markerFoundCoordinate
                    ? markerFoundCoordinate
                    : markerCoordinates
                }
              >
                <g
                  fill="green"
                  stroke="black"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </g>
              </Marker>
            ))}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default Map;
