# Formik Hook

## useFormik

import {useformik} from 'formik'
const formik = useFormik({
initialValues,
onSubmit,
validate,
validationSchema,
});
**initialValues** is set to an initial value object ()refer to code

**onSubmit** is set to a function that can accept the values of the form and peform some action when we submit a form(refer to code)

**validate** is set to a function that accepts values of the form and validates it against our conditions, an errors object is created and returned by us (refer to code)

**validateSchema** is set to an object schema done mostly with a library like Yup or joi( it should be prefer over validate , refer to code).

**Input**
-name attributes are important as this is what our initialValues try to match

**formik.handleSubmit** is set to onSubmit form attribute, this calls our onSubmit function.

**formik.values.[input attribute name]** this is combination with handleChnage track the changes of our input states

**formik.handleChange** is set to onChange attribute to reflect changes done to the input

**formik.errors** returns an error object that can be used to handle errors(see code)

### Warning:

All inputs errors are tracked once we clicked on an one input, this make for bad user ux, so instead we add **formik.handleBlur** to onBlur attribute, this gives us access to **formik.touched** and with this we can handle errors only on input we have visited.

## Formik Component

Formik Component gives us an even better approach to forms
`import { Formik, Form, Field, ErrorMessage } from "formik"`

-We wrap our full form component with a **Formik** wrapper(see code)
--We pass initialValues, onSubmit, validationSchema etc as props to **Formik**

-We replace default html form tag with **Form** Component
--NO need to use **formik.handleSubmit** here

-We replace input with **Field**
--No need for **formik.handleBlur**,**formik.handleChange**, **formik.values.[input attribute name]**
I t is all handled by default by **Field** Component

-We no longer have use for **formik.errors** because we now have an **ErrorMessage** self closing component that renders our errors automatically, we just have to pass a prop called name with the particular attr name we want.
