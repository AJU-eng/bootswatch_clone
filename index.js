const nav = document.getElementById('nav');
window.onscroll= function () {
    if (document.body.scrollTop >= 200) {
        nav.style.backgroundColor="rgb(93,71,224)"
        console.log("changed");
    }
    else
    {
        nav.style.backgroundImage=" linear-gradient(145deg, #375ee3 0%, #6543e0 80%)"
        console.log("back changed");
    }
}