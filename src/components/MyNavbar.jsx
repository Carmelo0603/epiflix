import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = () => (
  <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#1c1c1cff" }} className="px-4">
    <Container fluid>
      <Navbar.Brand href="#">
        <img src="" alt="Logo" style={{ width: "100px", height: "55px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto fw-bold">
          <Nav.Link href="#" active>
            Home
          </Nav.Link>
          <Nav.Link href="#">TV Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
        <div className="d-flex align-items-center">
          <i className="bi bi-search icons"></i>
          <div id="kids" className="fw-bold">
            KIDS
          </div>
          <i className="bi bi-bell icons"></i>
          <i className="bi bi-person-circle icons"></i>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
