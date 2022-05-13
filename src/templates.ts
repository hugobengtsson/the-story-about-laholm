
export interface Question {
    id: number,
    question: string,
    imageSrc?: string,
    // answerType: "button" | "text",
    option: Option[]
};

export interface Option {
        text: string,
        nextStep: number
}

// Kan lägga till en interface för "questionData" med question och imgsrc