const menu = document.getElementById('burgerMenu');
const links = document.getElementById('links');
const cartNotif = document.getElementById('cartNumber');
menu.addEventListener('click',()=>{
    console.log('clicked')
    if(links.classList.contains('sm:-top-96')){
        links.classList.remove('sm:-top-96');
        links.classList.add('sm:top-16');
        links.classList.remove('max-sm:-top-96');
        links.classList.add('max-sm:top-16');
    }else{
        links.classList.add('sm:-top-96');
        links.classList.remove('sm:top-16');
        links.classList.add('max-sm:-top-96');
        links.classList.remove('max-sm:top-16');
    }
})
let cartItemNum =0;

     store.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
                cartItemNum++;
        
            if (cartNotif.classList.contains('invisible')) {
                cartNotif.classList.remove('invisible');


            }
            
            cartNotif.textContent = '+' + cartItemNum;
        }

    });
 
 
 
    // itemList= document.getElementById('itemList');
    
   


     // const div = document.createElement('div');
    // div.classList.add('flex', 'justify-between', 'mt-10', 'mx-5' );
    // div.innerHTML = `
    //             <div class="w-full text-sm">
    //                 <img class="w-[70px] mx-auto" src="${image}" alt="">
    //             </div>
    //             <div class="text-center w-full text-sm flex justify-center items-center">
    //                 <p class="text-center">${title}</p>
    //             </div>
    //             <div class="text-center w-full text-sm flex justify-center items-center">
    //                 <p class="text-center">${price}</p>
    //                 <button><i class="fa-solid fa-xmark ml-5 text-white text-[20px] p-2 w-full  bg-red-700 rounded-full"></i></button>
    //             </div>
    // `;
    // itemList.appendChild(div)