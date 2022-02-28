const container = document.querySelector('.container')

let boxes = document.querySelectorAll('div div');
let mode = false;
createGrid(16, 'red');

function createGrid(size, mode) {
    boxes = document.querySelectorAll('div div');
    clearCells();
    let temp;
    let width = 640/size;
    

    for (let i = 0; i < size * size; i++) {
        temp = document.createElement('div') 
        let data = temp.dataset;
        temp.style.cssText = `width: ${width}px; height: ${width}px; background: white`;
        data.brightness = 1;
        temp.addEventListener('mouseover', (e) => {
            if (mode === 'red')
            e.target.style.background = 'red';

            else if (mode === 'black-white')
            e.target.style.filter = `brightness(${e.target.dataset.brightness-= 0.1})`;

            else
            e.target.style.background = `${randomColor()}`;
        });
        container.appendChild(temp);
        

}
}

function clearCells() {
    boxes.forEach(box => {
        box.remove();
    });
}

function randomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

function selectMode(mode) {
    clearCells();
    let size = prompt("Grid size");
    createGrid(size, mode);
}

const btn = document.querySelector('#red');
btn.addEventListener('click', () => {
    selectMode('red');
})

const blackButton = document.querySelector('#black-white');
blackButton.addEventListener('click', () => {
    selectMode('black-white');
})

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', () => {
    selectMode('rainbow');
})



