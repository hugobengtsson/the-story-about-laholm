import { Question } from '../templates'

// Lägg till baseURL för images.

export const gameSteps: Question[] = [
    {
        id: 0,
        question: "Skriv in ditt namn så är du gullig",
        answerType: "input",
        answer: {
            answer: "name",
            nextStep: 1,
            wrongAnswer: 0,
        }
    },
    {
        id: 1,
        question: "Vad vill ni se?",
        imageSrc: "./src/assets/laholm.jpeg",
        answerType: "button",
        option: [
            {
                text: "Laholm",
                nextStep: 2
            },
            {
                text: "Mellbystrand",
                nextStep: 4
            },
            {
                text: "Spela Gissa Originalet!",
                nextStep: 7
            },
        ]
    },
    {
        id: 2,
        question: "Kolla vad fint!",
        imageSrc: "./src/assets/laholm2.jpeg",
        answerType: "button",
        option:[
            {
                text: "Jag vill se mer!",
                nextStep: 3
            },
            {
                text: "Naeee jag vill tillbaka...",
                nextStep: 1
            },
        ]
    },
    {
        id: 3,
        question: "Det finns inte så mycket mer att se..",
        answerType: "button",
        option:[
            {
                text: "Tillbaka till starten.",
                nextStep: 1
            },
        ]
    },
    {
        id: 4,
        question: "Här har vi stranden!",
        imageSrc: "./src/assets/mellbystrand.jpeg",
        answerType: "button",
        option: [
            {
                text: "Oooooh ge mig mer!",
                nextStep: 5
            },
            {
                text: "Jag är badkruka..",
                nextStep: 1
            },
        ]
    },
    {
        id: 5,
        question: "Strandhotellet, restaurang, bar och ibland nattklubb. Kan bli en blöt kväll!",
        imageSrc: "./src/assets/strandhotellet.jpeg",
        answerType: "button",
        option:[
            {
                text: "Ännu mer!",
                nextStep: 6
            },
            {
                text: "Usch!",
                nextStep: 1
            },
        ]
    },
    {
        id: 6,
        question: "Finns inte mer..",
        answerType: "button",
        option: [
            {
                text: "Gå tillbaka.",
                nextStep: 1
            },
        ]
    },
    {
        id: 7,
        question: "Vem är originalet?",
        imageSrc: "./src/assets/epamats.jpeg",
        answerType: "button",
        option: [
            {
                text: "Bonde-Fredrik",
                nextStep: 12
            },
            {
                text: "EPA-Mats",
                nextStep: 8
            },
            {
                text: "Hundmannen",
                nextStep: 12
            }
        ]
    },
    {
        id: 8,
        question: "Vem är originalet?",
        imageSrc: "./src/assets/bondefredrik.jpeg",
        answerType: "button",
        option: [
            {
                text: "Kattmannen",
                nextStep: 12
            },
            {
                text: "Marita",
                nextStep: 12
            },
            {
                text: "Bonde-Fredrik",
                nextStep: 9
            }
        ]
    },
    {
        id: 9,
        question: "Varför kallas Kattmannen för Kattmannen?",
        answerType: "button",
        option: [
            {
                text: "Han säljer katter.",
                nextStep: 12
            },
            {
                text: "Han går runt på stan och mjaoar som en katt.",
                nextStep: 10
            },
            {
                text: "Han kör runt sina katter i en barnvagn.",
                nextStep: 12
            }
        ]
    },
    {
        id: 10,
        question: "Marita är ett av originalen från Våxtorp, vad är hennes största intresse?",
        answerType: "button",
        option: [
            {
                text: "Samma som Mats, EPA-traktorer.",
                nextStep: 12
            },
            {
                text: "Det lokala fotbollslaget Våxtorp BOIS.",
                nextStep: 11
            },
            {
                text: "Internetsensationen Gangnam Style.",
                nextStep: 12
            }
        ]
    },
    {
        id: 11,
        question: "Jahopp, det här var ju kanske lite för enkelt? Nu är frågorna helt slut..",
        answerType: "button",
        option: [
            {
                text: "Tillbaka till starten.",
                nextStep: 1
            },
        ]
    },
    {
        id: 12,
        question: "Hahah du kan ju ingenting om Laholms original.",
        answerType: "button",
        option: [
            {
                text: "Börja om frågespelet.",
                nextStep: 7
            },
            {
                text: "Jag är trött på ditt tråkiga frågespel.",
                nextStep: 1
            },
        ]
    },


]