import React, { useEffect, useState } from 'react'
import Cabecalho from '../../components/Cabecalho'
import { Button, Table } from 'react-bootstrap'
import Link from 'next/link'
import {  RxArrowBottomLeft } from "react-icons/rx";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useRouter } from 'next/router';

const index = () => {

  const [cursos, setCursos] = useState([])
  const router = useRouter()

  useEffect(()=>{
    setCursos(JSON.parse(window.localStorage.getItem('cursos')))
  }, [])

  function deleteItem(id){

    let cursos = JSON.parse(localStorage.getItem('cursos')) || []
    
    cursos = cursos.filter(cursos => cursos.id !== id)

    localStorage.setItem('cursos', JSON.stringify(cursos))

    router.reload()
  }


  return (
    <Cabecalho titulo='Cursos'>

    <Link href={'/cursos/form'} className= "btn btn-primary mb-2"><RxArrowBottomLeft/>Novo</Link>

          <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Cursos</th>
          <th>Modalidade</th>
          <th>Duração</th>
        </tr>
      </thead>
      <tbody>
        {cursos.map(item => (
        <tr>
          <td key={item.id}>
            <Button className='btn-warning' onClick={() => deleteItem(item.id)}>
            <BsFillTrash3Fill className='text-danger'/>
            </Button>
          </td>
          <td>{item.nome}</td>
          <td>{item.modalidade}</td> 
          <td>{item.duracao}</td>
        </tr>
        ))}
      
      </tbody>
    </Table>
    </Cabecalho>
  )
}

export default index