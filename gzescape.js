
const correct = (output_element) => {
    output_element.innerHTML="<p>Das ist richtig! Notiere dir die Lösung:<br>" + result + "</p>";
    output_element.setAttribute("style", "color: rgb(40, 141, 0)");
}

const incorrect = (output_element) => {
    output_element.innerHTML="<p>Diese Lösung ist leider nicht korrekt.</p>";
    output_element.setAttribute("style", "color: #f00");
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


const show_tip = (out_element, tip_no) => {
    out_element.innerHTML = "<p>" + tips[tip_no] + "</p>";
}

const tip1_button = document.getElementById('Tip1');
const tip2_button = document.getElementById('Tip2');
const tip_text = document.getElementById('TipText');

tip1_button.addEventListener('click', () => show_tip(tip_text, 0));
tip2_button.addEventListener('click', () => show_tip(tip_text, 1));
