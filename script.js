const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";   
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);    
}

createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("div");
    let img = document.createElement("img");
    let noteText = document.createElement("p");

    inputBox.className = "input-box";

    noteText.setAttribute("contenteditable", "true");
    img.src = "notes-app-img/images/delete.png";

    inputBox.appendChild(noteText);
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage();
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

notesContainer.addEventListener("keyup", function(e) {
    if (e.target.classList.contains("input-box")) {
        updateStorage();
    }
});

document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
