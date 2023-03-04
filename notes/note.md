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
It is all handled by default by **Field** Component
--Fields by default are input but we can pass a prop `as=""` to change it to textarea or select.

-We no longer have use for **formik.errors** because we now have an **ErrorMessage** self closing component that renders our errors automatically, we just have to pass a prop called name with the particular attr name we want.
--ErrorMessage by default have no tag, we can use component prop to set it to any html tag we want (`component="div"`) but by default this div have no class, so we can create a custom Error component and pass it into the component props(see code)

### Nested Object

Related properties can be grouped as an object(see code)

### Arrays

When we have related fields, we can also grouped them in an array(see code)

### Dynamically created arrays using FieldArray

Let's assume we have a single field but the user can click a button to generate more fields, we can use FieldArray component(see code)
