const arrow = document.getElementById('arrow_menu_switch')
const linkList = document.getElementById('link_list')

function toggleMenu() {

    linkList.classList.toggle('link_list_visible')
    arrow.classList.toggle('arrow_rotated')

}

arrow.addEventListener('click', toggleMenu)


