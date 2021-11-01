import {Editor} from './editor';

const editorContainer = document.querySelector('.editor .editor-wrapper');
const rowsInput = document.querySelector('.editor .tools-rows');
const colsInput = document.querySelector('.editor .tools-cols');
const cellWidthInput = document.querySelector('.editor .tools-cell-width');
const colourInput = document.querySelector('.editor .tools-colour');
const resetButton = document.querySelector('.editor .tools-reset');

const editor = new Editor();

const build = () => {
    editor.build(rowsInput.value, colsInput.value);
    editorContainer.appendChild(editor.canvas);
};

const rebuild = () => {
    editor.destroy();
    editor.build(rowsInput.value, colsInput.value);
    editorContainer.appendChild(editor.canvas);
};

const setup = () => {
    editor.setup({
        colour: colourInput.value,
        width: cellWidthInput.value
    });
};

rowsInput.addEventListener('change', rebuild);
colsInput.addEventListener('change', rebuild);
cellWidthInput.addEventListener('change', setup);
colourInput.addEventListener('change', setup);
resetButton.addEventListener('click', rebuild);

build();