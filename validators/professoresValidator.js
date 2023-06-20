const professoresValidator = {
    nome: {
        required: 'Nome obrigatório',
        minLength: { value: 3, message: 'A quantidade mínima é 3' },
        maxLength: {value: 50, message: 'Máximo de caracteres é 50'}
    },

    cpf: {
        required: 'CPF obrigatório',
    },

    matricula: {
        required: 'Matrícula obrigatória',
    },

    salario: {
        required: 'Salário obrigatório',
    },
    email: {
        required: 'Email obrigatório',
    },
    telefone: {
        required: 'Telefone obrigatório',
    },
    cep: {
        required: 'CEP obrigatório',
    },

    numero: {
        required: 'Número obrigatório',
    },

    bairro: {
        required: 'Bairro obrigatório',
        maxLength: {value: 15, message: 'Mínimo de caracteres é 30'}
    }
}


export default professoresValidator