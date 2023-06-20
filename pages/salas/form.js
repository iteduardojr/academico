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
import salaValidator from '../../validators/salaValidator';
import { mask } from 'remask';

const form = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const { push } = useRouter()

  function salvar(dados) {
    axios.post('/api/salas', dados)
    push('/salas')
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(value, mascara))
  }

  return (
    <Cabecalho titulo='Formulário'>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', salaValidator.nome)} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade:</Form.Label>
          <Form.Control isInvalid={errors.capacidade} type="text" mask='999' {...register('capacidade', salaValidator.capacidade)} onChange={handleChange} />
          {
            errors.capacidade &&
            <small className='text-danger'>{errors.capacidade.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="tipo">
          <Form.Label>Tipo:</Form.Label>
          <Form.Control isInvalid={errors.tipo} type="text" {...register('tipo', salaValidator.tipo)} />
          {
            errors.tipo &&
            <small className='text-danger'>{errors.tipo.message}</small>
          }
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