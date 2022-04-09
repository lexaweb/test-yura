
const product = [
  {
    head: "",
    img: "./img/Image.png",
    title: "Apple BYZ S852I",
    price: "20",
    rate: "4.7",
    id: "1",
  },
  {
    head: "",
    img: "./img/Image.png",
    title: "Apple BYZ S852I",
    price: "10",
    rate: "4.7",
    id: "2",
  },
  {
    head: "",
    img: "./img/Image.png",
    title: "Apple BYZ S852I",
    price: "30",
    rate: "4.7",
    id: "3",
  },
  {
    head: "Беспроводные наушники",
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
  </div>\
  </div>\
  <div class='product__head'>"+ productList.head +"</div>"
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

    let total = document.querySelector('.total__number');
    let cost = document.querySelectorAll(".product__cost");
    var sum = 0;
    for(var i = 0; i < cost.length; i++) {
      sum += Number(cost[i].innerHTML);
      
    }
    total.innerHTML = sum;
  

    function counterPlusElem(plus) {
      plus.previousElementSibling.innerHTML++
      var summ = plus.parentNode.parentNode.childNodes[3].innerHTML
      var price = plus.parentNode.parentNode.parentNode.childNodes[1].childNodes[5].innerHTML
      var price = Number(price)
      var summ = Number(summ)
      var summProduct = summ+price
      plus.parentNode.parentNode.childNodes[3].innerHTML = summProduct

      var sum = 0;
      for(var i = 0; i < cost.length; i++) {
        sum += Number(cost[i].innerHTML);
      }
      total.innerHTML = sum;
    };

    function counterMinusElem(minus) {
      var clickMinus = minus.nextElementSibling
      clickMinus.innerHTML--;
        if ( clickMinus.innerHTML < 1) {
          clickMinus.innerHTML = 1
        }
        var summ = minus.parentNode.parentNode.childNodes[3].innerHTML
        var price = minus.parentNode.parentNode.parentNode.childNodes[1].childNodes[5].innerHTML
        var price = Number(price)
        var summ = Number(summ)
        if (total.innerHTML > sum) {
          var ravno = total.innerHTML-price
          total.innerHTML = ravno;
        }
        if (summ > price) {
          var summProduct = summ-price
          minus.parentNode.parentNode.childNodes[3].innerHTML = summProduct
        }
    };

  }