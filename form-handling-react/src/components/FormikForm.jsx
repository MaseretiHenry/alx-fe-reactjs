import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Submitting with Formik:", values);
        alert("User registered successfully with Formik!");
        resetForm();
      }}
    >
      <Form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">User Registration (Formik)</h2>

        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <Field
            type="text"
            name="username"
            className="w-full border p-2 rounded"
          />
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <Field
            type="email"
            name="email"
            className="w-full border p-2 rounded"
          />
          <ErrorMessage
            name="email"
            component="p"
