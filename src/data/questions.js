const questions = [
    {
        id: 1,
        type: "mcq", //for multiple choice questions
        question: "What is the capital of france?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris",

    },
    {
        id: 2,
        type: "mcq",
        question: "Which language is used for web apps?",
        options: ["Python", "Javascript", "C++", "Java"],
        answer: "Javascript",
    },
    {
        id:3,
        type: "integer", //for integer typed questions
        question:"What is 6 + 9",
        answer:15, //saving ans in integer
    },
    {
        id:4,
        type:"integer",
        question:"What is the square root of 49?",
        answe: 7,
    },
];


export default questions;