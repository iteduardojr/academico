import React, { useEffect, useState } from 'react'
import Cabecalho from '../../components/Cabecalho'
import { Button, Table } from 'react-bootstrap'
import Link from 'next/link'
import { RxArrowBottomLeft } from "react-icons/rx";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import axios from 'axios'

const index = () => {

  const [diciplinas, setDiciplinas] = useState([])

  useEffect(() => {
    getALL()
  }, [])

  function getALL() {
    axios.get('/api/diciplinas').then(resultado => {
      setDiciplinas(resultado.data);
    })
  }

  function excluir(id) {
    if (confirm('Deseja excluir?')) {
      axios.delete('/api/diciplinas/' + id)
      getALL()
    }
  }
  console.log(diciplinas)
  return (
    <Cabecalho titulo='Diciplinas'>

      <Link href={'/diciplinas/form'} className="btn btn-primary mb-2"><RxArrowBottomLeft />Novo</Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Editar</th>
            <th>Excluir</th>
            <th>Nome</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {diciplinas.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={'/diciplinas/' + item.id} className='btn btn-warning'>
                  <BsFillPencilFill className='text-danger' />
                </Link>
              </td>
              <td>
                <Button className='btn-warning' onClick={() => excluir(item.id)}>
                  <BsFillTrash3Fill className='text-danger' />
                </Button>
              </td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </Cabecalho>
  )
}

export default index