const products = [
  {
    img: "wa.webp",
    name: "Wanderer Impression Brooch",
    inStock: true,
    catagory: "accesories",
    price: 49.90,
    link: "https://genshinfans.com/products/official-wanderer-impression-brooch",
  },
  {
    img: "Klee.webp",
    name: "Klee Bomb Sling Water Bottle",
    inStock: true,
    catagory: "accesories",
    price: 57.90,
    link: "https://genshinfans.com/products/official-klee-bomb-sling-water-bottle",
  },
  {
    img: "zhongli.webp",
    name: "Zhongli Impression Series Crystal Aromatherapy Gift Box",
    catagory: "accesories",
    inStock: false,
    price: 129.90,
    link: "https://genshinfans.com/products/official-zhongli-crystal-aromatherapy-gift-box",
  },
  {
    img: "Official-Yae-Miko-Bracelet.webp",
    name: "Yae Miko Impression Bracelet/Necklace",
    catagory: "accesories",
    inStock: true,
    price: 49.90,
    link: "https://genshinfans.com/products/official-miko-bracelet-necklace",
  },
  {
    img: "raiden.webp",
    name: "The Statue of Her Excellency Raiden Shogun",
    catagory: "figures",
    inStock: true,
    price: 99.90,
    link: "https://genshinfans.com/products/official-the-statue-of-her-excellency-raiden-shogun",
  },
  {
    img: "childe.webp",
    name: "Resplendent Feast Tartaglia Merchandise",
    catagory: "accesories",
    inStock: true,
    price: 219.90,
    link: "https://genshinfans.com/products/genshin-resplendent-feast-tartaglia-merch",
  },
  {
    img: "ZT01_c02358e5-66ab-42ea-99ee-822358617b7e.webp",
    name: "Furina Sweet Afternoon Ode Chibi Figure",
    catagory: "figures",
    inStock: false,
    price: 109.90,
    link: "https://genshinfans.com/products/official-furina-chibi-figure",
  },
  {
    img: "Kazuha.webp",
    name: "Kaedehara Kazuha Action Figure with Clothes and Accessories",
    catagory: "figures",
    inStock: false,
    price: 169.90,
    link: "https://genshinfans.com/products/official-kazuha-action-figure-with-clothes",
  },
  {
    img: "n.webp",
    name: "Neuvillette Afternoon Tea Cup Set",
    catagory: "accesories",
    inStock: true,
    price: 89.90,
    link: "https://genshinfans.com/products/official-neuvillette-afternoon-tea-cup-set",
  },
  {
    img: "a.webp",
    name: "Arlecchino Impression Crystal Aromatherapy Gift Box",
    catagory: "accesories",
    inStock: true,
    price: 119.90,
    link: "https://genshinfans.com/products/official-arlecchino-crystal-aromatherapy-gift-box",
  },
  {
    img: "v.webp",
    name: "Venti Impression Envelope Bag & Tote Bag",
    catagory: "clothing",
    inStock: true,
    price: 114.90,
    link: "https://genshinfans.com/products/official-venti-clutch-tote-bag",
  },
  {
    img: "al.webp",
    name: "Alhaitham Impression Travel Size Perfume Gift Set",
    catagory: "accesories",
    inStock: true,
    price: 74.90,
    link: "https://genshinfans.com/products/official-alhaitham-travel-size-perfume-gift-set",
  },
  {
    img: "di.webp",
    name: "Diluc Impression Messenger Bag",
    catagory: "clothing",
    inStock: true,
    price: 111.90,
    link: "https://genshinfans.com/products/official-diluc-messenger-bag",
  },
  {
    img: "xiao.webp",
    name: "Genshin Impact Xiao Vigilant Yaksha Ver. 1/7 Scale Figure",
    catagory: "figures",
    inStock: true,
    price: 259.90,
    link: "https://genshinfans.com/products/official-xiao-vigilant-1-7-scale-figure",
  },
  {
    img: "hutao.webp",
    name: "Hu Tao Chibi Happy Shake Figure Stand",
    catagory: "figures",
    inStock: false,
    price: 29.90,
    link: "https://genshinfans.com/products/official-hu-tao-happy-shake-ornament",
  },
  {
    img: "Nahida.webp",
    name: "Nahida Impression Hairpin",
    catagory: "accesories",
    inStock: true,
    price: 38.90,
    link: "https://genshinfans.com/products/official-merchandise-nahida-impression-hairpin",
  },
  {
    img: "wrio.webp",
    name: "Genshin Impact Wriothesley Action Figure Doll",
    catagory: "figures",
    inStock: false,
    price: 169.90,
    link: "https://genshinfans.com/products/official-wriothesley-action-figure",
  },
  {
    img: "kinich.webp",
    name: "Genshin Impact Kinich Theme Impression Double Layer Short Necklace",
    catagory: "accesories",
    inStock: true,
    price: 69.90,
    link: "https://genshinfans.com/products/official-kinich-double-layer-necklace",
  },
  {
    img: "citlali.webp",
    name: "Genshin Impact Citlali Obsidian Opalstar Ver. 1/8 Scale Figure",
    catagory: "figures",
    inStock: false,
    price: 109.90,
    link: "https://genshinfans.com/products/official-genshin-citlali-1-8-figure",
  },
  {
    img: "albedo.webp",
    name: "Genshin Impact Albedo Theme Impression Brooch",
    catagory: "accesories",
    inStock: true,
    price: 52.90,
    link: "https://genshinfans.com/products/official-albedo-theme-impression-brooch",
  },
];

//create inject function
function inject(products) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML("afterbegin", `<div class="card">
        <img src="${products.img}" alt="." />
        <h2>${products.name}</h2>
        <h3>$${products.price}0</h3>
        <a
           ${products.link}
        >
          <button>Purchase</button>
        </a>
      </div>`);
  //query the container
}
//loop through items
products.forEach((product) => inject(product));
//for every product we

function addToCart() {
  const buttons = document.querySelectorAll(".button");
  const btnarray = Array.from(buttons);
  btnarray.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      console.log(event.target.closest(".card").getAttribute("h2"))
    })
  );
}

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector("h1").textContent = "You clicked the button!";
});
