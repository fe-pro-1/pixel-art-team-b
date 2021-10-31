export class Editor {
    static ROWS_COUNT_DEFAULT = 16;
    static COLS_COUNT_DEFAULT = 16;
    static COLOUR_DEFAULT = '#000000';
    static CELL_WIDTH_DEFAULT = 20;
    
    canvas;
    
    #isDrawing = false;
    #colour = Editor.COLOUR_DEFAULT;
    #width = Editor.CELL_WIDTH_DEFAULT;
    
    constructor() {
        this.build();
    }
    
    /**
     * Build cells
     * @param rows {number} - count of rows
     * @param cols {number} - count of cols
     *
     * @return void
     */
    build(
        rows = Editor.ROWS_COUNT_DEFAULT,
        cols = Editor.COLS_COUNT_DEFAULT
    ) {
        this.canvas = document.createElement('div');
        this.canvas.classList.add('canvas');
        
        for (let r = 0; r < rows; r++) {
            const row = document.createElement('div');
            row.classList.add('canvas__row');
            this.canvas.appendChild(row);
            
            for (let c = 0; c < cols; c++) {
                const cell = document.createElement('div');
                cell.classList.add('canvas__cell');
                cell.style.width = `${this.#width}px`;
                cell.style.height = `${this.#width}px`;
                row.appendChild(cell);
            }
        }
        
        this.canvas.addEventListener('mousedown', this.#onPointerDown);
        this.canvas.addEventListener('touchstart', this.#onPointerDown);
        this.canvas.addEventListener('mousemove', this.#onPointerMove);
        this.canvas.addEventListener('touchmove', this.#onPointerMove);
        this.canvas.addEventListener('mouseup', this.#onPointerUp);
        this.canvas.addEventListener('touchend', this.#onPointerUp);
    }
    
    destroy() {
        this.canvas.parentNode.removeChild(this.canvas);
    
        this.canvas.removeEventListener('mousedown', this.#onPointerDown);
        this.canvas.removeEventListener('touchstart', this.#onPointerDown);
        this.canvas.removeEventListener('mousemove', this.#onPointerMove);
        this.canvas.removeEventListener('touchmove', this.#onPointerMove);
        this.canvas.removeEventListener('mouseup', this.#onPointerUp);
        this.canvas.removeEventListener('touchend', this.#onPointerUp);
        
        this.canvas = undefined;
    }
    
    setup({
      colour = this.#colour,
      width = this.#width
    }) {
        this.#colour = colour;
    
        if (this.#width !== width) {
            this.#width = width;
    
            this.canvas.querySelectorAll('.canvas__cell')
                .forEach((cell) => {
                    cell.style.width = `${width}px`;
                    cell.style.height = `${width}px`;
                });
        }
    }
    
    #fillCell(cell) {
        cell.style.backgroundColor = this.#colour;
    }
    
    #onPointerDown = ((event) => {
        this.#isDrawing = true;
        this.#fillCell(event.target);
    }).bind(this);
    
    #onPointerMove = ((event) => {
        if (this.#isDrawing === true && event.target.classList.contains('canvas__cell')) {
            this.#fillCell(event.target);
        }
    }).bind(this);
    
    #onPointerUp = ((event) => {
        this.#isDrawing = false;
        this.#fillCell(event.target);
    }).bind(this);
}