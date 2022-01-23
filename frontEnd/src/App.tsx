import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  BookDetail,
  Login,
  SignUp,
  AuthorDetail,
  NewAuthor,
} from "./pages";
import "./styles/main.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book-detail/*" element={<BookDetail />} />
      <Route path="/author-detail/*" element={<AuthorDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/new-author" element={<NewAuthor />} />
    </Routes>
  );
};

export default App;
