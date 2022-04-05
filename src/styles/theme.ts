export const deviceSizes = {
  tablet: "640px",
  laptop: "900px",
};

export const device = {
  tablet: `screen and (min-width: ${deviceSizes.tablet})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
};

export const fontSize = {
  superBig: "20px",
  big: "16px",
  medium: "14px",
  small: "12px",
};

export const theme = {
  mainColor: "#1565C0",
  fontColor: "#323D45",
  device,
  fontSize,
};
