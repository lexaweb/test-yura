
const product = [
  {
    img: "./img/Image.png",
    title: "Apple BYZ S852I",
    price: "20",
    rate: "4.7",
    id: "1",
  },
  {
    img: "./img/Image.png",
    title: "Apple BYZ S852I",
    price: "10",
    rate: "4.7",
    id: "2",
  },
  {
    img: "./img/Image.png",
    title: "Apple BYZ S852I",
    price: "30",
    rate: "4.7",
    id: "3",
  },
  {
    img: "./img/Image.png",
    title: "Apple BYZ S852I",
    price: "40",
    rate: "4.7",
    id: "4",
  }
]



let list = document.getElementById("product__list");
let headerBasket = document.getElementById("header-basket");

if (list) {

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
    <div class='product__button' data-id="+ productList.id +" onclick='count(this)'>Купить</div>\
    </div>\
  </div>"

})
}

headerBasket.innerHTML = localStorage.length;

function count(clickObject) {
let attr = clickObject.getAttribute('data-id')
  if (attr == localStorage.getItem(attr)) {
  } else {
    localStorage.setItem(attr, attr);
    headerBasket.innerHTML = localStorage.length;
  }
}

// basket

let productBasket = document.getElementById("product-basket");

if (productBasket) {
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
  

  product.forEach((productList) => {

        if (productList.id === key) {
          productBasket.innerHTML +="<div class='product__item'>\
          <div class='product__line'>\
            <div class='product__img'>\
            <img src="+ productList.img +" alt="+ productList.title +">\
            </div>\
            <div class='product__title'>"+ productList.title +"</div>\
            <div class='product__price'>"+ productList.price +"</div>\
          </div>\
          <div class='product__line'>\
            <div class='counter'>\
              <div class='counter__minus' onclick='counterMinusElem(this)'>-</div>\
              <div class='counter__input'>1</div>\
              <div class='counter__plus' onclick='counterPlusElem(this)'>+</div>\
            </div>\
            <div class='product__cost'>"+ productList.price +"</div>\
          </div>\
        </div>"
        }
  
      })
    }

    function counterPlusElem(plus) {

      var clickPlus = plus.previousElementSibling
      var  click = clickPlus.innerHTML++;
      var summ = plus.parentNode.parentNode.childNodes[3].innerHTML
      var summProduct = summ+summ
      plus.parentNode.parentNode.childNodes[3].innerHTML = summProduct
      // console.log(summ.innerHTML = summProduct);
    };

    function counterMinusElem(minus) {
      var clickMinus = minus.nextElementSibling
      clickMinus.innerHTML--;
        if ( clickMinus.innerHTML < 1) {
          clickMinus.innerHTML = 1
        }
    };

  }