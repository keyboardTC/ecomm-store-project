// Javascript for single product page


// ========= Product images ==============
const the_thumbs = document.querySelectorAll(`.thumb`);
const main_image = document.querySelector(`#main_pic`);

const make_clickable = function (thumb){

    thumb.addEventListener(`click`, function(){
        console.log("Helloooo")
        main_image.src = thumb.src;
        main_image.alt = thumb.alt;
    })
}

the_thumbs.forEach(make_clickable)
