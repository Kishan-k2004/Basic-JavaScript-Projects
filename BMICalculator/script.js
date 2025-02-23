const button = document.querySelector('button')

button.addEventListener('click', function(e){
    e.preventDefault()
// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

// For example, this can be useful when:

// Clicking on a "Submit" button, prevent it from submitting a form
// Clicking on a link, prevent the link from following the URL

    const h = parseInt(document.querySelector("#height").value)
    const w = parseInt(document.querySelector("#weight").value)

    const result = document.querySelector(".result")
    result.textContent='' // remove previous result

    if(!(h) || h<0 || isNaN(h)){
        const msg = document.createTextNode('Enter the valid value')
        result.appendChild(msg)
    }else if(!(w) || w<0 || isNaN(w)){
        const msg = document.createTextNode('Enter the valid value')
        result.appendChild(msg)
    }else if(!(h) && !(w) || h<0 && w<0 || isNaN(h) && isNaN(w)){
        const msg = document.createTextNode('Enter the valid value')
        result.appendChild(msg)
    }else{
        const ans=document.createTextNode(`Your BMI is :- ${w / ((h / 100) * (h / 100))}`)
        result.appendChild(ans)
    }

})