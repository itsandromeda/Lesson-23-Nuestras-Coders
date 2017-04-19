/*global document*/
/*jshint esversion: 6*/

var coders = [{
    name: "Arantza Burga",
    src: "assets/images/arantza-burga.jpg"
}, {
    name: "Daguiana Revoredo",
    src: "assets/images/daguiana-revoredo.jpg"
}, {
    name: "Elizabeth Condori",
    src: "assets/images/elizabeth-condori.jpg"
}, {
    name: "Grecia Rayme",
    src: "assets/images/grecia-rayme.jpg"
}, {
    name: "Janine Vega",
    src: "assets/images/janine-vega.jpg"
}, {
    name: "Michelle More",
    src: "assets/images/michelle-more.jpg"
}];

var mainContainer = document.getElementById("wrapper"),
    container = document.createElement("div"),
    title = document.createElement("h1"),
    titleText = document.createTextNode("Nuestras coders"),
    bar = document.createElement("div"),
    coder = coders.map((e) => e.name),
    src = coders.map((e) => e.src),
    i;

title.appendChild(titleText);
title.classList.add("title");
bar.classList.add("bar");
mainContainer.appendChild(title);
mainContainer.appendChild(bar);

function print(name, src, i) {
    "use strict";
    var figure = document.createElement("figure"),
        img = document.createElement("img"),
        figcaption = document.createElement("figcaption"),
        coder = document.createTextNode(name);

    img.setAttribute("src", src);
    img.setAttribute("alt", name);
    figcaption.appendChild(coder);
    figcaption.classList.add("coder-name");
    figure.setAttribute("id", "img0" + i);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    container.classList.add("gallery");
    container.appendChild(figure);
}

mainContainer.appendChild(container);

for (i = 0; i < coders.length; i += 1) {
    print(coder[i], src[i], i);
}