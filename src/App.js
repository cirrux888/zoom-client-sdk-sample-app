import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Zoom } from "./Zoom";
// import "./index.css";
// import "./huseby.css";

const useStyles = makeStyles(() => ({
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    height: "100px",
    width: "100%",
    backgroundColor: "#ff0000",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    backgroundColor: "#ffff00",
  },
  // huseby_content: {
  //   display: "flex",
  //   flexDirection: "column",
  //   height: "100%",
  //   width: "100%",
  // },
  // huseby_header: {
  //   display: "flex",
  //   flexDirection: "column",
  //   height: "100px",
  //   width: "100%",
  //   backgroundColor: "#ff0000",
  // },
  // huseby_main: {
  //   display: "flex",
  //   flexDirection: "row",
  //   height: "100%",
  //   width: "100%",
  //   backgroundColor: "#ffff00",
  // },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Zoom />
    </>
    // <>
    // <div style={{position: "absolute", top: "50px", right: "20px"}}>
    //   <Zoom/>
    // </div>
    // <AppBar>
    //       <Header/>
    // </AppBar>
    // </>
  );
};

export default App;
