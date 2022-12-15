import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import logo from "../../images/sirejud_ico.png";

function NavigationBar() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div>
      <Navbar className="NavigationBar" bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="f"
              src={logo}
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/processos">Incluir Processo</Nav.Link>
              {/* <Nav.Link href="/court-information">Pesquisar Processo</Nav.Link> */}
              <Nav.Link href="/health-plan">Planos de Saúde</Nav.Link>
              <Nav.Link href="/beneficiary">Beneficiários</Nav.Link>
              <Nav.Link href="/drug">Medicamentos</Nav.Link>
              {/* <Nav.Link href="/users">Usuários</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
