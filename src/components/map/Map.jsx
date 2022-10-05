import { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const MapChart = ({ actionOnClick }) => {
  return (
    <div>
      <ComposableMap className="bg-sky-200">
        <ZoomableGroup>
          <Geographies geography="/mapGeometry.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  className={
                    "stroke-0.5 stroke-slate-500 fill-white hover:fill-slate-700 hover:stroke-0"
                  }
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
    </div>
  );
};

export default memo(MapChart);
