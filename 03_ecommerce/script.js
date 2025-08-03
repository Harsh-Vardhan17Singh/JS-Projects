document.addEventListener('DOMContentLoaded',() =>{
  const products = [
    {id:1 , name:"White Cindrell Sandal", price:1499,image:"Images/white-sandal.jpg"},
    {id:2 , name:"Brown Urban Sandal", price:1999,image:"Images/brown-urban-sandal.jpg"},
    {id:3 , name:"Nike Air Jordan 3", price:4999,image:"Images/air-jordan.jpg"},
    {id:4 , name:"Campus Colorbliss", price:1699,image:"Images/vibrant-sport-shoe.jpg"},
    {id:5 , name:"Allen Shoes", price:2499,image:"Images/thirf-allen-shoe.jpg"},
    {id:6 , name:"Bata Black Classic", price:2099,image:"Images/bata-black.jpg"},
    {id:7 , name:"Bata Brown Lean", price:1999,image:"Images/bata-brown.jpg"},
    {id:8 , name:"Nike Lower Kicks ", price:6999,image:"Images/nike.jpg"},
    {id:9 , name:"Nike Air Runner", price:3599,image:"Images/nike-runner.jpg"},
    {id:10 , name:"Floral Yellow Sandals", price:1499,image:"Images/yellow-sandal.jpg"}
  ]
  const cart =[]


  const productlist=document.getElementById("product-list")
  const cartItems=document.getElementById("cart-items")
  const totalPriceDisplay=document.getElementById("total-price")
  const Checkoutbtn=document.getElementById("checkout-btn")
  const cartTotalMessage= document.getElementById("cart-total")
  
  const emptyCartMessage = document.getElementById("empty-cart")



  products.forEach(product =>{
    const productDiv = document.createElement('div')
    productDiv.classList.add("product")


    productDiv.innerHTML=`
    <img src="${product.image}"
    class="product-img"
    alt="${product.name}">
    <span>
    ${product.name}-
    ${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add To Cart</button>`
    productlist.appendChild(productDiv)
  })

// Targeting teh button only so that the whole div not get selected
  productlist.addEventListener("click",(e)=>{
    if(e.target.tagName =="BUTTON"){
      const productId=parseInt(e.target.getAttribute("data-id"))
     const product=products.find(p => p.id === productId)
     addToCart(product);
     renderCart()
     
    }
  })
    function addToCart(product){
      cart.push(product)
    }
    function renderCart(){
      cartItems.innerText=""
      let totalPrice = 0


      if(cart.length > 0){

        emptyCartMessage.classList.add("hidden")
        cartTotalMessage.classList.remove("hidden")
        cart.forEach((item,index) =>{
          totalPrice  += item.price


          const cartItem=document.createElement("div")
          cartItem.innerHTML=`${item.name} - ${item.price.toFixed(2)}
          <button class = "remove-btn" data-index="${index}">Remove</button>`

          cartItems.appendChild(cartItem)
        })
        
        totalPriceDisplay.textContent  =`${totalPrice.toFixed(2)}`


      }else{
        emptyCartMessage.classList.remove("hidden")
        totalPriceDisplay.textContent=`0.00`
      }
    }

    cartItems.addEventListener("click",(e) =>{
      if(e.target.classList.contains("remove-btn")){
        const index =parseInt(e.target.getAttribute("data-index"))
        cart.splice(index,1)
        renderCart()
      }
    })

    Checkoutbtn.addEventListener("click",()=>{
      cart.length = 0
      alert("CheckOut Successfully")
      renderCart()
    })

    const toggleTheme = document.getElementById("toggle-theme")
    const container =document.querySelector(".container")


    toggleTheme.addEventListener("click",() =>{
      container.classList.toggle("dark-mode")
    })
})
