import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
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
  setIsConfirmed,
  preventClickCountry,
  correctAnswer,
  isConfirmed,
}) => {
  const [markerConfirmColor, setMarkerConfirmColor] = useState({
    box: "fill-green-700",
    text: "fill-white",
  });

  const markerConfirmHoverHandler = (isHover) => {
    if (isHover) {
      setMarkerConfirmColor({ box: "fill-green-800", text: "fill-slate-100" });
    } else {
      setMarkerConfirmColor({ box: "fill-green-700", text: "fill-white" });
    }
  };

  return (
    <>
      <ComposableMap
        className="bg-sky-200 h-full w-full"
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
                  className={`${
                    geo.id.includes(clickedCountry) && clickedCountry !== ""
                      ? !correctAnswer && isConfirmed
                        ? "fill-red-500"
                        : isConfirmed && correctAnswer
                        ? "fill-green-500"
                        : "fill-yellow-500"
                      : "fill-white"
                  } 
                  stroke-0.5 stroke-slate-500  hover:fill-slate-700 hover:stroke-0`}
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    !preventClickCountry && actionOnClick(geo.id);
                  }}
                />
              ))
            }
          </Geographies>
          {markerCoordinates && (
            <Marker coordinates={markerCoordinates}>
              <g
                stroke="black"
                strokeWidth="0.2"
                strokeLinejoin="round"
                transform="translate(-7, -21) scale(1.7, 0.9)"
                className={`${markerConfirmColor.box} cursor-pointer`}
                onMouseEnter={() => markerConfirmHoverHandler(true)}
                onMouseLeave={() => markerConfirmHoverHandler(false)}
                onClick={() => {
                  setIsConfirmed(true);
                }}
              >
                <path d="M24 1h-24v16.981h4v5.019l7-5.019h13z" />
              </g>
              <text
                onMouseEnter={() => markerConfirmHoverHandler(true)}
                onMouseLeave={() => markerConfirmHoverHandler(false)}
                onClick={() => {
                  setIsConfirmed(true);
                }}
                textAnchor="middle"
                y={-10}
                x={18}
                className={`${markerConfirmColor.text} text-[6px] cursor-pointer`}
              >
                Confirm
              </text>

              <GiCheckMark
                onMouseEnter={() => markerConfirmHoverHandler(true)}
                onMouseLeave={() => markerConfirmHoverHandler(false)}
                onClick={() => {
                  setIsConfirmed(true);
                }}
                className={`${markerConfirmColor.text} cursor-pointer`}
                transform="translate(-2, -18) scale(0.6)"
              />
            </Marker>
          )}
          {markerFoundCoordinate && (
            <Marker coordinates={markerFoundCoordinate}>
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
          )}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default Map;
