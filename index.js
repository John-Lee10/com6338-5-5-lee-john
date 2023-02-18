var form = document.querySelector("#add-todo")
var ul = document.querySelector("#todo-list")
var input = document.querySelector('form input')


//submit

form.addEventListener('submit', ulSubmit)

function ulSubmit(event) {
  var li = document.createElement('li')
  var button = document.createElement('button')
  ul.appendChild(li)
  li.appendChild(button)
  button.textContent = input.value
  event.preventDefault()
  input.value = ""
  ////////doesn't work//////if (!this.input) return
  //list item click
  button.onclick = function() {
  button.style =  'text-decoration: line-through'
    button.onclick = function() {
    button.remove()
    }
  }
}









