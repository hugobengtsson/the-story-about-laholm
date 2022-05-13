import { gameSteps } from "./gamepath";

export function gamePlay(id: number): void {

    const container = document.querySelector<HTMLDivElement>('#app')!;

    container.innerHTML = "";

    let index = gameSteps.findIndex((gameStep) => gameStep.id === id);


    let currentStep = gameSteps[index];


    let question = document.createElement("p");
    question.innerHTML = currentStep.question;
    question.classList.add("question");

    if (currentStep.imageSrc) {
        let image = document.createElement("img");
        image.srcset = currentStep.imageSrc;

        container.append(image)
    }

    currentStep.option.forEach(option => {

        let answerContainer = document.createElement("div");
        answerContainer.classList.add("option");

        let answerText = document.createElement("p");
        answerText.innerHTML = option.text;

        answerContainer.addEventListener("click", () => {
            gamePlay(option.nextStep)
        })

        answerContainer.append(answerText)
        container.append(answerContainer)

    });

    container.prepend(question)

}