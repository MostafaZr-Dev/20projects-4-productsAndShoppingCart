import { Button, Grid, TextField } from "@material-ui/core";
import { Formik } from "formik";

import { StyledFormControl } from "./FormStyles";

function Form({onSubmit}) {
  return (
    <Formik
      initialValues={{ title: "", slug: "" }}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, submitForm }) => (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="عنوان"
              variant="outlined"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="slug"
              variant="outlined"
              name="slug"
              value={values.slug}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledFormControl>
              <Button className="create-btn" onClick={submitForm}>
                ذخیره
              </Button>
            </StyledFormControl>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
}

export default Form;
