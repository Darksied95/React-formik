import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";
import ErrorComponent from "./ErrorComponent";

const initialValues = {
  fName: "",
  lName: "",
  number: "",
  notes: "",
  socials: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
};

const onSubmit = (values) => {
  console.log(values);
  alert("Form submitted");
};

const validationSchema = Yup.object({
  fName: Yup.string().required("First Name is required"),
  lName: Yup.string().required("Last Name is required"),
  number: Yup.number().required("Number is required"),
});

function App() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="App">
        <div>
          <label htmlFor="fName">First Name </label>
          <Field type="text" id="fName" name="fName" />
          <div>
            <ErrorMessage name="fName" />
          </div>
        </div>

        <div>
          <label htmlFor="lName">Last Name: </label>
          <Field type="text" id="lName" name="lName" />
          <div>
            <ErrorMessage name="lName" />
          </div>
        </div>

        <div>
          <label htmlFor="number">Phone Number: </label>
          <Field type="number" id="number" name="number" />
          <ErrorMessage name="number" component={ErrorComponent} />
        </div>

        <div>
          <label htmlFor="notes">Notes</label>
          <Field as="textarea" name="notes" />
        </div>

        <div>
          <label htmlFor="facebook">Facebook</label>
          <Field name="socials.facebook" />
        </div>

        <div>
          <label htmlFor="twitter">Twitter</label>
          <Field name="socials.twitter" />
        </div>
        <div>
          <label>Primary Phone Number</label>
          <Field name="phoneNumber[0]" />
        </div>
        <div>
          <label>Secondary Phone Number</label>
          <Field name="phoneNumber[1]" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default App;
