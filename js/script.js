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

const products = [
  {
    prod_img: '1b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product1',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 39.00],
    prod_rating: 4.4,
    prod_colour: ['Red', 'Dessert'],
    prod_weight: [500, 200]
  },
  {
    prod_img: '1b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product2',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 39.00],
    prod_rating: 4.4,
    prod_colour: ['Red', 'Rose'],
    prod_weight: [100, 800]
  },
  {
    prod_img: '1b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product3',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 39.00],
    prod_rating: 4.4,
    prod_colour: ['Dessert', 'White'],
    prod_weight: [100, 200, 800]
  },
  {
    prod_img: '1b.jpg',
    prod_link: 'product-page.html',
    prod_name: 'Product4',
    prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
    prod_prices: [50.00, 39.00],
    prod_rating: 4.4,
    prod_colour: ['Red', 'White'],
    prod_weight: [100, 200]
  }

]

// Select the element all products
const products_table = document.querySelector('#prod');

// Modify the new element, create the templete for all product.
products.forEach((prod) => {


  // Create article element to hold each product
  const article_item = document.createElement('article')
  const the_weight = prod.prod_weight

  // Adding class name product to the article created
  article_item.classList.add('product') 

  article_item.innerHTML = `
  <img src="img/${prod.prod_img}" alt="${prod.prod_name}">
  <div class="prod-details">
      <h3><a href="${prod.prod_link}">${prod.prod_name}</a></h3>
      <p>${prod.prod_desc} <a href="${prod.prod_link}">see more</a></p>
      <dl class="rating">
        <data value="${prod.prod_prices[1]}"><del>$${prod.prod_prices[0]}</del> <ins>$${prod.prod_prices[1]}</ins></data>
        <dd><p>Rating : ${prod.prod_rating}</p> <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
      </dl>
  
      <form class="iterm-properties">
        <fieldset>
          <legend>Colours</legend>
          <ul>
            <li><label><input type="radio" name="colour" value="r"> ${prod.prod_colour[0]}</label></li>
            <li><label><input type="radio" name="colour" value="r"> ${prod.prod_colour[1]}</label></li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Weight</legend>
          <ol class="weight">
            <li><label><input type="radio" name="size" value="m">${prod.prod_weight[0]}</label></li>
            <li><label><input type="radio" name="size" value="m">${prod.prod_weight[1]}</label></li>
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


  // const products_weight = document.querySelectorAll('weight')
  // console.log(products_weight)
  // the_weight.forEach((weight)=>{
  //   const weight_list = document.createElement(`li`)
  //   weight_list.innerHTML = `
  //     <label><input type="radio" name="size" value="m">${weight}</label>
  //   `
  //   products_weight[x].appendChild(weight_list)
  //   console.log(weight)
  //   console.log(`done`)
  // }) 

  

})


