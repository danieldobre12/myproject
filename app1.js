let count = 0;

const value = document.querySelector('#value');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);

function increase() {
    count++;
    value.innerHTML = count;
    if (count > 0) {
        value.style.color = 'green';
    }
};

function decrease(){
    count--;
    value.innerHTML = count;
    if (count < 0) {
        value.style.color = 'red';
    }
};
function reset (){
    count = 0;
    value.innerHTML = count;
    if (count === 0) {
        value.style.color = 'black';
    }
};

