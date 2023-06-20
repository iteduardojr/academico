import React, { useEffect, useState } from 'react'
import Cabecalho from '../../components/Cabecalho'
import { Button, Table } from 'react-bootstrap'
import Link from 'next/link'
import { RxArrowBottomLeft } from "react-icons/rx";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import axios from 'axios'

const index = () => {

  const [professores, setProfessores] = useState([])

  useEffect(() => {
    getALL()
  }, [])

  function getALL() {
    axios.get('/api/professores').then(resultado => {
      setProfessores(resultado.data);
    })
  }

  function excluir(id) {
    if (confirm('Deseja excluir?')) {
      axios.delete('/api/professores/' + id)
      getALL()
    }
  }
  console.log(professores)
  return (
    <Cabecalho titulo='Professores'>

      <Link href={'/professores/form'} className="btn btn-primary mb-2"><RxArrowBottomLeft />Novo</Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Editar</th>
            <th>Excluir</th>
            <th>Nome</th>
            <th>Cpf</th>
            <th>Matrícula</th>
            <th>Salário</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Cep</th>
            <th>Logradouro</th>
            <th>Complemento</th>
            <th>Número</th>
            <th>Bairro</th>

          </tr>
        </thead>
        <tbody>
          {professores.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={'/professores/' + item.id} className='btn btn-warning'>
                  <BsFillPencilFill className='text-danger' />
                </Link>
              </td>
              <td>
                <Button className='btn-warning' onClick={() => excluir(item.id)}>
                  <BsFillTrash3Fill className='text-danger' />
                </Button>
              </td>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.matricula}</td>
              <td>{item.salario}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.cep}</td>
              <td>{item.logradouro}</td>
              <td>{item.complemento}</td>
              <td>{item.numero}</td>
              <td>{item.bairro}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </Cabecalho>
  )
}

export default index