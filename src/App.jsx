import { useFormik } from "formik";
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

// const validate = (values) => {
//   const errors = {};
//   const numberLength = [11, 13, 14];
//   if (!values.fName) {
//     errors.fName = "First Name is required";
//   }
//   if (!values.lName) {
//     errors.lName = "Last Name is required";
//   }
//   if (!values.number) {
//     errors.number = "Number is required";
//   } else if (!numberLength.includes(+String(values.number).length)) {
//     errors.number = "This number seems wrong";
//   }

//   return errors;
// };
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
    <form className="App" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="fName">First Name </label>
        <input
          type="text"
          id="fName"
          name="fName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fName}
        />
        {formik.touched.fName && formik.errors.fName && (
          <div>{formik.errors.fName}</div>
        )}
      </div>
      <div>
        <label htmlFor="lName">Last Name: </label>
        <input
          type="text"
          id="lName"
          name="lName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lName}
        />
        {formik.touched.lName && formik.errors.lName && (
          <div>{formik.errors.lName}</div>
        )}
      </div>

      <div>
        <label htmlFor="number">Phone Number: </label>
        <input
          type="number"
          id="number"
          name="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number && (
          <div>{formik.errors.number}</div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
