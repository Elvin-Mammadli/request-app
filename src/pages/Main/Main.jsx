import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Route, Routes } from "react-router-dom";
import { Chief } from "../Chief/Chief";
import { Developer } from "../Developer/Developers";
import { ITDepartment } from "../ITDepartment/ITDepartment";
import { Worker } from "../Worker/Worker";

const useStyles = makeStyles({
  main: {
    width: "80%",
    padding: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
})

const Main = () => {
  const classes = useStyles();


  return (
    <Box className={classes.main}>
      <Routes>
        <Route path="/worker" element={<Worker />} />
        <Route path="/chief" element={<Chief />} />
        <Route path="/it" element={<ITDepartment />} />
        <Route path="/development" element={<Developer />} />
      </Routes>
    </Box>);
}

export default Main;