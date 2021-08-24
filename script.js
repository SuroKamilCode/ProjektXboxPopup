const json = {
    "product": {
        "id": 1,
        "name": "Konsola MICROSOFT XBOX ONE S 500GB + FIFA 19",
        "code": "10000053",
        "icon": "\/data\/gfx\/icons\/large\/7\/0\/7.jpg",
        "link": "\/pl\/products\/xbox-4-slim-7.html",
        "product_type": "product_item"
    },
    "sizes": {
        "unit": "szt.",
        "unit_single": "szt.",
        "unit_plural": "szt.",
        "unit_fraction": "sztuka",
        "unit_precision": "0",
        "unit_sellby": 1,
        "items": {
            "U": {
                "type": "U",
                "name": "Ram 32 GB",
                "amount": 1,
                "status": "Produkt dostępny",
                "price": 125.00
            },
            "V": {
                "type": "V",
                "name": "Ram 64 GB",
                "amount": 12,
                "status": "Produkt dostępny",
                "price": 159.00
            },
            "W": {
                "type": "W",
                "name": "Ram 128 GB",
                "amount": 0,
                "status": "Produkt niedostępny",
                "price": 199.00
            }
        }
    },
    "multiversions": {
        "id": "1",
        "name": "Wariant",
        "items": {
            "1-1": {
                "enabled": true,
                "selected": true,
                "products": {
                    "product_id": 7,
                    "version_priority": "1",
                    "url": "\/pl\/products\/xbox-7.html",
                    "price_difference": "0.00"
                },
                "values": {
                    "61": {
                        "id": 61,
                        "name": "Srebrny"
                    }
                },
                "values_id": "61"
            },
            "1-2": {
                "enabled": true,
                "products": {
                    "product_id": 8,
                    "version_priority": "2",
                    "url": "\/pl\/products\/xbox-4-slim-8.html",
                    "price_difference": "-5.00"
                },
                "values": {
                    "60": {
                        "id": 60,
                        "name": "Czarny"
                    }
                },
                "values_id": "60"
            },
            "1-3": {
                "enabled": true,
                "products": {
                    "product_id": 27,
                    "version_priority": "2",
                    "url": "\/pl\/products\/xbox-4-slim-27.html",
                    "price_difference": "-10.00"
                },
                "values": {
                    "59": {
                        "id": 59,
                        "name": "Biały"
                    }
                },
                "values_id": "59"
            }
        }
    },

}
const photoList = [{
        img: "../ProjektXboxPopup/xbox1.png",
    },
    {
        img: "../ProjektXboxPopup/xbox2.png",
    }
];

let activePhoto = 0;
let properties = json.sizes.items;
let nameProperties = json.product;
let versionProperties = json.multiversions;
let amount = 1;

const showDiv = () => {
    div.style.top = '50%';
    div.style.left = '50%';
    box.style.backgroundColor = "rgb(160,160,160, 0.9)";
    box.style.filter = 'blur(2px)';
    h1.innerHTML = nameProperties.name;
    price.innerHTML = properties.U.price + ',00zł';
    productSize1.innerHTML = properties.U.name;
    productSize1.style.border = "2px solid #0090F6";
    productSize2.innerHTML = properties.V.name;
    productSize3.innerHTML = properties.W.name;
    pickedVariant.innerHTML = json["multiversions"]["items"]["1-1"]["values"]["61"]["name"]
    available.innerHTML = `${`<i class="fas fa-check"></i> `}` + properties.U.status;
    shadow.style.zIndex = 3;
}

const closeDiv = () => {
    div.style.top = '-100%';
    div.style.left = '50%';
    box.style.backgroundColor = "white";
    box.style.filter = 'blur(0px)';
    productSize1.style.border = "2px solid #0090F6";
    productSize2.style.border = "";
    productSize3.style.border = "";
    amount = 1;
    volume.textContent = 1;
    gallery.src = "../ProjektXboxPopup/xbox1.png";
    activePhoto = 0;
    shadow.style.zIndex = 1;
}

const addBorder = function () {
    productSize1.style.border = "";
    productSize2.style.border = "";
    productSize3.style.border = "";
    this.style.border = "2px solid #0090F6";
    amount = 1;
    volume.textContent = amount;
    available.innerHTML = `${`<i class="fas fa-check"></i> `}` + properties.U.status;
    if (productSize1.style.border == '2px solid rgb(0, 144, 246)' && properties.U.amount == 0 || productSize2.style.border == '2px solid rgb(0, 144, 246)' && properties.V.amount == 0 || productSize3.style.border == '2px solid rgb(0, 144, 246)' && properties.W.amount == 0) {
        amount = 0;
        volume.textContent = 0;
        available.innerHTML = (`${`<i class="fas fa-times"></i>`}` + " Produkt niedostępny");
    }
}

const changePrice1 = function () {
    price.innerHTML = properties.U.price + ',00zł';
}

const changePrice2 = function () {
    price.innerHTML = properties.V.price + ',00zł';
}

const changePrice3 = function () {
    price.innerHTML = properties.W.price + ',00zł';
}

const addAmount = () => {
    ++amount;
    volume.textContent = amount
    if (productSize1.style.border == "2px solid rgb(0, 144, 246)" && amount > properties.U.amount) {
        amount = properties.U.amount;
        volume.textContent = amount;
    }
    if (productSize2.style.border == "2px solid rgb(0, 144, 246)" && amount > properties.V.amount) {
        amount = properties.V.amount;
        volume.textContent = amount;
    }
    if (productSize3.style.border == "2px solid rgb(0, 144, 246)" && amount > properties.W.amount) {
        amount = properties.W.amount;
        volume.textContent = amount;
    }
}

const removeAmount = () => {
    --amount;
    volume.textContent = amount
    if (amount === 1) {
        volume.textContent = 1;
        amount = 1
    }
    if (amount === 0) {
        amount = 1;
        volume.textContent = 1;
    } else if (amount <= 0) {
        amount = 0;
        volume.textContent = 0;
    }
}

const addedToCart = () => {
    closeDiv();
    added.style.top = '50%';
    added.style.left = '50%';
    box.style.filter = 'blur(2px)';
    box.style.backgroundColor = "rgb(160,160,160, 0.9)";
    shadow.style.zIndex = 2;
}

const closeAddedToCart = () => {
    added.style.top = '-100%';
    added.style.left = '50%';
    box.style.filter = "";
    box.style.backgroundColor = "";
    shadow.style.zIndex = 1;
}

const Shoppingcontinue = () => {
    closeAddedToCart()
    showDiv()
}

const shoppingCart = () => {
    closeAddedToCart()
    box.style.display = 'none';
    const main = document.createElement('main');
    document.body.appendChild(main);
    main.textContent = 'KONIEC!'
    reload.style.display = "block";
}

const nextPhoto = () => {
    activePhoto++;
    if (activePhoto === photoList.length) {
        activePhoto = 0;
    }
    gallery.src = photoList[activePhoto].img;
    if (activePhoto == 0) {
        pickedVariant.textContent = json["multiversions"]["items"]["1-1"]["values"]["61"]["name"];
    }
    if (activePhoto == 1) {
        pickedVariant.textContent = json["multiversions"]["items"]["1-2"]["values"]["60"]["name"];
    }
}

const previousPhoto = () => {
    activePhoto--;
    if (activePhoto < 0) {
        activePhoto = photoList.length - 1;
    }
    gallery.src = photoList[activePhoto].img;
    if (activePhoto == 0) {
        pickedVariant.textContent = json["multiversions"]["items"]["1-1"]["values"]["61"]["name"];
    }
    if (activePhoto == 1) {
        pickedVariant.textContent = json["multiversions"]["items"]["1-2"]["values"]["60"]["name"];
    }
}

const showCourierInfo = () => {
courierinfoDiv.classList.add('activeCourier')
}

const hideCourierInfo = () => {
    courierinfoDiv.classList.remove('activeCourier');
}


const div = document.querySelector('.modal');
const exit = document.querySelector('.close');
const btn = document.querySelector('.on');
const box = document.querySelector('.box');
const h1 = document.querySelector('.productName');
const price = document.querySelector('.productPrice');
const productSize1 = document.querySelector('.size1');
const productSize2 = document.querySelector('.size2');
const productSize3 = document.querySelector('.size3');
const pickedVariant = document.querySelector('.pickedVariant');
const available = document.querySelector('.available');
const plus = document.getElementById('add');
const minus = document.getElementById('delete');
const volume = document.getElementById('volume');
const addToCart = document.querySelector('.addToCart')
const added = document.querySelector('.added');
const closeAdded = document.querySelector('.closeAdded');
const continueShopping = document.querySelector('.continue');
const cart = document.querySelector('.cart');
const reload = document.querySelector('.reload');
const gallery = document.querySelector('.xbox');
const plusPhoto = document.querySelector('.fa-chevron-right');
const minusPhoto = document.querySelector('.fa-chevron-left');
const shadow = document.querySelector('.shadow');
const courierInfo = document.querySelector('.blue');
const courierinfoDiv = document.querySelector('.courierInfo')

btn.addEventListener('click', showDiv);
exit.addEventListener('click', closeDiv)
productSize1.addEventListener('click', addBorder)
productSize2.addEventListener('click', addBorder)
productSize3.addEventListener('click', addBorder)
productSize1.addEventListener('click', changePrice1)
productSize2.addEventListener('click', changePrice2)
productSize3.addEventListener('click', changePrice3)
plus.addEventListener('click', addAmount)
minus.addEventListener('click', removeAmount)
addToCart.addEventListener('click', addedToCart);
closeAdded.addEventListener('click', closeAddedToCart);
continueShopping.addEventListener('click', Shoppingcontinue);
cart.addEventListener('click', shoppingCart);
plusPhoto.addEventListener('click', nextPhoto);
minusPhoto.addEventListener('click', previousPhoto);
courierInfo.addEventListener('mouseover', showCourierInfo);
courierInfo.addEventListener('mouseout', hideCourierInfo);