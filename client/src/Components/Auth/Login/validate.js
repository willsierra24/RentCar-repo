function validate(input) {
    let errors = {}
    if (!input.email) {
        errors.email = "El email es requerido"
    }
    else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email)) {
        errors.email = "El email es invalido"
    }
    else if (!input.password) {
        errors.password = "La contraseña es requerida"
    }

    return errors



}

export default validate;