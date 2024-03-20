if (typeof (Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
        sessionStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
} else {
    // Sorry! No Web Storage support..
    console.log("El navegador no soporta almacenamiento web");
}



function saveItems() {

}