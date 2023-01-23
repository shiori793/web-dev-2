let my_element = document.getElementById("my-element");

let target = document.getElementById("myButton");
target.addEventListener('click', () => {
    target.innerHTML = "changed text";
})

let target2 = document.getElementById("myList");
let button = document.getElementById("addButton");

button.addEventListener('click', () => {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode("Item 4"));
    target2.appendChild(item);
})

let submit = document.querySelector('input[type=submit]');

submit.addEventListener('click', () => {
    let output = document.createElement('p');
    output.innerHTML = document.getElementById("myInput").value;
    document.getElementById("myForm").after(output);
});

document.querySelector(".my-class").innerHTML = "changed text";

let target3 = document.createElement('p').appendChild(document.createTextNode("new element"));
document.body.appendChild(target3);
setTimeout(() => {
    target3.remove();
}, 3000);