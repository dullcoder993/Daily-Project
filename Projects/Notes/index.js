const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function show(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
show()


function update(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputbox = document.createElement("p")
    let img = document.createElement("img")
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="8532464.png" ;
    notesContainer.appendChild(inputbox).appendChild(img);
})
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        update();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                update();
            }
        })
    }
})
