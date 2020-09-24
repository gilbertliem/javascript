const button = document.querySelector('.btn');
const info = document.querySelector('h2');
const background = document.querySelector('.container');


button.addEventListener('click',() => {
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    background.style.backgroundColor = color;
    info.innerText = color;
    // console.log(color);
})