'use strict';


let text = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович: Как ревизор?
Артемий Филиппович: Как ревизор?
Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович: Вот те на!
Артемий Филиппович: Вот не было заботы, так подай!
Лука Лукич: Господи боже! еще и с секретным предписаньем!`;

function distribution(text) {

    let regExp = /^[А-Я][^:]+:/gm;
    let roles = text.match(regExp);
    let rolesText = text.split(regExp).map(function(item, i) {
        return i + ')' + item;
    });
    let obj = {};
    obj.toString = function () {
        let str = "";
        for (var prop in obj) {
            if( prop !== "toString" ) {
                str += prop + "<br>" + obj[prop] + "<br>";
            }
        }
        return str;
    };

    for (let i = 0; i < roles.length; i++) {
        obj[roles[i]];
        if ( obj[roles[i]] === undefined) {
            obj[roles[i]] = "<br>" + rolesText[i+1] + "<br>";
        } else {
            obj[roles[i]] +=  "<br>" + rolesText[i+1] + "<br>";
        }
    }

    return obj;

}

var theElement = document.getElementById("elem");
theElement.innerHTML = distribution(text);
