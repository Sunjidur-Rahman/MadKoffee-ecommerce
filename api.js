function getProduct() {
    // Fetch all products from the API
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => {
            showProduct(res)
            showProductStore(res);
            const searchInput = document.getElementById('searchFeild');
            searchInput.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    const query = searchInput.value.toLowerCase();
                    const filteredProducts = res.filter(product => 
                        product.title.toLowerCase().includes(query) || 
                        product.category.toLowerCase().includes(query)
                    );
                    showProductStore(filteredProducts);
                }
            })
        })
        .catch(error => console.error('Error fetching products:', error));
}



function showProduct(products) {
    // Check if products is actually an array
    products.forEach(product => {
        // Check if the category is "men's clothing"
        if (product.category === "men's clothing") {
            console.log(product);  // Log the product to the console
        }
})
}
const showProductStore = (products) => {
    const store = document.getElementById('store')
    store.innerHTML = '';
    products.forEach((element) => {
        if (element.category === "men's clothing" || element.category === "women's clothing") {
            const div = document.createElement('div')
            const limitedTitle = element.title.length > 16 ? element.title.slice(0, 16) + '...' : element.title;
            div.classList.add('product-card', 'border-orange-400', 'border-[1px]','shadow-custom','rounded-xl')
            
            div.innerHTML = `
            <div class="w-full h-64 overflow-hidden"> <!-- Set a consistent height for all images -->
                
                <img class="w-full h-full object-scale-down p-3" src="${element.image}" alt="${element.title}">
            </div>
            <h4 class="md:text-[14px] lg:text-[16px] max-sm:text-[12px] mt-4 font-bold text-center">${limitedTitle}</h4>
            <h5 class="text-[18px] text-orange-400 mt-2 w-full text-center ">$${element.price}...</h5>
            <button onclick="addToCartList('${element.image}', '${limitedTitle}', ${element.price})"  class="add-to-cart btn bg-orange-300 rounded-lg w-full max-sm:w-[100px] sm:w-[150px] block mx-auto mb-6 mt-6 max-sm:mb-3 max-sm:text-[12px]">Add to Cart</button>
        `;
            store.appendChild(div)
            
            setTimeout(() => {
                div.classList.add('show');
            },  100);


            
        }
        
   
    })
  }
  let cartItems = [];
  function addToCartList (image, title, price){


    console.log('addto cart list triggered');
    console.log('Image:', image);
    console.log('Title:', title);
    console.log('Price:', price);

    let tempCartItems=[{
        imgURl: image ,
        prodName: title,
        price: price,
     }] 
     
     cartItems.push(tempCartItems[0])
     console.log(cartItems)
     const cartItemsString = JSON.stringify(cartItems);

    console.log(cartItemsString)
    localStorage.setItem("cartItems",   cartItemsString);

   
};


  getProduct();
