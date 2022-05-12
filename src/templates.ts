
export interface Question {
    id: number,
    question: string,
    imageSrc?: string,
    option: Option[]
};

export interface Option {
        text: string,
        nextStep: number
}