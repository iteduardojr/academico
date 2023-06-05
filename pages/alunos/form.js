import React from 'react'
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

  const { register, handleSubmit } = useForm()
  const { push } = useRouter()

  function salvar(dados) {
    axios.post('/api/cursos', dados)
    push('/cursos')
  }

  return (
    <Cabecalho titulo='Formulário'>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="nome">
          <Form.Label column sm={2}>Nome: </Form.Label>
          <Form.Control type="text" {...register('nome')} />
          <Col sm={10}>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="cpf">
          <Form.Label column sm={2}>C:</Form.Label>
          <Form.Control type="text" {...register('cpf')} />
          <Col sm={10}>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="matricula">
          <Form.Label column sm={2}>Matrícula:</Form.Label>
          <Form.Control type="text" {...register('matricula')} />
          <Col sm={10}>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="email">
          <Form.Label column sm={2}>Email:</Form.Label>
          <Form.Control type="text" {...register('email')} />
          <Col sm={10}>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="matricula">
          <Form.Label column sm={2}>Matrícula:</Form.Label>
          <Form.Control type="text" {...register('matricula')} />
          <Col sm={10}>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="matricula">
          <Form.Label column sm={2}>Matrícula:</Form.Label>
          <Form.Control type="text" {...register('matricula')} />
          <Col sm={10}>
          </Col>
        </Form.Group>

        <div className="mb-3 text-center">
          <Button type="submit" onClick={handleSubmit(salvar)}><GrDocumentUpload className='me-1' />Salvar</Button>
          <Link href={'/cursos'} className='ms-2 btn btn-danger'><BiChevronLeft className='me-1' />Voltar</Link>
        </div>
      </Form>

    </Cabecalho>
  )
}

export default form