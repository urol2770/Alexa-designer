window.onscroll = function() {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add('myNavbar');
    } else {
        document.getElementById("navbar").classList.remove('myNavbar');
    }
}