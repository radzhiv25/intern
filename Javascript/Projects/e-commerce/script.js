let price = document.getElementById("price");
let title = document.getElementById("title");
let image = document.getElementById("img");
let desc = document.getElementById("desc");
let category = document.getElementById("category");
let prodOne = document.getElementById("prod1");

let productList = [];
let add = document.getElementById("add-product");

async function Product() {
    for (let i = 1; i < 5; i++){
    const result = await axios.get(`https:fakestoreapi.com/products/${i}`);
    console.log(result.data);
    let ulLi = document.getElementById('prdoucts')
    for (let i = 1; i < 5; i++){
        let li = document.createElement('li')
        ulLi.appendChild(li)
    }

    title.innerHTML = result.data.title;
    let img = document.createElement("img");
    img.src = result.data.image;
    image.appendChild(img);
    category.innerHTML = result.data.category;
    desc.innerHTML = result.data.description;
    price.innerHTML = `Rs ${result.data.price}`;
    let btn = document.createElement("button");
    btn.innerHTML = "Add to cart";
    btn.className = "p-2 bg-red-400 text-white rounded";
    btn.addEventListener("click", () => {
      // let p = document.createElement('p')
      // p.textContent = result.data.title
      // console.log(p)
      // add.appendChild(p)
      console.log(result.data.title);
    });
    prodOne.appendChild(btn);
    }
  }

  Product();

setTimeout(() => {
  let loader = document.getElementById("mainContent");
  loader.className = "visible";
  console.log("visible");
}, 1500);

let back = document.getElementById("back");

// back.addEventListener("click", () => {
//   window.location.href = "index.html";
// });
// console.log()

// function show() {
//   let product = `
//     <div>
//         <h1 id='title></h1>
//         <img id='img>
//         <p id='desc'></p>
//         <p id='category'></p>
//         <p id='price'></p>
//     </div>`;
//   let div = document.getElementById("products");
//   div.innerHTML = product;
//   for (let i = 0; i < 5; i++) {
//     div.innerHTML += product;
//   }
// }
