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
      axios.get('/api/alunos/' + query.id).then(resultado => {
        const alunos = resultado.data

        for (let atributo in alunos) {
          setValue(atributo, alunos[atributo])
        }
      })
    }
  }, [query.id])



  function salvar(dados) {
    axios.put('/api/alunos/' + dados.id, dados)
    push('/alunos')
  }

  return (
    <Cabecalho titulo='Formulário'>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="cpf">
          <Form.Label>Cpf:</Form.Label>
          <Form.Control type="text" {...register('cpf')} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="matricula">
          <Form.Label>Matrícula:</Form.Label>
          <Form.Control type="text" {...register('matricula')} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" {...register('email')} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="telefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control type="text" {...register('telefone')} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="cep">
          <Form.Label>Cep:</Form.Label>
          <Form.Control type="text" {...register('cep')} />
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
          <Form.Control type="text" {...register('numero')} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="bairro">
          <Form.Label>Bairro:</Form.Label>
          <Form.Control type="text" {...register('bairro')} />
        </Form.Group>

        <div className="mb-3 text-center">
          <Button type="submit" onClick={handleSubmit(salvar)}><GrDocumentUpload className='me-1' />Salvar</Button>
          <Link href={'/alunos'} className='ms-2 btn btn-danger'><BiChevronLeft className='me-1' />Voltar</Link>
        </div>
      </Form>

    </Cabecalho>
  )
}

export default form