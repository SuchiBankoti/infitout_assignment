import { interpolateColors, normalizeValue } from "../../Utils";
import "./GraphBar.css";
const color1 = "#ff0000";
const color2 = "#4169E1";
export default function GraphBar(props) {
  const tubes = [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  const colors = interpolateColors(color1, color2);
  const pointerPosition = normalizeValue(props.pointerPosition);
  return (
    <>
      <div className="tubes">
        {tubes.map((tube, i) => {
          const height =
            props.indicator === "Support & Resistence"
              ? Math.max(...tubes)
              : Math.abs(tube);
          const color = colors[i];
          return (
            <Tube
              height={height}
              color={color}
              key={i}
              indicator={props.indicator}
            />
          );
        })}
      </div>
      <div className="pointer" style={{ left: `${pointerPosition}%` }}></div>
    </>
  );
}

function Tube(props) {
  const { height, color } = props;
  return (
    <div
      className="tube"
      style={{ height: `${height * 7 + 25}px`, background: `${color}` }}
    ></div>
  );
}
