let number = 0;
let count = document.querySelector("#value")
let min = document.querySelector(".subtract")
let max = document.querySelector(".add")
count.innerHTML = number;
min.addEventListener('click', ()=> {
    if (number <= 50 && number > 0){
        number--;
        count.innerHTML = number;
        count.style.color='red'
    }
})

max.addEventListener('click', ()=> {
    if (number < 50) {
        number++;
        count.innerHTML = number;
        count.style.color='green'
    }
})