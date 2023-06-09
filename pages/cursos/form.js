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
import cursoValidator from '../../validators/cursoValidator';
import { mask } from 'remask';

const form = () => {

  const { register, handleSubmit, formState:{errors}, setValue } = useForm()
  const { push } = useRouter()

  function salvar(dados) {
    axios.post('/api/cursos', dados)
    push('/cursos')
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
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade:</Form.Label>
          <Form.Control isInvalid={errors.modalidade} type="text" {...register('modalidade', cursoValidator.modalidade)} />
          {
            errors.modalidade &&
            <small className='text-danger'>{errors.modalidade.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="duracao">
          <Form.Label>duracao:</Form.Label>
          <Form.Control isInvalid={errors.duracao} mask='999' type="text" {...register('duracao', cursoValidator.duracao)} onChange={handleChange} />
          {
            errors.duracao  &&
            <small className='text-danger'>{errors.duracao.message}</small>
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