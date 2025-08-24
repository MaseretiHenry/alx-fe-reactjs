import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
});

function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = async (values, { resetForm }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log("Formik API Response:", data);
    alert("User registered successfully (Formik)!");
    resetForm();
  };

  return (
    <div>
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field type="text" name="username" placeholder="Username" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
