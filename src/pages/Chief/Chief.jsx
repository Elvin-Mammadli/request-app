import {
  Box,
  Grid,
  MenuItem,
  Button,
  TextField,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  worker: {
    borderRadius: "5px",
    padding: "50px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  },
  textField: {},
});

const initialValues = {
  priority: "",
  chiefNote: "",
};

export const Chief = () => {
  const classes = useStyles();
  const [values, setValues] = useState(() => {
    let temp = JSON.parse(localStorage.getItem("request"))
    return {
      ...initialValues,
      ...temp
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("request", JSON.stringify(values));
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Box className={classes.worker}>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              disabled
              fullWidth
              className={classes.textField}
              label="Tələbin adı"
              defaultValue={values.requestName}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              disabled
              fullWidth
              className={classes.textField}
              label="Tələb açıqlama"
              defaultValue={values.description}
            />
          </Grid>

          <Grid item xs={12}>

          <TextField
              disabled
              fullWidth
              className={classes.textField}
              label="Tələbin növü"
              defaultValue={values.type}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="priority">Prioritet</InputLabel>
              <Select
                className={classes.textField}
                label="Prioritet"
                name="priority"
                value={values.priority}
                onChange={handleChange}
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Normal">Normal</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              disabled
              fullWidth
              className={classes.textField}
              label="Texniki tapşırıq"
              defaultValue={values.file}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              className={classes.textField}
              name="chiefNote"
              label="Departament rəhbərinin qeydi"
              value={values.note}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={8}>
            <Button variant="contained" type="submit">
              Göndər
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
