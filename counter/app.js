//SET INITIAL COUNT
let count = 0;

//SELECT VALUE AND BUTTONS
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
console.log(btns);

btns.forEach(function(btn) {
    // console.log(item);
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else if (count === 0) {
            value.style.color = '#222'
        } 
        value.textContent = count;
    });
});