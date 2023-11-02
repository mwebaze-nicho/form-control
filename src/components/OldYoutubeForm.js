import { useFormik } from "formik";
import * as Yup from "yup";

//Takes in the initial values of all input fields.
const initialValues = {
  name: "",
  email: "",
  channel: "",
};

//validating form data
//values.name values.email values.channel
//errors.name errors.email errors.channel
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.channel) {
    errors.channel = "Channel is required";
  }

  return errors;
};

//handling form data submission
const onSubmit = (values) => {
  console.log("values", values);
};

const OldYouTubeForm = () => {
  //formik takes in an object
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  console.log("touched fields", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel && formik.touched.channel && (
            <div className="error">{formik.errors.channel}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldYouTubeForm;
