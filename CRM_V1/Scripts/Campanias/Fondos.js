var datos;
function SetFondosData(FolioFondos, id, FechaVicitaSucursal, Division, RegionalDivision, NumeroSucursalFondos,
    EstatusVenta, NMSucursalFondos, Estado_SucFondos, Municipio_SucFondos, Calificacion) {

    LoadCombosFondos(29, 0, "comboFondoCalif", 0);

    $("#IdFondos").val(id);
    $("#FolioFondos").val(FolioFondos);
    $("#NMSucursalFondos").val(NMSucursalFondos);
    $("#DivisionFondos").val(DivisionFondos);
    $("#RegionalFondos").val(RegionalDivision);
    $("#NumeroSucursalFondos").val(NumeroSucursalFondos);
    $("#EstadoSucursalFondos").val(Estado_SucFondos);
    $("#MunicipioSucursalFondos").val(Municipio_SucFondos);
    $("#selectVenta_Fondos").val("0");
    $("#StatusSaleFondos").html(ComboCatalogo());
    document.getElementById("SaveFondos").onclick = function () {
        ValidateFondosData();
    }
    document.getElementById("ValidateFondos").onclick = function () {
        ValidarVentaFondos();
    }
    document.getElementById("check_fondos").onclick = function () {
        check_val_fondos();
    }
    document.getElementById("SaveCalifFondos").onclick = function () {
        saveCalifFondos();
    }

    document.getElementById('DetalleSucursalFondos').addEventListener('click', function () {
        LoadDetailsOffice(document.getElementById('NumeroSucursalFondos').value);
    });

    $("#FechaCatPagare").datepicker(dataCalendar);
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
            $("#FechaVicitaSucursalFondos").datepicker(cal);
            var day = currentDate.getDate();
            var monthIndex = currentDate.getMonth();
            var year = currentDate.getFullYear();

            var fecha = year + "/" + (monthIndex + 1) + "/" + day;
            $("#FechaVicitaSucursalFondos").val(fecha);
            noVendido("EstadoFondos", "HeadingFondos", "ValidarFondos", "SaveFondos");
            setFieldsFondos("");
            break;
        case 0://ya se vendio, no se ha validado
            $("#FechaVicitaSucursalFondos").val(formatDate(FechaVicitaSucursal));
            $("#FechaVicitaSucursalFondos").datepicker(cal);
            noValidado("EstadoFondos", "HeadingFondos", "ValidarFondos", "SaveFondos");

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
            var TipoInver = document.getElementById("selectTipoInversion").value;


            var Id = $("#IdFondos");
            var FolioFondos = $("#FolioFondos");
            var NMSucursalFondos = $("#NMSucursalFondos");
            var FechaVicitaSucursalFondos = $("#FechaVicitaSucursalFondos");
            var DivisionFondos = $("#DivisionFondos");
            var RegionalDivision = $("#RegionalFondos");
            var NumeroSucursalFondos = $("#NumeroSucursalFondos");
            var Estado_SucFondos = $("#EstadoSucursalFondos");
            var Municipio_SucFondos = $("#MunicipioSucursalFondos");

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
                TipoInver: document.getElementById("selectTipoInversion").value,


                Folio: FolioFondos.val(),
                Sucursal: NMSucursalFondos.val(),
                FechaVicitaSucursal: FechaVicitaSucursalFondos.val(),
                EstatusVenta: FondosEstatusVenta,
                Division: DivisionFondos.val(),
                Regional: RegionalDivision.val(),
                NumeroSucursal: NumeroSucursalFondos.val(),
                //Estado_SucPagare: Estado_SucPagare.val(),
                //Municipio_SucPagare: Municipio_SucPagare.val()
            };
            break;
        case 1://venta exitosa
            $("#FechaVicitaSucursalFondos").val(formatDate(FechaVicitaSucursal));
            ventaExitosa("EstadoFondos", "HeadingFondos", "ValidarFondos", "SaveFondos");
            setFieldsFondos("enabled");
            break;
    }

    //cargar estados para las sucursales cnc
    estados("EstadoSucursalFondos", Estado, 0);
    LoadMunicipios(Estado, Municipio, 'MunicipioSucursalFondos');
    $("#EstadoSucursalFondos").change(function (evt) {
        var item = $(this).val();
        LoadMunicipios(item, 0, 'MunicipioSucursalFondos');
    });

    $("#MunicipioSucursalFondos").change(function (evt) {
        var item = $(this).val();
        var fechVicSuc = $("#FechaVicitaSucursalFondos").val();
        if (fechVicSuc === "") {
            alert("Seleccione fecha vicita sucursal");
            $("#FechaVicitaSucursalFondos").focus();
            return;
        }

        if (item === "0") {
            alert("Seleccione un municipio");
            $("#MunicipioSucursalFondos").focus();
            return;
        }

        var dia = diaSemana(fechVicSuc);
        if (dia === 'sab') {
            FinloadBranchOfficeFondos(item, 1);
        } else {
            FinloadBranchOfficeFondos(item, 0);
        }
    });
    //document.getElementById("OpenScriptPagare").onclick = function () {
    //    window.open(hostInit + '/Client/OpenPdf/PAGARE', '_blank', 'location=no, resizable=no', true);
    //}
}

function ValidarVentaFondos() {
    var UserName = $("#UserFondos");
    var Password = $("#PasswordFondos");

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
    var itemSelect = document.getElementById("StatusSaleFondos");
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
                datos['EstatusVenta'] = $("#StatusSaleFondos").val();
                $.ajax({
                    url: hostInit + '/Client/SaveFondosData',
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    data: JSON.stringify(datos),
                    success: function (response) {
                        if (datos['EstatusVenta'] == 2) {//no venta
                            noVendido("EstadoFondos", "HeadingFondos", "ValidarFondos", "SaveFondos");
                        } else {
                            ventaExitosa("EstadoFondos", "HeadingFondos", "ValidarFondos", "SaveFondos");
                            setFieldsPagare("disabled");
                            $("#collapseFondos").collapse('hide');
                        }
                        $("#StatusSaleFondos").val(0);
                        hideLoader();
                    },
                    error: function (error) {
                        console.log("Ocurrio un error al guardar los datos");
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

function setFieldsFondos(value) {

    $("#NMSucursalFondos").prop("disabled", value);
    $("#NumeroSucursalFondos").prop("disabled", value);
    $("#FechaVicitaSucursalFondos").prop("disabled", value);
    $("#DivisionFondos").prop("disabled", value);
    $("#RegionalFondos").prop("disabled", value);
}

function ValidateFondosData() {
    if ($("#selectVenta_Fondos").val() == "0") {
        alert("Seleccionar tipo de venta");
        $("#selectVenta_Fondos").focus();
        return;
    }

    var Id = $("#IdFondos");

    var FolioFondos = $("#FolioFondos");

    var NMSucursalFondos = $("#NMSucursalFondos");

    var FechaVicitaSucursalFondos = $("#FechaVicitaSucursalFondos");
    var DivisionFondos = $("#DivisionFondos");
    var RegionalDivision = $("#RegionalFondos");
    var NumeroSucursalFondos = $("#NumeroSucursalFondos");
    var Estado_SucFondos = $("#EstadoSucursalFondos");
    var Municipio_SucFondos = $("#MunicipioSucursalFondos");

    if ($("#selectVenta_Fondos").val() == "Sucursal") {
        if (FechaVicitaSucursalFondos.val() === "") {
            alert("Seleccione Fecha Vicita Sucursal");
            FechaVicitaSucursalFondos.focus();
            return;
        }
        if (DivisionFondos.val() === "") {
            alert("Ingrese Division");
            DivisionPagare.focus();
            return;
        }
        if (RegionalDivision.val() === "") {
            alert("Ingrese Regional");
            RegionalDivision.focus();
            return;
        }
        if (NumeroSucursalFondos.val() === "") {
            alert("Ingrese NumeroSucursalFondos");
            NumeroSucursalFondos.focus();
            return;
        }
        if (Estado_SucFondos.val() === "" || Estado_SucFondos.val() === "0") {
            alert("Ingrese el Estado de la sucursal");
            Estado_SucFondos.focus();
            return;
        }
        if (Municipio_SucFondos.val() === "" || Municipio_SucFondos.val() == '0') {
            alert("Ingrese el Municipio de la sucursal");
            Municipio_SucFondos.focus();
            return;
        }
    }

    var FondosEstatusVenta = "";
    if (UserType == 6) {//si es valdiador
        FondosEstatusVenta = $("#StatusSaleFondos").val();
        if (FondosEstatusVenta == 0) {
            alert("Seleccione estatus de la venta");
            $("#StatusSaleFondos").focus();
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
    if (ApellidoPaterno.val() === "") {
        alert("Debe ingresar apellido paterno");
        ApellidoPaterno.focus();
        return;
    }
    if (ApellidoMaterno.val() === "") {
        alert("Debe ingresar apellido materno");
        ApellidoMaterno.focus();
        return;
    }
    if (FechaNacimiento.val() === "") {
        alert("Debe seleccionar fecha de nacimiento");
        FechaNacimiento.focus();
        return;
    }
    if (RFC.val() === "") {
        alert("Debe ingresar un RFC");
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
    if (Estados.val() == 0 || Estados.val() == "") {
        alert("Seleccione un estado");
        Estados.focus();
        return;
    }
    if (Municipios.val() == 0 || Municipios.val() == "") {
        alert("Seleccione un municipio");
        Municipios.focus();
        return;
    }
    if (Colonia.val() == 0 || Colonia.val() == "0") {
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
        TipoInver: document.getElementById("selectTipoInversion").value,
        Folio: FolioFondos.val(),
        Sucursal: NMSucursalFondos.val(),
        FechaVicitaSucursal: FechaVicitaSucursalFondos.val(),
        EstatusVenta: FondosEstatusVenta,
        Division: DivisionFondos.val(),
        Regional: RegionalDivision.val(),
        NumeroSucursal: NumeroSucursalFondos.val()
    };
    datos = json;
    saveFondosData(json);
}


function saveFondosData(json) {
    showLoader();
    $.ajax({
        url: hostInit + '/Client/SaveFondosData',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (response) {
            noValidado("EstadoFondos", "HeadingFondos", "ValidarFondos", "SaveFondos");
            hideLoader();

        },
        error: function (error) {
            console.log("Ocurrio un error al guardar los datos");
            hideLoader();
        }
    });
}

function CambiarTipoVenta_Fondos() {
    var cod = document.getElementById("selectVenta_Fondos").value;
    if (cod == "Sucursal") {
        //Divs con los campos
        document.getElementById("Div_Suc_Fondos_1").hidden = false;
        document.getElementById("Div_Suc_Fondos_2").hidden = false;
    } else {
        //Divs con los campos
        document.getElementById("Div_Suc_Fondos_1").hidden = true;
        document.getElementById("Div_Suc_Fondos_2").hidden = true;
        //Campos
        document.getElementById("EstadoSucursalFondos").value = "0";
        document.getElementById("MunicipioSucursalFondos").value = "0";
        document.getElementById("NMSucursalFondos").value = "";
        document.getElementById("NumeroSucursalFondos").value = "";
        document.getElementById("FechaVicitaSucursalFondos").value = "";
        document.getElementById("RegionalFondos").value = "";

    }
}



function FinloadBranchOfficeFondos(mun, dia) {
    var json = {
        Valor: mun,
        Texto: dia
    }
    $.ajax({
        url: hostInit + '/Client/FinloadBranchOffice',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (response) {
            var tableContent = '';
            sucursalesCnc = new Array();
            if (dia == 1) {
                $("#headerTableSucursal").append(
                    '<th id="colSabAp" class="small">SABADOS AP</th>' +
                    '<th id="colSabCie" class="small">SABADOS CIE</th>'
                );
                for (var i in response) {
                    tableContent += '<tr>';
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSuc_Fondos(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
                    tableContent += '<td class="small">' + response[i].NOMBRE_DISPOSITIVO + '</td>';
                    tableContent += '<td class="small">' + response[i].DIVISION + '</td>';
                    tableContent += '<td class="small">' + response[i].DIRECCION + '</td>';
                    tableContent += '<td class="small">' + response[i].DOMICILIO + '</td>';
                    tableContent += '<td class="small">' + response[i].COLONIA + '</td>';
                    tableContent += '<td class="small">' + response[i].CALLE1 + '</td>';
                    tableContent += '<td class="small">' + response[i].CALLE2 + '</td>';
                    tableContent += '<td class="small">' + response[i].DELEG_MUNIC + '</td>';
                    tableContent += '<td class="small">' + response[i].LUNES_VIERNES_AP + '</td>';
                    tableContent += '<td class="small">' + response[i].LUNES_VIERNES_CIE + '</td>';
                    tableContent += '<td class="small">' + response[i].SABADOS_AP + '</td>';
                    tableContent += '<td class="small">' + response[i].SABADOS_CIE + '</td>';
                    tableContent += '</tr>';
                    sucursalesCnc.push(response[i]);
                }
            } else {
                $("#colSabAp").remove();
                $("#colSabCie").remove();
                for (var i in response) {
                    tableContent += '<tr>';
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSuc_Fondos(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
                    tableContent += '<td class="small">' + response[i].NOMBRE_DISPOSITIVO + '</td>';
                    tableContent += '<td class="small">' + response[i].DIVISION + '</td>';
                    tableContent += '<td class="small">' + response[i].DIRECCION + '</td>';
                    tableContent += '<td class="small">' + response[i].DOMICILIO + '</td>';
                    tableContent += '<td class="small">' + response[i].COLONIA + '</td>';
                    tableContent += '<td class="small">' + response[i].CALLE1 + '</td>';
                    tableContent += '<td class="small">' + response[i].CALLE2 + '</td>';
                    tableContent += '<td class="small">' + response[i].DELEG_MUNIC + '</td>';
                    tableContent += '<td class="small">' + response[i].LUNES_VIERNES_AP + '</td>';
                    tableContent += '<td class="small">' + response[i].LUNES_VIERNES_CIE + '</td>';
                    tableContent += '</tr>';
                    sucursalesCnc.push(response[i]);
                }
            }

            $("#bodyTableSuc_Fondos").html(tableContent);
            $("#myModalSucursales_Fondos").modal("show");
        },
        error: function (reject) {
            console.log(reject);
            //hideLoader();
        }
    });
}

function seleccionarSuc_Fondos(SIRH) {
    for (var i in sucursalesCnc) {
        if (sucursalesCnc[i].SIRH == SIRH) {
            $("#DivisionFondos").val(sucursalesCnc[i].DIVISION);
            $("#RegionalFondos").val(sucursalesCnc[i].DIRECCION);
            $("#NumeroSucursalFondos").val(sucursalesCnc[i].SIRH);
            $("#NMSucursalFondos").val(sucursalesCnc[i].NOMBRE_DISPOSITIVO);
            break;
        }
    }
    $('#myModalSucursales_Fondos').modal('hide');
}



/*----------------------------------------------------------------------------------------------------------------*/



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

function LoadCombosFondos(ID, CATALOGO, idCombo, dato) {
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
function check_val_fondos() {
    if ((document.getElementById('check_fondos').checked) == true) {
        document.getElementById("SaveFondos").hidden = false;
        document.getElementById("panelFondo").hidden = false;
        document.getElementById("SaveCalifFondos").hidden = true;
        document.getElementById("panelCalificacionFONDO").hidden = true;
    }
    else {
        document.getElementById("SaveFondos").hidden = true;
        document.getElementById("panelFondo").hidden = true;
        document.getElementById("SaveCalifFondos").hidden = false;
        document.getElementById("panelCalificacionFONDO").hidden = false;
    }
}

//GUARDA DATOS Y LLENA JSON
function saveCalifFondos() {
    var BalconCalif;
    BalconCalif = $("#comboFondoCalif").val;
    var folio = $("#FolioFondos");
    var Calificacion = document.getElementById("comboFondoCalif").value;

    if (Calificacion == 0) {
        alert("Seleccione una Calificacion");
        alertify.alert('VENTA EXITOSA!', 'FOLIO: ' + folio.val(), function () {
            alertify.success('Ok');
        });
        $("#comboFondoCalif").focus();
        return;
    }
    var json = {
        Folio: folio.val(),
        NumeroCliente: document.getElementById("Cliente").value,
        Calificacion: document.getElementById("comboFondoCalif").value,
    };
    console.log(json);
    saveCalifDataFondo(json);
    datos = json;
}


function saveCalifDataFondo(json) {
    console.log("Entra fondos calif");
    showLoader();

    var xml = new XMLHttpRequest();
    var url = hostInit + "/Client/saveCalificacion";
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            Calificado("EstadoFondos", "HeadingFondos", "SaveCalifFondos", "SaveFondos");
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

    //continuarOfertaFondos();
}

//function continuarOfertaFondos() {
//    Swal.fire({
//        title: 'Deseas continuar calificando la llamada?',
//        icon: 'question',
//        showCancelButton: true,
//        confirmButtonColor: '#3085d6',
//        cancelButtonColor: '#d33',
//        confirmButtonText: 'Continuar'
//    }).then((result) => {
//        if (result.isDismissed) {
//            Swal.fire(
//                'Ingresa otro Folio / Numero Cliente'
//            )
//        }
//    })
//}
