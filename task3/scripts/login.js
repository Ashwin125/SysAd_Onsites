let mathans;
let textans;

const genMathExpression = function() {
    let operators = ['+', '-', 'x'];

    let num1 = Math.floor((Math.random() * 10))
    let num2 = Math.floor((Math.random() * 10))
    let num3 = Math.floor((Math.random() * 10))


    let operator1 = operators[Math.floor(Math.random() * 3)];
    let operator2 = operators[Math.floor(Math.random() * 3)];

    let express = `(${num1} ${operator1} ${num2}) ${operator2} ${num3}`;

    let solution = 0;

    switch (operator1) {

        case '+':
            solution = num1 + num2;
            break;

        case '-':
            solution = num1 - num2;
            break;

        case 'x':
            solution = num1 * num2;
        
    }

    switch (operator2) {

        case '+':
            solution = solution + num3;
            break;

        case '-':
            solution = solution - num3;
            break;

        case 'x':
            solution = solution * num3;

    }

    return {
        expression: express,
        solution: solution
    }

}

const getTextExpression = function() {

    let fontFamilies = [
        "40px 'Chilanka', cursive",
        "40px 'Cabin Sketch', cursive",
        "40px 'Dokdo', cursive",
        "40px 'Gloria Hallelujah', cursive",
        "40px 'Freckle Face', cursive",
        "40px 'The Girl Next Door', cursive",
        "40px 'Vast Shadow', cursive"
    ]

    let fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";

    let str = upper[Math.floor(Math.random() * 26)] + lower[Math.floor(Math.random() * 26)]
    str += upper[Math.floor(Math.random() * 26)] + lower[Math.floor(Math.random() * 26)]
    str += number[Math.floor(Math.random() * 10)] + number[Math.floor(Math.random() * 10)]

    let Str = Array.from(str);

    for(let i = 0; i < Str.length; ++i) {
        
        let index = Math.floor(Math.random() * Str.length)
        let val = Str[i];
        Str[i] = Str[index];
        Str[index] = val;
        
    }

    str = Str.join('');

    return {
        str: str,
        fontFamily: fontFamily
    };

}

let mathex = document.querySelector('#mathex');
let newmathex = document.querySelector('#newmathex');
let mathsubmit = document.querySelector('#mathsubmit');

let textex = document.querySelector('#textex');
let newtextex = document.querySelector('#newtextex');
let textsubmit = document.querySelector('#textsubmit');

newmathex.addEventListener('click', (e) => {

    mathans = genMathExpression();

    let ctx = mathex.getContext("2d");

    ctx.clearRect(0, 0, mathex.width, mathex.height);
    mathex.style.backgroundImage = 'url("../images/bg.jpg")';

    for(let i = 0; i < 15; ++i) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * mathex.width, Math.random() * mathex.width);
        ctx.bezierCurveTo(
            Math.random() * mathex.width, 
            Math.random() * mathex.height, 
            Math.random() * mathex.width, 
            Math.random() * mathex.height, 
            Math.random() * mathex.width, 
            Math.random() * mathex.height
        );
        ctx.stroke();
    }

    ctx.font = "40px Arial";
    ctx.fillText(mathans.expression, 25, 40);
    

});

newtextex.addEventListener('click', (e) => {

    textans = getTextExpression();

    let ctx = textex.getContext("2d");
    console.log(textex.width);
    console.log(textex.height);
    ctx.clearRect(0, 0, textex.width, textex.height);
    textex.style.backgroundImage = 'url("../images/bg.jpg")';

    for(let i = 0; i < 15; ++i) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * textex.width, Math.random() * textex.width);
        ctx.bezierCurveTo(
            Math.random() * textex.width, 
            Math.random() * textex.height, 
            Math.random() * textex.width, 
            Math.random() * textex.height, 
            Math.random() * textex.width, 
            Math.random() * textex.height
        );
        ctx.stroke();
    }

    ctx.font = textans.fontFamily;
    ctx.fillText(textans.str, 25, 40);

});


mathsubmit.addEventListener('click', (e) => {

    let value = Number(document.querySelector('#mathans').value);

    
    if(Number(value) == Number(mathans.solution)) {
        
        submitForm();
        
    } else {
        newmathex.click();
    }

});


textsubmit.addEventListener('click', (e) => {

    let value = document.querySelector('#textans').value;

    
    if(value == textans.str) {

        submitForm();

    } else {
        
        newtextex.click();

    }

});


document.addEventListener("DOMContentLoaded",(e) => {
    newmathex.click();
    newtextex.click();
});


function submitForm() {
    document.querySelector('#submit').click();
}