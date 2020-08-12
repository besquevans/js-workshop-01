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
      addDrag(todo)
    })
  }


  //Drag

  function addDrag(todo) {
    todo.setAttribute("draggable", true)
    todo.addEventListener("drag", function(e) {
      // console.log("drag")
      let target = e.target
      let mouseElement = document.elementFromPoint(e.pageX, e.pageY)

      if(target != mouseElement && mouseElement.tagName == "LI"){
        if(event.offsetY > 0) {
          mouseElement.insertAdjacentElement("afterend", target)
        } else {
          mouseElement.insertAdjacentElement("beforebegin", target)
        }
      }
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
      addDrag(newTodo)
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