//  Stict menu on scrolling
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

//  Toggle the product filters to show when button is click
const filt_toggle = document.querySelector(`.filt-toggle`)
const filters = document.querySelector(`.filters`)

try {
  filt_toggle.addEventListener('click',function () {
    if (filters.classList.contains(`m-hide`)) {
      filters.classList.remove('m-hide')
    } else {
      filters.classList.add('m-hide')
    }
  })
}
catch(err) {
  console.log("Error message: "+err.message)
}

//  Toggle the product filters to show when button is click
const nav_toggle = document.querySelector(`.nav-toggle`)
const navigation = document.querySelector(`.navigation`)
nav_toggle.addEventListener('click',function () {
  if (navigation.classList.contains(`m-hide`)) {
    navigation.classList.remove('m-hide')
    navigation.classList.add('nav_style')
  } else {
    navigation.classList.remove('nav_style')
    navigation.classList.add('m-hide')
  }
})



//========================== Shop page=================== //

const productsAr = [
  {
    prod_img: '1b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product1',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 79.00],
    prod_rating: 4,
    prod_cat: ['red', 'dessert', 'white'],
    prod_weight: [500, 200],
  },
  {
    prod_img: '6b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product2',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 39.00],
    prod_rating: 5,
    prod_cat: ['red', 'rose','white'],
    prod_weight: [100, 800]
  },
  {
    prod_img: '3b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product3',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 410.00],
    prod_rating: 3,
    prod_cat: ['dessert', 'white'],
    prod_weight: [100, 200, 800]
  },
  {
    prod_img: '5b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product4',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 79.00],
    prod_rating: 4,
    prod_cat: ['red','rose'],
    prod_weight: [100, 200]
  },
  {
    prod_img: '5a.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product4',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 21.00],
    prod_rating: 1,
    prod_cat: ['red','rose', 'dessert'],
    prod_weight: [100, 200]
  }

]

const searchFilter = {
  catergories: [],
  weight: [],
  rating: 0,
  sort: (a, b) => a.prod_prices[1] - b.prod_prices[1]
}


// Select the element all products
const products_table = document.querySelector('#prod');




// Modify the new element, create the templete for all product.
const setProductsTable = function(product_array){

  try {
    products_table.innerHTML = ``
    product_array.forEach((prod) => {
      
    // Create article element to hold each product
      const article_item = document.createElement('article')
      const the_weight = prod.prod_weight
      const the_cat = prod.prod_cat
      const the_rate = prod.prod_rating
  
  
      let the_w = []
      the_weight.forEach((wght)=>{
        the_w += `<li><label><input type="radio" name="size" value="m">${wght}g</label></li>` 
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
  catch(err) {
    console.log("Error message: "+err.message)
  }
  
}

setProductsTable(productsAr)

const filterAndSort = function() {
  // Do all the filtering, then print the list
  // filter() is a loop that includes/excludes values from an array to build a new array
  //    If the callback function returns true, the value is added to the new array
  //    If the callback function returns false, the value is NOT added to the new array

  // console.log(searchFilter.rating)

  const filteredArray = productsAr.filter((product) => searchFilter.rating == product.prod_rating || searchFilter.rating === 0) 
                                  .filter((product) => searchFilter.catergories.length === 0 || 
                                                       product.prod_cat.filter((cat) => searchFilter.catergories.includes(cat)).length > 0)
                                  .filter((product) => searchFilter.weight.length === 0 || 
                                                        product.prod_weight.filter((wght) => searchFilter.weight.includes(wght)).length > 0) 
                                  .sort(searchFilter.sort)           

  // Go build the UI with the new filtered array
  // setStudentToTable(filteredArray)
  setProductsTable(filteredArray)

}

// Product category filter
const filterCategory = document.getElementById(`filterCategory`)
filterCategory.addEventListener(`change`, function(event) {

  // A few ways to gather all of the companion elements with the same "name"
  // const theCourses = document.querySelectorAll(`[name="${event.target.name}"]`)
  // const theCourses = event.target.closest(`fieldset`).elements
  const thecategory = event.target.form.elements[event.target.name]

  // Filter to only the checked ones, then return the "value" of those to an array
  searchFilter.catergories = [...thecategory]
                            .filter((cat) => cat.checked)
                            .map((cat) => cat.value)
  console.log(searchFilter.catergories)     
  filterAndSort()
})

// Product weight filter
const filterWeight = document.getElementById(`filterWeight`)
filterWeight.addEventListener(`change`, function(event){

  const theWeight = event.target.form.elements[event.target.name]
  searchFilter.weight = [...theWeight]
                        .filter((weight) => weight.checked)
                        .map((weight) => {
                          wght = weight.value
                          return parseInt(wght)
                        })
  console.log(searchFilter.weight)
  filterAndSort()
})

// Product filter for rating
const filterRating = document.getElementById(`rating`)
filterRating.addEventListener(`change`, function(event) {
  
  const ratings = event.target.form.elements[event.target.name]
  searchFilter.rating = ratings.value

  console.log(searchFilter.rating)
  filterAndSort()
})

// Filter for Sorting
const sortBy = document.getElementById(`sortBy`)
sortBy.addEventListener(`change`, function(event) {
  
  if (event.target.value === "0") {
    searchFilter.sort = (a, b) => a.prod_prices[1] - b.prod_prices[1]
    console.log(event.target.value)
    // console.log(b.prod_prices[1] )
  } else if (event.target.value === "1") {
    searchFilter.sort = (a, b) => b.prod_prices[1] - a.prod_prices[1]
    console.log(searchFilter.sort)
  }

  filterAndSort()
})


