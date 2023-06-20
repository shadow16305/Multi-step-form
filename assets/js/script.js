const username = document.getElementById("name");
const email = document.getElementById("e-mail");
const number = document.getElementById("number");

const nextBtnOne = document.getElementById("nextOne");
const nextBtnTwo = document.getElementById("nextTwo");
const nextBtnThree = document.getElementById("nextThree");
const nextBtnFour = document.getElementById("nextFour");
const backBtnOne = document.getElementById("backOne");
const backBtnTwo = document.getElementById("backTwo");
const backBtnThree = document.getElementById("backThree");

const switchToggler = document.querySelector('#switch');
const planOne = document.querySelector('#plan-1');
const planTwo = document.querySelector('#plan-2');
const planThree = document.querySelector('#plan-3');
const dateYr = document.querySelector('.dateyr');
const dateMo = document.querySelector('.datemo');
const planSelectedOne = document.querySelector('#plan-selected-one');
const planSelectedTwo = document.querySelector('#plan-selected-two');
const planSelectedThree = document.querySelector('#plan-selected-three');

const addOnOnePrice = document.querySelector('.add-on-one');
const addOnTwoPrice = document.querySelector('.add-on-two');
const addOnThreePrice = document.querySelector('.add-on-three');
const checkOne = document.querySelector('#checkOne');
const checkTwo = document.querySelector('#checkTwo');
const checkThree = document.querySelector('#checkThree');


const plans = document.querySelector('#plans');
const formInfo = document.querySelector('#your-info');
const addOns = document.querySelector('#add-ons');
const end = document.querySelector('#end');
const thankYou = document.querySelector('#thankyou');

let addonTypeOne = document.querySelector('#addon-type-one'),
    addonTypeTwo = document.querySelector('#addon-type-two'),
    addonTypeThree = document.querySelector('#addon-type-three'),
    addonPriceOne = document.querySelector('#addon-price-one'),
    addonPriceTwo = document.querySelector('#addon-price-two'),
    addonPriceThree = document.querySelector('#addon-price-three'),
    planType = document.querySelector('#plan-type'),
    planPrice = document.querySelector('#plan-price'),
    timeType = document.querySelector('#time');


// Switch Toggle 

function check() {
    if (switchToggler.checked == true) {
        planOne.innerHTML = '$90/yr';
        planTwo.innerHTML = '$120/yr';
        planThree.innerHTML = '$150/yr';
        dateMo.style.color = '#9699AA';
        addOnOnePrice.innerHTML = '+10$/yr';
        addOnTwoPrice.innerHTML = '+20$/yr';
        addOnThreePrice.innerHTML = '+20$/yr';
        timeType.innerHTML = 'year';
    } else {
        planOne.innerHTML = '$9/mo';
        planTwo.innerHTML = '$12/mo';
        planThree.innerHTML = '$15/mo';
        addOnOnePrice.innerHTML = '+1$/mo';
        addOnTwoPrice.innerHTML = '+2$/mo';
        addOnThreePrice.innerHTML = '+2$/mo';
        dateYr.style.color = '#9699AA';
        timeType.innerHTML = 'month';
    }
}

// Switch Toggle End


// Navigation Buttons

nextBtnOne.addEventListener('click', () => {
    if (username.value == '' || null) {
        username.setCustomValidity("This field is required.");
        username.style.borderColor = '#EE374A';
        return false;
    }
    else if (email.value == '' || null) {
        email.setCustomValidity("This field is required.");
        email.style.borderColor = '#EE374A';
        return false;
    }
    else if (number.value == '' || null) {
        number.setCustomValidity("This field is required.");
        number.style.borderColor = '#EE374A';
        return false;
    } else {
        number.setCustomValidity("");
        username.setCustomValidity("");
        email.setCustomValidity("");
        formInfo.classList.remove('show');
        formInfo.classList.add('hide');
        plans.classList.add('show');
        plans.classList.remove('hide');
    }
})

nextBtnTwo.addEventListener('click', () => {
    plans.classList.add('hide');
    plans.classList.remove('show');
    addOns.classList.add('show');
    addOns.classList.remove('hide');
})

nextBtnThree.addEventListener('click', () => {
    addOns.classList.add('hide');
    addOns.classList.remove('show');
    end.classList.add('show');
    end.classList.remove('hide');
})

nextBtnFour.addEventListener('click', () => {
    end.classList.add('hide');
    end.classList.remove('show');
    thankYou.classList.add('show');
    thankYou.classList.remove('hide');
})

backBtnOne.addEventListener('click', () => {
    formInfo.classList.remove('hide');
    formInfo.classList.add('show');
    plans.classList.add('hide');
    plans.classList.remove('show');
})

backBtnTwo.addEventListener('click', () => {
    addOns.classList.remove('show');
    addOns.classList.add('hide');
    plans.classList.remove('hide');
    plans.classList.add('show');
})

backBtnThree.addEventListener('click', () => {
    end.classList.remove('show');
    end.classList.add('hide');
    addOns.classList.remove('hide');
    addOns.classList.add('show');
})



// Navigation Buttons end


// Summary

planSelectedOne.addEventListener('click', () => {
    planType.innerHTML = 'Arcade';
    if (switchToggler.checked == true) {
        planPrice.innerHTML = '$90/yr';
    } else {
        planPrice.innerHTML = '$9/mo';
    }
})

planSelectedTwo.addEventListener('click', () => {
    planType.innerHTML = 'Advanced';
    if (switchToggler.checked == true) {
        planPrice.innerHTML = '$120/yr';
    } else {
        planPrice.innerHTML = '$12/mo';
    }
})

planSelectedThree.addEventListener('click', () => {
    if (switchToggler.checked == true) {
        planPrice.innerHTML = '$150/yr';
    } else {
        planPrice.innerHTML = '$15/mo';
    }
})

checkOne.addEventListener('click', () => {
    addonTypeOne.innerHTML = 'Online service';
    addonPriceOne.innerHTML = addOnOnePrice.innerHTML;
})

checkTwo.addEventListener('click', () => {
    addonTypeTwo.innerHTML = 'Larger storage';
    addonPriceTwo.innerHTML = addOnTwoPrice.innerHTML;
})

checkThree.addEventListener('click', () => {
    addonTypeThree.innerHTML = 'Customizable profile';
    addonPriceThree.innerHTML = addOnThreePrice.innerHTML;
})




// Summary End
