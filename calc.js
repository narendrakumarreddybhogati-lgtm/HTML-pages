document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('button');
  buttons.forEach(function (button) {
      button.addEventListener('click', function () {
          const buttonValue = button.innerText;
          if (buttonValue === 'AC') {
              display.value = '';
          }
          else if (buttonValue === 'DEL') {
              display.value = display.value.slice(0, -1);
          }
          else if (buttonValue === '=') {
              try {
                  display.value = eval(display.value);
              } catch (error) {
                  display.value = 'Error';
              }
          }
          else {
              display.value += buttonValue;
          }
      });
  });
});
