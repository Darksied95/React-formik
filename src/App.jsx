import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";

const initialValues = {
  fName: "",
  lName: "",
  number: "",
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

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
          <div>
            <ErrorMessage name="number" />
          </div>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default App;
