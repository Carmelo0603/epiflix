import { Container, Row, Col, Button } from "react-bootstrap";

const MyFooter = () => (
  <footer className="mt-5 p-5" style={{ backgroundColor: "#1c1c1cff" }}>
    <Container>
      <Row className="justify-content-center">
        <Col xs={6}>
          <div className="mb-2">
            <i className="bi bi-facebook footer-icon me-3"></i>
            <i className="bi bi-instagram footer-icon me-3"></i>
            <i className="bi bi-twitter-x footer-icon me-3"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </div>
          <Row className="row-cols-2 row-cols-sm-4 footer-links">
            <Col>
              <p>
                <a href="#">Audio and Subtitles</a>
              </p>
              <p>
                <a href="#">Media Center</a>
              </p>
            </Col>
            <Col>
              <p>
                <a href="#">Audio Description</a>
              </p>
              <p>
                <a href="#">Investor Relations</a>
              </p>
            </Col>
            <Col>
              <p>
                <a href="#">Help Center</a>
              </p>
              <p>
                <a href="#">Jobs</a>
              </p>
            </Col>
            <Col>
              <p>
                <a href="#">Gift Cards</a>
              </p>
              <p>
                <a href="#">Terms of Use</a>
              </p>
            </Col>
          </Row>
          <Button variant="outline-secondary" className="footer-button rounded-0 mt-3 btn-sm">
            Service Code
          </Button>
          <div className="copyright mt-3">© 1997-2023 Netflix, Inc.</div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default MyFooter;
