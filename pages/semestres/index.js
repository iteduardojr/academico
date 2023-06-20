import React, { useEffect, useState } from 'react'
import Cabecalho from '../../components/Cabecalho'
import { Button, Table } from 'react-bootstrap'
import Link from 'next/link'
import { RxArrowBottomLeft } from "react-icons/rx";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import axios from 'axios'

const index = () => {

  const [semestres, setSemestres] = useState([])

  useEffect(() => {
    getALL()
  }, [])

  function getALL() {
    axios.get('/api/semestres').then(resultado => {
      setSemestres(resultado.data);
    })
  }

  function excluir(id) {
    if (confirm('Deseja excluir?')) {
      axios.delete('/api/semestres/' + id)
      getALL()
    }
  }
  console.log(semestres)
  return (
    <Cabecalho titulo='semestres'>

      <Link href={'/semestres/form'} className="btn btn-primary mb-2"><RxArrowBottomLeft />Novo</Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Editar</th>
            <th>Excluir</th>
            <th>Nome</th>
            <th>Data de inicio</th>
            <th>Data de fim</th>
          </tr>
        </thead>
        <tbody>
          {semestres.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={'/semestres/' + item.id} className='btn btn-warning'>
                  <BsFillPencilFill className='text-danger' />
                </Link>
              </td>
              <td>
                <Button className='btn-warning' onClick={() => excluir(item.id)}>
                  <BsFillTrash3Fill className='text-danger' />
                </Button>
              </td>
              <td>{item.nome}</td>
              <td>{item.datadeinicio}</td>
              <td>{item.datadefim}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </Cabecalho>
  )
}

export default index