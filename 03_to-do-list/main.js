window.addEventListener("DOMContentLoaded", () => {
  let todoUl = document.querySelector("ul")
  let todos = document.querySelectorAll("ul li")
  let addBtn = document.querySelector("#addBtn")
  let input = document.querySelector("#input")

  //start
  addCheckedEventForOld()
  addDeleteEventForOld()
  addDragEventForOld()
  addDragenterEventForOld()
  addCreateTodoEvent()


  //todo add checked
  function addCheckedEventForOld() {
    todos.forEach(function(todo) {
      addCheckedEvent(todo)
    })
  }

  // delete todo
  function addDeleteEventForOld() {
    let deleteBtns = document.querySelectorAll("ul li .close")
    deleteBtns.forEach(function (btn) {
      addDeleteEvent(btn)
    })
  }

  function addDragEventForOld() {
    todos.forEach(function(todo) {
      todo.setAttribute("draggable", true)
    })
  }
  function addDragEventForOld() {
    todos.forEach(function(todo) {
      todo.addEventListener("drag", () => {
        
      })
    })
  }

  function addDragenterEventForOld() {
    todos.forEach(function(todo){
      todo.addEventListener("dragenter", () => {
        console.log("dragenter")
        target = event.target
        console.log("target: " + target.id)
        console.log("todo: " + todo.id)

        todo.insertAdjacentElement("afterend", target)
      })
    })
  }

  // add todo 
  function addCreateTodoEvent() {
    addBtn.addEventListener("click", () => {
      console.log("add todo")
      newTodo = createNewTodo()
      addCheckedEvent(newTodo)
      deleteBtn = newTodo.querySelector(".close")
      addDeleteEvent(deleteBtn)
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

  function addDeleteEvent(btn) {
    btn.addEventListener("click", () => {
      console.log("deleted!")
      btn.parentNode.remove()
    })
  }
})