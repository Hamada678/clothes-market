let allProducts = document.querySelector(".products")
let productsIncart = localStorage.getItem("productsIncart")

if(productsIncart){
    let item = JSON.parse(productsIncart)
    drawItems(item)
}

function drawItems(products){
    let x = products.map((item) => {
        return`
        <div class="product-item">
            <img src="${item.img}" alt="">
            <div class="product-item-info">
                <h2>${item.title}</h2>
                <h3>${item.desc}</h3>
                <p>${item.price}</p>
            </div><!-- product-item-info -->
            <div class="product-item-action">
                <button class="add-to-cart" onClick="Removefromcart(${item.id})">Remove</button>
            </div><!-- product-item-action -->
        </div><!-- product item -->`
    })
   allProducts.innerHTML=x.join("");
}

// ////////////////////////////////////////////
function Removefromcart(id){
    let someProducts = JSON.parse(localStorage.getItem("productsIncart"))
    someProducts = someProducts.filter(item =>item.id !== id)
    localStorage.setItem("productsIncart",JSON.stringify(someProducts))
    drawItems(someProducts)
}

    