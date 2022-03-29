
const correct = (output_element) => {
    output_element.innerHTML="Das ist richtig! Notiere dir die Lösung:<br>" + result;
    output_element.setAttribute("style", "background-color: #0f0");
}

const incorrect = (output_element) => {
    output_element.innerHTML="Diese Lösung ist leider nicht korrekt.";
    output_element.setAttribute("style", "background-color: #f00");
}

const check_input = (input_element, output_element, key) => {
    if (input_element.value == key) {
        correct(output_element);
    }
    else {
        incorrect(output_element);
    }
}

const soft_check_input = (input_element, output_element, key) => {
    if (input_element.value == key) {
        correct(output_element);
    }
}

const submit_button = document.getElementById('submit_button');
const input_box = document.getElementById('input_box');
const output_box = document.getElementById('output_box');

submit_button.addEventListener('click', () => check_input(input_box, output_box, key));
input_box.addEventListener('keyup', () => soft_check_input(input_box, output_box, key));