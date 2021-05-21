

export const requiredField = (value: string) => {
    if (value) return undefined

    return 'Field is required'
}
   
export const maxLengthValidatorCreator = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) return `Max length of this field is ${maxLength}!`
    return undefined
}

export const minLengthValidatorCreator = (minLength: number) => (value: string) => {
    if (value.length < minLength) return `Min length of this field is ${minLength}!`
    return undefined
}