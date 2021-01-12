// ------------------ open and close search ---------------------------
var formSearch = document.querySelector('.form-search');
var mainMenu = document.querySelector('.main-nav__center');
var rightMenu = document.querySelector('.right-menu');
var searchIcon = document.querySelector('#search-icon');
var cancelSearch = document.querySelector('#cancel-search');
searchIcon.addEventListener('click', () =>{
    openSearch();
})

cancelSearch.addEventListener('click', () => {
    closeSearch();
});
openSearch = () => {
    rightMenu.style.display = 'none';
    mainMenu.style.display = 'none';
    formSearch.style.display = 'flex';
}
closeSearch = () => {
    rightMenu.style.display = 'block';
    mainMenu.style.display = 'flex';
    formSearch.style.display = 'none';
}

