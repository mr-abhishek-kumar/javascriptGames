
const qnaArr = [
    {
        "question": "Questions to me...",
        "answer": "Answers by me.."
    },
    {
        "question": "Define your corrent situation in one word...",
        "answer": "Darrrrr"
    },
    {
        "question": "What is something that you want to do...",
        "answer": "Stay Alone"
    },
    {
        "question": "What is something you are wishing for...",
        "answer": "Silent"
    },
]

let i = 0;
function nxtContent() {

    document.getElementById('quesHead').innerText =qnaArr[i].question
    document.getElementById('ans').innerText =qnaArr[i].answer;
    i = i + 1;
}
