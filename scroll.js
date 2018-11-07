function yscroll()
{
    var header = document.getElementById("header");
    var subhead = document.getElementById("subhead");
    var ypos = window.pageYOffset;

    if(ypos > 150)
    {
        header.style.height = "50px";
        header.style.paddingTop = "10px";
        subhead.style.height = "0px";
    }
    else
    {
        header.style.height = "400px";
        header.style.paddingTop = "0px";
        subhead.style.height = "80px";
    }
}

window.addEventListener("scroll",yscroll);