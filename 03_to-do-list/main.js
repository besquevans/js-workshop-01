window.addEventListener("DOMContentLoaded", () => {
  let todoUl = document.querySelector("ul")
  let todos = document.querySelectorAll("ul li")
  let addBtn = document.querySelector("#addBtn")
  let input = document.querySelector("#input")

  //start
  addEvents()
  addCreateTodoEvent()


  function addEvents() {
    todos.forEach(function(todo) {
      addCheckedEvent(todo)
      addDeleteEvent(todo)
      addDraggable(todo)
      addDragstartEvent(todo)
      addDropEvent(todo)
    })
  }


  //Drag
  function addDraggable(todo) {
    todo.setAttribute("draggable", true)
  }


  function addDragstartEvent(todo) {
    todo.addEventListener("dragstart", function(event) {
      event.target.className = "target"
      event.dataTransfer.setData("text/plain", event.target.className)
    })
  }

  function addDropEvent(todo) {
    todo.addEventListener("drag", function(event) {
      let cName = event.dataTransfer.getData("text/plain")
      console.log("drag")
      console.log(cName)
      // console.log("todo: " + todo.id)

      // todo.insertAdjacentElement("afterend", target)
    })
  }



  // add todo 
  function addCreateTodoEvent() {
    addBtn.addEventListener("click", () => {
      console.log("add todo")
      newTodo = createNewTodo()
      addCheckedEvent(newTodo)
      deleteBtn = newTodo.querySelector(".close")
      addDeleteEvent(newTodo)
      todoUl.appendChild(newTodo)
    })
  }
  
  function createNewTodo() {
    let newLi = document.createElement("li")
    let newSpan = document.createElement("span")
    newLi.textContent = input.value
    newSpan.className = "close"
    newSpan.textContent = "x"
    newLi.appendChild(newSpan)
    return newLi
  }



  //add events

  function addCheckedEvent(todo) {
    todo.addEventListener("click", () => {
      console.log("checked")
      todo.classList.toggle("checked")
    })
  }

  function addDeleteEvent(todo) {
    let btn = todo.querySelector(".close")
    btn.addEventListener("click", () => {
      console.log("deleted!")
      btn.parentNode.remove()
    })
  }
})