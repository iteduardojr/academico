import React from 'react'
import Cabecalho from '../../components/Cabecalho'
import { Button, Col, Form } from 'react-bootstrap'
import {v4 as uuid} from 'uuid'
import Row from 'react-bootstrap/Row';
import {useForm} from 'react-hook-form'
import { GrDocumentUpload } from "react-icons/gr";
import {useRouter} from 'next/router'

const form = () => {

    const {register, handleSubmit } = useForm() 
    const {push} = useRouter()

    function salvar(dados){
      const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []

      const id = uuid(dados)

      dados = {...dados, id}

      cursos.push(dados)

      window.localStorage.setItem('cursos', JSON.stringify(cursos))
      push('/cursos')
    }
    
  return (
    <Cabecalho titulo='Formulário'>

<Form>
      <Form.Group as={Row} className="mb-3" controlId="nome">
        <Form.Label column sm={2}>Nome: </Form.Label>
        <Form.Control type="text" {...register('nome')}/>
        <Col sm={10}>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="modalidade">
        <Form.Label column sm={2}>Modalidade:</Form.Label>
        <Form.Control type="text" {...register('modalidade')}/>
        <Col sm={10}>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="duracao">
        <Form.Label column sm={2}>Duracao:</Form.Label>
        <Form.Control type="text" {...register('duracao')}/>
        <Col sm={10}>
        </Col>
      </Form.Group>


      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            
          </Form.Label>
          <Col sm={8}>
            <Form.Check
              type="radio"
              label="Pós graduação"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Mestrado"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Doutorado"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>


      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" onClick={handleSubmit(salvar)}><GrDocumentUpload/> Salvar</Button>
        </Col>
      </Form.Group>
    </Form>

    </Cabecalho>
  )
}

export default form