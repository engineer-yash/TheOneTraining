/*
! (1) Write a JavaScript program that adds a key down event listener to a text input to detect when the "Enter key" is pressed.
*/

document.getElementById('name').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        alert('Enter key is pressed');
    }
});

/*
! (2) Write a JavaScript program to create a slideshow that changes the displayed image when a next or previous button is clicked.
*/
let previous = document.querySelector('.prev');
let next = document.querySelector('.next');
let slides = document.getElementsByClassName('slide');
let current = 0;// current slide index

next.addEventListener('click', function () {
    slides[current].classList.remove('active');// remove active class from current slide
    current++;// increment current slide index
    if (current === slides.length) {// if current slide index is equal to the length of slides
        current = 0;// reset current slide index to 0
    }
    slides[current].classList.add('active');// add active class to current slide
});

previous.addEventListener('click', function () {
    slides[current].classList.remove('active');
    current--;
    if (current < 0) {
        current = slides.length - 1;// reset current slide index to the last slide index
    }
    slides[current].classList.add('active');// add active to current slide
});

/*
! (3) Write a JavaScript program to get the window width and height (any time the window is resized).
*/
let height = document.getElementById('height');
let width = document.getElementById('width');
function updateSize() {
    height.innerHTML = window.innerHeight;//innerHeight is a read-only window property that returns the height of the content area of the browser window including, if rendered, the horizontal scrollbar.
    width.innerHTML = window.innerWidth;//innerWidth is same as above
}
window.addEventListener('resize', updateSize);//resize event is fired when the window has been resized.
updateSize();//calling function to get initial window size

/*
! (4) Generating numbers and marking evens, odds and prime numbers with three different
!colors. See the image below. You must take user input and generate block of that range
!starting from 0.
*/

function addBlocks() {
    let input = document.getElementById('inputNumber').value;
    let container = document.getElementById('container');
    container.innerHTML = '';//clearing previous blocks in advance
    // if (input < 0) {
    //     alert('Negative number not allowed');
    //     return;
    // }
    if (input > 100) {
        alert('Please enter a number less than 100');
        return;
    }
    container.style.display = 'block';//displaying container
    for (let i = 0; i <= input; i++) {
        let block = document.createElement('div');
        block.classList.add('blockSize');
        block.innerText = i;
        if (i % 2 === 0) {
            block.classList.add('even');
        } else {
            block.classList.add('odd');
        }
        if (isPrime(i)) {
            block.classList.add('prime');
        }
        container.appendChild(block);
    }
}
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Remove blocks immediatly when input is empty as per requirement by pratham sir
inputNumber.addEventListener('input', function () {
    if (this.value === '') {// this used to refer to the element that the event is happening on
        removeBlocks();
    }
});
function removeBlocks() {
    let container = document.getElementById('container');
    container.innerHTML = '';//clearing previous blocks after removing input
    container.style.display = 'none';
}


/* 
*Extra Task
!Create below FAQ page and only one need to be expanded at a time; rest are needed to collapse.
*/
const toggleIcons = document.querySelectorAll('.toggle-icon');

toggleIcons.forEach(icon => {//event listener for all icons
    icon.addEventListener('click', () => {// Toggle icon
        icon.classList.toggle('fa-square-plus');
        icon.classList.toggle('fa-square-minus');

        const cardTextOne = icon.nextElementSibling;// next sibling of icon
        const cards = document.querySelectorAll('.card-text-one');// all card-text-one

        cards.forEach(card => {// Loop Each all cards
            if (card === cardTextOne) {
                card.classList.toggle('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Showing icon-plus in all inactive cards
        const inactiveCards = document.querySelectorAll('.card-text-one:not(.active)');// all inactive cards
        inactiveCards.forEach(card => {
            const toggleIcon = card.previousElementSibling;
            toggleIcon.classList.add('fa-square-plus');
            toggleIcon.classList.remove('fa-square-minus');
        });
    });
});
