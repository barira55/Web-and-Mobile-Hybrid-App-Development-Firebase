var list = document.getElementById("list")

function addTodo() {
    var todoItem = document.getElementById("todoItem");

    //create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText)

    //create delt button
    var deltBtn = document.createElement("button");
    var deltText = document.createTextNode("DELETE")
    deltBtn.setAttribute("class", "btn")
    deltBtn.setAttribute("onclick", "deltItem(this)")
    deltBtn.appendChild(deltText)

    //create edit btn
    var editBtn = document.createElement("button")
    var deltText = document.createTextNode("EDIT")
    editBtn.appendChild(deltText)
    editBtn.setAttribute("onclick", "editItem(this)")

    li.appendChild(deltBtn)
    li.appendChild(editBtn)
    list.appendChild(li)

    todoItem.value = ""
}
function deltItem(p) {
    
    p.parentNode.remove();
}

function deltAll() {
    list.innerHTML = ""
}

function editItem(p) {
    var val = p.parentNode.firstChild;
    console.log(val)
    var editValue = prompt("Enter edit value",val.nodeValue) 
    val.nodeValue = editValue;
}