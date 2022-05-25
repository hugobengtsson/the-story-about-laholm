
export interface Question {
    id: number,
    question: string,
    imageSrc?: string,
    answerType: "button" | "input",
    option?: Option[],
    answer?: Input
};

export interface Option {
        text: string,
        nextStep: number
}

interface Input {
    answer: string,
    nextStep: number,
    wrongAnswer: number
}

// Kan lägga till en interface för "questionData" med question och imgsrc??