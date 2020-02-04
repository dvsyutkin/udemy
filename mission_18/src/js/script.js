window.addEventListener('DOMContentLoaded', function() {

    "use sctrict";
    let calc = require('./parts/calc'),
        form = require('./parts/form'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        btnUp = require('./parts/btnUp'),
        popup = require('./parts/popup');

    calc();
    form();
    slider();
    tabs();
    timer();
    btnUp();
    popup();
});