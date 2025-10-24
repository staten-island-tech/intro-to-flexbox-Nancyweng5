/* const sneakers = [
    {name : "Jordan 700s"}
    price = 1.
]


const genshin = [
    { name : "", Price:__, instock:true, brand : Genshin, img: ___, alt:___0

    }
]

sneakers.forEach((genshin)=> makeCard(Genshin));
function makeCard(item){} */
function filterByGenre(genre){
    const display = document.getElementById("card - display");
    display.innerHTML = "";  //when there is nothing in the "", nothing will show up
    const filterBooks = books.filter((book) => book.genre === genre);
    console.log(filterBooks)
}

filterByGenre("Mystery");

const cart [];

function checkCart(prod){
    const found = cart.find((cartItem) => cartItem.title === cartProduct.title);
    if (found) {
        found.quantity += 1;
    } else {
        cart.push(cartproduct);
    }
}
checkCart(prod)
checkCart(prod)
console.log;

//function addToCart()