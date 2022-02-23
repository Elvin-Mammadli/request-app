import {
  Box,
  Grid,
  MenuItem,
  Button,
  TextField,
  Select,
  InputLabel,
  FormControl,
  ListSubheader,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

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
  note: "",
};

export const Chief = () => {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const [data, setData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  

  useEffect(() => {
    const data = setData(JSON.parse(localStorage.getItem("worker")))
    if(data) {
      setData(data)
    }
  }, []);

  console.log(data.priority);

  return (
    <Box className={classes.worker}>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              disabled
              fullWidth
              className={classes.textField}
              variant="outlined"
              label="Tələbin adı"
              name="requestName"
              value={data?.requestName}
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
              value={data?.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth disabled>
              <InputLabel id="priority">Tələbin növü</InputLabel>
              <Select
                className={classes.textField}
                label="Tələbin növü"
                name="type"
                value={data?.type}
                onChange={handleChange}
              >
                <ListSubheader>İstək</ListSubheader>
                <MenuItem value="newRequest">Yeni istək</MenuItem>
                <ListSubheader>Dəyişiklik</ListSubheader>
                <MenuItem value="changeProgramNames">
                  Dəyişiklik ediləcək proqram adları
                </MenuItem>
                <ListSubheader>Xəta</ListSubheader>
                <MenuItem value="errorNames">Xəta olan proqram adları</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="priority">Prioritet</InputLabel>
              <Select
                className={classes.textField}
                label="Prioritet"
                name="priority"
                value={data?.priority}
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
              value={data?.file}
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
