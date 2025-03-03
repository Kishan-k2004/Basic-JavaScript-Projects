const password = document.getElementById('password')
const eye = document.getElementById('eye')
const str = document.getElementById('strength')
const msg = document.getElementById('message')
let div = document.querySelector('.input-box')

eye.addEventListener('click',function(){
    if(password.type == 'password'){
        password.type = 'text'
        eye.src = 'show.png'
    }
    else{
        password.type = 'password'
        eye.src = 'hide.png'
    }
})

password.addEventListener('input',function(){

    if(password.value.length === 0){
        msg.style.display = 'none'
        div.classList.remove('weak','medium','strong')
    }else{
        msg.style.display = 'block'
    }
    
    div.classList.remove('weak', 'medium', 'strong')

    if(password.value.length < 4){
        str.innerHTML = 'weak'
        div.classList.add('weak')

    }else if(password.value.length <8 ){
        str.innerHTML = 'medium'
        div.classList.add('medium')
    }
    else{
        str.innerHTML = 'strong'
        div.classList.add('strong')
    }
})

//------------------------------------------Generate Password---------------------------------------------------

const text = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm1234567890-/*+_!@#$%^&(=)"
let pass=''
function generaterPassword(){
    div.classList.remove('weak','medium','strong')
    msg.style.display = 'none'
    pass = ''
    let len=12

    while(pass.length<=len){
        pass+=text[Math.floor(Math.random()*text.length)]
    }

    password.value = pass
    password.type = 'text'
    eye.src = 'show.png'

}

function copyPassword(){
    password.select()
    navigator.clipboard.writeText(password.value)
}