import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const Map = ({
  actionOnClick,
  searchCountry,
  setCountryFound,
  clickedCountry,
  markerCoordinates,
  setIsConfirmed,
  preventClickCountry,
}) => {
  const searchLower = searchCountry ? searchCountry.toLowerCase() : "";

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
                    geo.properties.name.toLowerCase() === searchLower &&
                    "fill-green-500"
                  } ${
                    geo.id.includes(clickedCountry) && clickedCountry !== ""
                      ? "fill-green-500"
                      : "fill-white"
                  } 
                  stroke-0.5 stroke-slate-500  hover:fill-slate-700 hover:stroke-0`}
                  {...(geo.properties.name.toLowerCase() === searchLower &&
                    setCountryFound(geo.id))}
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
                stroke="green"
                strokeWidth="1"
                strokeLinejoin="round"
                transform="translate(-6, -35) scale(1.5)"
              >
                <path d="M24 1h-24v16.981h4v5.019l7-5.019h13z" />
              </g>
              <text
                onClick={() => {
                  setIsConfirmed(true);
                }}
                textAnchor="middle"
                y={-18}
                x={12}
                style={{ fill: "white", fontSize: "6px", cursor: "pointer" }}
              >
                Confirm ?
              </text>
            </Marker>
          )}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default Map;
