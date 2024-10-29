var links = document.querySelector(".links")
var userInfo = document.querySelector(".user_info")
var username = document.querySelector(".user_info .username")

if(localStorage.getItem("username")){
    links.style.display = "none"
    userInfo.style.display = "flex"
    username.innerHTML = localStorage.getItem("username")
}
let logoutBtn = document.querySelector(".logout")

logoutBtn.addEventListener("click" , function(){
    
    localStorage.clear();
    setTimeout( ()=> {
        window.location="register.html";
    } , 1000)
})


// /////////////////////////////////////////////////////////

let allProducts = document.querySelector(".products")
let products = [
    {
        id:1,
        title:"Sweatshirt Hoody",
        desc:"Minimal and Constructivism combined for a new EY",
        price:"45$",
        img:"images/We are a small independent eyewear brand that….jpeg"
    },
    {
        id:2,
        title:"Bomber Jacket",
        desc:"Men Colourblock Striped Trim Bomber Jacket Without Tee",
        price:"55$",
        img:"images/Men Colourblock Striped Trim Bomber Jacket Without Tee.jpeg"
    },
    {
        id:3,
        title:"Zipper Jacket",
        desc:"Loose Fit Men's Striped Trim Zipper Jacket Without T-Shirt",
        price:"55$",
        img:"images/Loose Fit Men's Striped Trim Zipper Jacket Without T-Shirt.jpeg"
    },
    {
        id:4,
        title:"Jeans Jacket",
        desc:"kkboxly Men's Button Trendy Loose Denim Jacket",
        price:"65$",
        img:"images/kkboxly  Men's Button Trendy Loose Denim Jacket, Men's Clothing For Spring Autumn.jpeg"
    },
    {
        id:5,
        title:"Coat Jacket",
        desc:"kkboxly Solid Jackets For Men Dual Decorative Pockets Snap Button Up Lapel Stylish Coat Jackets For Men",
        price:"35$",
        img:"images/kkboxly  Solid Jackets For Men Dual Decorative Pockets Snap Button Up Lapel Stylish Coat Jackets For Men - White _ XL(42).jpeg"
    },
    {
        id:6,
        title:"Sweatshirt Round",
        desc:"kkboxly Letter Print Trendy Sweatshirt, Men's Casual Graphic Design Crew Neck Pullover Sweatshirt For Men Fall Winter",
        price:"50$",
        img:"images/kkboxly  Letter Print Trendy Sweatshirt, Men's Casual Graphic Design Crew Neck Pullover Sweatshirt For Men Fall Winter.jpeg"
    },
    {
        id:7,
        title:"Polo Shirt",
        desc:"Manfinity Homme Men's Solid Color Button Front Casual Long Sleeve Polo Shirt",
        price:"45$",
        img:"images/Manfinity Homme Men's Solid Color Button Front Casual Long Sleeve Polo Shirt.jpeg"
    },
    {
        id:8,
        title:"Long Sleeve Coat",
        desc:"Mens Jackets And Coats Turn Down Collar Men Winter Jacket Zipper Side Pocket Clothing Fashion Long Sleeve Coat Men",
        price:"45$",
        img:"images/Mens Jackets And Coats Turn Down Collar Men Winter Jacket Zipper Side Pocket  Clothing Fashion Long Sleeve Coat Men - black _ M.jpeg"
    }
]

function drawItems(){
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
                <button class="add-to-cart" onClick="addToCart(${item.id})">add to cart</button>
                <i class="far fa-heart"></i>
            </div><!-- product-item-action -->
        </div><!-- product item -->`
    })
   allProducts.innerHTML=x.join("");
}
drawItems ()

// ///////////////////////////////////////////////
let cartProductDiv = document.querySelector(".cartsproduct div")
let badge = document.querySelector(".badge")


let addedItem =localStorage.getItem("productsIncart") ? JSON.parse(localStorage.getItem("productsIncart")) : [];

if(addedItem){
    addedItem.map(item => {
        cartProductDiv.innerHTML +=`<p>${item.title}</p>`
    })
    badge.style.display="block"
    badge.innerHTML = addedItem.length
}
// let addedItem = []



    if (localStorage.getItem("username")){
        function addToCart(id){
           
            let choosenItem = products.find((item) => item.id === id );
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;

            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("productsIncart" , JSON.stringify(addedItem))
            let cartsproductdivlength = document.querySelectorAll(".cartsproduct div p")
            badge.style.display="block";
            badge.innerHTML = cartsproductdivlength.length
        }
    }

let shoppingCart =document.querySelector(".shopping-cart")
let cartsproduct = document.querySelector(".cartsproduct")
shoppingCart.addEventListener("click",opencart)
function opencart(){
    if(cartProductDiv.innerHTML!=""){
        if(cartsproduct.style.display=="block"){
            cartsproduct.style.display="none"
        }else{
            cartsproduct.style.display="block"
        }
    }
}

