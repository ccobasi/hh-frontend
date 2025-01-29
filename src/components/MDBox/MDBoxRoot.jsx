/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Box from "@mui/material/Box";
// import { styled } from "@mui/material/styles";

// export default styled(Box)(({ theme, ownerState }) => {
//   const { palette, functions, borders, boxShadows } = theme;
//   const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;

//   const { gradients, grey, white } = palette;
//   const { linearGradient } = functions;
//   const { borderRadius: radius } = borders;
//   const { colored } = boxShadows;

//   const greyColors = {
//     "grey-100": grey[100],
//     "grey-200": grey[200],
//     "grey-300": grey[300],
//     "grey-400": grey[400],
//     "grey-500": grey[500],
//     "grey-600": grey[600],
//     "grey-700": grey[700],
//     "grey-800": grey[800],
//     "grey-900": grey[900],
//   };

//   const validGradients = [
//     "primary",
//     "secondary",
//     "info",
//     "success",
//     "warning",
//     "error",
//     "dark",
//     "light",
//   ];

//   const validColors = [
//     "transparent",
//     "white",
//     "black",
//     "primary",
//     "secondary",
//     "info",
//     "success",
//     "warning",
//     "error",
//     "light",
//     "dark",
//     "text",
//     "grey-100",
//     "grey-200",
//     "grey-300",
//     "grey-400",
//     "grey-500",
//     "grey-600",
//     "grey-700",
//     "grey-800",
//     "grey-900",
//   ];

//   const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
//   const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

//   // background value
//   let backgroundValue = bgColor;

//   if (variant === "gradient") {
//     backgroundValue = validGradients.find((el) => el === bgColor)
//       ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
//       : white.main;
//   } else if (validColors.find((el) => el === bgColor)) {
//     backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor];
//   } else {
//     backgroundValue = bgColor;
//   }

//   // color value
//   let colorValue = color;

//   if (validColors.find((el) => el === color)) {
//     colorValue = palette[color] ? palette[color].main : greyColors[color];
//   }

//   // borderRadius value
//   let borderRadiusValue = borderRadius;

//   if (validBorderRadius.find((el) => el === borderRadius)) {
//     borderRadiusValue = radius[borderRadius];
//   }

//   // boxShadow value
//   let boxShadowValue = "none";

//   if (validBoxShadows.find((el) => el === shadow)) {
//     boxShadowValue = boxShadows[shadow];
//   } else if (coloredShadow) {
//     boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : "none";
//   }

//   return {
//     opacity,
//     background: backgroundValue,
//     color: colorValue,
//     borderRadius: borderRadiusValue,
//     boxShadow: boxShadowValue,
//   };
// });
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

// Define a fallback linearGradient function in case it's not provided by the theme
const fallbackLinearGradient = (color1, color2) => `linear-gradient(to right bottom, ${color1}, ${color2})`;

export default styled(Box)(({ theme, ownerState }) => {
  const { 
    palette: themePalette = {}, 
    functions, 
    borders: themeBorders = {}, 
    boxShadows: themeBoxShadows = {} 
  } = theme;
  const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;

  const { gradients = {}, grey = {}, white = {} } = themePalette;
  // Use the fallback function if theme.functions.linearGradient is undefined
  const linearGradient = functions && functions.linearGradient ? functions.linearGradient : fallbackLinearGradient;
  const { borderRadius: radius = {} } = themeBorders; // Default to an empty object if undefined
  const { colored = {} } = themeBoxShadows; // Default to an empty object if undefined

  const greyColors = {
    "grey-100": grey[100] || "#f5f5f5", // Provide a default color if not present
    "grey-200": grey[200] || "#eeeeee",
    "grey-300": grey[300] || "#e0e0e0",
    "grey-400": grey[400] || "#bdbdbd",
    "grey-500": grey[500] || "#9e9e9e",
    "grey-600": grey[600] || "#757575",
    "grey-700": grey[700] || "#616161",
    "grey-800": grey[800] || "#424242",
    "grey-900": grey[900] || "#212121",
  };

  const validGradients = [
    "primary", "secondary", "info", "success", "warning", "error", "dark", "light",
  ];

  const validColors = [
    "transparent", "white", "black", "primary", "secondary", "info", "success", "warning", "error", "light", "dark", "text",
    ...Object.keys(greyColors), // Spread all grey color keys into validColors
  ];

  const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
  const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

  // background value
  let backgroundValue = bgColor;

  if (variant === "gradient") {
    backgroundValue = validGradients.find((el) => el === bgColor)
      ? linearGradient(gradients[bgColor]?.main || "#000", gradients[bgColor]?.state || "#fff")
      : white.main || "#fff";
  } else if (validColors.find((el) => el === bgColor)) {
    backgroundValue = themePalette[bgColor] ? themePalette[bgColor].main : greyColors[bgColor] || bgColor;
  } else {
    backgroundValue = bgColor;
  }

  // color value
  let colorValue = color;

  if (validColors.find((el) => el === color)) {
    colorValue = themePalette[color] ? themePalette[color].main : greyColors[color] || color;
  }

  // borderRadius value
  let borderRadiusValue = borderRadius;

  if (validBorderRadius.find((el) => el === borderRadius)) {
    borderRadiusValue = radius[borderRadius] || '0'; 
  }

  // boxShadow value
  let boxShadowValue = "none";

  if (validBoxShadows.find((el) => el === shadow)) {
    boxShadowValue = themeBoxShadows[shadow] || "none";
  } else if (coloredShadow) {
    boxShadowValue = colored[coloredShadow] || "none";
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
});