import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const initialstate = {
  name: "",
  email: "",
  contact: "",
};

function AddEdit() {
  const [state, setState] = useState(initialstate);

  const navigate = useNavigate();
  const { name, email, contact } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Lütfen Gerekli Yerleri Doldurun");
    } else {
      axios
        .post("http://localhost:5000/api/post", {
          name,
          email,
          contact,
        })
        .then(() => {
          setState({ name: "", email: "", contact: "" });
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("Başarıyla Eklendi");
      setTimeout(() => navigate("/"), 1000);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="mt-24">
      <ToastContainer position="top-center" />
      <form
        onSubmit={handleSubmit}
        className="m-auto p-4 max-w-sm content-center"
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
