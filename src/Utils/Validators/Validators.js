export const requiredField = (value) => {
    if (value) return undefined

    return 'Field is required'
}
   
export const maxLengthValidatorCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length of this field is ${maxLength}!`
    return undefined
}

export const minLengthValidatorCreator = minLength => value => {
    if (value.length < minLength) return `Min length of this field is ${minLength}!`
    return undefined
}