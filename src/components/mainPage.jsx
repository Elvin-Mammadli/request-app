import { useNavigate } from "react-router-dom";
import {
  Box, Grid, MenuItem, Autocomplete, Chip,
  TextField as MuiTextField
} from "@mui/material";
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FormHead } from "containers/components";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import {
  LocalizationProvider,
  // DatePicker as MuiDatePicker
} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "formik-mui-lab";
import { useStyles } from "../../Styles/Styles";
import { useState } from "react";

const resultDatas = [
  { value: "DepartmentHead", label: "Departament rəhbərin göndərməsi" },
  { value: "NBM", label: "NBM rəisin göndərməsi" },
  { value: "Confirmed", label: "Təsdiqləndi" }
]

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "NBM rəisin göndərməsi" },
]

const initialValues = {
  visitors: [],
  date: "",
  meetingPerson: "",
  visitPurpose: "",
  note: "",
  result: ""
}

const options = ["dsds"];

export const GuestFormWorker = () => {
  // const [receivers, setReceivers] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    // resetForm()
    // navigate("/guest/worker/saved")
  }

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Box className={classes.breadcrumbBar}>
            <Breadcrumbs />
          </Box>
          <QueryTabs tabs={tabs} value="one" />
          <Box className={classes.container}>
            <Box className={classes.dataContainer}>
              <Box className={classes.formBox}>
                <FormHead header="Sorğunun formalaşdırılması" />
                <Grid container spacing={2} padding="16px">

                  <Grid item sm={6}>
                    <Field
                      fullWidth
                      multiple
                      name="visitors"
                      component={Autocomplete}
                      label="visitors"
                      options={options}
                      // freeSolo
                      getOptionLabel={option => option}
                      // onChange={(e, value) => setReceivers((state) => value)}
                      // renderTags={(value, getTagProps) =>
                      //   value.map((option, index) => (
                      //     <Chip label={option} {...getTagProps({ index })} />
                      //   ))
                      // }
                      renderInput={(params) => {
                        return <MuiTextField
                          {...params}
                          label="Gələcək şəxs"
                        // placeholder="Gələcək şəxs"
                        />
                      }}
                    />
                  </Grid>


                  <Grid item sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Field
                        name="date"
                        fullWidth
                        component={DatePicker}
                        label="Gəlmə tarixi"
                        inputFormat="dd/MM/yyyy"
                        InputAdornmentProps={{ position: "start" }}
                      />
                    </LocalizationProvider>
                  </Grid>

                  <Grid item sm={6}>
                    <Field
                      fullWidth
                      name="meetingPerson"
                      component={TextField}
                      label="Görüşəcək şəxs"
                    />
                  </Grid>

                  <Grid item sm={12}>
                    <Field
                      fullWidth
                      name="visitPurpose"
                      component={TextField}
                      label="Gəlmə səbəbi"
                    />
                  </Grid>

                  <Grid item sm={12}>
                    <Field
                      fullWidth
                      name="note"
                      component={TextField}
                      label="Sorğu ilə bağlı qeyd"
                    />
                  </Grid>

                  <Grid item sm={12}>
                    <Field
                      fullWidth
                      name="result"
                      select
                      component={TextField}
                      label="Nəticə"
                    >
                      {resultDatas.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>

                </Grid>
              </Box>

              <Box className={classes.button}>
                <SubmitButton text="Yadda saxla və yönləndir" />
              </Box>

            </Box>
          </Box>
        </Form>
      </Formik>
    </Box >
  );
};