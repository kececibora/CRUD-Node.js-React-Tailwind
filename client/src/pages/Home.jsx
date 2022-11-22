import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Home;
