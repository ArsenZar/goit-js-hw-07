const mainTitle = document.querySelector(".mainH1");

const heading = document.createElement("p");
heading.classList.add("title");
heading.style.fontSize = "12px";
heading.textContent = "I add this text from JS";
mainTitle.append(heading);
console.log(heading); // <h1 class="title">This is a heading</h1>

const image = document.createElement("img");
image.src = "https://picsum.photos/id/11/320/240";
image.alt = "Nature";
console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />
