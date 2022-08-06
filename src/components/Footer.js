import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; 2022 Developed by{" "}
            <a href="https://linkedin.com/in/nasimshow">Nasim</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
