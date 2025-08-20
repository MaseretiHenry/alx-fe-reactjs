import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!username) formErrors.username = "Username is required";
    if (!email) formErrors.email = "Email is required";
    if (!password) formErrors.password = "Password is required";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", { username, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow-md bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Register</h2>

      <div className="mb-4">
        <label className="block">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded w-full p-2"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      </div>

      <div className="mb-4">
        <label className="block">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded w-full p-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded w-full p-2"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
