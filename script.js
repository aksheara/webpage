document.getElementById('toggle-ingredients').addEventListener('click', function () {
    const ingredientsList = document.querySelector('.ingredients-list');
    ingredientsList.classList.toggle('hidden');
    this.textContent = ingredientsList.classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
});

const steps = document.querySelectorAll('.steps-list li');
let currentStep = 0;

document.getElementById('start-cooking').addEventListener('click', function () {
    if (currentStep > 0) steps[currentStep - 1].style.background = 'none';
    if (currentStep < steps.length) {
        steps[currentStep].style.background = '#d3f8d3';
        currentStep++;
    } else {
        alert('Recipe Complete!');
        currentStep = 0;
    }
});





let timer;
let timeLeft = 45; // minutes

document.getElementById('start-cooking').addEventListener('click', function () {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                console.log(`Time Left: ${timeLeft--} minutes`);
            } else {
                clearInterval(timer);
                alert('Preparation time is over!');
            }
        }, 60000);
    }
});
