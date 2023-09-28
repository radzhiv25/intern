let price = document.getElementById('price')
let title = document.getElementById('title')
let image = document.getElementById('img')
let desc = document.getElementById('desc')
let category = document.getElementById('category')
async function cart(){
    const result = await axios.get('https:fakestoreapi.com/products/1')
    console.log(result.data)
    console.log(result.data.id)
    console.log(result.data.category)
    console.log(result.data.price)
    let img = document.createElement('img')
    // img = result.data.image
    title.innerHTML = result.data.title
    img.src = result.data.image
    image.appendChild(img)
    // price = result.data.price
    // const pr = result.data.price
    category.innerHTML = result.data.category
    desc.innerHTML = result.data.description
    price.innerHTML = `Rs ${result.data.price}`
}
cart()

function addProduct(){
    document.getElementById('add-product').innerHTML = 
}