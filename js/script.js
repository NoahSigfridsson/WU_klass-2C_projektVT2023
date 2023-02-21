const arrow = document.getElementById('arroow_menu_switch')
const linkList = document.getElementById('link_list')

function toggleMenu(){

    linkList.classlist.toggle('link_list_visible')

}

arrow.addEventListener('click', toggleMenu)


