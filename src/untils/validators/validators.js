export const required = value => value ? undefined: "Field is required"

export const maxLenghtCreator = (maxLenght) => (value) => {
    if(value && value.length > maxLenght) {
        return `Max lenght is ${maxLenght} symbols!`
    }
    else {
        return undefined
    }
}

