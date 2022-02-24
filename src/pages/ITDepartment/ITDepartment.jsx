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
  ITnote: "",
  close: [],
  developmentOptions: "",
};

const endDatas = [
  { value: "İstək sistemdə mövcuddur", text: "İstək sistemdə mövcuddur" },
  { value: "Biznes tələblərə uyğun deyil", text: "Biznes tələblərə uyğun deyil" },
  { value: "Texniki olaraq uyğun deyil", text: "Texniki olaraq uyğun deyil" },
  { value: "Qeyd edilən xəta sistemdə mövcud deyil", text: "Qeyd edilən xəta sistemdə mövcud deyil" },
];

const developmentOptions = [
  {
    value: "Proqram təminat şöbəsi tərəfindən yazılacaq",
    label: "Proqram təminat şöbəsi tərəfindən yazılacaq",
  },
  { value: "Hazır paket alınacaq", label: "Hazır paket alınacaq" },
  { value: "Outsource ediləcək", label: "Outsource ediləcək" },
];

export const ITDepartment = () => {
  const classes = useStyles();
  const [values, setValues] = useState(() => {
    let temp = JSON.parse(localStorage.getItem("request"));
    return {
      ...initialValues,
      ...temp,
    };
  });

  const handleSubmit = (e) => {
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
              name="ITnote"
              label="IT şöbəsinin qeydi"
              value={values.ITnote}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              disabled
              fullWidth
              className={classes.textField}
              label="Departament rəhbərinin qeydi"
              defaultValue={values.chiefNote || "yoxdur"}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="developmentOptions">
                Proqramın yazılma növü
              </InputLabel>
              <Select
                className={classes.textField}
                label="Proqramın yazılma növü"
                name="developmentOptions"
                value={values.developmentOptions}
                onChange={handleChange}
              >
                {developmentOptions.map((item,index) => (
                  <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="close">Sonlandır</InputLabel>
              <Select
                multiple
                className={classes.textField}
                label="Sonlandır"
                name="close"
                value={values.close}
                onChange={handleChange}
              >
                {endDatas.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {item.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={8}>
            <Button variant="contained" type="submit">
              Gonder
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
