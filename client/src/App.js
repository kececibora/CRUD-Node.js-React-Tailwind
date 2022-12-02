import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addContact" element={<AddEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
