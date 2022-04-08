export const deviceSizes = {
  tablet: "640px",
  laptop: "900px",
  mobile: "455px",
};

export const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
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
  lightGray: "#939FA5",
  blueColor: "#2196F3",
  lightBlueColor: "#BBDEFB",
  yellowColor: "#ffa000",
  grayColor: "#C2C2C2",
  lightGrayColor: "#F5F5F5",
  backgroundColor: "#E5E5E5",
  device,
  fontSize,
};
