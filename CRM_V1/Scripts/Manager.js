var UserType;
//var hostInit = "/MO360";
var hostInit = "";

//pinta cualquier collapse con el estado no vendido
function noVendido(STATUS, HEADING, BTNVALIDAR, BTNGUARDAR) {
    $("#" + STATUS).html("");
    $("#" + HEADING).css("background-color", "");
    $("#" + BTNVALIDAR).hide();
    $("#" + BTNGUARDAR).show();
}

//pinta cualquier collapse con el estado vendido pero no validado
function noValidado(STATUS, HEADING, BTNVALIDAR, BTNGUARDAR) {
    $("#" + STATUS).html("Vendido");
    $("#" + HEADING).css("background-color", "#3ab2f8");
    $("#" + BTNVALIDAR).show();
    $("#" + BTNGUARDAR).hide();
}

function Calificado(STATUS, HEADING, LBLVALIDAR, BTNCALIFICA, BTNGUARDAR, CHKCALIF, LBLCALIF) {
    $("#" + STATUS).html("Calificado");
    $("#" + HEADING).css("background-color", "#3ab2f8");
    $("#" + LBLVALIDAR).show();
    $("#" + BTNCALIFICA).hide();
    $("#" + BTNGUARDAR).hide();
    $("#" + CHKCALIF).hide();
    $("#" + LBLCALIF).hide();
}

//pinta cualquier collapse con el estatus validado
function ventaExitosa(STATUS, HEADING, BTNVALIDAR, BTNGUARDAR) {
    $("#" + STATUS).html("Validado");
    $("#" + HEADING).css("background-color", "#969696");
    $("#" + BTNVALIDAR).hide();
    $("#" + BTNGUARDAR).hide();
}

var Catalogo = new Array();
var currentDate = new Date();
var dataCalendar = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    weekHeader: 'Sm',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    dateFormat: 'yy/mm/dd',
    changeMonth: true,
    changeYear: true,
    yearRange: "1800:2100",
    hideIfNoPrevNext: false,
    defaultDate: currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getDate(),
};

var dataCalendarCopy = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    weekHeader: 'Sm',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    dateFormat: 'yy/mm/dd',
    changeMonth: true,
    changeYear: true,
    yearRange: "1800:2100",
    hideIfNoPrevNext: false,
    defaultDate: currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getDate(),
};

//con base a una fecha obtiene el dia de la semana
function diaSemana(fech) {
    var dias = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
    var dt = new Date(fech);
    return dias[dt.getUTCDay()];
}

//con base a una fecha suma los dias a desbloquear en los campos fecha vicita sucursal
//function sumaDias(fech) {
//    var dias = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
//    var dt = new Date(fech);
//    var dia = dias[dt.getUTCDay()];
//    switch (dia)
//    {
//        case 'lun': return 3;
//        case 'mar': return 4;
//        case 'mie': return 5;
//        case 'jue': return 5;
//        case 'vie': return 5;
//        case 'sab': return 4;
//        default: return 0;
//    }
//}

function sumaDias(fech) {
    var dias = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
    var dt = new Date(fech);
    var dia = dias[dt.getUTCDay()];
    switch (dia) {
        case 'lun': return 7;
        case 'mar': return 8;//6
        case 'mie': return 8;//6
        case 'jue': return 8;//6
        case 'vie': return 8;//6
        //case 'sab': return 6;
        default: return 0;
    }
}

//formatea cuialquier fecha
function formatDate(date) {
    var dateResult = '';
    if (date == null || date === "") { }
    else {
        try {
            var temp1 = date.split(' ')[0];
            var arr = temp1.split('-');
            if (arr.length > 1) {
                var fech;
                if (arr[0].length > 2) {
                    fech = arr[0] + '/' + arr[1] + '/' + arr[2];
                } else {
                    fech = arr[2] + '/' + arr[1] + '/' + arr[0];
                }
                dateResult = fech;
            } else {
                arr = temp1.split('/');
                if (arr.length > 0) {
                    var fech;
                    if (arr[0].length > 2) {
                        fech = arr[0] + '/' + arr[1] + '/' + arr[2];
                    } else {
                        fech = arr[2] + '/' + arr[1] + '/' + arr[0];
                    }
                    dateResult = fech;
                } else {
                    dateResult = arr;
                }
            }
        } catch (Exception) {
            try {
                var arr = date.split('-');
                if (arr.length > 0) {
                    var fech = arr[0] + '/' + arr[1] + '/' + arr[2];
                    dateResult = fech;
                } else {
                    dateResult = arr;
                }
            } catch (Exception) {
                dateResult = date;
            }
        }
    }
    return dateResult;
}

//punto de entrada, al terminar de cargar el DOM se llama
//la funcion initLogin
$(function () {
    initLogin();
})

//asigna escuchadores de evento para la ventana de login
function initLogin() {
    var password = document.getElementById("Password");
    password.onkeypress = function (evt) {
        if (evt.key === 'Enter' || evt.keyIdentifier === 'Enter') {
            iniciarSesion();
        }
    }

    $("#ingresar").click(iniciarSesion);
    $("#UserName").focus();
}

//funcion que se llama al iniciar sesions
function iniciarSesion() {
    var UserName = $("#UserName");
    var Password = $("#Password");

    if (UserName.val() === "") {5
        $("#errorUserName").html("EL campo de nombre no puede estar vacío");
        UserName.focus();
        return;
    }

    if (Password.val() === "") {
        $("#errorPassword").html("El campo de contraseña no puede estar vacío");
        Password.focus();
        return;
    }

    var json = {
        UserName: UserName.val(),
        Password: Password.val()
    };
    
    $.ajax({
        url: hostInit + "/User/LogIn",
        type: 'POST',
        crossDomain: 'true',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (response) {
            if (response === "No existe") {
                alert("Usuario o contraseña incorrecto(s)");
                UserName.val("");
                Password.val("");
                UserName.focus();
                return;
            }
            $("#LogIn").remove();
            $("#Principal").show();
            //si es rbt
            var user = "";
            if (response['Tipo'] == 3) {
                user += 'RVT: ' + response["Name"] + " " + response["LastName1"] + " " + response["LastName2"];
                //Se desbloquean campos de datos personales del cliente
                document.getElementById('Nombres').disabled = false;
                document.getElementById('ApellidoPaterno').disabled = false;
                document.getElementById('ApellidoMaterno').disabled = false;
                document.getElementById('FechaNacimiento').disabled = false;
                document.getElementById('RFC').disabled = false;
                document.getElementById('Calle').disabled = false;
                document.getElementById('NumeroExterior').disabled = false;
                document.getElementById('NumeroInterior').disabled = false;
            } else if (response.Tipo == 6) {//si es validador
                user += 'VALIDADOR: ' + response["Name"] + " " + response["LastName1"] + " " + response["LastName2"];
            } else if (response.Tipo == 4) {//si es de proceso
                user += 'PROCESOS: ' + response["Name"] + " " + response["LastName1"] + " " + response["LastName2"];
                //Se desbloquean campos de datos personales del cliente
                document.getElementById('Nombres').disabled = false;
                document.getElementById('ApellidoPaterno').disabled = false;
                document.getElementById('ApellidoMaterno').disabled = false;
                document.getElementById('FechaNacimiento').disabled = false;
                document.getElementById('RFC').disabled = false;
                document.getElementById('Calle').disabled = false;
                document.getElementById('NumeroExterior').disabled = false;
                document.getElementById('NumeroInterior').disabled = false;
                //document.getElementById('TdcAvisoPrivacidad').hidden = false;
            }
            $.ajax({
                url: hostInit + '/Client/LoadEstatus',
                type: 'GET',
                contentType: 'application/json;charset=utf-8',
                success: function (response) {
                    for (var i in response) {
                        Catalogo.push(response[i]);
                    }
                },
                error: function (error) {
                    console.log("error al cargar datos");
                }
            });
            UserType = response["Tipo"];
            $("#UsuarioActual").html(user);
            LoadPrincipal();
        },
        error: function (error) {
            alert(error);
            alert("error al iniciar sesion");
        }
    });
}

//carga un combo
function ComboCatalogo() {
    var cat = '';
    for (var i in Catalogo) {
        //cat += `<option value='${Catalogo[i].Valor}'>${Catalogo[i].Texto}</option>`;
        cat += '<option value='+Catalogo[i].Valor+'>'+Catalogo[i].Texto+'</option>';
    }
    return cat;
}


function ValidarGrupoA() {

    var x = document.getElementsByName('GA');

    for (j = 0; j < x.length; j++) {
        let y = x[j].querySelectorAll("span[name='GrupoA']");
       // console.log(x[j].id)
        console.log(y);
        for (z = 0; z < y.length; z++) {
           console.log(y[z].innerHTML);
            if (y[z].innerHTML == "Validado")  {
                GrupoA(); 
            }
            else {
                $("#" + x[j].id).css("background-color", " #337ab7 ");
                let n = x[j].querySelectorAll('button[name="BG"]');
                for (a = 0; a < n.length; a++) {
                    $("#" + n[a].id).show();
                }
            }
        }
    }
}


function GrupoA() {

    var g = document.getElementsByName('GA');

    for (k = 0; k < g.length; k++) {
        let l = g[k].querySelectorAll("span[name='GrupoA']");
        //console.log(g[k].id)

        for (h = 0; h < l.length; h++) {
            //console.log(l[h].innerHTML);
            if (l[h].innerHTML != "Validado") {
                $("#" + g[k].id).css("background-color", " #969696 ");
                let n = g[k].querySelectorAll('.boton-guardar');
                for (a = 0; a < n.length; a++) {
                    $("#" + n[a].id).hide();
                   // console.log(n[a].id);
                }
            }
        }
    }
}


function ValidarGrupo() {

    var x = document.getElementsByName('GB');

    for (j = 0; j < x.length; j++) {
        let y = x[j].querySelectorAll("span[name='GrupoB']");
        //nsole.log(x[j].id)
        for (z = 0; z < y.length; z++) {
            //nsole.log(y[z].innerHTML);
            if (y[z].innerHTML == "Vendido" || y[z].innerHTML == "Validado") {
                GrupoB();
            }
            else {
                $("#" + x[j].id).css("background-color", " #337ab7 ");
                let n = x[j].querySelectorAll('.boton-guardar');
                for (a = 0; a < n.length; a++) {
                    $("#" + n[a].id).show();
                }
            }
        }
    }
}


function GrupoB() {


    var x = document.getElementsByName('GB');

    for (j = 0; j < x.length; j++) {
        let y = x[j].querySelectorAll("span[name='GrupoB']");
        //nsole.log(x[j].id)

        for (z = 0; z < y.length; z++) {
            //nsole.log(y[z].innerHTML);

            if (y[z].innerHTML == "") {
                $("#" + x[j].id).css("background-color", " #969696 ");
                let n = x[j].querySelectorAll('.boton-guardar');
                for (a = 0; a < n.length; a++) {
                    $("#" + n[a].id).hide();
                }
            }
        }
    }
}


function GrupoA() {

    var x = document.getElementsByName('GA');

    for (j = 0; j < x.length; j++) {
        let y = x[j].querySelectorAll("span[name='GrupoA']");
        //nsole.log(x[j].id)

        for (z = 0; z < y.length; z++) {
            //nsole.log(y[z].innerHTML);

            if (y[z].innerHTML == "") {

                $("#" + x[j].id).css("background-color", " #969696 ");
                let n = x[j].querySelectorAll('.boton-guardar');
                for (a = 0; a < n.length; a++) {
                    $("#" + n[a].id).hide();
                }
            }
        }
    }
}


function ValidarGrupoA() {

    var x = document.getElementsByName('GA');

    for (j = 0; j < x.length; j++) {
        let y = x[j].querySelectorAll("span[name='GrupoA']");
        //nsole.log(x[j].id)

        for (z = 0; z < y.length; z++) {
            console.log(y[z].innerHTML);

            if (y[z].innerHTML == "Vendido" || y[z].innerHTML == "Validado") {
                GrupoA();
            }
            else {
                $("#" + x[j].id).css("background-color", " #337ab7 ");
                let n = x[j].querySelectorAll('.boton-guardar');
                for (a = 0; a < n.length; a++) {
                    if ($("#" + n[a].id).hidden == true) {
                        $("#" + n[a].id).show();
                    }
                }
            }
        }
    }
}