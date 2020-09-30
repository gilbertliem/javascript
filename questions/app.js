//USING SELECTORS INSIDE THE ELEMENT
const questions = document.querySelectorAll('.question');
// console.log(question);

questions.forEach(function(question) {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});

//TRAVERSING THE DOM
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });