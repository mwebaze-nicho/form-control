import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//Takes in the initial values of all input fields.
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
};

//validating form data
//values.name values.email values.channel
//errors.name errors.email errors.channel
//yup makes it easier to write validation through schemas

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(4, "Name is too short. Atleast 4 characters")
    .max(8, "Name is too long. Atmost 8 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  channel: Yup.string()
    .required("Channel is required")
    .min(4, "Name is too short. Atleast 4 characters")
    .max(8, "Name is too long. Atmost 8 characters"),
});

//handling form data submission
const onSubmit = (values) => {
  console.log("values", values);
};

const YouTubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {/* Form component sees directly in the formic props onsubmit */}
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
          <label htmlFor="channel">Channel</label>
          <Field type="text" name="channel" id="channel" />
          <span className="error">
            <ErrorMessage name="channel" />
          </span>
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comment</label>
          <Field
            as="textarea"
            name="comments"
            id="comments"
            placeholder="Enter comment"
          ></Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YouTubeForm;
