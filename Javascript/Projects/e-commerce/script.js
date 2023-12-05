const productList = document.getElementById("product-list");

for (let i = 1; i <= 20; i++) {
  async function products() {
    const res = await axios.get(`https://fakestoreapi.com/products/${i}`);
    // console.log(res.data)
    let li = document.createElement("li");
    li.classList.add("product");
    li.innerHTML = `
    <div id="prod1" class="border p-2 shadow-md rounded-md flex flex-col items-center text-center h-full">
                    <div id="title" class="text-sm">
                    ${res.data.title}
                    </div>
                    <div id="img" class="w-2/3">
                    <img src = "${res.data.image}" alt = "product" class ="w-3/4 m-auto">
                    </div>
                    <div id="category">
                    ${res.data.category}
                    </div>
                    <div id="price" class="text-md font-semibold">
                    $
                    ${res.data.price}
                    </div>
                    <button class = "rounded p-2 bg-red-500 text-white " onclick="addProduct('${res.data.title}','${res.data.image}','${res.data.price}')">Add to Cart</button>
                </div>
    `;
    productList.appendChild(li);
  }

  products();
}
let cartItems = [];

async function addProduct(title,image,price) {
  console.log(title, image, price)
  let cart =  {
    title : title,
    img: image,
    price: price
    // title: document.getElementById('title').innerHTML,
    // img: document.getElementById('img').innerHTML,
    // price: document.getElementById('price').innerHTML
  }
  cartItems.push(cart)
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
