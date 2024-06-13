import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Card from "./components/Card";
import CardList from "./CardList.jsx";
// import Home from "./components/Home";
import HomeAxios from "./HomeAxios.jsx";
import DetailTab from "./DetailTab.jsx";
// import AxiosTest from "./AxiosTest.jsx";
// import NoPage from "./component";



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeAxios />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cardList" element={<CardList />} />
        <Route path="/detail/:id" element={<DetailTab />} />
        { /*  <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
  );
}
