import { useState } from "react";

export default function EditPass({ user, setUser, newMegaState }) {
  const [credentials, setCredentials] = useState({
    password: "",
  });

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  }

  async function handleUpdatePass(evt) {
    evt.preventDefault();
    const id = user._id;
    const updatedPass = {
      password: credentials.password,
    };
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPass),
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleUpdatePass}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Update Password</button>
        </form>
      </div>
    </div>
  );
}
