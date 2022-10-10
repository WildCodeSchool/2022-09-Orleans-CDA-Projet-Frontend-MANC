import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const Map = ({ actionOnClick, searchCountry }) => {
  const searchLower = searchCountry ? searchCountry.toLowerCase() : "";
  return (
    <>
      <ComposableMap
        className="bg-sky-200 h-full w-full"
        projectionConfig={{
          scale: 155,
          rotation: [-11, 0, 0],
        }}
        width={800}
        height={200}
      >
        <ZoomableGroup>
          <Geographies geography="/mapGeometry.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  className={`${
                    geo.properties.name.toLowerCase() === searchLower
                      ? "fill-green-500"
                      : ""
                  } stroke-0.5 stroke-slate-500 fill-white hover:fill-slate-700 hover:stroke-0`}
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    actionOnClick(`${geo.properties.name}`);
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default Map;
