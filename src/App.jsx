import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
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
  phNumbers: [""],
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

        <div>
          <label>Add multiple Phone Numbers</label>
          <FieldArray name="phNumbers">
            {(props) => {
              const { push, remove, form } = props;
              const { values } = form;
              const { phNumbers } = values;
              console.log(phNumbers);
              return (
                <div>
                  {phNumbers.map((phNumber, index) => {
                    return (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`} />
                        {index > 0 && (
                          <button
                            type="button"
                            className="default"
                            onClick={() => remove(index)}
                          >
                            {" "}
                            -
                          </button>
                        )}
                        <button
                          type="button"
                          className="default"
                          onClick={() => push("")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </FieldArray>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default App;
