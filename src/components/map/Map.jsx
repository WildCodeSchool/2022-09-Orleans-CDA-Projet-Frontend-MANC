import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const Map = ({ actionOnClick, searchCountry }) => {
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
                    geo.properties.name.toLowerCase() === searchLower
                      ? "fill-green-500"
                      : "fill-white"
                  } stroke-0.5 stroke-slate-500  hover:fill-slate-700 hover:stroke-0`}
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    actionOnClick(`${geo.id}`);
                  }}
                />
              ))
            }
          </Geographies>
          <Marker coordinates={[19.9981227, 7.0323598]}>
            <g
              fill="green"
              stroke="green"
              strokeWidth="1"
              strokeLinejoin="round"
              transform="translate(-8, -30) scale(1.5)"
            >
              <path d="M24 1h-24v16.981h4v5.019l7-5.019h13z" />
            </g>
            <text
              onClick={() => {
                console.log("Je confirme");
              }}
              textAnchor="middle"
              y={-13}
              x={10}
              style={{ fill: "white", fontSize: "6px", cursor: "pointer" }}
            >
              Confirm ?
            </text>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default Map;
