const mainTitle = document.querySelector(".firstSection");

const heading = document.createElement("p");
heading.classList.add("title");
heading.style.fontSize = "12px";
heading.textContent = "I add this text from JS";
console.log(heading); // <h1 class="title">This is a heading</h1>

const image = document.createElement("img");
image.src = "https://picsum.photos/id/11/320/240";
image.alt = "Nature";
console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

mainTitle.append(heading, image, heading);

const button = document.querySelector(".my-button");

function click(){
    console.log("click");
}
function click2(){
    console.log("click#2");
}

button.addEventListener("click", click);
button.addEventListener("click2", click);