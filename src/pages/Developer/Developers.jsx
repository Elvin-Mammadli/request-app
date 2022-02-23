import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box, Grid, MenuItem, Autocomplete, Button, TextField, Select, InputLabel, FormControl } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";
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
  timeRequired: "",
  startDate: `${new Date()}`,
  assignee: [],
  taskStatus: "",
}

const taskStatuses = [
  { value: "backLog", text: "Backlog" },
  { value: "todo", text: "Todo" },
  { value: "inProgress", text: "In Progress" },
  { value: "testing", text: "Testing" },
  { value: "done", text: "Done" },
  { value: "waitingInfo", text: "Tələb edən şəxsdən məlumat gözlənilir" }
]

export const Developer = () => {
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

  const dateHandleChange = date => {
    let time = format(date, "dd/MM/yyy");
    setValues({
      ...values,
      startDate: time
    });

    console.log(time)
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
              fullWidth
              className={classes.textField}
              variant="outlined"
              label="Taskın icra müddəti"
              name="timeRequired"
              value={values.timeRequired}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>

            {/* <TextField
              fullWidth
              className={classes.textField}
              name="description"
              label="Tələb açıqlama"
              value={values.description}
              onChange={handleChange}
            /> */}
          </Grid>

          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              className={classes.textField}
              name="startDate"
              label="Təxmini başlama vaxtı"
              value={values.startDate}
              onChange={dateHandleChange}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12}>
            <Autocomplete
              fullWidth
              multiple
              name="assignee"
              // label="visitors"
              options={[]}
              freeSolo
              getOptionLabel={option => option}
              // onChange={(e, value) => setReceivers((state) => value)}
              // renderTags={(value, getTagProps) =>
              //   value.map((option, index) => (
              //     <Chip label={option} {...getTagProps({ index })} />
              //   ))
              // }
              renderInput={(params) => {
                return <TextField
                  {...params}
                  label="Məsul şəxslər"
                // placeholder="Gələcək şəxs"
                />
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="TaskStatus">Task Status</InputLabel>
              <Select
                className={classes.textField}
                label="Task Status"
                name="taskStatus"
                labelId="TaskStatus"
                value={values.taskStatus}
                onChange={handleChange}
              >
                {taskStatuses.map((item, index) => (
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