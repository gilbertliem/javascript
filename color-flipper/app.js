const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

//BUTTON 'CLICK' FUNCTION
btn.addEventListener('click', function() {
    // console.log(document.body);

    //GET RANDOM NUMBER BETWEEN 0 - 3 (3 FROM TOTAL VALUE IN ARRAY LINE 1)
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// 
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

