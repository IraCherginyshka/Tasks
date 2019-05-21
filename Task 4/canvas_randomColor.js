'use strict';


'use strict';


let canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 500;
let ctx = canvas.getContext("2d");

let min = 10,
    max = 70;

function setColor() {
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));

    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

function Rectangle() {
    let x = 0,
        y = 0,
        vx = 2,
        vy = 1,
        angle = Math.random(),
        size = Math.floor(Math.random() * (max - min)) + min;
    this.color = '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
    this.width = size;
    this.height = size;
    this.square = Math.pow(size, 2);
    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.fillRect(x, y, this.width, this.height);
        x += vx;
        y += vy;

        if (x + vx + this.width > canvas.width || x + vx < 0)
            vx = -vx + angle;
        if (y + vy + this.width > canvas.height || y + vy < 0)
            vy = -vy + angle;
    };

}

function Circle() {
    let vx = 1,
        vy = 2,
        angle = Math.random();
    this.radius = Math.floor(Math.random() * (max / 2 - min)) + min;
    this.square = Math.floor(Math.PI * Math.pow(this.radius, 2));
    let x = this.radius;
    let y = this.radius;
    this.color = '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        x += vx;
        y += vy;

        if (x + vx + this.radius > canvas.width || x + vx - this.radius < 0)
            vx = -vx + angle;
        if (y + vy + this.radius > canvas.height || y + vy - this.radius < 0)
            vy = -vy + angle;
    };
}

let circle = document.getElementById("circle"),
    rectangle = document.getElementById("rectangle");

let cir1 = new Circle();
circle.innerHTML += `Площадь первого круга составляет ${cir1.square}px<br>`;
let cir2, cir3, cir4, cir5, cir6, cir7, cir8, cir9, cir10;
let rec1, rec2, rec3, rec4, rec5, rec6, rec7, rec8, rec9, rec10;

setTimeout(function () {
    rec1 = new Rectangle();
    rectangle.innerHTML += `Площадь первого квадрата составляет ${rec1.square}px<br>`;
    setTimeout(function () {
        cir2 = new Circle();
        circle.innerHTML += `Площадь второго круга составляет ${cir2.square}px<br>`;
        setTimeout(function () {
            rec2 = new Rectangle();
            rectangle.innerHTML += `Площадь второго квадрата составляет ${rec2.square}px <br>`;
            setTimeout(function () {
                cir3 = new Circle();
                circle.innerHTML += `Площадь третьего круга составляет ${cir3.square}px<br>`;
                setTimeout(function () {
                    rec3 = new Rectangle();
                    rectangle.innerHTML += `Площадь третьего квадрата составляет ${rec3.square}px <br>`;
                    setTimeout(function () {
                        cir4 = new Circle();
                        circle.innerHTML += `Площадь четвертого круга составляет ${cir4.square}px<br>`;
                        setTimeout(function () {
                            rec4 = new Rectangle();
                            rectangle.innerHTML += `Площадь четвертого квадрата составляет ${rec4.square}px <br>`;
                            setTimeout(function () {
                                cir5 = new Circle();
                                circle.innerHTML += `Площадь пятого круга составляет ${cir5.square}px<br>`;
                                setTimeout(function () {
                                    rec5 = new Rectangle();
                                    rectangle.innerHTML += `Площадь пятого квадрата составляет ${rec5.square}px <br>`;
                                    setTimeout(function () {
                                        cir6 = new Circle();
                                        circle.innerHTML += `Площадь шестого круга составляет ${cir6.square}px<br>`;
                                        setTimeout(function () {
                                            rec6 = new Rectangle();
                                            rectangle.innerHTML += `Площадь шестого квадрата составляет ${rec6.square}px <br>`;
                                            setTimeout(function () {
                                                cir7 = new Circle();
                                                circle.innerHTML += `Площадь седьмого круга составляет ${cir7.square}px<br>`;
                                                setTimeout(function () {
                                                    rec7 = new Rectangle();
                                                    rectangle.innerHTML += `Площадь седьмого квадрата составляет ${rec7.square}px <br>`;
                                                    setTimeout(function () {
                                                        cir8 = new Circle();
                                                        circle.innerHTML += `Площадь восьмого круга составляет ${cir8.square}px<br>`;
                                                        setTimeout(function () {
                                                            rec8 = new Rectangle();
                                                            rectangle.innerHTML += `Площадь восьмого квадрата составляет ${rec8.square}px <br>`;
                                                            setTimeout(function () {
                                                                cir9 = new Circle();
                                                                circle.innerHTML += `Площадь девятого круга составляет ${cir9.square}px<br>`;
                                                                setTimeout(function () {
                                                                    rec9 = new Rectangle();
                                                                    rectangle.innerHTML += `Площадь девятого квадрата составляет ${rec9.square}px <br>`;
                                                                    setTimeout(function () {
                                                                        cir10 = new Circle();
                                                                        circle.innerHTML += `Площадь дясятого круга составляет ${cir10.square}px<br>`;
                                                                        setTimeout(function () {
                                                                            rec10 = new Rectangle();
                                                                            rectangle.innerHTML += `Площадь дясятого квадрата составляет ${rec10.square}px <br>`;
                                                                        }, 5000);
                                                                    }, 5000);
                                                                }, 5000);
                                                            }, 5000);
                                                        }, 5000);
                                                    }, 5000);
                                                }, 5000);
                                            }, 5000);
                                        }, 5000);
                                    }, 5000);
                                }, 5000);
                            }, 5000);
                        }, 5000);
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 5000);
    }, 5000);
}, 5000);


function draw() {

    ctx.clearRect(0, 0, 500, 500);
    cir1.draw()
    if (cir2) {
        cir2.draw();
    }
    if (cir3) {
        cir3.draw();
    }
    if (cir4) {
        cir4.draw();
    }
    if (cir5) {
        cir5.draw();
    }
    if (cir6) {
        cir6.draw();
    }
    if (cir7) {
        cir7.draw();
    }
    if (cir8) {
        cir8.draw();
    }
    if (cir9) {
        cir9.draw();
    }
    if (cir10) {
        cir10.draw();
    }
    if (rec1) {
        rec1.draw();
    }
    if (rec2) {
        rec2.draw();
    }
    if (rec3) {
        rec3.draw();
    }
    if (rec4) {
        rec4.draw();
    }
    if (rec5) {
        rec5.draw();
    }
    if (rec6) {
        rec6.draw();
    }
    if (rec7) {
        rec7.draw();
    }
    if (rec8) {
        rec8.draw();
    }
    if (rec9) {
        rec9.draw();
    }
    if (rec10) {
        rec10.draw();
    }
}

function init() {
    return setInterval(draw, 20);
}

window.onload = init();