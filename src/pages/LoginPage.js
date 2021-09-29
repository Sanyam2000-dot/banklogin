import React from "react";
import "./LoginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterComp from "../components/FooterComp";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
} from "react-bootstrap";

const LoginPage = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="navbar"
        style={{ borderEndStartRadius: "8px", marginBottom: "1rem" }}
      >
        <Container fluid>
          <Navbar.Brand
            style={{ fontSize: "2rem", fontWeight: "600" }}
            href="#home"
          >
            NEOG{" "}
          </Navbar.Brand>{" "}
          <Nav className="mr-auto">
            <Nav.Link href="#home"> Services </Nav.Link>{" "}
            <Nav.Link href="#features"> Features </Nav.Link>{" "}
            <Nav.Link href="#pricing"> Pricing </Nav.Link>{" "}
          </Nav>{" "}
        </Container>{" "}
      </Navbar>{" "}
      <Container className="outer-box ">
        <h1> Neog Banking Services </h1>{" "}
        <Row className="justify-content-md-center">
          <Col md="auto" className="frosted-box">
            <img className="bank-image" src="/bank.svg" alt="" />
          </Col>
          <Col md="auto" style={{ margin: "auto" }}>
            <Form className="form-box">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Email address </Form.Label>{" "}
                <Form.Control type="email" placeholder="you@your-domain.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> Password </Form.Label>{" "}
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  style={{ textAlingn: "left", fontSize: "18px" }}
                  type="checkbox"
                  label="I agree to platform's terms of service"
                />
              </Form.Group>{" "}
              <Button variant="dark" style={{ width: "100%" }} type="submit">
                Log in
              </Button>{" "}
              <br />
              <p style={{ marginTop: "8px", fontSize: "18px" }}>
                Click{" "}
                <a href="/" style={{ textDecoration: "none" }}>
                  {" "}
                  here{" "}
                </a>{" "}
                to sign in
              </p>{" "}
            </Form>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
      <FooterComp />
    </>
  );
};

export default LoginPage;
