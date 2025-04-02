const list = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${list.length}`);

/*
list.forEach((element, i) => {
    console.log(`Category: ${list[i].querySelector("h2").textContent}`);
    console.log(`Elements: ${list[i].querySelectorAll("li").length}`);
});
*/

list.forEach((element) => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
