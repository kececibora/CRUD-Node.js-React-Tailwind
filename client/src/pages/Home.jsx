import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("Silmek İstediğinize Emin Misiniz ?")) {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("Başarıyla Silindi!");
      setTimeout(() => loadData(), 500);
    }
  };

  return (
    <div className="mt-4 overflow-x-auto relative">
      <p align="right">
        <Link to="/addContact">
          <button className="btn-green mb-4 mr-6 ">Üye Ekle</button>
        </Link>
      </p>
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-slate-600  ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="text-center py-3 px-6 border border-slate-600">
              No
            </th>
            <th className="text-center py-3 px-6 border border-slate-600">
              İsim
            </th>
            <th className="text-center py-3 px-6 border border-slate-600">
              Email
            </th>
            <th className="text-center py-3 px-6 border border-slate-600">
              Numara{" "}
            </th>
            <th className="text-center py-3 px-6 border border-slate-600">
              Aksiyon
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
                key={item.id}
              >
                <th
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  scope="row"
                >
                  {index + 1}
                </th>
                <td className="py-4 px-6">{item.name}</td>
                <td className="py-4 px-6">{item.email}</td>
                <td className="py-4 px-6">{item.contact}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn-yellow">Edit</button>
                  </Link>
                  <button
                    onClick={() => deleteContact(item.id)}
                    className="btn-red"
                  >
                    Delete
                  </button>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn-blue">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Home;
