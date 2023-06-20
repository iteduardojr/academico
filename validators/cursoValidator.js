const cursoValidator = {
    nome: {
        required: 'Nome obrigatório',
        minLength: { value: 3, message: 'A quantidade mínima é 3' },
        maxLength: {value: 10, message: 'Máximo de caracteres é 10'}
    },

    modalidade: {
        required: 'Modalidade obrigatória',
        minLength: {value: 5, message: 'A quantidade mínima é 3'},
        maxLength: {value: 10, message: 'Máximo de caracteres é 10' }
    },

    duracao: {
        required: 'Duração obrigatória',
    }
}


export default cursoValidator