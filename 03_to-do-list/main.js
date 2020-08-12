window.addEventListener("DOMContentLoaded", () => {
  let todoUl = document.querySelector("ul")
  let addBtn = document.querySelector("#addBtn")
  let input = document.querySelector("#input")

  //todo add checked
  function addCheckedEventForOld() {
    let todos = document.querySelectorAll("ul li")
    todos.forEach(function(todo) {
      addCheckedEvant(todo)
    })
  }

  // delete todo
  function addDeleteEventForOld() {
    let deleteBtns = document.querySelectorAll("ul li .close")
    deleteBtns.forEach(function (btn) {
      addDeleteEvent(btn)
    })
  }

  // add todo 
  function addCreateTodoEvent() {
    addBtn.addEventListener("click", function() {
      console.log("add todo")
      newTodo = createNewTodo()
      addCheckedEvant(newTodo)
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

  function addCheckedEvant(todo) {
    todo.addEventListener("click", function() {
      console.log("checked")
      this.classList.toggle("checked")
    })
  }

  function addDeleteEvent(btn) {
    btn.addEventListener("click", function() {
      console.log("deleted!")
      this.parentNode.remove()
    })
  }



  //start
  addCheckedEventForOld()
  addDeleteEventForOld()
  addCreateTodoEvent()
})