
import {  Option } from '../templates'
import { gamePlay } from './gameplay'



export default function renderButtons(options: Option[]): HTMLDivElement[] {

    let elementList: HTMLDivElement[] = [];

    // Looping through the option array.
    options.forEach(option => {

        let answerContainer = document.createElement("div");
        answerContainer.classList.add("option");

        let answerText = document.createElement("p");
        answerText.innerHTML = option.text;

        answerContainer.addEventListener("click", () => {
            gamePlay(option.nextStep)
        })

        answerContainer.append(answerText)

        elementList.push(answerContainer);

    });

    return elementList;

}