let cartItem = document.querySelector('.cart_container' );
document.querySelector('#cart_btn').onclick=()=>{
    cartItem.classList.toggle('active');
}
let searchItem = document.querySelector('.container-fluid' );
document.querySelector('#search_btn').onclick=()=>{
    searchItem.classList.toggle('active');
}
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login_window');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});
