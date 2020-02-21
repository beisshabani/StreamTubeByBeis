

function ResponsiveHS(drop, after, position) {
    var RDrop = document.getElementById(drop);
    var AfterC = document.getElementById(after);

    if(RDrop.style.height === "50px") {
        RDrop.style.height = "100%";
	RDrop.style.overflowY = "scroll";
        AfterC.innerHTML = "-";
}
else{
    RDrop.style.height = "50px";
    AfterC.innerHTML = "+";
    RDrop.style.overflowY = "hidden";
}
}

function HeaderShow(c) {
    var Dropdownac = document.getElementById(c);
    if( Dropdownac.style.display === "none") {
        Dropdownac.style.display = "block";
    }
    else{
        Dropdownac.style.display = "none";
    }
}

function komentepisod(komenti, episodi) {
    var komm = document.getElementById(komenti);
    var ep = document.getElementById(episodi);

    if(komm.style.display === "none") {
        komm.style.display = "block";
        ep.style.display = "none";
    }
    else{
        komm.style.display = "none";
        ep.style.display = "block";
    }
}