'use strict';

let mainDiv = document.getElementById("main");
let section = document.getElementById("section");
let headLine = document.createElement("h1");
headLine.innerText = "Выбери свою идеальную пиццу";

let reticle = document.createElement("div");
reticle.className = "chooseDiv";
reticle.innerHTML = "";
for (let i = 0; i < 9; i++) {
    reticle.innerHTML += "<div class='blockReticle'></div>";
}

reticle.onmouseover = function (event) {
    var target = event.target;
    if (target.className != 'blockReticle') return;
    transformDiv(target);
}

function transformDiv(target) {
    target.style.backgroundColor = "black";
}

reticle.onmouseout = function (event) {
    var target = event.target;
    if (target.className != 'blockReticle') return;
    transformDivOut(target);
}

function transformDivOut(target) {
    target.style.backgroundColor = "";
}

let list = document.createElement("div");
list.className = "chooseDiv";
list.innerHTML = "";
for (let i = 0; i < 6; i++) {
    list.innerHTML += "<div class='blockList'></div>";
}
list.onmouseover = function (event) {
    var target = event.target;
    if (target.className != 'blockList') return;
    transformDiv(target);
}

function transformDiv(target) {
    target.style.backgroundColor = "black";
}

list.onmouseout = function (event) {
    var target = event.target;
    if (target.className != 'blockList') return;
    transformDivOut(target);
}

function transformDivOut(target) {
    target.style.backgroundColor = "";
}

mainDiv.appendChild(headLine);
mainDiv.appendChild(reticle);
mainDiv.appendChild(list);

list.addEventListener("click", chooseMethod);
list.addEventListener("click", showList);
reticle.addEventListener("click", chooseMethod);
reticle.addEventListener("click", showReticle);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let ingredients = [
    {
        type: "Cоус",
        calories: 20,
        price: 41
    },
    {
        type: "Моцарелла",
        calories: 25,
        price: 43
    },
    {
        type: "Cемга",
        calories: 25,
        price: 43
    },
    {
        type: "Креветки",
        calories: 25,
        price: 43
    },
    {
        type: "Куриное филе",
        calories: 30,
        price: 51
    },
    {
        type: "Болгарский перец",
        calories: 19,
        price: 39
    },
    {
        type: "Каперсы",
        calories: 19,
        price: 39
    },
    {
        type: "Ананас",
        calories: 27,
        price: 51
    },
    {
        type: "Манго",
        calories: 27,
        price: 51
    },
    {
        type: "Карри",
        calories: 11,
        price: 13
    },
    {
        type: "Орегано",
        calories: 11,
        price: 13
    },
    {
        type: "Салями",
        calories: 39,
        price: 55
    },
    {
        type: "Охотничьи сосиски",
        calories: 39,
        price: 55
    },
    {
        type: "Оливки",
        calories: 21,
        price: 30
    },
    {
        type: "Помидоры Черри",
        calories: 20,
        price: 33
    },
    {
        type: "Пармезан",
        calories: 20,
        price: 33
    },
    {
        type: "Копченное куриное филе",
        calories: 39,
        price: 47
    },
    {
        type: "Яйцо",
        calories: 29,
        price: 12
    },
    {
        type: "Айсберг",
        calories: 17,
        price: 12
    },
    {
        type: "Фета",
        calories: 20,
        price: 10
    },
    {
        type: "Горгонзола",
        calories: 10,
        price: 10
    },
    {
        type: "Базилик",
        calories: 10,
        price: 10
    },
    {
        type: "Кинза",
        calories: 10,
        price: 10
    },
    {
        type: "Лук",
        calories: 10,
        price: 10
    },
    {
        type: "Запеченная телятина",
        calories: 40,
        price: 50
    },
    {
        type: "Бекон",
        calories: 40,
        price: 50
    },
    {
        type: "Ветчина",
        calories: 40,
        price: 50
    },
    {
        type: "Филе телятины",
        calories: 40,
        price: 50
    },
    {
        type: "Шампиньоны",
        calories: 20,
        price: 20
    },
    {
        type: "Корнишоны",
        calories: 20,
        price: 20
    },
    {
        type: "Перец Чили",
        calories: 20,
        price: 20
    }
];

function Pizza(name, composition, image) {
    this.name = name;
    this.composition = composition;
    this.basicPrice = 50;
    this.basicCalories = 20;
    this.image = image;
    this.totalPrice = function () {
        let value = 0;
        for (let i = 0; i < composition.length; i++) {
            for (let j = 0; j < ingredients.length; j++) {
                if (ingredients[j].type === composition[i]) {
                    value += ingredients[j].price;
                }
            }
        }
        return this.basicPrice + value;
    }
    this.totalCalories = function () {
        let value = 0;
        for (let i = 0; i < composition.length; i++) {
            for (let j = 0; j < ingredients.length; j++) {
                if (ingredients[j].type === composition[i]) {
                    value += ingredients[j].calories;
                }
            }
        }
        return this.basicCalories + value;
    }
}


let pizza1 = new Pizza("Dellichioza", ["Cоус", "Моцарелла", "Cемга", "Креветки", "Манго"], "url(image_pizza/pizza/pizza-2766527_1920.jpg)");
let pizza2 = new Pizza("Chiconne", ["Cоус", "Моцарелла", "Горгонзола", "Куриное филе", "Креветки", "Ананас", "Орегано"], "url(image_pizza/pizza/pizza-2766680_1920.jpg)");
let pizza3 = new Pizza("Dzhamini", ["Cоус", "Моцарелла", "Cемга", "Креветки", "Помидоры Черри", "Каперсы", "Орегано"], "url(image_pizza/pizza/pizza-2776282_1920.jpg)");
let pizza4 = new Pizza("Monna Liza", ["Cоус", "Моцарелла", "Куриное филе", "Ветчина", "Болгарский перец", "Шампиньоны", "Орегано"], "url(image_pizza/pizza/pizza-2779463_1920.jpg)");
let pizza5 = new Pizza("Mexicano", ["Cоус", "Моцарелла", "Куриное филе", "Болгарский перец", "Ананас", "Карри", "Орегано"], "url(image_pizza/pizza/pizza-2802679_1920.jpg)");
let pizza6 = new Pizza("Oliva", ["Cоус", "Моцарелла", "Куриное филе", "Орегано", "Салями", "Охотничьи сосиски", "Оливки", "Помидоры Черри"], "url(image_pizza/pizza/pizza-2803251_1920.jpg)");
let pizza7 = new Pizza("Caesar", ["Cоус", "Моцарелла", "Куриное филе", "Пармезан", "Яйцо"], "url(image_pizza/pizza/pizza-2803272_1920.jpg)");
let pizza8 = new Pizza("Fontana", ["Cоус", "Моцарелла", "Куриное филе", "Салями", "Филе телятины", "Бекон", "Орегано"], "url(image_pizza/pizza/pizza-2803348_1920.jpg)");
let pizza9 = new Pizza("Cleopatra", ["Cоус", "Моцарелла", "Куриное филе", "Оливки", "Помидоры Черри", "Шампиньоны", "Орегано"], "url(image_pizza/pizza/pizza-2805125_1920.jpg)");
let pizza10 = new Pizza("Formadgy", ["Cоус", "Моцарелла", "Пармезан", "Фета", "Горгонзола", "Орегано"], "url(image_pizza/pizza/pizza-2938753_1920.jpg)");
let pizza11 = new Pizza("Margaritta", ["Cоус", "Моцарелла", "Помидоры Черри", "Базилик", "Орегано"], "url(image_pizza/pizza/pizza-2942736_1920.jpg)");
let pizza12 = new Pizza("Vitello", ["Cоус", "Моцарелла", "Помидоры Черри", "Кинза", "Запеченная телятина", "Орегано"], "url(image_pizza/pizza/pizza-2805125_1920.jpg)");
let pizza13 = new Pizza("Napoly", ["Cоус", "Моцарелла", "Помидоры Черри", "Горгонзола", "Лук", "Филе телятины", "Орегано"], "url(image_pizza/pizza/pizza-2960326_1920.jpg)");
let pizza14 = new Pizza("Zetriollo", ["Cоус", "Моцарелла", "Салями", "Охотничьи сосиски", "Лук", "Шампиньоны", "Корнишоны"], "url(image_pizza/pizza/sauce-2776200_1920.jpg)");
let pizza15 = new Pizza("Diablo", ["Cоус", "Моцарелла", "Болгарский перец", "Лук", "Ветчина", "Филе телятины", "Перец Чили", "Орегано"], "url(image_pizza/pizza/pizza-2803348_1920.jpg)");
let pizza16 = new Pizza("Hawaii", ["Cоус", "Моцарелла", "Ветчина", "Ананас", "Орегано"], "url(image_pizza/pizza/pizza-2802679_1920.jpg)");

let allPizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8, pizza9, pizza10, pizza11, pizza12, pizza13, pizza14, pizza15, pizza16];


function sortByNametoUp(arr) {
    arr.sort(function (a, b) {
        if (b.name > a.name) {
            return 1;
        }
        return -1
    });
}

function sortByNametoUDown(arr) {
    arr.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        return -1
    });
}

function sortByPricetoUp(arr) {
    arr.sort(function (a, b) {
        return a.totalPrice() - b.totalPrice()
    });
}

function sortByPricetoDown(arr) {
    arr.sort(function (a, b) {
        return b.totalPrice() - a.totalPrice()
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function chooseMethod() {
    let modifyReticleBlocks = document.querySelectorAll(".blockReticle");
    let modifyListBlocks = document.querySelectorAll(".blockList");

    document.body.style.backgroundImage = "url('image_pizza/pizza-2798874_1920.jpg')";
    reticle.id = "smallReticle";
    let modifyReticleBlock = Array.prototype.forEach.call(modifyReticleBlocks, function (elem) {
        elem.className = "modifyReticleBlock";
    });
    list.id = "smallList";
    let modifyListBlock = Array.prototype.forEach.call(modifyListBlocks, function (elem) {
        elem.className = "modifyListBlock";
    });
}


function showList() {
    section.innerHTML = "<div id='wrapRadio'></div>";
    let wrapRadio = document.getElementById("wrapRadio");
    wrapRadio.innerHTML += "<input type='radio' id='priceUp' name='sort' class='radio'>Цена<label for='priceUp'><i class=\"fas fa-arrow-circle-up\"></i></label>"
    wrapRadio.innerHTML += "<input type='radio' id='priceDown' name='sort' class='radio'><label for='priceDown'><i class=\"fas fa-arrow-circle-down\"></i></label>"
    wrapRadio.innerHTML += "<input type='radio' id='nameUp' name='sort' class='radio'>Наименование<label for='nameUp'><i class=\"fas fa-arrow-circle-up\"></i></label>"
    wrapRadio.innerHTML += "<input type='radio' id='nameDown' name='sort' class='radio'><label for='nameDown'><i class=\"fas fa-arrow-circle-down\"></i></label>"

    section.innerHTML += "<table><tbody id='div1'></tbody></table>";
    let table = document.getElementById("div1");

    function writeList() {
        table.innerHTML = "";
        for (let i = 0; i < allPizzas.length; i++) {
            table.innerHTML += "<tr></tr>";
            let tr = document.getElementsByTagName("tr");
            tr[i].innerHTML += '<td class="colName"></td><td class="colPrice"></td>';
            let textTd = document.getElementsByClassName("colName")[i];
            textTd.innerText = allPizzas[i].name;
            let priceTd = document.getElementsByClassName("colPrice")[i];
            priceTd.innerText = allPizzas[i].totalPrice() + " грн";
        }
    }

    writeList();

    table.onmouseover = function (event) {
        var target = event.target;
        if (target.tagName != 'TD') return;
        changeTd(target);
    }

    function changeTd(target) {
        if (target) {
            target.style.backgroundColor = "#515151";
            target.style.color = "lightgray";
        }
    }

    table.onmouseout = function (event) {
        var target = event.target;
        if (target.tagName != 'TD') return;
        changeTDout(target);
    }

    function changeTDout(target) {
        if (target) {
            target.style.backgroundColor = "";
            target.style.color = "";
        }
    }

    let priceUp = document.getElementById("priceUp");
    priceUp.addEventListener("click", function () {
        sortByPricetoUp(allPizzas);
        writeList();
    });
    let priceDown = document.getElementById("priceDown");
    priceDown.addEventListener("click", function () {
        sortByPricetoDown(allPizzas);
        writeList();
    });
    let nameUp = document.getElementById("nameUp");
    nameUp.addEventListener("click", function () {
        sortByNametoUp(allPizzas);
        writeList();
    });
    let nameDown = document.getElementById("nameDown");
    nameDown.addEventListener("click", function () {
        sortByNametoUDown(allPizzas);
        writeList();
    });
    let a = document.getElementById("smallReticle");
    a.addEventListener("click", showReticle);
}

function showReticle() {
    section.innerHTML = "<div id='chooseIngredient'></div>";

    let chooseIngredient = document.getElementById("chooseIngredient");
    chooseIngredient.innerHTML = "<p id='question'>Чего не должно быть в идеальной пицце?<select id='selectIngredient'>" +
        "    <option></option>\n" +
        "    <option value='Cоус'>Cоус</option>\n" +
        "    <option value='Моцарелла'>Моцарелла</option>\n" +
        "    <option value='Cемга'>Cемга</option>\n" +
        "    <option value='Креветки'>Креветки</option>\n" +
        "    <option value='Куриное филе'>Куриное филе</option>\n" +
        "    <option value='Болгарский перец'>Болгарский перец</option>\n" +
        "    <option value='Каперсы'>Каперсы</option>\n" +
        "    <option value='Ананас'>Ананас</option>\n" +
        "    <option value='Манго'>Манго</option>\n" +
        "    <option value='Карри'>Карри</option>\n" +
        "    <option value='Орегано'>Орегано</option>\n" +
        "    <option value='Салями'>Салями</option>\n" +
        "    <option value='Охотничьи сосиски'>Охотничьи сосиски</option>\n" +
        "    <option value='Оливки'>Оливки</option>\n" +
        "    <option value='Помидоры Черри'>Помидоры Черри</option>\n" +
        "    <option value='Пармезан'>Пармезан</option>\n" +
        "    <option value='Копченное куриное филе'>Копченное куриное филе</option>\n" +
        "    <option value='Яйцо'>Яйцо</option>\n" +
        "    <option value='Айсберг'>Айсберг</option>\n" +
        "    <option value='Фета'>Фета</option>\n" +
        "    <option value='Горгонзола'>Горгонзола</option>\n" +
        "    <option value='Фета'>Фета</option>\n" +
        "    <option value='Базилик'>Базилик</option>\n" +
        "    <option value='Кинза'>Кинза</option>\n" +
        "    <option value='Лук'>Лук</option>\n" +
        "    <option value='Запеченная телятина'>Запеченная телятина</option>\n" +
        "    <option value='Бекон'>Бекон</option>\n" +
        "    <option value='Ветчина'>Ветчина</option>\n" +
        "    <option value='Филе телятины'>Филе телятины</option>\n" +
        "    <option value='Шампиньоны'>Шампиньоны</option>\n" +
        "    <option value='Корнишоны'>Корнишоны</option>\n" +
        "    <option value='Перец Чили'>Перец Чили</option>\n" +
        "   </select></p>";

    chooseIngredient.innerHTML += "<button id='buttonIngredient'>Применить</button>"

    section.innerHTML += "<div id='wrapReticle'></div>";
    let wrapReticle = document.getElementById("wrapReticle");

    function writeReticle(arr) {
        let blockPizzaContainer;

        function renderReticle() {
            wrapReticle.innerHTML = "";

            for (let i = 0; i < arr.length; i++) {
                wrapReticle.innerHTML += "<div class='blockPizzaContainer'></div>";
                blockPizzaContainer = document.getElementsByClassName('blockPizzaContainer');
                blockPizzaContainer[i].innerHTML += "<div class='front flip'></div>";
                blockPizzaContainer[i].innerHTML += "<div class='back'></div>";

                let front = document.getElementsByClassName("front"),
                    back = document.getElementsByClassName("back");

                front[i].innerText = arr[i].name;

                front[i].innerHTML += "<ul class='ingredientsBlock'></ul>";
                let ingredientsBlock = document.getElementsByClassName('ingredientsBlock');
                let ingredientsList = "";
                for (let j = 0; j < arr[i].composition.length; j++) {
                    ingredientsList += "<li class='add'>" + arr[i].composition[j] + "</li>";
                }
                ingredientsBlock[i].innerHTML = ingredientsList;


                front[i].innerHTML += "<p class='caloriesBlock'></p>";
                let caloriesBlock = document.getElementsByClassName('caloriesBlock');
                caloriesBlock[i].innerText = arr[i].totalCalories() + "ккал";
                front[i].innerHTML += "<p class='priceBlock'></p>";

                let priceBlock = document.getElementsByClassName('priceBlock');

                priceBlock[i].innerText = arr[i].totalPrice() + "грн";

                back[i].style.backgroundImage = arr[i].image;
                back[i].innerText = arr[i].name;

            }

        }

        renderReticle();

        wrapReticle.onclick = function (event) {
            var target = event.target;
            if (target.tagName != "LI") {
                while (target != wrapReticle) {
                    if (target.className == 'blockPizzaContainer') {
                        if (target.style.transform == "rotateY(180deg)") {
                            target.style.transform = "";
                            target.style.backgroundColor = "";
                            return;
                        }
                        transform(target);
                        return;
                    }
                    target = target.parentNode;
                }
            } else if (target.className == "add") {
                target.className = "deduct";
                let priceChange = target.parentNode.parentNode.querySelector(".priceBlock");
                let caloriesChange = target.parentNode.parentNode.querySelector(".caloriesBlock");
                let firstPrice = priceChange.innerText;
                let firstCalories = caloriesChange.innerText;
                priceChange.innerHTML = "";
                caloriesChange.innerHTML = "";
                priceChange.innerHTML = changePriceDown(firstPrice, target);
                caloriesChange.innerHTML = changeCaloriesDown(firstCalories, target);

            } else {
                target.className = "add";
                let priceChange = target.parentNode.parentNode.querySelector(".priceBlock");
                let caloriesChange = target.parentNode.parentNode.querySelector(".caloriesBlock");
                let firstPrice = priceChange.innerText;
                let firstCalories = caloriesChange.innerText;
                priceChange.innerHTML = "";
                caloriesChange.innerHTML = "";
                priceChange.innerHTML = changePriceUp(firstPrice, target);
                caloriesChange.innerHTML = changeCaloriesUp(firstCalories, target);
            }
        }

        function transform(target) {
            target.style.transform = "rotateY(180deg)";
            target.style.backgroundColor = "rgba(211, 211, 211, 0)";
        }

        function changePriceDown(firstPrice, target) {
            let value = 0;
            for (let j = 0; j < ingredients.length; j++) {
                if (target.innerText == ingredients[j].type) {
                    value = ingredients[j].price;
                }
            }
            let res = parseInt(firstPrice) - value;
            return res + "грн";
        }


        function changeCaloriesDown(firstCalories, target) {
            let value = 0;
            for (let j = 0; j < ingredients.length; j++) {
                if (target.innerText == ingredients[j].type) {
                    value = ingredients[j].calories;
                }
            }
            let res = parseInt(firstCalories) - value;
            return res + "ккал";
        }

        function changePriceUp(firstPrice, target) {
            let value = 0;
            for (let j = 0; j < ingredients.length; j++) {
                if (target.innerText == ingredients[j].type) {
                    value = ingredients[j].price;
                }
            }
            let res = parseInt(firstPrice) + value;
            return res + "грн";
        }

        function changeCaloriesUp(firstCalories, target) {
            let value = 0;
            for (let j = 0; j < ingredients.length; j++) {
                if (target.innerText == ingredients[j].type) {
                    value = ingredients[j].calories;
                }
            }
            let res = parseInt(firstCalories) + value;
            return res + "ккал";
        }
    }

    writeReticle(allPizzas);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let buttonIngredient = document.getElementById("buttonIngredient");
    let selectIngredient = document.getElementById("selectIngredient");

    function sortByIngredient(arr, ingredient) {
        let filterArr = arr.filter(function (item) {
            for (let j = 0; j < item.composition.length; j++) {
                if (item.composition[j] === ingredient) {
                    return false;
                }
            }
            return true;
        });
        return writeReticle(filterArr);
    }

    buttonIngredient.addEventListener("click", function () {
        if (selectIngredient.value) {
            sortByIngredient(allPizzas, selectIngredient.value);
        }
    });

    let b = document.getElementById("smallList");
    b.addEventListener("click", showList);
}