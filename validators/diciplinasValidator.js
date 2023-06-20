const diciplinasValidator = {
    nome: {
        required: 'Nome obrigatório',
        minLength: { value: 3, message: 'A quantidade mínima é 3' },
        maxLength: {value: 20, message: 'Máximo de caracteres é 10'}
    },

    datainicio: {
        required: 'Data obrigatória',
     
    },

    datafim: {
        required: 'Data obrigatória',
    }
}


export default diciplinasValidator