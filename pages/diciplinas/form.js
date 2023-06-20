import React, { useEffect, useState } from 'react'
import Cabecalho from '../../components/Cabecalho'
import { Button, Col, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { GrDocumentUpload } from "react-icons/Gr";
import { BiChevronLeft } from "react-icons/bi";
import { useRouter } from 'next/router'
import Link from 'next/link';
import axios from 'axios';
import diciplinasValidator from '../../validators/diciplinasValidator';
import { mask } from 'remask';

const form = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const { push } = useRouter()

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    getALL()
  }, [])

  function salvar(dados) {
    axios.post('/api/diciplinas', dados)
    push('/diciplinas')
  }

  function getALL() {
    axios.get('/api/cursos').then(resultado => {
      setCursos(resultado.data);
    })
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
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} mask='AAAAAAAAAAAAAAAAAAAAAAA' {...register('nome', diciplinasValidator.nome)} onChange={handleChange} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Select className='mb-3'>
          {cursos.map((item, i) => (
            <option key={i} value={item.nome}>{item.nome}</option>
          ))}
        </Form.Select>

        <div className="mb-3 text-center">
          <Button type="submit" onClick={handleSubmit(salvar)}><GrDocumentUpload className='me-1' />Salvar</Button>
          <Link href={'/cursos'} className='ms-2 btn btn-danger'><BiChevronLeft className='me-1' />Voltar</Link>
        </div>
      </Form>

    </Cabecalho>
  )
}

export default form