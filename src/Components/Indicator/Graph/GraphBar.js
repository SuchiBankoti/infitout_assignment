import "./GraphBar.css";
const color1 = "#ff0000"; // Red
const color2 = "#00ff00"; // Green
export default function GraphBar() {
  const tubes = [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  const colors = interpolateColors(color1, color2);
  return (
    <>
      <div className="tubes">
        {tubes.map((tube, i) => {
          const height = Math.abs(tube);
          const color = colors[i];
          return <Tube height={height} color={color} key={i} />;
        })}
      </div>
      <div className="pointer"></div>
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
function interpolateColors(color1, color2) {
  // Convert hex color strings to RGB arrays
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  // Calculate the color step for each RGB channel
  const step = [
    (rgb2[0] - rgb1[0]) / 16,
    (rgb2[1] - rgb1[1]) / 16,
    (rgb2[2] - rgb1[2]) / 16,
  ];

  // Generate the interpolated colors
  const interpolatedColors = [];
  for (let i = 0; i < 17; i++) {
    const interpolatedColor = [
      Math.round(rgb1[0] + step[0] * i),
      Math.round(rgb1[1] + step[1] * i),
      Math.round(rgb1[2] + step[2] * i),
    ];
    interpolatedColors.push(rgbToHex(interpolatedColor));
  }

  return interpolatedColors;
}

// Helper function to convert hex color string to RGB array
function hexToRgb(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

// Helper function to convert RGB array to hex color string
function rgbToHex(rgb) {
  return (
    "#" +
    ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)
  );
}
