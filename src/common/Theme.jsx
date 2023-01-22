import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    gray: "#a8acb4",
    borderGray: "#dcdcdc",
  },
  fonts: ["sans-serif", "Open Sans"],
  inputFields: {
    borderProps: {
      border: `solid 1px #dcdcdc`,
      webkit: `-1px 2px 3px 1px rgba(169, 169, 169, 0.21)`,
      boxShadow: `-1px 2px 3px 1px rgba(169, 169, 169, 0.21)`,
    },
  },
  size: {
    s: "1em",
    m: "20px",
    l: "22px",
    xl: "25px",
    xxl: "30px",
    xxll: "40px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
