const searchForm = document.getElementById('image-generator')
const searchBox = document.getElementById('search-box')
const resultBox = document.getElementById('result')
const showMore = document.getElementById('show-more')


let keyword =''
let page=1
let perpage = 10
async function api() {
    
    showMore.style.display = 'none'
    keyword = searchBox.value
    const url = `https://api.pexels.com/v1/search?query=${keyword}&page=${page}&per_page=${perpage}`
    const res = await fetch(url,{
        method : 'GET',
        headers : {
            "Authorization": 'vyxc4YHnqGyhgOlA7ZVcPjNkMc30wLXN84DP7FSRZKVdRU3egTyzGWZk'
        }
    })

    const data = await res.json()

    let result = data.photos
    result.map((i)=>{
        const image = document.createElement('img')
        image.src=i.src.large

        const link = document.createElement('a')
        link.target = i.url
        link.target = '_blank'
        link.appendChild(image)
        resultBox.appendChild(link)

    })
    showMore.style.display = 'block'

}

searchBox.addEventListener('input',(e)=>{
    resultBox.innerHTML = ''
    e.preventDefault()
    page = 1
    api();
})

showMore.addEventListener('click',()=>{
    page++
    api()
})