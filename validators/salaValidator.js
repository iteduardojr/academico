const salaValidator = {
    nome: {
        required: 'Nome obrigatório',
        minLength: { value: 3, message: 'A quantidade mínima é 3' },
        maxLength: {value: 10, message: 'Máximo de caracteres é 10'}
    },

    capacidade: {
        required: 'Capacidade obrigatória',
    },

    tipo: {
        required: 'Tipo obrigatória',
    }
}


export default salaValidator