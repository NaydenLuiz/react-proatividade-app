import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom/cjs/react-router-dom.min';


function Menu() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" exact>Ativ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
             as={NavLink}
             to="/clients/list"
             activeClassName="active">
              Clientes
            </Nav.Link>
            <Nav.Link
             as={NavLink}
             to="/atividades/list"
             activeClassName="active">Atividades</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown align="end" title="Nayden" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Configurações
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;