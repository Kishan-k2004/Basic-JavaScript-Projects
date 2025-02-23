const btn = document.querySelector('button');
let arr = [];
const pre = document.querySelector('#previousGuess');
const life = document.querySelector('#lifes');
let count = 5;
let playGame = true;
const msg = document.querySelector('#message');
const inp = document.querySelector('#guessInput');

life.textContent = `No. of lives remaining -> ${count}`;

if (playGame) {
    btn.addEventListener('click', function () {
        const inputValue = parseInt(inp.value);

        if (validation(inputValue)) {
            displayarr();
            check(inputValue);
        } else {
            msg.textContent = `Invalid Input`;
            msg.style.color = 'red';
        }
        inp.value = ''; // Clear input after each guess
    });
}

function validation(inputValue) {
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 10) {
        return false;
    } else {
        arr.push(inputValue);
        return true;
    }
}

function check(inputValue) {
    const myvalue = Math.floor(Math.random() * 10) + 1;

    if (inputValue === myvalue) {
        msg.textContent = `Congratulations! You guessed it right.`;
        msg.style.color = 'green';
        endGame();
    } else {
        msg.textContent = `Oops! My number was ${myvalue}`;
        msg.style.color = 'orange';
        count--;
    }
    
    life.textContent = `No. of lives remaining -> ${count}`;
    
    if (count === 0) {
        endGame();
    }
}

function displayarr() {
    if (arr.length) {
        pre.textContent = `Previous guesses: [ ${arr.join(', ')} ]`;
        pre.style.color = '#212121';
    }
}

function endGame() {
    btn.setAttribute('disabled', '');
    inp.setAttribute('disabled', '');
    pre.textContent = 'Start New Game';
    pre.style.color = 'cyan';
    playGame = false;
    newGame();
}

function newGame() {
    pre.addEventListener('click', function () {
        count = 5;
        arr = [];
        life.textContent = `No. of lives remaining -> ${count}`;
        pre.textContent = '';
        msg.textContent = '';
        btn.removeAttribute('disabled');
        inp.removeAttribute('disabled');
        inp.value = '';
        playGame = true;
    });
}






// btn.addEventListener('click',function(e){

//     const inp = parseInt(document.getElementById("guessInput").value)

//     const msg = document.querySelector('#message')
    
    
    
//     msg.textContent=''

//     if(!(inp) || inp<1 || inp>10 || isNaN(inp)){
//         res = document.createTextNode('Invalid Input')
//         msg.style.color="red"
//         msg.appendChild(res)
//         arr.push(-1)
//     }else{
//         const myvalue = Math.floor(Math.random()*(10)+1)

//         if(myvalue == inp){
//             res= document.createTextNode(`Congratulations !`)
//             msg.style.color="green"
//             msg.appendChild(res)
//             arr.push(1)
//         }else{
//             res = document.createTextNode(`Oops my number is ${myvalue}`)
//             msg.style.color="orange"
//             msg.appendChild(res)
//             arr.push(0)
//         }
//     }
    
//     console.log(arr)

// })
// const pre = document.querySelector('#previousGuess')
// const pre_res =document.createTextNode(arr)
// pre.appendChild(pre_res)

