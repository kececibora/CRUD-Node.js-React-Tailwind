import { useState, useEffect } from "react";
import { useNavigate, userParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialstate = {
  name: "",
  email: "",
  contact: "",
};

function AddEdit() {
  const [state, setState] = useState(initialstate);

  const { name, email, contact } = state;

  const handleSubmit = (e) => {
    e.preventDefaul();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="mt-24">
      <form
        className="m-auto p-4 max-w-sm content-center"
        onSubmit={handleSubmit}
      >
        <label className="text-lg" htmlFor="name">
          Name
        </label>
        <br />
        <input
          className="input-none "
          type="text"
          id="name"
          name="name"
          placeholder="İsminiz?"
          value={name}
          onChange={handleInputChange}
        />
        <br />
        <label className="text-lg" htmlFor="email">
          E-mail
        </label>
        <br />
        <input
          className="input-none"
          type="text"
          id="email"
          name="email"
          placeholder="Email?"
          value={email}
          onChange={handleInputChange}
        />
        <br />
        <label className="text-lg" htmlFor="contact">
          Contact
        </label>
        <br />
        <input
          className="input-none"
          type="number"
          id="contact"
          name="contact"
          placeholder="Numaranız?"
          value={contact}
          onChange={handleInputChange}
        />
        <input type="submit" className="input-submit" value="Save" />
        <Link to="/">
          <input
            type="button"
            value="Go Back"
            className="input-submit bg-slate-800"
          />
        </Link>
      </form>
    </div>
  );
}

export default AddEdit;
