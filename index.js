const nav = document.getElementById('nav');
window.onscroll= function () {
    if (document.documentElement.scrollTop >= 200) {
        nav.style.backgroundColor="rgb(93,71,224)";
        console.log("changed");
    }
    else
    {
        nav.style.backgroundColor="rgba(0,0,0,0)";
        console.log("back changed");
    }
}