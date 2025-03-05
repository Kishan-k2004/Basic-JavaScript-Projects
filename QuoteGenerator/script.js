const p = document.getElementById('quote')
const auth = document.getElementById('author')

async function api(){
    const url = 'https://api.api-ninjas.com/v1/quotes'

    const response = await fetch(url,{
        method:'GET',
        headers:{
            'X-Api-Key':'axEaSJ1r1Ho1FBu5uf4L1w==dbSqtgkJcXVWSHjy'
        }
        
    })

    const data = await response.json()

    p.innerHTML = data[0].quote
    auth.innerHTML = data[0].author
    auth.style.display = 'block'

    console.log(data)

}