const alunosValidator = {
    nome: {
        required: 'Nome obrigatório',
        minLength: { value: 3, message: 'A quantidade mínima é 3' },
        maxLength: {value: 50, message: 'Máximo de caracteres é 50'}
    },

    cpf: {
        required: 'CPF obrigatório',
        minLength: {value: 11, message: 'O valor mínima é 11 '},
        maxLength: {value: 15, message: 'O valor máximo é 15 '}
    },

    matricula: {
        required: 'Matrícula obrigatória',
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
        minLength: {value: 2, message: 'O valor mínima é 2 '},
    },

    bairro: {
        required: 'Bairro obrigatório',
    }
}


export default alunosValidator