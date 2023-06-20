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
import professoresValidator from '../../validators/professoresValidator';
import { mask } from 'remask';

const form = () => {

  const { register, handleSubmit, formState:{errors}, setValue} = useForm()
  const { push } = useRouter()

  function salvar(dados) {
    axios.post('/api/professores', dados)
    push('/professores')
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
          <Form.Control type="text" isInvalid={errors.nome} {...register('nome', professoresValidator.nome)} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="cpf">
          <Form.Label>Cpf:</Form.Label>
          <Form.Control type="text" isInvalid={errors.cpf}  mask='999.999.999-99' {...register('cpf', professoresValidator.cpf)} onChange={handleChange} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.cpf.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="matricula">
          <Form.Label>Matrícula:</Form.Label>
          <Form.Control type="text" isInvalid={errors.matricula} mask='999999999999' {...register('matricula', professoresValidator.matricula)} onChange={handleChange}/>
          {
            errors.nome &&
            <small className='text-danger'>{errors.matricula.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="salario">
          <Form.Label>Salario:</Form.Label>
          <Form.Control type="text" isInvalid={errors.salario} mask='99' {...register('salario', professoresValidator.salario)} onChange={handleChange} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.salario.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" isInvalid={errors.email} {...register('email', professoresValidator.email)} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.email.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="telefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control type="text" isInvalid={errors.telefone} mask='(99) 99999-9999' {...register('telefone', professoresValidator.telefone)} onChange={handleChange} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.telefone.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="cep">
          <Form.Label>Cep:</Form.Label>
          <Form.Control type="text" isInvalid={errors.cep} mask='99.999-999' {...register('cep', professoresValidator.cep)} onChange={handleChange} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.cep.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro:</Form.Label>
          <Form.Control type="text" {...register('logradouro')} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="complemento">
          <Form.Label>Complemento:</Form.Label>
          <Form.Control type="text" {...register('complemento')} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="numero">
          <Form.Label>Número:</Form.Label>
          <Form.Control type="text" isInvalid={errors.numero} mask='99' {...register('numero', professoresValidator.numero)} onChange={handleChange} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.numero.message}</small>
          }
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="bairro">
          <Form.Label>Bairro:</Form.Label>
          <Form.Control type="text" isInvalid={errors.bairro} {...register('bairro', professoresValidator.bairro)} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.bairro.message}</small>
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