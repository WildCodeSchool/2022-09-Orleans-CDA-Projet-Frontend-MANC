import countries from "../../assets/countriesData.json";
import "./map.css";
import { TbFocusCentered } from "react-icons/tb";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useEffect, useState } from "react";

const Map = ({
  actionOnClick,
  clickedCountry,
  markerCoordinates,
  preventClickCountry,
  correctAnswer,
  isConfirmed,
}) => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  useEffect(() => {
    if (markerCoordinates !== "") {
      const defaultZoom = 2;
      setPosition((pos) => ({
        coordinates: markerCoordinates,
        zoom: pos.zoom < defaultZoom ? defaultZoom : pos.zoom,
      }));
    }
  }, [markerCoordinates]);

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  const findDefaultCountryColor = (id) => {
    const foundCountryData = countries.find((data) => {
      return data.id === id;
    });
    if (foundCountryData) {
      return `svg-fill-${foundCountryData.color}`;
    }
    return "fill-white";
  };

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleCenter = () => {
    setPosition({ coordinates: [0, 0], zoom: 1 });
  };

  return (
    <>
      <ComposableMap
        className="bg-slate-300 h-full w-full"
        projectionConfig={{
          scale: 120,
          center: [0, 0],
        }}
        width={500}
        height={350}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies
            geography={`${import.meta.env.BASE_URL}mapGeometry.json`}
          >
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
                  stroke-[0.1px] stroke-slate-300  hover:fill-slate-400 hover:stroke-0`}
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
                fill="green"
                stroke="black"
                strokeWidth="1"
                strokeLinejoin="round"
                transform={`translate(${-12 / position.zoom}, ${
                  -24 / position.zoom
                }) scale(${1 / position.zoom})`}
              >
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </g>
            </Marker>
          )}
        </ZoomableGroup>
      </ComposableMap>
      <div className="self-end">
        <button className="button-round" onClick={handleZoomIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button className="button-round" onClick={handleCenter}>
          <TbFocusCentered />
        </button>
        <button className="button-round" onClick={handleZoomOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Map;
