
export interface Question {
    id: number,
    question: string,
    imageSrc: string,
    optionOne: {
        text: string,
        nextStep: number,
    }
    optionTwo: {
        text: string,
        nextStep: number,
    } | undefined
    optionThree: {
        text: string,
        nextStep: number,
    } | undefined
    additionalInformation: string | undefined
}

export interface Player {
    name: string
}