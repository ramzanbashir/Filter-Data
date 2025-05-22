// let arr = [
//     {
//     pid:"01",
//     ppname:"iphone",
//     pprice:"150000",
//     pdes:"this is a iphone",
//     pimg:"https://media.wisemarket.com.pk/web-app/detail/variant/AppleiPhone16ProMaxBrandNew256GBNaturalTitanium-85.webp",
// },
//     {
//     pid:"02",
//     ppname:"samsung",
//     pprice:"200000",
//     pdes:"this is a samsung",
//     pimg:"https://cubeonline.pk/cdn/shop/files/pk-galaxy-s25-s938-sm-s938bzbipkd-thumb-544708176_1024x1024.png?v=1737981868",
// },
//     {
//     pid:"03",
//     ppname:"oneplus",
//     pprice:"25000",
//     pdes:"this is a oneplus",
//     pimg:"https://media.wisemarket.com.pk/web-app/detail/product/oneplus-12-55.webp",
// },
//     {
//     pid:"04",
//     ppname:"nokia",
//     pprice:"100000",
//     pdes:"this is a nokia",
//     pimg:"https://media.wisemarket.com.pk/mobile-app/detail/product/nokia-c12-pro-96.webp",
// },
  
// ]


// var getMain = document.getElementById("main");

// for (let i = 0; i < arr.length; i++) {
//     var products = arr[i]
//     getMain.innerHTML += `
//     <div class="card" style="width: 18rem;">
//     <img src="${products.pimg}" class="card-img-top" alt="...">
//   <div class="card-body">
//   <p class="card-text">${products.pid}</p>
//     <h5 class="card-title">${products.ppname}</h5>
//     <p class="card-text">${products.pdes}</p>
//     <a href="#" class="btn btn-primary">Add to cart</a>
//   </div>
// </div>`
// }

// function filterData() {
//     getMain.innerHTML = "";
//     getInput = document.getElementById("input").value;
//     var getAns = arr.filter(function(input){
//     return ( getInp.value == input.pid || getInp.value == input.ppname || getInp.value == input.pdes || getInp.value == input.pprice)
//     })
// }

// getMain.innerHTML = `
//     <div class="card" style="width: 18rem;">
//     <img src="${getAns[0].pimg}" class="card-img-top" alt="...">
//   <div class="card-body">
//   <p class="card-text">${getAns[0].pid}</p>
//     <h5 class="card-title">${getAns[0].ppname}</h5>
//     <p class="card-text">${getAns[0].pdes}</p>
//     <a href="#" class="btn btn-primary">Add to cart</a>
//   </div>
// </div>`




// Product List
var productsArr = [
  {
    pid: "01",
    ppname: "iphone",
    pprice: "150000",
    pdes: "this is a iphone",
    pimg: "https://media.wisemarket.com.pk/web-app/detail/variant/AppleiPhone16ProMaxBrandNew256GBNaturalTitanium-85.webp",
  },
  {
    pid: "02",
    ppname: "samsung",
    pprice: "200000",
    pdes: "this is a samsung",
    pimg: "https://cubeonline.pk/cdn/shop/files/pk-galaxy-s25-s938-sm-s938bzbipkd-thumb-544708176_1024x1024.png?v=1737981868",
  },
  {
    pid: "03",
    ppname: "oneplus",
    pprice: "25000",
    pdes: "this is a oneplus",
    pimg: "https://media.wisemarket.com.pk/web-app/detail/product/oneplus-12-55.webp",
  },
  {
    pid: "04",
    ppname: "nokia",
    pprice: "100000",
    pdes: "this is a nokia",
    pimg: "https://media.wisemarket.com.pk/mobile-app/detail/product/nokia-c12-pro-96.webp",
  }
];

var cart = [];
var getMain = document.getElementById("main");

function displayAllProducts() {
  getMain.innerHTML = "";
  for (var i = 0; i < productsArr.length; i++) {
    var p = productsArr[i];
    getMain.innerHTML += `
      <div class="card me-3 mb-3" style="width: 18rem;">
        <img src="${p.pimg}" class="card-img-top" alt="Image">
        <div class="card-body">
          <p class="card-text">${p.pid}</p>
          <h5 class="card-title">${p.ppname}</h5>
          <p class="card-text">${p.pdes}</p>
          <p class="card-text"><strong>Rs. ${p.pprice}</strong></p>
          <button class="btn btn-primary" onclick="addToCart(${i})">Add to Cart</button>
        </div>
      </div>
    `;
  }
}

function filterData() {
  var input = document.getElementById("input").value.toLowerCase();
  getMain.innerHTML = "";
  var filtered = productsArr.filter(function (item) {
    return (
      item.pid.toLowerCase() === input ||
      item.ppname.toLowerCase() === input ||
      item.pdes.toLowerCase() === input ||
      item.pprice.toLowerCase() === input
    );
  });

  if (filtered.length > 0) {
    for (var i = 0; i < filtered.length; i++) {
      var p = filtered[i];
      getMain.innerHTML += `
        <div class="card me-3 mb-3" style="width: 18rem;">
          <img src="${p.pimg}" class="card-img-top" alt="Image">
          <div class="card-body">
            <p class="card-text">${p.pid}</p>
            <h5 class="card-title">${p.ppname}</h5>
            <p class="card-text">${p.pdes}</p>
            <p class="card-text"><strong>Rs. ${p.pprice}</strong></p>
            <button class="btn btn-primary" onclick="addToCart(${productsArr.indexOf(p)})">Add to Cart</button>
          </div>
        </div>
      `;
    }
  } else {
    getMain.innerHTML = `<p class="text-danger">No mobile phone found.</p>`;
  }
}

function addToCart(index) {
  cart.push(productsArr[index]);
  updateCartView();
  Swal.fire({
    icon: "success",
    title: "Added to Cart!",
    text: productsArr[index].ppname + " added successfully!",
    timer: 1500,
    showConfirmButton: false
  });
}

function openCart() {
  document.getElementById("cartSidebar").style.display = "block";
}

function closeCart() {
  document.getElementById("cartSidebar").style.display = "none";
}

function updateCartView() {
  var cartContainer = document.getElementById("cartItems");
  var cartTotal = document.getElementById("cartTotal");
  cartContainer.innerHTML = "";

  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += parseInt(item.pprice);

    cartContainer.innerHTML += `
    
      <div class="d-flex mb-3 align-items-center">
        <img src="${item.pimg}" width="60" height="60" class="me-2 rounded" />
        <div>
          <h6 class="mb-0">${item.ppname}</h6>
          <small>Rs. ${item.pprice}</small><br>
          <button class="btn btn-sm btn-danger mt-1" onclick="removeFromCart(${i})">Remove</button>
        </div>
      </div>
    `;
  }

  cartTotal.innerText = "Total: Rs. " + total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartView();
}

displayAllProducts();
