var sucursalesHIPO;
var datos;
function SetHIPOData(id, FolioHIPO, Tipo, MontoPromesaHIPO, FechaVisitaSucursalHIPO,
    SucursalHIPO, NumeroSucursalHIPO, DivisionHIPO, RegionalHIPO, EstatusVenta, Estado, Municipio
    //,TasaHIPO,CATHIPO
) {

    LoadCombosHipo(274, 0, "comboHipoCalif", 0);

    //Modificacion del 19/11/2021 Se puso validacion en los pagos y el plazo, en caso de traer 0 dejar en blanco
    $("#IdCampana").val(id);
    $("#FolioHIPO").val(FolioHIPO);
    $("#TipoHIPO").val(Tipo);
    $("#MontoPromesaHIPO").val(MontoPromesaHIPO);
    //$("#TasaHIPO").val(TasaHIPO);
    //$("#CATHIPO").val(CATHIPO);
    $("#SucursalHIPO").val(SucursalHIPO);
    $("#NumeroSucursalHIPO").val(NumeroSucursalHIPO);
    $("#DivisionHIPO").val(DivisionHIPO);
    $("#RegionalHIPO").val(RegionalHIPO);
    $("#StatusSaleHIPO").html(ComboCatalogo());

    document.getElementById("SaveHIPO").onclick = function () {
        ValidateHIPOData();
    }
    document.getElementById("ValidateHIPO").onclick = function () {
        ValidarHIPO();
    }
    document.getElementById("check_hipo").onclick = function () {
        check_val_hipo();
    }
    document.getElementById("SaveCalifHipo").onclick = function () {
        saveCalifHipo();
    }

    //abrir script de HIPO
    //document.getElementById("OpenScriptHIPO").onclick = function () {
    //    window.open(hostInit + '/Client/OpenPdf/HIPO', '_blank', 'location=no, resizable=no', true);
    //}

    //para ver detalle de sucursal
    document.getElementById("DetalleSucursalHIPO").addEventListener("click", function () {
        LoadDetailsOffice(document.getElementById("NumeroSucursalHIPO").value);
    });

    var cal = dataCalendar;
    if (datos === undefined) {
    }
    else {
        delete datos;
    }
    switch (EstatusVenta) {
        case -1://no se ha tocado
        case 2://no venta
            var currentDate = new Date();
            cal['beforeShowDay'] = function (day) {
                var day = day.getDay();
                if (day == 0) {
                    return [false, "somecssclass"]
                }
                return [true, "someothercssclass"]
            }
            var fexhMas = '+' + sumaDias(currentDate) + 'D';
            cal['minDate'] = '+0D';
            cal['maxDate'] = fexhMas;
            $("#FechaVisitaSucursalHIPO").datepicker(cal);
            var day = currentDate.getDate();
            var monthIndex = currentDate.getMonth();
            var year = currentDate.getFullYear();

            var fecha = year + "/" + (monthIndex + 1) + "/" + day;
            $("#FechaVisitaSucursalHIPO").val(fecha);
            noVendido("EstadoHIPO", "HeadingHIPO", "ValidarHIPO", "SaveHIPO");
            setFieldsHIPO("");
            break;

        case 0://ya se vendio, no se ha validado
            var currentDate = new Date();
            cal['beforeShowDay'] = function (day) {
                var day = day.getDay();
                if (day == 0) {
                    return [false, "somecssclass"]
                }
                return [true, "someothercssclass"]
            }
            var fexhMas = '+' + sumaDias(currentDate) + 'D';
            cal['minDate'] = '+0D';
            cal['maxDate'] = fexhMas;
            $("#FechaVisitaSucursalHIPO").val(formatDate(FechaVisitaSucursalHIPO));
            $("#FechaVisitaSucursalHIPO").datepicker(cal);
            noValidado("EstadoHIPO", "HeadingHIPO", "ValidarHIPO", "SaveHIPO");
            var Id = $("#IdCampana");
            var FolioHIPO = $("#FolioHIPO");
            var TipoHIPO = $("#TipoHIPO");

            var MontoPromesaHIPO = $("#MontoPromesaHIPO");
            //var TasaHipo = $("#TasaHIPO");
            //var CatHipo = $("#CATHIPO");

            var FechaVisitaSucursalHIPO = $("#FechaVisitaSucursalHIPO");
            var SucursalHIPO = $("#SucursalHIPO");
            var NumeroSucursalHIPO = $("#NumeroSucursalHIPO");
            var Division = $("#DivisionHIPO");
            var Regional = $("#RegionalHIPO");

            var NumeroCliente = $("#Cliente");
            var Nombres = $("#Nombres");
            var ApellidoPaterno = $("#ApellidoPaterno");
            var ApellidoMaterno = $("#ApellidoMaterno");
            var FechaNacimiento = $("#FechaNacimiento");
            var RFC = $("#RFC");
            var Calle = $("#Calle");
            var NumeroExterior = $("#NumeroExterior");
            var NumeroInterior = $("#NumeroInterior");
            var CodigoPostal = $("#CodigoPostal");
            var Colonia = $("#Colonia");
            var Municipios = $("#Municipio");
            var Estados = $("#Estado");
            var Celular = $("#Celular");
            var TelefonoCasa = $("#TelefonoCasa");
            datos = {
                Id: Id.val(),
                NumeroCliente: NumeroCliente.val(),
                Nombre: Nombres.val(),
                ApellidoPaterno: ApellidoPaterno.val(),
                ApellidoMaterno: ApellidoMaterno.val(),
                FechaNacimiento: FechaNacimiento.val(),
                RFC: RFC.val(),
                Calle: Calle.val(),
                NumeroExterior: NumeroExterior.val(),
                NumeroInterior: NumeroInterior.val(),
                CodigoPostal: CodigoPostal.val(),
                Colonia: Colonia.val(),
                Municipio: Municipios.val(),
                Estado: Estados.val(),
                Celular: Celular.val(),
                TelefonoCasa: TelefonoCasa.val(),
                Folio: FolioHIPO.val(),

                MontoPromesa: MontoPromesaHIPO.val(),
                //Tasa: TasaHipo.val(),
                //CAT: CatHipo.val(),

                Tipo: TipoHIPO.val(),
                FechaVicitaSucursal: FechaVisitaSucursalHIPO.val(),
                Sucursal: SucursalHIPO.val(),
                NumeroSucursal: NumeroSucursalHIPO.val(),
                Division: Division.val(),
                DirRegional: Regional.val()
            };
            break;
        case 1://venta exitosa
            $("#FechaVisitaSucursalHIPO").val(formatDate(FechaVisitaSucursalHIPO));
            ventaExitosa("EstadoHIPO", "HeadingHIPO", "ValidarHIPO", "SaveHIPO");
            setFieldsHIPO("enabled");
            break;
    }

    //cargar estados para las sucursales HIPO
    estados("EstadoSucursalSelectHIPO", Estado, 0);
    LoadMunicipios(Estado, Municipio, 'MunicipioSucursalSelectHIPO');
    $("#EstadoSucursalSelectHIPO").change(function (evt) {
        var item = $(this).val();
        LoadMunicipios(item, 0, 'MunicipioSucursalSelectHIPO');
    });

    $("#MunicipioSucursalSelectHIPO").change(function (evt) {
        var item = $(this).val();
        var fechVicSuc = $("#FechaVisitaSucursalHIPO").val();
        if (fechVicSuc === "") {
            alert("Seleccione fecha vicita sucursal");
            $("#FechaVisitaSucursalHIPO").focus();
            return;
        }

        if (item === "0") {
            alert("Seleccione un municipio");
            $("#MunicipioSucursalSelectHIPO").focus();
            return;
        }

        var dia = diaSemana(fechVicSuc);
        if (dia === 'sab') {
            FinloadBranchOfficeHIPO(item, 1);
        } else {
            FinloadBranchOfficeHIPO(item, 0);
        }
    });
    //ValidarGrupo();
}

function seleccionarSucHIPO(SIRH) {
    for (var i in sucursalesHIPO) {
        if (sucursalesHIPO[i].SIRH == SIRH) {
            $("#DivisionHIPO").val(sucursalesHIPO[i].DIVISION);
            $("#RegionalHIPO").val(sucursalesHIPO[i].DIRECCION);
            $("#NumeroSucursalHIPO").val(sucursalesHIPO[i].SIRH);
            $("#SucursalHIPO").val(sucursalesHIPO[i].NOMBRE_DISPOSITIVO);
            break;
        }
    }
    $('#myModalSucursalesHipo').modal('hide');
}

function FinloadBranchOfficeHIPO(mun, dia) {
    var json = {
        Valor: mun,
        Texto: dia
    }
    $.ajax({
        url: hostInit + '/Client/FinloadBranchOffice_Hipo',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (response) {
            var tableContentHIPO = '';
            sucursalesHIPO = new Array();
            if (dia == 1) {
                $("#headerTableSucursalHipo").append(
                    '<th id="colSabAp" class="small">SABADOS AP</th>' +
                    '<th id="colSabCie" class="small">SABADOS CIE</th>'
                );
                for (var i in response) {
                    tableContentHIPO += '<tr>';
                    tableContentHIPO += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSucHIPO(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
                    tableContentHIPO += '<td class="small">' + response[i].NOMBRE_DISPOSITIVO + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].DIVISION + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].DIRECCION + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].DOMICILIO + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].COLONIA + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].CALLE1 + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].CALLE2 + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].DELEG_MUNIC + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].LUNES_VIERNES_AP + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].LUNES_VIERNES_CIE + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].SABADOS_AP + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].SABADOS_CIE + '</td>';
                    tableContentHIPO += '</tr>';
                    sucursalesHIPO.push(response[i]);
                }
            } else {
                $("#colSabAp").remove();
                $("#colSabCie").remove();
                for (var i in response) {
                    tableContentHIPO += '<tr>';
                    tableContentHIPO += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSucHIPO(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
                    tableContentHIPO += '<td class="small">' + response[i].NOMBRE_DISPOSITIVO + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].DIVISION + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].DIRECCION + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].DOMICILIO + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].COLONIA + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].CALLE1 + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].CALLE2 + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].DELEG_MUNIC + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].LUNES_VIERNES_AP + '</td>';
                    tableContentHIPO += '<td class="small">' + response[i].LUNES_VIERNES_CIE + '</td>';
                    tableContentHIPO += '</tr>';
                    sucursalesHIPO.push(response[i]);
                }
            }

            $("#bodyTableSucHipo").html(tableContentHIPO);
            $("#myModalSucursalesHipo").modal("show");
        },
        error: function (reject) {
            console.log(reject);
            //hideLoader();
        }
    });
}

function setFieldsHIPO(value) {
    $("#FechaVisitaSucursalHIPO").prop("disabled", value);
    $("#SucursalHIPO").prop("disabled", value);
    $("#NumeroSucursalHIPO").prop("disabled", value);
    $("#DivisionHIPO").prop("disabled", value);
    $("#RegionalHIPO").prop("disabled", value);
    //$("#EstadoSucursalSelectHIPO").prop("disabled", true);
    //$("#MunicipioSucursalSelectHIPO").prop("disabled", true);
}

function ValidateHIPOData() {
    var Id = $("#IdCampana");
    var FolioHIPO = $("#FolioHIPO");
    var MontoPromesaHIPO = $("#MontoPromesaHIPO");
    var FechaVisitaSucursalHIPO = $("#FechaVisitaSucursalHIPO");
    var SucursalHIPO = $("#SucursalHIPO");
    var NumeroSucursalHIPO = $("#NumeroSucursalHIPO");
    var Division = $("#DivisionHIPO");
    var Regional = $("#RegionalHIPO");
    var TipoHIPO = $("#TipoHIPO");

    if (FolioHIPO.val() === "") {
        alert("Debe ingresar el folio del producto");
        FolioHIPO.focus();
        return;
    }

    if (MontoPromesaHIPO.val() === "") {
        alert("Ingrese monto");
        MontoPromesaHIPO.focus();
        return;
    }
    if (FechaVisitaSucursalHIPO.val() === "") {
        alert("Ingrese fecha visita sucursal");
        FechaVisitaSucursalHIPO.focus();
        return;
    }
    if (SucursalHIPO.val() === "") {
        alert("Ingrese sucursal");
        SucursalHIPO.focus();
        return;
    }
    if (NumeroSucursalHIPO.val() === "") {
        alert("Ingrese numero sucursal");
        NumeroSucursalHIPO.focus();
        return;
    }
    if (Division.val() === "") {
        alert("Ingrese division");
        Division.focus();
        return;
    }

    if (Regional.val() === "") {
        alert("Ingrese regional");
        Regional.focus();
        return;
    }

    var HIPOEstatusVenta = "";
    if (UserType == 6) {//si es valdiador
        HIPOEstatusVenta = $("#HIPOEstatusVenta").val();
        if (HIPOEstatusVenta == 0) {
            alert("Seleccione estatus de la venta");
            $("#HIPOEstatusVenta").focus();
            return;
        }
    }

    var NumeroCliente = $("#Cliente");
    var Nombres = $("#Nombres");
    var ApellidoPaterno = $("#ApellidoPaterno");
    var ApellidoMaterno = $("#ApellidoMaterno");
    var FechaNacimiento = $("#FechaNacimiento");
    var RFC = $("#RFC");
    var Calle = $("#Calle");
    var NumeroExterior = $("#NumeroExterior");
    var NumeroInterior = $("#NumeroInterior");
    var CodigoPostal = $("#CodigoPostal");
    var Colonia = $("#Colonia");
    var Municipios = $("#Municipio");
    var Estados = $("#Estado");
    var Celular = $("#Celular");
    var TelefonoCasa = $("#TelefonoCasa");

    if (Nombres.val() === "") {
        alert("Debe ingresar nombre del cliente");
        Nombres.focus();
        return;
    }
    if (FechaNacimiento.val() === "") {
        alert("Debe seleccionar fecha de nacimiento");
        FechaNacimiento.focus();
        return;
    }
    if (RFC.val() === "") {
        alert("Debe ingresarb un RFC");
        RFC.focus();
        return;
    }
    if (Calle.val() === "") {
        alert("Debe ingresar calle del cliente");
        Calle.focus();
        return;
    }
    if (NumeroExterior.val() === "") {
        alert("Ingrese numero exterior");
        NumeroExterior.focus();
        return;
    }
    if (NumeroInterior.val() === "") {
        alert("Ingrese numero interior");
        NumeroInterior.focus();
        return;
    }
    if (CodigoPostal.val() === "") {
        alert("Ingrese codigo postal");
        CodigoPostal.focus();
        return;
    }

    if (Estados.val() == 0) {
        alert("Seleccione un estado");
        Estados.focus();
        return;
    }
    if (Municipios.val() == 0) {
        alert("Seleccione un municipio");
        Municipios.focus();
        return;
    }
    if (Colonia.val() == 0) {
        alert("Ingrese Colonia");
        Colonia.focus();
        return;
    }

    var json = {
        Id: Id.val(),
        NumeroCliente: NumeroCliente.val(),
        Nombre: Nombres.val(),
        ApellidoPaterno: ApellidoPaterno.val(),
        ApellidoMaterno: ApellidoMaterno.val(),
        FechaNacimiento: FechaNacimiento.val(),
        RFC: RFC.val(),
        Calle: Calle.val(),
        NumeroExterior: NumeroExterior.val(),
        NumeroInterior: NumeroInterior.val(),
        CodigoPostal: CodigoPostal.val(),
        Colonia: Colonia.val(),
        Municipio: Municipios.val(),
        Estado: Estados.val(),
        Celular: Celular.val(),
        TelefonoCasa: TelefonoCasa.val(),
        Folio: FolioHIPO.val(),
        MontoPromesa: MontoPromesaHIPO.val(),
        //TasaHipo: TasaHipo.val(),
        //CatHipo: CatHipo.val(),

        FechaVicitaSucursal: FechaVisitaSucursalHIPO.val(),
        Sucursal: SucursalHIPO.val(),
        NumeroSucursal: NumeroSucursalHIPO.val(),
        Division: Division.val(),
        DirRegional: Regional.val(),
        EstatusVenta: HIPOEstatusVenta,
        Tipo: TipoHIPO.val()
    };
    datos = json;
    console.log(json);
    saveHIPOData(json);
}

function saveHIPOData(json) {
    showLoader();
    $.ajax({
        url: hostInit + '/Client/SaveHIPOData',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (response) {
            //cambiar color
            noValidado("EstadoHIPO", "HeadingHIPO", "ValidarHIPO", "SaveHIPO");
            hideLoader();
            //ValidarGrupo();
        },
        error: function (error) {
            console.log("Ocurrio un error al guardar los datos");
            hideLoader();
        }
    });
}

function ValidarHIPO() {
    var UserName = $("#UserHIPO");
    var Password = $("#PasswordHIPO");
    if (UserName.val() === "") {
        UserName.focus();
        return;
    }
    if (Password.val() === "") {
        Password.focus();
        return;
    }
    var json = {
        UserName: UserName.val(),
        Password: Password.val()
    };
    var itemSelect = document.getElementById("StatusSaleHIPO");
    if (itemSelect.options[itemSelect.selectedIndex].value == 0) {
        alert("Debe seleccionar un estado de la venta al validar");
        return;
    }
    showLoader();
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
                hideLoader();
                return;
            }
            if (response['Tipo'] == 6 || response['Tipo'] == 4) {
                datos['EstatusVenta'] = $("#StatusSaleHIPO").val();
                $.ajax({
                    url: hostInit + '/Client/SaveHIPOData',
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    data: JSON.stringify(datos),
                    success: function (response) {
                        if (response == true) {
                            if (datos['EstatusVenta'] == 2) {//no venta
                                noVendido("EstadoHIPO", "HeadingHIPO", "ValidarHIPO", "SaveHIPO");
                                //ValidarGrupo();
                            } else {
                                ventaExitosa("EstadoHIPO", "HeadingHIPO", "ValidarHIPO", "SaveHIPO");
                                setFieldsHIPO("disabled");
                                $("#collapseH").collapse('hide');

                                var folio = $("#FolioHIPO");
                                alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });

                                //MensajeVtaHIPO();
                            }
                            $("#StatusSaleHIPO").val(0);
                        } else {
                            alert("Error al validar");
                        }

                        hideLoader();
                    },
                    error: function (error) {
                        console.log("Ocurrio un error al guardar los dao");
                        hideLoader();
                    }
                });
            } else {
                alert("No tiene los privilegios de validador");
                hideLoader();
            }
            UserName.val("");
            Password.val("");
        },
        error: function (error) {
            alert("error al entrar como validador");
            hideLoader();
        }
    });
}




/*-----------------------------------------------------------------------------------------------------------------*/

//CARGA LISTA DE COMBO CALIFICACIONES
function loadCatalogoCombo(array, idCombo, dato) {
    var items = "";
    for (var i in array) {
        items += '<option value="' + array[i].Valor + '">' + array[i].Texto + '</option>';
    }
    $("#" + idCombo).html(items);
    $("#" + idCombo).val(dato);
    return;
}

function LoadCombosHipo(ID, CATALOGO, idCombo, dato) {
    var json;
    if (ID == -1 && CATALOGO == -1) {
        json = {}
    } else {
        json = {
            Valor: ID,
            Texto: CATALOGO
        };
    }
    $.ajax({
        url: hostInit + "/Client/Calificaciones",
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(json),
        success: function (response) {
            hideLoader();
            var catalogoCombo = new Array;
            for (var i in response) {
                catalogoCombo.push(response[i]);
            }
            loadCatalogoCombo(catalogoCombo, idCombo, dato);
        },
        error: function (error) {
            console.log("Ocurrio un error al guardar los datos");
            console.log(error);
            hideLoader();
        }
    });
}



//VALIDAR CHECKBOX DE SI/NO VENTA
function check_val_hipo() {
    if ((document.getElementById('check_hipo').checked) == true) {
        document.getElementById("SaveHIPO").hidden = false;
        document.getElementById("panelHipo").hidden = false;
        document.getElementById("SaveCalifHipo").hidden = true;
        document.getElementById("panelCalificacionHipo").hidden = true;
    }
    else {
        document.getElementById("SaveHIPO").hidden = true;
        document.getElementById("panelHipo").hidden = true;
        document.getElementById("SaveCalifHipo").hidden = false;
        document.getElementById("panelCalificacionHipo").hidden = false;
    }
}

//GUARDA DATOS Y LLENA JSON
function saveCalifHipo() {
    var BalconCalif;
    BalconCalif = $("#comboHipoCalif").val;
    var folio = $("#FolioHIPO");
    var Calificacion = document.getElementById("comboHipoCalif").value;
    //console.log(Calificacion);

    if (Calificacion == 0) {
        alert("Seleccione una Calificacion");
        $("#comboHipoCalif").focus();
        return;
    }
    var json = {
        Folio: folio.val(),
        NumeroCliente: document.getElementById("Cliente").value,
        Calificacion: document.getElementById("comboHipoCalif").value,
    };
    console.log(json);
    saveCalifDataHipo(json);
    datos = json;
}


function saveCalifDataHipo(json) {
    console.log("Entra Hipo calif");
    showLoader();

    var xml = new XMLHttpRequest();
    var url = hostInit + "/Client/saveCalificacion";
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            //Calificado("EstadoHIPO", "HeadingHIPO", "CalificadoHipo", "SaveCalifHipo", "SaveHIPO", "lblHipo", "check_hipo");
            Calificado("EstadoHIPO", "HeadingHIPO", "SaveCalifHipo", "SaveHIPO");
            hideLoader();
        }
    };
    xml.open('POST', url, true);
    xml.setRequestHeader("Content-Type", "application/json");
    xml.send(JSON.stringify(json));

    alertify.confirm('CALIFICADO CON EXITO!', 'Desea Seguir calificando?', function () {
        alertify.success('CALIFICACION GUARDADA')
    }, function () {
        alertify.error('INGRESE NUMERO DE CLIENTE')
    });

    //SigueOfertaHipo();
}

function SigueOfertaHipo() {
    Swal.fire({
        title: 'Deseas continuar calificando la llamada?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continuar'
    }).then((result) => {
        if (result.isDismissed) {
            Swal.fire(
                'Ingresa otro Folio / Numero Cliente'
            )
        }
    })
}

function MensajeVtaHIPO() {
    var FolioHIPO = document.getElementById("FolioHIPO").value;
    Swal.fire({
        title: 'Venta Exitsa!!  FOLIO: ' + document.getElementById("FolioHIPO").value,
        text: "Felicidades !",
        icon: 'success',
        width: '50%',
        showCancelButton: false,
        confirmButtonColor: '#5564eb',
        cancelButtonColor: '#ff0500',
    })
}