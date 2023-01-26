let form = document.querySelector("#new-task-form");
let input = document.querySelector("#new-task-input");
let tasks = document.querySelector("#tasks");
let tasksArr = document.querySelectorAll(".task");
let colorBtn = document.querySelector(".Colorbtn");

colorBtn.addEventListener("click", function () {
  let colors = ["black", "#1F2935", "Pink", "#374151"];

  let myrandomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[myrandomNumber];

  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }
});




// form.addEventListener('submit', function(e){
//   e.preventDefault()

//   let text = input.value
//   if(!text){
//     alert("Pls can you input something")
//   }
//   let task_el = document.createElement('div')
//   task_el.classList.add('task')

//   let content_el = document.createElement('div')
//   content_el.classList.add('content')
 

//   let action_el = document.createElement('div')
//   action_el.classList.add('action')

//   let delete_btn = document.createElement('button')
//   delete_btn.classList.add('delete')
//   delete_btn.innerText = 'DELETE'

//   delete_btn.addEventListener('click', function(){
//     tasks.removeChild(task_el)
//   })
 

  

//   let edit = document.createElement('button')
//   edit.classList.add('edit')
//   edit.innerText = 'EDIT'

//   edit.addEventListener('click', function(){
// if(edit.innerText=="EDIT"){
//   New_input.removeAttribute('readonly')
//   New_input.focus()
//   edit.innerText = "Save"
// }
// else{
//   New_input.setAttribute('readonly','readonly')

//   edit.innerText = 'EDIT'
// }
//   })


// let New_input = document.createElement('input')
// New_input.classList.add('text')
// New_input.type = 'text'
// New_input.value = text
// New_input.setAttribute('readonly','readonly')




//   task_el.appendChild(content_el)
//   content_el.appendChild(New_input)
//   task_el.appendChild(action_el)
//   action_el.appendChild(edit)
//   action_el.appendChild(delete_btn)
//   tasks.appendChild(task_el)



// })

form.addEventListener('submit', function(e){
  e.preventDefault()

  let text = input.value
if(!text){
  alert("Please Input something")
  
} else{
let task_el = document.createElement('div')
task_el.classList.add('task')

let content_el = document.createElement('div')
content_el.classList.add('content')
// content_el.innerText = text

let action = document.createElement('div')
action.classList.add('action')

let edit_btn = document.createElement('button')
edit_btn.classList.add('edit')
edit_btn.innerText = "EDIT"


edit_btn.addEventListener('click', function(){
  if(edit_btn.innerText=="EDIT"){
  Second_input.removeAttribute('readonly','readonly')
  Second_input.focus()
  edit_btn.innerText = "SAVE"
}
else{
  Second_input.setAttribute('readonly','readonly')
  edit_btn.innerText = "EDIT"
  
}

})

let delete_btn = document.createElement('button')
delete_btn.classList.add('delete')
delete_btn.innerText = "DELETE"
delete_btn.addEventListener('click', function(){
  tasks.removeChild(task_el)
})

let Second_input = document.createElement('input')
Second_input.type = 'text'
Second_input.classList.add('text')
Second_input.value = text
Second_input.setAttribute('readonly','readonly')
// Append child
task_el.appendChild(content_el)
content_el.appendChild(Second_input)
task_el.appendChild(action)
action.appendChild(edit_btn)
action.appendChild(delete_btn)
tasks.appendChild(task_el)

input.value = ""
}
})

