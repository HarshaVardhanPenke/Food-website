
  document.addEventListener("DOMContentLoaded", function () {
    const cartSidebar = document.getElementById("cartSidebar");
    const viewCartButton = document.getElementById("View-cart");
    const closeSidebarButton = document.getElementById("closeSidebar");
    

    // Function to open the cart sidebar
    function openCartSidebar() {
      cartSidebar.classList.add("active");
    }

    // Function to close the cart sidebar
    function closeCartSidebar() {
      cartSidebar.classList.remove("active");
    }

    // Event listener for the "View cart" button
    viewCartButton.addEventListener("click", openCartSidebar);

    // Event listener for the "Close" button inside the cart sidebar
    closeSidebarButton.addEventListener("click", closeCartSidebar);

    // Add click event listeners to all "Add to cart" buttons
  })
var Products=[];

let count=1;
function AddCart(ItemName,Cost){
  var counter= document.getElementById("counter");
  counter.innerHTML=count;
  counter.style.display = "block";
  count++;
  Products.push({Item:ItemName,Price:Cost});
  UpdateCart();
}
function UpdateCart(){
  var cartContainer=document.getElementById("Cart-Container");
  cartContainer.innerHTML="";
  let totalAmount=0;
  Products.forEach(item =>{
    totalAmount +=parseFloat(item.Price);
    cartContainer.innerHTML+=`<div class="cart-item" style="display:flex; justify-content:space-between;">
                                    <span >${item.Item}</span>
                                    <span class="cart-price" >$${item.Price}</span>
                              </div>`;
  });

  cartContainer.innerHTML+=`<div class="cart-item  cart-total" style="margin-top:20px">
                                   <span><strong><center>Total:<strong></span>
                                   <span class="cart-price">$${totalAmount}</center></span>
                            </div>`;
}
function clearCart(){
  Products.length=0;
  UpdateCart();
}
function Pay(){
   location.href="checkout.html";

}






