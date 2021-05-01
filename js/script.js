window.onscroll = function() {myFunction()};

var navbar = document.querySelector('.menu');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//========================== Shop page=================== //

const productsAr = [
  {
    prod_img: '1b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product1',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 39.00],
    prod_rating: 4,
    prod_cat: ['Red', 'Dessert', 'White'],
    prod_weight: [500, 200],
  },
  {
    prod_img: '6b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product2',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 39.00],
    prod_rating: 5,
    prod_cat: ['Red', 'Rose','White'],
    prod_weight: [100, 800]
  },
  {
    prod_img: '3b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product3',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 39.00],
    prod_rating: 3,
    prod_cat: ['Dessert', 'White'],
    prod_weight: [100, 200, 800]
  },
  {
    prod_img: '5b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product4',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 39.00],
    prod_rating: 4,
    prod_cat: ['Red','Rose'],
    prod_weight: [100, 200]
  },
  {
    prod_img: '5a.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product4',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 39.00],
    prod_rating: 1,
    prod_cat: ['Red','Rose', 'dessert'],
    prod_weight: [100, 200]
  }

]

// cat = categories
// prod_cat = product categories

// Select the element all products
const products_table = document.querySelector('#prod');

let the_ProductsAr = productsAr

let previous_ProductsAr = []


// Modify the new element, create the templete for all product.

const setProductsTable = function(product_array){

  products_table.innerHTML = ``
  product_array.forEach((prod) => {
    
    // Create article element to hold each product
    const article_item = document.createElement('article')
    const the_weight = prod.prod_weight
    const the_cat = prod.prod_cat
    const the_rate = prod.prod_rating


    let the_w = []
    the_weight.forEach((wght)=>{
      the_w += `<li><label><input type="radio" name="size" value="m">${wght}</label></li>` 
    })

    let the_c = []
    the_cat.forEach((cat)=>{
      the_c += `<li><label><input type="radio" name="category" value="r"> ${cat}</label></li>`
    })

    let the_r = []
    for (let x = 0; x < 5; x++) {
      if (the_rate > x) {
        the_r += ` <span class="material-icons">star</span>`
      } else {
        the_r += ` <span class="material-icons">star_border</span>`
      }
    }


  
    // Adding class name product to the article created
    article_item.classList.add('product') 
 
    article_item.innerHTML = `
    <img src="img/${prod.prod_img}" alt="${prod.prod_name}">
    <div class="prod-details">
        <h3><a href="${prod.prod_link}">${prod.prod_name}</a></h3>
        <p>${prod.prod_desc} <a href="${prod.prod_link}">see more</a></p>
        <dl class="rating">
          <data value="${prod.prod_prices[1]}"><del>$${prod.prod_prices[0]}</del> <ins>$${prod.prod_prices[1]}</ins></data>
          <dd><p>Rating : ${prod.prod_rating}</p> 
          ${the_r}
        </dl>
    
        <form class="iterm-properties">
          <fieldset>
            <legend>Category</legend>
            <ul>
               ${the_c}
            </ul>
          </fieldset>
          <fieldset>
            <legend>Weight in grams</legend>
            <ol class="weight">
              ${the_w}
            </ol>
          </fieldset>
        </form>
        <div class="prodcut-list-cart">
          <button type="button" class="add-to-cart-btn"><i class="fa fas fa-shopping-cart"></i> Add to Cart</button>
          <button type="button" class="add-to-fav"><i class="fa far fa-heart" name="Whist List"></i></button>
        </div>
      </div>
    `
    // Adding the article element to the result section element
    products_table.appendChild(article_item);

  
  })
}

//  Sending the Product array to the set product method to redare the template
setProductsTable(the_ProductsAr)


const filter_cat = document.querySelectorAll(`[name="filt_cat"]`)
const filter_weight = document.querySelectorAll(`[name="filt_weight"]`)

filter_cat.forEach((cat)=>{

  cat.addEventListener(`click`, function(event){

     filteredProductsAr = []
    console.log(filteredProductsAr)
    const cat_value = event.target.value
    if (cat.checked) {
     
       filteredProductsAr = the_ProductsAr.filter((prod)=>{
        const the_cat = prod.prod_cat
        let checker = null
        the_cat.forEach((cat)=>{
          if (cat.toLowerCase() === cat_value.toLowerCase()) {
            checker = true
            return true
          } else {
            checker += false
            return false
          }
        })
        if (checker) {
          console.log('Good job')
          return true
        } else {
          return false
        }
      })
      console.log("checked")
      console.log(filteredProductsAr)

      //  Sending the Product array to the set product method to redare the template
      previous_ProductsAr = the_ProductsAr
      the_ProductsAr = filteredProductsAr
      setProductsTable(the_ProductsAr)
    }else{
      console.log("Unchecked")
      console.log(filteredProductsAr)
      the_ProductsAr =  previous_ProductsAr
      setProductsTable(previous_ProductsAr)
    }
    
      // innerHTML
  })
})

filter_weight.forEach((wght)=>{

  wght.addEventListener('click', function(event){
  
    const weight_value = event.target.value

    if (wght.checked) {
     const products_displaced = document.querySelectorAll(`[name="size"]`)
     console.log(products_displaced)
   }else{
     console.log("Unchecked")
     console.log(filteredProductsAr)
     the_ProductsAr =  previous_ProductsAr
     setProductsTable(previous_ProductsAr)
   }

  })

// innerHTML
})
