import { Box, Grid, MenuItem, Autocomplete, Button, TextField, Select, InputLabel, FormControl } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  worker: {
    borderRadius: "5px",
    padding: "50px",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  },
  textField: {
  },
})


const initialValues = {
  requestName: "",
  description: "",
  type: "",
  file: "",
  priority: "",
  close: []
}

const endDatas = [
  {value: 1, text: "İstək sistemdə mövcuddur"},
  {value: 2, text: "Biznes tələblərə uyğun deyil"},
  {value: 3, text: "Texniki olaraq uyğun deyil"},
  {value: 4, text: "Qeyd edilən xəta sistemdə mövcud deyil"}
]

export const ITDepartment = () => {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues)

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  return (
    <Box
    className={classes.worker}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>

        <Grid item xs={12}>
            <TextField
              disabled
              fullWidth
              className={classes.textField}
              variant="outlined"
              label="Tələbin adı"
              name="requestName"
              value={values.requestName}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              disabled
              fullWidth
              className={classes.textField}
              name="description"
              label="Tələb açıqlama"
              value={values.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              disabled
              fullWidth
              className={classes.textField}
              name="type"
              label="Tələbin növü"
              value={values.type}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="priority">Prioritet</InputLabel>
              <Select
                className={classes.textField}
                label="Prioritet"
                name="priority"
                labelId="priority"
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
              name="file"
              label="Texniki tapşırıq"
              value={values.file}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              className={classes.textField}
              name="note"
              label="Qeyd"
              value={values.note}
              onChange={handleChange}
            />
          </Grid>


          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="developmentOptions">Proqramın yazılma növü</InputLabel>
              <Select
                className={classes.textField}
                label="Proqramın yazılma növü"
                name="developmentOptions"
                labelId="developmentOptions"
                value={values.priority}
                onChange={handleChange}
              >
                <MenuItem value="softwareDepartment">Proqram təminat şöbəsi tərəfindən yazılacaq</MenuItem>
                <MenuItem value="packet">Hazır paket alınacaq</MenuItem>
                <MenuItem value="outsource">Outsource ediləcək</MenuItem>
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
                labelId="close"
                value={values.close}
                onChange={handleChange}
              >
                {endDatas.map((item, index) => (
                  <MenuItem key={index} value={item.value}>{item.text}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={8}>
            <Button variant="contained" type="submit">Gonder</Button>
          </Grid>

        </Grid>
      </Box >
    </Box>
  );
};