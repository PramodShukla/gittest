import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
      <div className="row bg-danger">
        <div className="col-md-4">
          <div className="logo">Logo</div>
        </div>
        <div className="col-md-4">
          <div className="">Logo</div>
        </div>
        <div className="col-md-4">
          <div className="">Logo</div>
        </div>
      </div>
    </>
  );
}

export default App;
