const products = [
  {
    img: "wa.webp",
    name: "Wanderer Impression Brooch",
    inStock: true,
    catagory: "accesories",
    price: 49.9,
    link: "https://genshinfans.com/products/official-wanderer-impression-brooch",
  },
  {
    img: "Klee.webp",
    name: "Klee Bomb Sling Water Bottle",
    inStock: true,
    catagory: "accesories",
    price: 57.9,
    link: "https://genshinfans.com/products/official-klee-bomb-sling-water-bottle",
  },
  {
    img: "zhongli.webp",
    name: "Zhongli Impression Series Crystal Aromatherapy Gift Box",
    catagory: "accesories",
    inStock: false,
    price: 129.9,
    link: "https://genshinfans.com/products/official-zhongli-crystal-aromatherapy-gift-box",
  },
  {
    img: "Official-Yae-Miko-Bracelet.webp",
    name: "Yae Miko Impression Bracelet/Necklace",
    catagory: "accesories",
    inStock: true,
    price: 49.9,
    link: "https://genshinfans.com/products/official-miko-bracelet-necklace",
  },
  {
    img: "raiden.webp",
    name: "The Statue of Her Excellency Raiden Shogun",
    catagory: "figures",
    inStock: true,
    price: 99.9,
    link: "https://genshinfans.com/products/official-the-statue-of-her-excellency-raiden-shogun",
  },
  {
    img: "flins.webp",
    name: "Genshin Impact Bracelet Flins",
    catagory: "accesories",
    inStock: true,
    price: 29.9,
    link: "https://genshinfans.com/https://genshinfans.com/products/genshin-bracelet-flins-durin-columbina?_pos=3&_sid=58b85a98c&_ss=r&variant=50821949718824/genshin-resplendent-feast-tartaglia-merch",
  },
  {
    img: "ZT01_c02358e5-66ab-42ea-99ee-822358617b7e.webp",
    name: "Furina Sweet Afternoon Ode Chibi Figure",
    catagory: "figures",
    inStock: false,
    price: 109.9,
    link: "https://genshinfans.com/products/official-furina-chibi-figure",
  },
  {
    img: "Kazuha.webp",
    name: "Kaedehara Kazuha Impression Clothing Hooded Sweatshirt",
    catagory: "clothing",
    inStock: true,
    price: 108.9,
    link: "https://genshinfans.com/products/official-kazuha-action-figure-with-clothes",
  },
  {
    img: "n.webp",
    name: "Neuvillette Afternoon Tea Cup Set",
    catagory: "accesories",
    inStock: true,
    price: 89.9,
    link: "https://genshinfans.com/products/official-neuvillette-afternoon-tea-cup-set",
  },
  {
    img: "a.webp",
    name: "Arlecchino Impression Crystal Aromatherapy Gift Box",
    catagory: "accesories",
    inStock: true,
    price: 119.9,
    link: "https://genshinfans.com/products/official-arlecchino-crystal-aromatherapy-gift-box",
  },
  {
    img: "v.webp",
    name: "Venti Impression Envelope Bag & Tote Bag",
    catagory: "clothing",
    inStock: true,
    price: 114.9,
    link: "https://genshinfans.com/products/official-venti-clutch-tote-bag",
  },
  {
    img: "al.webp",
    name: "Alhaitham Impression Travel Size Perfume Gift Set",
    catagory: "accesories",
    inStock: true,
    price: 74.9,
    link: "https://genshinfans.com/products/official-alhaitham-travel-size-perfume-gift-set",
  },
  {
    img: "di.webp",
    name: "Diluc Impression Messenger Bag",
    catagory: "clothing",
    inStock: true,
    price: 111.9,
    link: "https://genshinfans.com/products/official-diluc-messenger-bag",
  },
  {
    img: "xiao.webp",
    name: "Genshin Impact Xiao Vigilant Yaksha Ver. 1/7 Scale Figure",
    catagory: "figures",
    inStock: true,
    price: 259.9,
    link: "https://genshinfans.com/products/official-xiao-vigilant-1-7-scale-figure",
  },
  {
    img: "hutao.webp",
    name: "Hu Tao Chibi Happy Shake Figure Stand",
    catagory: "figures",
    inStock: false,
    price: 29.9,
    link: "https://genshinfans.com/products/official-hu-tao-happy-shake-ornament",
  },
  {
    img: "Nahida.webp",
    name: "Nahida Impression Hairpin",
    catagory: "accesories",
    inStock: true,
    price: 38.9,
    link: "https://genshinfans.com/products/official-merchandise-nahida-impression-hairpin",
  },
  {
    img: "wrio.webp",
    name: "Genshin Impact Wriothesley Action Figure Doll",
    catagory: "figures",
    inStock: false,
    price: 169.9,
    link: "https://genshinfans.com/products/official-wriothesley-action-figure",
  },
  {
    img: "kinich.webp",
    name: "Genshin Impact Kinich Theme Impression Double Layer Short Necklace",
    catagory: "accesories",
    inStock: true,
    price: 69.9,
    link: "https://genshinfans.com/products/official-kinich-double-layer-necklace",
  },
  {
    img: "citlali.webp",
    name: "Genshin Impact Citlali Obsidian Opalstar Ver. 1/8 Scale Figure",
    catagory: "figures",
    inStock: false,
    price: 109.9,
    link: "https://genshinfans.com/products/official-genshin-citlali-1-8-figure",
  },
  {
    img: "albedo.webp",
    name: "Genshin Impact Albedo Theme Impression Brooch",
    catagory: "accesories",
    inStock: true,
    price: 52.9,
    link: "https://genshinfans.com/products/official-albedo-theme-impression-brooch",
  },
];

//create inject function
function inject(products) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
        <img src="${products.img}" alt="${products.name}" />
        <h2>${products.name}</h2>
        <h3>$${products.price}0</h3>
        <a
           ${products.link}
        >
          <button class = "cart-btn">Purchase</button>
        </a>
      </div>`
  );
  //query the container
}
//loop through items
products.forEach((product) => inject(product));
//for every product we
let total = 0;

function addToCart() {
  const buttons = document.querySelectorAll(".cart-btn");
  const cart = document.querySelector(".cart");

  cart.insertAdjacentHTML("beforeend", `<h3 class="total">Total: $0.00</h3>`);
  const totalPrice = document.querySelector(".total");
  buttons.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      const name = event.target.closest(".card").querySelector("h2").textContent;
      const price = event.target.closest(".card").querySelector("h3").textContent;
      const prices = parseFloat(price.replace("$", ""));
      cart.insertAdjacentHTML(
        "beforeend",
        `<div class="cart-item">
        <span class = "cart-name">${name}</span> 
        <span class = "cart-price"> ${price}</span>
         </div>`
      );
      total += prices;
      totalPrice.textContent = `Total : $${total.toFixed(2)}`;
    })
  );
}
addToCart();

products.forEach((product) => inject(product));


function filterByCatagory(catagory){
    const filter = document.querySelector(".filter-container")
    display.innerHTML = "";  //when there is nothing in the "", nothing will show up
    const filterproduct = product.filter((product) => product.catagory === catagory);
    console.log(filterproduct)
} 
filterByCatagory()