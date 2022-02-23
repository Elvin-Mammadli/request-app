import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  sideBar: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
  },
  link: {
    width: "200px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    textDecoration: "none",
    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    borderRadius: "5px"
  }
})

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.sideBar} >
      <Link className={classes.link} to="/worker">Worker</Link>
      <Link className={classes.link} to="/chief">Head of Department</Link>
      <Link className={classes.link} to="/it">IT Department</Link>
      <Link className={classes.link} to="/development">Software development</Link>
    </Box>
  );
}

export default Sidebar;