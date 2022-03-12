let scrolled;
let el = document.querySelector(".fixed-input")
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 400){
        el.classList.add('bg-yellow')
    }
    if(400 > scrolled){
        el.classList.remove('bg-yellow')         
    }

}