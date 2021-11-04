
const inputEl = document.getElementById('my-input');
const buttonEl = document.getElementById('my-button');
const nameboxEl = document.getElementById('change-name');

buttonEl.addEventListener('click', () => {
    const NameUserTyped = inputEl.value;
    nameboxEl.textContent = NameUserTyped;
    inputEl.value = '';
});


const orangeButtonEl = document.getElementById('orange-button');
const backgroundOrangeEl = document.getElementById('change-background');

orangeButtonEl.addEventListener('click', () => {
    backgroundOrangeEl.style.background = 'orange';
});

const yellowButtonEl = document.getElementById('yellow-button');
const backgroundYellowEl = document.getElementById('change-background');

yellowButtonEl.addEventListener('click', () => {
    backgroundYellowEl.style.background = 'rgb(255,244,79)';
});

const greenButtonEl = document.getElementById('green-button');
const backgroundGreenEl = document.getElementById('change-background');

greenButtonEl.addEventListener('click', () => {
    backgroundGreenEl.style.background = 'rgb(50,205,50)';
});

const blueButtonEl = document.getElementById('blue-button');
const backgroundBlueEl = document.getElementById('change-background');

blueButtonEl.addEventListener('click', () => {
    backgroundBlueEl.style.background = 'lightblue';
});

const purpleButtonEl = document.getElementById('purple-button');
const backgroundPurpleEl = document.getElementById('change-background');

purpleButtonEl.addEventListener('click', () => {
    backgroundPurpleEl.style.background = 'violet';
});




