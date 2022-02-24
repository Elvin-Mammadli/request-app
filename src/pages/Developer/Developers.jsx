import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Box,
  Grid,
  MenuItem,
  Autocomplete,
  Button,
  TextField,
  Select,
  InputLabel,
  FormControl
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";
import { useState } from "react";

const useStyles = makeStyles({
  worker: {
    borderRadius: "5px",
    padding: "20px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  },
});

const initialValues = {
  timeRequired: "",
  startDate: format(new Date(), "MM/dd/yyyy"),
  assignee: [],
  taskStatus: "",
};

const taskStatuses = [
  { value: "backLog", text: "Backlog" },
  { value: "todo", text: "Todo" },
  { value: "inProgress", text: "In Progress" },
  { value: "testing", text: "Testing" },
  { value: "done", text: "Done" },
  { value: "waitingInfo", text: "Tələb edən şəxsdən məlumat gözlənilir" },
];

export const Developer = () => {
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

  const dateHandleChange = (date) => {
    let time = format(date, "MM/dd/yyyy");
    setValues({
      ...values,
      startDate: time,
    });
  };

 

  return (
    <Box className={classes.worker}>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <TextField
              disabled
              fullWidth
              label="Tələbin adı"
              defaultValue={values.requestName}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              disabled
              fullWidth
              label="Tələb açıqlama"
              defaultValue={values.description}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              disabled
              fullWidth
              label="Tələbin növü"
              defaultValue={values.type}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              disabled
              fullWidth
              label="Prioritet"
              defaultValue={values.priority}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              disabled
              fullWidth
              label="Texniki tapşırıq"
              defaultValue={values.file}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              disabled
              fullWidth
              label="Departament rəhbərinin qeydi"
              defaultValue={values.chiefNote || "yoxdur"}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              disabled
              fullWidth
              label="IT şöbəsinin qeydi"
              defaultValue={values.ITnote || "yoxdur"}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              disabled
              fullWidth
              label="Proqramın yazılma növü"
              defaultValue={values.developmentOptions}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              disabled
              fullWidth
              label="Sonlandır"
              defaultValue={values.close}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Taskın icra müddəti"
              name="timeRequired"
              value={values.timeRequired}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                name="startDate"
                label="Təxmini başlama vaxtı"
                value={values.startDate}
                onChange={dateHandleChange}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Autocomplete
              multiple
              name="assignee"
              options={[]}
              freeSolo
              onChange={(e) => {
                let name = e.target.value;
                let temp = [...values.assignee, name]
                setValues({
                  ...values,
                  assignee: temp
                })
              }}
 
              renderInput={(params) => {
                return (
                  <TextField fullWidth {...params} label="Məsul şəxslər" />
                );
              }}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
              <InputLabel id="TaskStatus">Task Status</InputLabel>
              <Select
                label="Task Status"
                name="taskStatus"
                value={values.taskStatus}
                onChange={handleChange}
              >
                {taskStatuses.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {item.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Gonder
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
