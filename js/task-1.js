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

// buttons

const button = document.querySelector(".my-button");
const addBtn = document.querySelector(".add-l");
const removeBtn = document.querySelector(".remove-l");

function click(event){
    //console.log("click, info: ", event.currentTarget);
}
function add(){
    button.addEventListener("click", click);
    //console.log("add listener");
}
function remove(){
        button.removeEventListener("click", click);
    //console.log("remove listener");
}
document.addEventListener("keydown", event => {
  //console.log("Keydown: ", event);
});
document.addEventListener("keydown", event => {
  //console.log("key: ", event.key);
  //console.log("code: ", event.code);
});

addBtn.addEventListener("click", add);
removeBtn.addEventListener("click", remove);

// form

const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}



