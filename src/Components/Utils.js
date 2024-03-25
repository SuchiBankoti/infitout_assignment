function interpolateColors(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const step = [
    (rgb2[0] - rgb1[0]) / 16,
    (rgb2[1] - rgb1[1]) / 16,
    (rgb2[2] - rgb1[2]) / 16,
  ];

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

function hexToRgb(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function rgbToHex(rgb) {
  return (
    "#" +
    ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)
  );
}
function normalizeValue(value) {
  const minValue = -8;
  const maxValue = 8;

  const minPercentage = 12;
  const maxPercentage = 88;

  const percentage = (value - minValue) / (maxValue - minValue);

  const normalizedPercentage =
    minPercentage + percentage * (maxPercentage - minPercentage);

  return normalizedPercentage;
}
function getWeightedAvg(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  const divider = (a + b + c) / 3;
  const dividend = a * -3 + b * 0 + c * 3;
  const num = dividend / divider;
  const remainder = (Math.abs(num) % 1) * 10;
  let result =
    remainder >= 5 ? Math.ceil(Math.abs(num)) : Math.floor(Math.abs(num));
  result = dividend > 0 ? result : -result;
  return result;
}
export { interpolateColors, normalizeValue, getWeightedAvg };
