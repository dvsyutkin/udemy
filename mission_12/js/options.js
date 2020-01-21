class Options {
    constructor(height = 200, width = 100, bg = 'green', fontSize = 16, textAlign = 'left') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let elem = document.createElement('div'),
            cssText = ` height: ${this.height}px;
                        width: ${this.width}px;
                        background: ${this.bg};
                        font-size: ${this.fontSize}px;
                        text-align: ${this.textAlign};
                    `;
        elem.style.cssText = cssText;
        document.body.appendChild(elem);
    }
}
let div = new Options(200, 200);

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    div.createDiv();
});