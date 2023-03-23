const decrBtn = document.querySelector('[data-action="decrement"]')
const incrBtn = document.querySelector('[data-action="increment"]')
const valueCount = document.querySelector('#value')

let counterValue = 0;

decrBtn.addEventListener("click", () => {
    counterValue --;
    valueCount.textContent = counterValue;
})

incrBtn.addEventListener('click', () => {
    counterValue ++;
    valueCount.textContent = counterValue;
})


