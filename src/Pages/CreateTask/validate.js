const validateInputs = (task) => {
    const errors = {}

    if (task.title.length < 1) {
        errors.title = 'the field cannot be empty'
    }

    return errors
}

export {validateInputs}