import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cabecalho = (props) => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
           
                
            <Nav className="me-auto">
                <NavDropdown  href="/cursos" title='Acadêmico'>
                <NavDropdown.Item href="/cursos">Cursos</NavDropdown.Item>
                <NavDropdown.Item href="/disciplinas">Disciplinas</NavDropdown.Item>
                <NavDropdown.Item href="/alunos">Alunos</NavDropdown.Item>
                <NavDropdown.Item href="/professores">Professores</NavDropdown.Item>
                <NavDropdown.Item href="/salas">Salas</NavDropdown.Item>
                <NavDropdown.Item href="/semestres">Semestres</NavDropdown.Item>
                </NavDropdown>

                {/* <NavDropdown.Divider /> */}
            </Nav>
        </Container>
    </Navbar>

    

    <div className='bg-secondary py-3 text-light text-center mb-4'>
        <Container>
            <h1>{props.titulo}</h1>
        </Container>
    </div>

    <Container className='my-2 w-100'>
        {props.children}
    </Container>
</>


  )
}

export default Cabecalho