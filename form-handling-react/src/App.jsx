import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // ✅ added

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/formik" element={<FormikForm />} /> {/* ✅ Formik route */}
      </Routes>
    </Router>
  );
}

export default App;
