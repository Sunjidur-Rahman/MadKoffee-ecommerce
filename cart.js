const retrievedCartItemsString = localStorage.getItem("cartItems");
const retrievedCartItems = JSON.parse(retrievedCartItemsString);
const totalPriceEl= document.getElementById("tI");
const totalItemEl= document.getElementById("tC");
let totalPrice=0; 
let totalItems=0; 
console.log(retrievedCartItems)
const itemList= document.getElementById('itemList');
function showCartItems(retrievedCartItems){
    console.log('show cart item triggered')
    console.log(retrievedCartItems)
    itemList.innerHTML = '';
    retrievedCartItems.forEach((item, index) => {
        totalPrice+=item.price;
        totalItems++;
       
        const div = document.createElement('div');
        console.log(item.imgURl)
        console.log(item.prodName)
        console.log(item.price)
        div.classList.add('flex', 'justify-between', 'mt-10', 'mx-5' );
        div.innerHTML = `
                <div class="w-full text-sm">
                    <img class="w-[70px] mx-auto" src=${item.imgURl} alt="">
                </div>
                <div class="text-center w-full text-sm flex justify-center items-center">
                    <p class="text-center">${item.prodName}</p>
                </div>
                <div class="text-center w-full text-sm flex justify-center items-center">
                    <p class="text-center">${item.price}</p>
                    <button onclick="removeFromCart(${index})" ><i class="fa-solid fa-xmark ml-5 text-white text-[20px] p-2 w-full  bg-red-700 rounded-full"></i></button>
                </div>
    `;

    itemList.appendChild(div)
    
    } )
    
    updatebill();
    
}

function updatebill(){
    console.log( 'totalprice : ', totalPrice)
    console.log('total items :',totalItems)
    totalPriceEl.textContent = "Total Cost : " + totalPrice.toFixed(2);
    totalItemEl.textContent = "Total Items : " + totalItems;
}

showCartItems(retrievedCartItems)

function removeFromCart(index) {

    totalPrice=0;
    totalItems=0;    

    console.log('Remove item at index:', index);

    // Remove item from retrievedCartItems
    retrievedCartItems.splice(index, 1);

    // Update local storage
    localStorage.setItem("cartItems", JSON.stringify(retrievedCartItems));

    // Show updated cart items
    showCartItems(retrievedCartItems);

}
