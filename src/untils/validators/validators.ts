export type fieldValidatorType = (value: string) => string | undefined

export const required: fieldValidatorType = (value) => value ? undefined: "Field is required"

export const maxLenghtCreator = (maxLenght: number): fieldValidatorType => (value) => {
    if(value && value.length > maxLenght) {
        return `Max lenght is ${maxLenght} symbols!`
    }
    else {
        return undefined
    }
}

