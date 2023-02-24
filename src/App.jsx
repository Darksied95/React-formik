import { useFormik } from "formik";
import "./App.css";

function App() {
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      number: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
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
          value={formik.values.fName}
        />
      </div>
      <div>
        <label htmlFor="lName">Last Name: </label>
        <input
          type="text"
          id="lName"
          name="lName"
          onChange={formik.handleChange}
          value={formik.values.lName}
        />
      </div>
      <div>
        <label htmlFor="number">Phone Number: </label>
        <input
          type="text"
          id="number"
          name="number"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
