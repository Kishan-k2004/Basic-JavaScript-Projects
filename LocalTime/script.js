const date = document.querySelector('#date')
const time = document.querySelector('#time')

setInterval(function(){
    date.textContent=''
    time.textContent=''
    let dt = new Date()
    currentDate = document.createTextNode(dt.toDateString())
    date.appendChild(currentDate)
    console.log(dt.toLocaleString())

    currentTime = document.createTextNode(dt.toLocaleTimeString())
    time.appendChild(currentTime)
},1000)
