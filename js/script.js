const arrow = document.getElementById('arrow_menu_switch')
const linkList = document.getElementById('link_list')
const cartButtonsArray = document.getElementsByClassName('lagg_i_korg')
const cartIndicator = document.getElementById('indicator_circle')
var numOfItemsInCart = 0
var i = 0


function toggleMenu() {

    linkList.classList.toggle('link_list_visible')
    arrow.classList.toggle('arrow_rotated')

}
arrow.addEventListener('click', toggleMenu)


function addItemToCart() {
    numOfItemsInCart = numOfItemsInCart + 1;
    document.getElementById('indicator_text').innerHTML = numOfItemsInCart
}
while(i < cartButtonsArray.length){
    cartButtonsArray[i].addEventListener('click', addItemToCart, indicatorVisible)
    i = i + 1
}


function indicatorVisible() {
    cartIndicator.style.opacity(0.2)
    console.log(cartIndicator)
}

