import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";
import ErrorComponent from "./ErrorComponent";

const initialValues = {
  fName: "",
  lName: "",
  number: "",
  notes: "",
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
          <label htmlFor="">Notes</label>
          <Field as="textarea" name="notes" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default App;
