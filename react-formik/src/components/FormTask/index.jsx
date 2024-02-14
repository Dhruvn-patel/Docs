import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "The password must be 8 characters long, must have at least 1 Uppercase, 1 Number and 1 Special Character\n"
    )
    .required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const handleSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const FormTask = () => {
  return (
    <div>
      <h1>Formik Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" placeholder="Name..." type="text" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="Email..."
                type="email"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="Password..."
                type="password"
                autoComplete="off"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password..."
                type="password"
                autoComplete="off"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div>{errors.confirmPassword}</div>
              ) : null}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormTask;

/*


 [3,1,-2,-5,2,-4]



*/
