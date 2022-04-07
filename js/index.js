
const product = [
  {
    img: "./img/Image.png",
    title: "Apple BYZ S852I",
    price: "2927",
    rate: "4.7",
  },
  {
    img: "./img/Image.png",
    title: "Apple BYZ S852I",
    price: "29255",
    rate: "4.7",
  },
  {
    img: "./img/Image.png",
    title: "Apple BYZ S852I",
    price: "29255",
    rate: "4.7",
  },
  {
    img: "./img/Image.png",
    title: "Apple BYZ S852I",
    price: "2927",
    rate: "4.7",
  }
]

let list = document.getElementById("product__list");
let headerBasket = document.getElementById("header-basket");
let id = 1;

product.forEach((productList) => {

  list.innerHTML += "<div class='product__item'>\
  <div class='product__img'>\
  <img src="+ productList.img +" alt="+ productList.title +">\
</div>\
<div class='product__inf'>\
  <div class='product__line'>\
    <div class='product__title'>"+ productList.title +"</div>\
    <div class='product__price'>"+ productList.price +"</div>\
  </div>\
  <div class='product__line'>\
    <div class='product__rate'>"+ productList.rate +"</div>\
    <div class='product__button' data-id="+ id++ +" onclick='count(this)'>Купить</div>\
    </div>\
  </div>"

})

headerBasket.innerHTML = localStorage.length;


let i = 1;
function count(clickObject) {
let attr = clickObject.getAttribute('data-id')
  if (attr == localStorage.getItem(attr)) {
  } else {
    localStorage.setItem(attr, attr);
    headerBasket.innerHTML = localStorage.length;
  }
}