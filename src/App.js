import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Reviews from "./components/Reviews/Reviews";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar";
import ReviewPage from "./components/ReviewPage/ReviewPage";
import styled from "styled-components";

const Body = styled.div`
  background-color: #009dae;
  min-height: 100vh;
  padding-bottom: 1px;
`;

function App() {
  return (
    <BrowserRouter>
      <Body className="App">
        <Header text="NC House of Games" styling="App-header" />
        <NavBar />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/categories/:slug" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reviews/:review_id" element={<ReviewPage />} />
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default App;
