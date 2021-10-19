"use strict";

let usersUsing = 1;

const usersField = document.querySelector(".users-connected");

usersField.textContent = `${usersUsing} Users Connected`;

const dateField = document.querySelector(".datefield");

const form = document.querySelector(".form");

const newTask = document.getElementById("new-task");

newTask.addEventListener("click", () => {
    form.style.opacity = 1;
    dateField.textContent = (new Date() + "").slice(4, -31);
});

// class Task {
//     constructor(
//         name,
//         phone,
//         fromLoc,
//         toLoc,
//         details,
//         category,
//         operator,
//         dateTime
//     ) {
//         this.name = name;
//     }

//     printThis() {
//         // stuff
//     }
// }
