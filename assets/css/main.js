var indexSlide = 1;
function slider() {
    var slides = ["./assets/imgs/slider1.jpg", "./assets/imgs/slider3.jpg", "./assets/imgs/slider2.jpg"];
    document.getElementById('slide-img').src = slides[indexSlide];
    indexSlide++;
    if (indexSlide == 3) {
        indexSlide = 0;
    }
}

setInterval(slider, 2000)

let products = [
    {
        "productImg": "sp1.jpg",
        "productPrice": 285000
    },
    {
        "productImg": "sp2.jpg",
        "productPrice": 285000
    },
    {
        "productImg": "sp3.jpg",
        "productPrice": 285000
    },
    {
        "productImg": "sp4.jpg",
        "productPrice": 285000
    },
    {
        "productImg": "sp5.jpg",
        "productPrice": 285000
    },
    {
        "productImg": "sp6.jpg",
        "productPrice": 285000
    },
    {
        "productImg": "sp7.jpg",
        "productPrice": 285000
    },
    {
        "productImg": "sp8.jpg",
        "productPrice": 285000
    }
]

let output = products.map(product => {
    return `<div class="product__item">
                        <div class="product__item--img">
                            <img src="./assets/imgs/${product.productImg}" alt="">
                        </div>
                        <p class="product__item--price">
                            ${product.productPrice} 
                            <sup>đ</sup>
                        </p>
                </div>`
})

document.querySelector(".products").innerHTML = output;



// slider news

var indexNewSlide = 1;
slideNew(indexNewSlide);
function side_slide(e) {
    slideNew(indexNewSlide += e)
}

function slideNew(e) {
    var i;
    const imgNewSlide = document.querySelectorAll('.news__slider .news__slide .news__slide--imgs img')
    if (e > imgNewSlide.length) {
        indexNewSlide = 1;
    }
    if (e < 1) {
        indexNewSlide = imgNewSlide.length
    }
    for (i = 0; i < imgNewSlide.length; i++) {
        imgNewSlide[i].style.display = "none";
    }
    imgNewSlide[indexNewSlide - 1].style.display = "block";
}

// nav active

let menuBtn = document.getElementById('menuBtn')
let navPage = document.getElementById('nav__page')
let menuClose = document.getElementById('removeNav')
menuBtn.onclick = () => {
    navPage.classList.add('active')
}

menuClose.onclick = () => {
    navPage.classList.remove('active')
}

// to - top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
toTop.onclick = () => {
    window.scrollTo(0, 0)
}

