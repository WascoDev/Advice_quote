// Variable container for the dom
const containerDom = document.querySelector('.container');
const adviceEl = document.querySelector('.advice');
const adviceIdEl = document.querySelector('.counter');
const button = document.querySelector('.btn');

// event for the load event
window.addEventListener('DOMContentLoaded', displayAdvice)


// function to diplay the advice
function displayAdvice() {
    fetch(`https://api.adviceslip.com/advice/${Math.trunc(Math.random() * 200 + 1)}`)
        .then((response) => response.json())
        .then((data) => {
            adviceEl.textContent = `${data.slip.advice}`
            adviceIdEl.textContent = `Advice #${data.slip.id}`
        }).catch(error => {
            // containerDom.insertAdjacentHTML("afterbegin", `<h5>${error.message}</h5>`)
        })
}

// button click event
button.addEventListener('click', displayAdvice)