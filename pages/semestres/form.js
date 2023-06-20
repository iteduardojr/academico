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
import semestresValidator from '../../validators/semestresValidator';

const form = () => {

  const { register, handleSubmit, formState:{errors} } = useForm()
  const { push } = useRouter()

  function salvar(dados) {
    axios.post('/api/semestres', dados)
    push('/semestres')
  }

  return (
    <Cabecalho titulo='Formulário'>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} {...register('nome', semestresValidator.nome)} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="datadeinicio">
          <Form.Label>Datade de início:</Form.Label>
          <Form.Control type="date"{...register('datadeinicio', semestresValidator.datainicio)} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="datadefim">
          <Form.Label>Data de fim:</Form.Label>
          <Form.Control type="date" {...register('datadefim', semestresValidator.datafim)} />
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