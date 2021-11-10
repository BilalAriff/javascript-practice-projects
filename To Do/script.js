// TOPICS TO COVER AND PRACTICE 

/*
    1 - Select Elements from HTML DOM to our javaScript File
    2 - learn about different query Selectors
        a - document.getElementById("id");
        a - document.getElementByTagname("p");
        a - document.getElementByClassname("class");
        a - document.querySelector("query");
    3 - study JavaScript event object
    4 - study different types of events
        a - click
        b - hover
        c - mouseover
        d - keyup
        e - keydown
    5 - Create Elements using javascript
    6 - add styles using javascript
    7 - change attributes using javascript
*/

let username = ""

let usernameBtn = document.getElementById("usernameBtn");
let usernameInput = document.getElementById("usernameForm");
let welcomeScreen = document.getElementById("welcomeScreen");
let todoListParent = document.getElementById("todoListParent");
let todoList = document.getElementById("todoList");
let appHeader = document.getElementById("appHeader");
let displayUsername = document.getElementById("displayUsername");

let taskTitle = document.getElementById("taskTitle");
let taskDescription = document.getElementById("taskDescription");
let addTask = document.getElementById("addTask");

let deleteBtn = document.querySelectorAll(".delete-btn");
let completeBtn = document.querySelectorAll(".complete-btn");
console.log(deleteBtn);


// Take Input from user and Display on the Header

usernameBtn.addEventListener('click', () => {
    username = usernameInput.value;
    displayUsername.innerText = username;
    todoListParent.classList.remove("d-none");
    appHeader.classList.remove("d-none");
    welcomeScreen.classList.add("d-none");
    console.log(username);
})

// take TODO list Details from User

// addTask.addEventListener('click', () => {
//     title = taskTitle.value;
//     description = taskDescription.value;
//     console.log(title);
//     console.log(description);
// });

addTask.addEventListener('click', () => {
    
    title = taskTitle.value;
    description = taskDescription.value;

    createListItem(title, description);
    deleteBtn = document.querySelectorAll(".delete-btn");
    completeBtn = document.querySelectorAll(".complete-btn");
    console.log(deleteBtn)

    deleteBtn.forEach( (item) => {
        item.addEventListener('click', (e) => {
            node = e.target;
            node = node.parentNode.parentNode;
            node.remove();
            console.log(node);
        });
    });

    completeBtn.forEach( (item) => {
        item.addEventListener('click', (e) => {
            node = e.target;
            node = node.parentNode.parentNode
            node.classList.add('task-completed');
            console.log(node.parentNode.parentNode);
        });
    }); 
});

// Create HTML Elements for todo list items 



function createListItem(title, description ) {
        
        //   li
        //   --h5 = title
        //   --p = description
        //   --button .btn #delete
        //   ----img img/delete.png
        //   --button .btn #edit
        //   ----img img/edit.png
        //   --button .btn #complete
        //   ----img img/complete.png


    // 1 - first create HTML Elements using JavaScript
    
    //      1.1 - create elements
    
    const li = document.createElement("li");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const completeBtn = document.createElement("button");
    const deleteIcon = document.createElement("img");
    const editIcon = document.createElement("img");
    const completeIcon = document.createElement("img");
    

    //      1.2 - create text for elements
    
    const _title = document.createTextNode(title);
    const _description = document.createTextNode(description);
    
    //      1.3 - append text to elements

    h5.appendChild(_title);
    p.appendChild(_description)
    
    // 2 - Add Classes, ID's and Attributes

    //      2.1 adding classes

    li.classList.add("todo-list-item");
    deleteBtn.classList.add("btn");
    deleteIcon.classList.add("delete-btn");
    editBtn.classList.add("btn");
    completeBtn.classList.add("btn");
    completeIcon.classList.add("complete-btn");


    //      2.2 adding width attributes to images

    deleteIcon.setAttribute('width', '30px');
    editIcon.setAttribute('width', '30px');
    completeIcon.setAttribute('width', '30px');

    //      2.3 Adding src attributes to img tag

    deleteIcon.setAttribute('src', 'img/delete.png');
    editIcon.setAttribute('src', 'img/edit.png');
    completeIcon.setAttribute('src', 'img/complete.jpg');

    //      2.4 Add ID Attributes to buttons

    deleteBtn.setAttribute('id', 'delete');
    editBtn.setAttribute('id', 'edit');
    completeBtn.setAttribute('id', 'complete');
    
    // 2 - Append (Add) that element to the parent element 

    todoList.appendChild(li);

    li.appendChild(h5);
    li.appendChild(p);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);

    deleteBtn.appendChild(deleteIcon);
    editBtn.appendChild(editIcon);
    completeBtn.appendChild(completeIcon);
    
    // const element = document.getElementById("div1");

}


// Complete Task Functionality 



let li = document.querySelectorAll('.todo');
let input = document.getElementById("userInput");

// 2 - using forEach to itterate over elements of Li and add event listener to each item 

// li.forEach( (item) => {
//     item.addEventListener('click', (e) => {
//         alert(e.target.innerText);
//     });
// });

// STEP 3 - Selecting input field to get value and alert the value to see if works 
