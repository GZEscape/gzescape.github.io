
const correct = (output_element) => {
    output_element.innerHTML = "<p>Das ist richtig! Notiert euch den Code<br>\"" + result
                            + "\"<br> Öffnet nun einen weiteren Umschlag, falls noch einer vorhanden ist. Sonst versucht mit Hilfe der erhaltenen Codes das Zahlenschloss zu öffnen.</p>";
    output_element.setAttribute("style", "color: rgb(40, 141, 0)");
}

const incorrect = (output_element) => {
    output_element.innerHTML="<p>Diese Lösung ist leider nicht korrekt.</p>";
    output_element.setAttribute("style", "color: #f00");
}

const check_input = (input_element, output_element, key) => {
    if (input_element.value.toUpperCase() == key.toUpperCase()) {
        correct(output_element);
    }
    else {
        incorrect(output_element);
    }
}

const soft_check_input = (input_element, output_element, key) => {
    if (input_element.value.toUpperCase() == key.toUpperCase()) {
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

const tip_text = document.getElementById('TipText');

for(let i = 0; i < tips.length; i++) {
    const tip_button = document.getElementById('Tip'+ (i+1));
    tip_button.addEventListener('click', () => show_tip(tip_text, i))
}