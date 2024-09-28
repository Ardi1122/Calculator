let display = document.querySelectorAll('.display');
let input = document.getElementById('input');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');

display.forEach(element => {
    element.addEventListener('click', function() {
        input.value += this.value;
    });
});

clear.addEventListener('click', function() {
    input.value = '';
});

equals.addEventListener('click', function() {
    try{
        if (input.value) {
            input.value = eval(input.value);
        }
    } catch(error) {
        input.value = "Error";
    }
})

