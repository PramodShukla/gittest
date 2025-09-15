import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Nav,
  Navbar,
} from "react-bootstrap";

function App() {
  return (
    <>
      <Header />

      <Footer />
    </>
  );
}

export default App;
