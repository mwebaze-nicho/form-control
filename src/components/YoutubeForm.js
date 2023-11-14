import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

//Takes in the initial values of all input fields.
const initialValues = {
  name: "",
  email: "",
  password: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  // comments: "",
};

//validating form data
//values.name values.email values.password
//errors.name errors.email errors.password
//yup makes it easier to write validation through schemas

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(4, "Name is too short. Atleast 4 characters")
    .max(8, "Name is too long. Atmost 8 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short. Atleast 4 characters")
    .max(8, "Password is too long. Atmost 8 characters"),

  address: Yup.string()
    .required("Required")
    .min(6, "Atleast 6 characters")
    .max(100, " Atmost 100 characters"),
});

//handling form data submission
const onSubmit = (values, onSubmitProps) => {
  console.log("values", values);
  console.log("Submit props", onSubmitProps);

  //after submitting onsubmit to false
  onSubmitProps.setSubmitting(false);
};

const YouTubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnMount
    >
      {/* Form component sees directly in the formic props onsubmit */}
      {(formik) => (
        <Form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" />
            <span className="error">
              <ErrorMessage name="name" />
            </span>
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <Field type="email" name="email" id="email" />
            <span className="error">
              <ErrorMessage name="email" />
            </span>
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Field type="text" name="password" id="password" />
            <span className="error">
              <ErrorMessage name="password" />
            </span>
          </div>
          <div className="form-control">
            <label htmlFor="address">Address:</label>

            {/*
             * Passing data from this field using props
             * Getting props and spreading them to the input element to connect to formik
             */}

            <Field type="text" name="address" id="address">
              {(props) => {
                const { field, form, meta } = props;

                return (
                  <div>
                    <input
                      type="text"
                      name="address"
                      {...field}
                      {...meta}
                      {...form}
                    />
                    <ErrorMessage name="address" component={TextError} />
                  </div>
                );
              }}
            </Field>
          </div>
          <span className="button">
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </span>
        </Form>
      )}
    </Formik>
  );
};

export default YouTubeForm;
