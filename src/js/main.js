const CardContainer = document.querySelector("#cards");

const datas = [
{
  Url_1: "https://the7.io/brand-shop/wp-content/uploads/sites/103/2021/11/s508.jpg",
  Url_2: "https://the7.io/brand-shop/wp-content/uploads/sites/103/2021/11/s505.jpg",
  head: "BOTTOM SPLIT JEANS",
  info: "Grey cashmere knit and cotton",
  price: "100",
  sizes: ["XXl", "L", "M","XL"]
},
{
  Url_1: "https://the7.io/brand-shop/wp-content/uploads/sites/103/2023/01/pr0015.jpg",
  Url_2: "https://the7.io/brand-shop/wp-content/uploads/sites/103/2023/01/pr0017.jpg",
  head: "BOTTOM SPLIT JEANS",
  info: "Grey cashmere knit and cotton",
  price: "100",
  sizes: ["XXl", "L", "M","XL"]
},
{
  Url_1: "https://the7.io/brand-shop/wp-content/uploads/sites/103/2021/11/s508.jpg",
  Url_2: "https://the7.io/brand-shop/wp-content/uploads/sites/103/2021/11/s505.jpg",
  head: "BOTTOM SPLIT JEANS",
  info: "Grey cashmere knit and cotton",
  price: "100",
  sizes: ["XXl", "L", "M","XL"]
},
{
  Url_1: "https://the7.io/brand-shop/wp-content/uploads/sites/103/2021/11/s508.jpg",
  Url_2: "https://the7.io/brand-shop/wp-content/uploads/sites/103/2021/11/s505.jpg",
  head: "BOTTOM SPLIT JEANS",
  info: "Grey cashmere knit and cotton",
  price: "100",
  sizes: ["XXl", "L", "M","XL"]
}
];

let cardsHTML = "";
datas.forEach(function (card) {
cardsHTML += `
<div class="column">
  <div class="card">
    <div class="image-container">
      <img class="image1" src=${card.Url_1} alt="">
      <img class="image2" src=${card.Url_2} alt="">
      <div class="size">
        ${card.sizes.includes('XXL') ? '<button>XXL</button>' : ''}
        ${card.sizes.includes('XL') ? '<button>XL</button>' : ''}
        ${card.sizes.includes('L') ? '<button>L</button>' : ''}
        ${card.sizes.includes('M') ? '<button>M</button>' : ''}
        ${card.sizes.includes('S') ? '<button>S</button>' : ''}
        <button class="deff">
          <div class="default"></div>XS
        </button>
      </div>
    </div>
    <div class="product">
      <div class="product__title">
        <a href="#">
          <p>${card.head}</p>
        </a>
      </div>
      <div class="product__price">
        <span>$${card.price}</span>
      </div>
      <div class="product__info">
        <p>${card.info}</p>
      </div>
    </div>
  </div>
</div>
`;
});

CardContainer.innerHTML = cardsHTML;

let imgs = document.querySelectorAll("img");
imgs.forEach(img => {
img.setAttribute("loading", "lazy");
});

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
button.addEventListener("click", () => {
if (!button.classList.contains("deff")) {
if (!button.classList.contains("active")) {
buttons.forEach(otherButton => {
otherButton.classList.remove("active");
});
button.classList.add("active");
} else {
button.classList.remove("active");
}
}
});
});