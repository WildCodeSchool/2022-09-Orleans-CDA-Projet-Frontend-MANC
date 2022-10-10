import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const Map = ({
  actionOnClick,
  searchCountry,
  setCountryFound,
  clickedCountry,
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
                    actionOnClick(`${geo.id}`);
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
