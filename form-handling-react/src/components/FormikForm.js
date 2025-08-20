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
      onSubmit={(values) => {
        console.log("Formik submitted:", values);
      }}
    >
      <Form className="max-w-md mx-auto p-4 shadow-md bg-white rounded-lg">
        <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>

        <div className="mb-4">
          <label className="block">Username:</label>
          <Field type="text" name="username" className="border rounded w-full p-2" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        <div className="mb-4">
          <label className="block">Email:</label>
          <Field type="email" name="email" className="border rounded w-full p-2" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        <div className="mb-4">
          <label className="block">Password:</label>
          <Field type="password" name="password" className="border rounded w-full p-2" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
