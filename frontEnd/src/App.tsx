import { Routes, Route } from "react-router-dom";
import { HomePage, BookDetail } from "./pages";
import "./styles/main.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book-detail/*" element={<BookDetail />} />
    </Routes>
  );
};

export default App;
