import React, { useEffect, useState } from 'react'
import Cabecalho from '../../components/Cabecalho'
import { Button, Table } from 'react-bootstrap'
import Link from 'next/link'
import { RxArrowBottomLeft } from "react-icons/rx";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import axios from 'axios'

const index = () => {

  const [salas, setSalas] = useState([])

  useEffect(() => {
    getALL()
  }, [])

  function getALL() {
    axios.get('/api/salas').then(resultado => {
      setSalas(resultado.data);
    })
  }

  function excluir(id) {
    if (confirm('Deseja excluir?')) {
      axios.delete('/api/salas/' + id)
      getALL()
    }
  }
  console.log(salas)
  return (
    <Cabecalho titulo='salas'>

      <Link href={'/salas/form'} className="btn btn-primary mb-2"><RxArrowBottomLeft />Novo</Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Editar</th>
            <th>Excluir</th>
            <th>Nome</th>
            <th>Capacidade</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {salas.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={'/salas/' + item.id} className='btn btn-warning'>
                  <BsFillPencilFill className='text-danger' />
                </Link>
              </td>
              <td>
                <Button className='btn-warning' onClick={() => excluir(item.id)}>
                  <BsFillTrash3Fill className='text-danger' />
                </Button>
              </td>
              <td>{item.nome}</td>
              <td>{item.capacidade}</td>
              <td>{item.tipo}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </Cabecalho>
  )
}

export default index