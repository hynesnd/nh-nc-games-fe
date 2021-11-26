import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Reviews from "./components/Reviews/Reviews";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar";
import ReviewPage from "./components/ReviewPage/ReviewPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header text="NC House of Games" styling="App-header" />
        <NavBar />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/categories/:slug" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reviews/:review_id" element={<ReviewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
