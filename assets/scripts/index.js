'use strict';

let regexpValidation = new RegExp('^[A-Za-zА-Яа-я0-9_]{8,20}$');

const form = document.getElementById('form');
const input = document.getElementById('input');



form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const {currentTarget:{children:{input}}} = event;

    if(regexpValidation.test(input.value)){
        input.classList.add('validInputState');
    }
    else{
        input.classList.add('invalidInputState');
    }
});


input.addEventListener('change', (event)=>{
    const {currentTarget:{classList}} = event;

    classList.remove('validInputState', 'invalidInputState');
});
