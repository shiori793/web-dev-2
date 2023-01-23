###### Easy:

Q: How do you select an element with the id "my-element" using JavaScript?
```js
let my_element = document.getElementById("my-element");
```

Q: Create a button in HTML and use JavaScript to change its text when it is clicked.

```js
<button id="myButton">Click me</button>

let target = document.getElementById("myButton");
target.addEventListener('click', () => {
    target.innerHTML = "changed text";
})

```
Q: Create a list of items in HTML and use JavaScript to add a new item to the list when a button is clicked.

```js
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<button id="addButton">Add item</button>

let target2 = document.getElementById("myList");
let button = document.getElementById("addButton");

button.addEventListener('click', () => {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode("Item 4"));
    target2.appendChild(item);
})

```
Q: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted.

```js
<form id="myForm">
  <input type="text" id="myInput">
  <input type="submit" value="Submit">
</form>

let submit = document.querySelector('input[type=submit]');

submit.addEventListener('click', () => {
    let output = document.createElement('p');
    output.innerHTML = document.getElementById("myInput").value;
    document.getElementById("myForm").after(output);
});

```

###### Medium:

Q: How do you change the text of an element with the class "my-class" using JavaScript?

```js
document.querySelector(".my-class").innerHTML = "changed text";
```

###### Hard:

Q: How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript?

```js
let target3 = document.createElement('p').appendChild(document.createTextNode("new element"));
document.body.appendChild(target3);
setTimeout(() => {
    target3.remove();
}, 3000);
```