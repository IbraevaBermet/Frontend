// let ttl = document.getElementsByClassName("ttl"); 

// console.log(ttl[0].innerText);

// let price = document.getElementsByClassName("price"); 

// console.log(price[0].innerText);

// let image = document.getElementsByClassName("image"); 

// console.log(image[0].src);

//29 urok

// let ttl = document.querySelectorAll(".body_product > .ttl");

// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);
 

var elements = document.getElementsByClassName("add_card");

    var myFunction = function () {
        var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
        console.log(attribute[0].innerText);
    }

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", myFunction, false);
    }

    var pricefunc = function () {
        var attribute2 = this.parentNode.parentNode.parentNode.querySelectorAll(".price");
        console.log(attribute2[0].innerText);
    }

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", pricefunc, false);
    }

    // var imagefunc = function () {
    //     var attribute3 = this.parentNode.parentNode.parentNode.querySelectorAll(".image");
    //     console.log(attribute3[0]);
    // }

    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].addEventListener("click", imagefunc, false);
    // }



    

