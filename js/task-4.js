const registerForm = document.querySelector(".login-form");
 
 registerForm.addEventListener("submit", handleSubmit);
 
function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const pass = form.elements.password.value;
    console.log(email);

    const elements = {}

   
   if (email.trim() === "" || pass.trim() === "") {
     return alert("Please fill in all the fields!");
   } else {
       elements.email = email;
       elements.pass = pass;
   }
    form.reset();
    console.log(elements);
 }