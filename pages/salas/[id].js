import React, { useEffect } from 'react'
import Cabecalho from '../../components/Cabecalho'
import { Button, Col, Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form'
import { GrDocumentUpload } from "react-icons/Gr";
import { BiChevronLeft } from "react-icons/bi";
import { useRouter } from 'next/router'
import Link from 'next/link';
import axios from 'axios';

const form = () => {

  const { register, handleSubmit, setValue } = useForm()
  const { push, query } = useRouter()

  useEffect(() => {
    if (query.id) {
      axios.get('/api/salas/' + query.id).then(resultado => {
        const salas = resultado.data

        for (let atributo in salas) {
          setValue(atributo, salas[atributo])
        }
      })
    }
  }, [query.id])



  function salvar(dados) {
    axios.put('/api/salas/' + dados.id, dados)
    push('/salas')
  }

  return (
    <Cabecalho titulo='Formulário'>

<Form>
        <Form.Group as={Row} className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register('nome')} />
          <Col sm={10}>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade:</Form.Label>
          <Form.Control type="text" {...register('capacidade')} />
          <Col sm={10}>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="tipo">
          <Form.Label>Tipo:</Form.Label>
          <Form.Control type="text" {...register('tipo')} />
          <Col sm={10}>
          </Col>
        </Form.Group>

        <div className="mb-3 text-center">
          <Button type="submit" onClick={handleSubmit(salvar)}><GrDocumentUpload className='me-1' />Salvar</Button>
          <Link href={'/salas'} className='ms-2 btn btn-danger'><BiChevronLeft className='me-1' />Voltar</Link>
        </div>
      </Form>

    </Cabecalho>
  )
}

export default form