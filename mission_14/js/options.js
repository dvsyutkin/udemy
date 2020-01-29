class Options {
    constructor(height = 200, width = 100, bg = 'red', fontSize = 32, textAlign = 'center', content = 'Hello Word!') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.content = content;
    }
    createDiv() {
        let elem = document.createElement('div'),
            cssText = ` height: ${this.height}px;
                        width: ${this.width}px;
                        background-color: ${this.bg};
                        font-size: ${this.fontSize}px;
                        text-align: ${this.textAlign};
                    `;
        elem.style.cssText = cssText;
        document.body.appendChild(elem);
        elem.innerHTML = this.content;
    }
    logParam() {
        let param = ` height: ${this.height}px;
        width: ${this.width}px;
        background-color: ${this.bg};
        font-size: ${this.fontSize}px;
        text-align: ${this.textAlign};
        content: ${this.content};
    `;
        console.log(param);
    }
}
let div = new Options(500, 500);

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    div.createDiv();
    div.logParam();
});