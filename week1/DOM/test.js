//Question 1
let my_element = document.getElementById("my-element");


//Question 2
let target = document.getElementById("myButton");
target.addEventListener('click', () => {
    target.innerHTML = "changed text";
})


//Question 3
let target2 = document.getElementById("myList");
let addButton = document.getElementById("addButton");
// let deleteButton = document.getElementById("deleteButton");

addButton.addEventListener('click', () => {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode("Item 4"));
    target2.appendChild(item);
})

//modified version (in class)

// addButton.addEventListener('click', () => {
//     let item = document.createElement('li');
//     let listNumber = target2.childElementCount + 1;
//     item.innerHTML = "item " + listNumber;
//     target2.appendChild(item);
// });

// deleteButton.addEventListener('click', () => {
//     let deleteTarget = target2.lastChild;
//     target2.removeChild(deleteTarget);
// })


//Question 4

let submit = document.querySelector('input[type=submit]');

submit.addEventListener('click', () => {
    let output = document.createElement('p');
    output.innerHTML = document.getElementById("myInput").value;
    document.getElementById("myForm").after(output);
});

//modified version (in class)

// let form = document.getElementById("myForm");
// let container = document.createElement('div');
// form.after(container);

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let output = document.createElement('p');
//     output.innerHTML = document.getElementById("myInput").value;
//     container.appendChild(output);
// });

//Question 5

document.querySelector(".my-class").innerHTML = "changed text";


//Question 6

let target3 = document.createElement('p').appendChild(document.createTextNode("new element"));
document.body.appendChild(target3);
setTimeout(() => {
    target3.remove();
}, 3000);