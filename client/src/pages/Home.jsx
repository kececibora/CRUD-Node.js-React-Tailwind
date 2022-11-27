import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div>
      <h1 className="flex justify-center text-9xl">Home</h1>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Home;
