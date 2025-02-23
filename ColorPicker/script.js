const div = document.querySelectorAll('div')
const body = document.body
const h1 = document.querySelector('h1')

div.forEach((x)=>{

    console.log(x)

    x.addEventListener('click', (e) =>{
        console.log(e.target)
        body.style.backgroundColor=e.target.id

    });
});

h1.addEventListener('click',function(e){
    body.style.backgroundColor="white"
})