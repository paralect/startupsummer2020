const elem = document.getElementById('rainbow');
const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];
let counter = 0;

if (elem) {
  setInterval(() => {
    const color = counter % 7;
    counter += 1;
    elem.bgColor = colors[color];
  }, 300);
}
