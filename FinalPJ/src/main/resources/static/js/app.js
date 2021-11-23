import {displayDNDClassView } from "./dndClass.js";

const mainContainerEl = document.querySelector(".mainContainerEl");

function displayHeader(mainContainerEl){

    //creating header html elements
    const headerEl = document.createElement("header");
    headerEl.classList.add("header");
    
    const headerDivEl = document.createElement("div");
    headerDivEl.classList.add("headerDiv");

    const headerUlEl = document.createElement("ul");
    headerUlEl.classList.add("headerUl");
    
    const homeLiEl = document.createElement("li");
    homeLiEl.classList.add("headerLi");
    homeLiEl.innerText = "Home";
    const createLiEl = document.createElement("li");
    createLiEl.innerText = "Create a Character";
    createLiEl.classList.add("headerLi");
    const userCreationsLiEl = document.createElement("li");
    userCreationsLiEl.innerText = "User Creations";
    userCreationsLiEl.classList.add("headerLi");
    const meetLiEl = document.createElement("li");
    meetLiEl.innerText = "Meet the Goblins";
    meetLiEl.classList.add("headerLi");


    //appending header elements

    headerUlEl.append(homeLiEl);
    headerUlEl.append(createLiEl);
    headerUlEl.append(userCreationsLiEl);
    headerUlEl.append(meetLiEl);

    headerDivEl.append(headerUlEl);
    headerEl.append(headerDivEl);
    mainContainerEl.append(headerEl);
}


function displayFooter(mainContainerEl){
    const footerEl = document.createElement("footer");
    footerEl.classList.add("footer");
    
    const wcciEl = document.createElement("h3");
    wcciEl.classList.add("footerLiEl");
    wcciEl.innerText = "We Can Code It";
    
    const gitHobGoblins = document.createElement("h4");
    gitHobGoblins.innerText = "Git-HobGoblins";
    gitHobGoblins.classList.add("footerLiEl");
    
    const yearEl = document.createElement("p");
    yearEl.innerText = "2021";
    yearEl.classList.add("footerLiEl");

    //appending footer elements
    footerEl.append(wcciEl);
    footerEl.append(gitHobGoblins);
    footerEl.append(yearEl);
    
    mainContainerEl.append(footerEl);

}


function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};

displayDNDClassView(mainContainerEl);

export {clearChildren}

export {displayHeader}

export {displayFooter}