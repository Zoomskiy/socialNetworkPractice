export const requiredField = (value: any) => {
    if(value)return undefined

    return "error message"
}

export const maxLengthCreator = (maxLength: number) => (value: any)=> {
    if(value.length > maxLength)return `Max length is ${maxLength} symbols`

    return undefined
}