import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert("Formik Form Submitted: " + JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      {() => (
        <Form className="p-4 max-w-md mx-auto space-y-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Registration (Formik)</h2>

          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border p-2 rounded"
          />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
          />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />

          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
