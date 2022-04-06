
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
    price: "2927",
    rate: "4.7",
  }
]

let list = document.getElementById("product__list");
// + productList.img +
product.forEach((productList ) => {
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
    <div class='product__button'>Купить</div>\
    </div>\
  </div>"

})
