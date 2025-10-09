
const products = [
  {
    img: "wa.webp",
    name: "Wanderer Impression Brooch",
    catagory: "accesories",
    price: "$49.90",
    link: "https://genshinfans.com/products/official-wanderer-impression-brooch",
  },
  {
    img: "Klee.webp",
    name: "Klee Bomb Sling Water Bottle",
    catagory: "accesories",
    price: "$57.90",
    link: "https://genshinfans.com/products/official-klee-bomb-sling-water-bottle",
  },
  {
    img: "zhongli.webp",
    name: "Zhongli Impression Series Crystal Aromatherapy Gift Box",
    catagory: "accesories",
    price: "$129.90",
    link: "https://genshinfans.com/products/official-zhongli-crystal-aromatherapy-gift-box",
  },
  {
    img: "Official-Yae-Miko-Bracelet.webp",
    name: "Yae Miko Impression Bracelet/Necklace",
    catagory: "accesories",
    price: "$49.90",
    link: "https://genshinfans.com/products/official-miko-bracelet-necklace",
  },
  {
    img: "raiden.webp",
    name: "The Statue of Her Excellency Raiden Shogun",
    catagory: "figures",
    price: "$99.90",
    link: "https://genshinfans.com/products/official-the-statue-of-her-excellency-raiden-shogun",
  },
  {
    img: "childe.webp",
    name: "Resplendent Feast Tartaglia Merchandise",
    catagory: "accesories",
    price: "$219.90",
    link: "https://genshinfans.com/products/genshin-resplendent-feast-tartaglia-merch",
  },
  {
    img: "ZT01_c02358e5-66ab-42ea-99ee-822358617b7e.webp",
    name: "Furina Sweet Afternoon Ode Chibi Figure",
    catagory: "figures",
    price: "$109.90",
    link: "https://genshinfans.com/products/official-furina-chibi-figure",
  },
  {
    img: "Kazuha.webp",
    name: "Kaedehara Kazuha Action Figure with Clothes and Accessories",
    catagory: "figures",
    price: "$169.90",
    link: "https://genshinfans.com/products/official-kazuha-action-figure-with-clothes",
  },
  {
    img: "n.webp",
    name: "Neuvillette Afternoon Tea Cup Set",
    catagory: "accesories",
    price: "$89.90",
    link: "https://genshinfans.com/products/official-neuvillette-afternoon-tea-cup-set",
  },
  {
    img: "a.webp",
    name: "Arlecchino Impression Crystal Aromatherapy Gift Box",
    catagory: "accesories",
    price: "$119.90",
    link: "https://genshinfans.com/products/official-arlecchino-crystal-aromatherapy-gift-box",
  },
  {
    img: "v.webp",
    name: "Venti Impression Envelope Bag & Tote Bag",
    catagory: "clothing",
    price: "$114.90",
    link: "https://genshinfans.com/products/official-venti-clutch-tote-bag",
  },
  {
    img: "al.webp",
    name: "Alhaitham Impression Travel Size Perfume Gift Set",
    catagory: "accesories",
    price: "$74.90",
    link: "https://genshinfans.com/products/official-alhaitham-travel-size-perfume-gift-set",
  },
  {
    img: "di.webp",
    name: "Diluc Impression Messenger Bag",
    catagory: "clothing",
    price: "$111.90",
    link: "https://genshinfans.com/products/official-diluc-messenger-bag",
  },
  {
    img: "xiao.webp",
    name: "Genshin Impact Xiao Vigilant Yaksha Ver. 1/7 Scale Figure",
    catagory: "figures",
    price: "$259.90",
    link: "https://genshinfans.com/products/official-xiao-vigilant-1-7-scale-figure",
  },
  {
    img: "hutao.webp",
    name: "Hu Tao Chibi Happy Shake Figure Stand",
    catagory: "figures",
    price: "$29.90",
    link: "https://genshinfans.com/products/official-hu-tao-happy-shake-ornament",
  },
  {
    img: "Nahida.webp",
    name: "Nahida Impression Hairpin",
    catagory: "accesories",
    price: "$38.90",
    link: "https://genshinfans.com/products/official-merchandise-nahida-impression-hairpin",
  },
  {
    img: "wrio.webp",
    name: "Genshin Impact Wriothesley Action Figure Doll",
    catagory: "figures",
    price: "$169.90",
    link: "https://genshinfans.com/products/official-wriothesley-action-figure",
  },
  {
    img: "kinich.webp",
    name: "Genshin Impact Kinich Theme Impression Double Layer Short Necklace",
    catagory: "accesories",
    price: "$69.90",
    link: "https://genshinfans.com/products/official-kinich-double-layer-necklace",
  },
  {
    img: "citlali.webp",
    name: "Genshin Impact Citlali Obsidian Opalstar Ver. 1/8 Scale Figure",
    catagory: "figures",
    price: "$109.90",
    link: "https://genshinfans.com/products/official-genshin-citlali-1-8-figure",
  },
  {
    img: "albedo.webp",
    name: "Genshin Impact Albedo Theme Impression Brooch",
    catagory: "accesories",
    price: "$52.90",
    link: "https://genshinfans.com/products/official-albedo-theme-impression-brooch",
  },
];

//create inject function
function inject(item){
  //do something
  let name = "products";
  const container = document.querySelector(".container");
  container.indertAdjacentHTML("afterbegin", `<h1>${product.name}</h1>`);
  //query the container
}

/* inject(products[0])
inject(products[0])
inject(products[0])
inject(products[0]) */
//loop through items

products.forEach((product) => inject(product));
//for every product we 