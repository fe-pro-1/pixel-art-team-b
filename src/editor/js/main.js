const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_SIZE = canvas.clientWidth;
const CELLS_COUNT = 16;
const CELLS_STEP = CANVAS_SIZE / CELLS_COUNT;

const STROKE_WIDTH = 1;
const STROKE_COLOR = '#000000';

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.lineWidth = STROKE_WIDTH;
ctx.strokeStyle = STROKE_COLOR;

for (let x = 0; x <= CELLS_COUNT; x++) {
    ctx.beginPath();
    ctx.moveTo(x * CELLS_STEP, 0);
    ctx.lineTo(x * CELLS_STEP, CANVAS_SIZE);
    ctx.stroke();
}

for (let y = 0; y <= CELLS_COUNT; y++) {
    ctx.beginPath();
    ctx.moveTo(0, y * CELLS_STEP);
    ctx.lineTo(CANVAS_SIZE, y * CELLS_STEP)
    ctx.stroke();
}
