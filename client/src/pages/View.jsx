import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function View() {
  const [user, setUser] = useState({});

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setUser({ ...resp.data[0] }));
  }, [id]);
  return (
    <div className="mt-28 flex justify-center btn-blue   ">
      <div>
        <button>{id}</button>
        <hr />
        <button>{user.name}</button>
        <hr />
        <button>{user.email}</button>
        <hr />
        <button>{user.contact}</button>
      </div>
    </div>
  );
}

export default View;
