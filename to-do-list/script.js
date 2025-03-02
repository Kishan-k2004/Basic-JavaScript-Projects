const add = document.getElementById('addTask')
const tasklist = document.getElementById('tasklist')
const p = document.querySelector('#alert')
add.addEventListener('click',()=>{
    let task = document.querySelector('#taskInput')
    p.innerHTML = ''
    if(validation(task)){
        addtolist(task)
        savedata()
        
    }
    else{
        
        p.innerHTML = 'Invalid Input'
        p.style.color = 'red'
    }
    
})

function validation(task){
    
    if(task.value.length == 0 ){
        return false
    }
    
    return true    
}

function addtolist(task){
    const li = document.createElement('li')
    const span = document.createElement('span')
    
    
    span.innerHTML = task.value
    li.appendChild(span)
    task.value = ''
    console.log('hi')


    const btn = document.createElement('button')
    btn.innerHTML = 'Delete'
    btn.setAttribute('class','delete')
    li.appendChild(btn)
    tasklist.appendChild(li)
    
}

tasklist.addEventListener('click',(e)=>{
    if(e.target.tagName === 'SPAN'){
        e.target.classList.toggle('task-text')
    }
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
        savedata()
    }
})

function savedata(){
    localStorage.setItem('data', tasklist.innerHTML)
}

function showdata(){
    tasklist.innerHTML = localStorage.getItem('data') || ''
}
showdata()