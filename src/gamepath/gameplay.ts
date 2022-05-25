import { gameSteps } from "./gamepath";
import renderButtons from "./renderButtons";

export function gamePlay(id: number): void {

    const container = document.querySelector<HTMLDivElement>('#app')!;

    container.innerHTML = "";

    // Gets the index of the gameSteps array. It matches the ID sent to the function with the ID of the list.
    let index = gameSteps.findIndex((gameStep) => gameStep.id === id);

    // Gets the current step for the game and what "step" is supposed to be rendered.
    let currentStep = gameSteps[index];

    // Creating the question p-tag and inserting the question. 
    let question = document.createElement("p");
    question.innerHTML = currentStep.question;
    question.classList.add("question");

    // Checks if there is an image attached to the question. 
    if (currentStep.imageSrc) {
        let image = document.createElement("img");
        image.srcset = currentStep.imageSrc;

        container.append(image)
    }

    // Checks if the gameStep has the type of "button", if so it renders the buttons.
    if (currentStep.answerType === "button" && currentStep.option) {

        let elements: HTMLDivElement[] = renderButtons(currentStep.option!)

        elements.forEach((element) => {

            container.append(element)

        })
        
    }

    if (currentStep.answerType === "input" && currentStep.answer) {

        let input = document.createElement('input');
        input.type = "text";
        input.placeholder = "Ditt namn här!";

        let button = document.createElement("div")
        button.classList.add("option");
        button.innerHTML = "Full fart framåt!";

        button.addEventListener("click", () => {

            if ( input.value.toLowerCase() === currentStep.answer!.answer.toLowerCase() ) {

                gamePlay(currentStep.answer!.nextStep);

            } else if (currentStep.answer!.answer === "name" ) {

                localStorage.setItem("name", input.value);

                gamePlay(currentStep.answer!.nextStep);

            } else if (!input.value || input.value == "") {

                let message = document.createElement("p");
                message.innerHTML = "Den lätta går jag inte på.."

                container.append(message)

            } else {
                gamePlay(currentStep.answer!.wrongAnswer);
            }

        })


        container.append(input, button)
    }

    // Prepending the question element to have it at the top of the page. 
    // The prepend is if in the future I want to add anything else to the top of the interface.
    container.prepend(question)

}