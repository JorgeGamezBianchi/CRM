var datos;
function SetPagareData(FolioPagare, id, FechaVicitaSucursal, DivisionPagare, RegionalDivision, NumeroSucursalPagare,
    EstatusVenta, NMSucursalPagare, Estado_SucPagare, Municipio_SucPagare, Calificacion) {

    LoadCombosPaga(28, 0, "comboPagaCalif", 0);

    $("#IdPagare").val(id);

    console.log(EstatusVenta);
    $("#FolioPagare").val(FolioPagare);
    
    $("#NMSucursalPagare").val(NMSucursalPagare);
    $("#DivisionPagare").val(DivisionPagare);
    $("#RegionalPagare").val(RegionalDivision);
    $("#NumeroSucursalPagare").val(NumeroSucursalPagare);
    $("#EstadoSucursalPagare").val(Estado_SucPagare);
    $("#MunicipioSucursalPagare").val(Municipio_SucPagare);
    $("#selectVenta_Pagare").val("0");
    $("#StatusSalePagare").html(ComboCatalogo());
    document.getElementById("SavePagare").onclick = function () {
        ValidatePagareData();
    }
    document.getElementById("ValidatePagare").onclick = function () {
        ValidarVentaPagare();
    }
    document.getElementById("check_cpc").onclick = function () {
        check_val_paga();
    }
    document.getElementById("SaveCalifCPC").onclick = function () {
        saveCalifPaga();
    }

    document.getElementById('DetalleSucursalPAGARE').addEventListener('click', function () {
        LoadDetailsOffice(document.getElementById('NumeroSucursalPagare').value);
    });

    $("#FechaCatPagare").datepicker(dataCalendar);
    var cal = dataCalendar;
		if (datos === undefined)
	{
	}
	else 	
	{
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
            $("#FechaVicitaSucursalPagare").datepicker(cal);
            var day = currentDate.getDate();
            var monthIndex = currentDate.getMonth();
            var year = currentDate.getFullYear();

            var fecha = year + "/" + (monthIndex + 1) + "/" + day;
            $("#FechaVicitaSucursalPagare").val(fecha);
            noVendido("EstadoPagare", "HeadingPagare", "ValidarPagare", "SavePagare");
            setFieldsPagare("");
            break;
        case 0://ya se vendio, no se ha validado
            $("#FechaVicitaSucursalPagare").val(formatDate(FechaVicitaSucursal));
            $("#FechaVicitaSucursalPagare").datepicker(cal);
            noValidado("EstadoPagare", "HeadingPagare", "ValidarPagare", "SavePagare");

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


            var Id = $("#IdPagare");
            var FolioPagare = $("#FolioPagare");
            var NMSucursalPagare = $("#NMSucursalPagare");
            var FechaVicitaSucursalPagare = $("#FechaVicitaSucursalPagare");
            var DivisionPagare = $("#DivisionPagare");
            var RegionalDivision = $("#RegionalPagare");
            var NumeroSucursalPagare = $("#NumeroSucursalPagare");
            var Estado_SucPagare = $("#EstadoSucursalPagare");
            var Municipio_SucPagare = $("#MunicipioSucursalPagare");

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

                
                Folio: FolioPagare.val(),
                Sucursal: NMSucursalPagare.val(),
                FechaVicitaSucursal: FechaVicitaSucursalPagare.val(),
                EstatusVenta: EstatusVenta,
                Division: DivisionPagare.val(),
                Regional: RegionalDivision.val(),
                NumeroSucursal: NumeroSucursalPagare.val(),
                //Estado_SucPagare: Estado_SucPagare.val(),
                //Municipio_SucPagare: Municipio_SucPagare.val()
            };
            break;
        case 1://venta exitosa
            $("#FechaVicitaSucursalPagare").val(formatDate(FechaVicitaSucursal));
            ventaExitosa("EstadoPagare", "HeadingPagare", "ValidarPagare", "SavePagare");
            setFieldsPagare("enabled");
            break;
    }

    //cargar estados para las sucursales cnc
    estados("EstadoSucursalPagare", Estado, 0);
    LoadMunicipios(Estado, Municipio, 'MunicipioSucursalPagare');
    $("#EstadoSucursalPagare").change(function (evt) {
        var item = $(this).val();
        LoadMunicipios(item, 0, 'MunicipioSucursalPagare');
    });

    $("#MunicipioSucursalPagare").change(function (evt) {
        var item = $(this).val();
        var fechVicSuc = $("#FechaVicitaSucursalPagare").val();
        if (fechVicSuc === "") {
            alert("Seleccione fecha vicita sucursal");
            $("#FechaVicitaSucursalPagare").focus();
            return;
        }

        if (item === "0") {
            alert("Seleccione un municipio");
            $("#MunicipioSucursalPagare").focus();
            return;
        }

        var dia = diaSemana(fechVicSuc);
        if (dia === 'sab') {
            FinloadBranchOfficePagare(item, 1);
        } else {
            FinloadBranchOfficePagare(item, 0);
        }
    });
    //document.getElementById("OpenScriptPagare").onclick = function () {
    //    window.open(hostInit + '/Client/OpenPdf/PAGARE', '_blank', 'location=no, resizable=no', true);
    //}
}

function ValidarVentaPagare() {
    var UserName = $("#UserPagare");
    var Password = $("#PasswordPagare");

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
    var itemSelect = document.getElementById("StatusSalePagare");
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
                datos['EstatusVenta'] = $("#StatusSalePagare").val();
                $.ajax({
                    url: hostInit + '/Client/SavePagareData',
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    data: JSON.stringify(datos),
                    success: function (response) {
                        if (datos['EstatusVenta'] == 2) {//no venta
                            noVendido("EstadoPagare", "HeadingPagare", "ValidarPagare", "SavePagare");
                        } else {
                            ventaExitosa("EstadoPagare", "HeadingPagare", "ValidarPagare", "SavePagare");
                            setFieldsPagare("disabled");
                            $("#collapse11").collapse('hide');
                        }
                        $("#StatusSalePagare").val(0);
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

function setFieldsPagare(value) {
  
    $("#NMSucursalPagare").prop("disabled", value);
    $("#NumeroSucursalPagare").prop("disabled", value);
    $("#FechaVicitaSucursalPagare").prop("disabled", value);
    $("#DivisionPagare").prop("disabled", value);
    $("#RegionalPagare").prop("disabled", value);
}

function ValidatePagareData() {
    if ($("#selectVenta_Pagare").val() == "0") {
        alert("Seleccionar tipo de venta");
        $("#selectVenta_Pagare").focus();
        return;
    }

    var Id = $("#IdPagare");
   
    var FolioPagare = $("#FolioPagare");
   
    var NMSucursalPagare = $("#NMSucursalPagare");
   
    var FechaVicitaSucursalPagare = $("#FechaVicitaSucursalPagare");
    var DivisionPagare = $("#DivisionPagare");
    var RegionalDivision = $("#RegionalPagare");
    var NumeroSucursalPagare = $("#NumeroSucursalPagare");
    var Estado_SucPagare = $("#EstadoSucursalPagare");
    var Municipio_SucPagare = $("#MunicipioSucursalPagare");

    if ($("#selectVenta_Pagare").val() == "Sucursal") {
        if (FechaVicitaSucursalPagare.val() === "") {
            alert("Seleccione FechaVicitaSucursalPagare");
            FechaVicitaSucursalPagare.focus();
            return;
        }
        if (DivisionPagare.val() === "") {
            alert("Ingrese DivisionPagare");
            DivisionPagare.focus();
            return;
        }
        if (RegionalDivision.val() === "") {
            alert("Ingrese RegionalDivision");
            RegionalDivision.focus();
            return;
        }
        if (NumeroSucursalPagare.val() === "") {
            alert("Ingrese NumeroSucursalPagare");
            NumeroSucursalPagare.focus();
            return;
        }
        if (Estado_SucPagare.val() === "") {
            alert("Ingrese el Estado de la sucursal");
            Estado_SucPagare.focus();
            return;
        }
        if (Municipio_SucPagare.val() === "") {
            alert("Ingrese el Municipio de la sucursal");
            Municipio_SucPagare.focus();
            return;
        }
    }
    
    var PagareEstatusVenta = "";
    if (UserType == 6) {//si es valdiador
        PagareEstatusVenta = $("#StatusSalePagare").val();
        if (PagareEstatusVenta == 0) {
            alert("Seleccione estatus de la venta");
            $("#StatusSalePagare").focus();
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

       
        Folio: FolioPagare.val(),
        Sucursal: NMSucursalPagare.val(),
        FechaVicitaSucursal: FechaVicitaSucursalPagare.val(),
        EstatusVenta: PagareEstatusVenta,
        Division: DivisionPagare.val(),
        Regional: RegionalDivision.val(),
        NumeroSucursal: NumeroSucursalPagare.val()
    };
    datos = json;
    savePagareData(json);
}


function savePagareData(json) {
    showLoader();
    $.ajax({
        url: hostInit + '/Client/SavePagareData',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (response) {
            noValidado("EstadoPagare", "HeadingPagare", "ValidarPagare", "SavePagare");
            hideLoader();

        },
        error: function (error) {
            console.log("Ocurrio un error al guardar los dao");
            hideLoader();
        }
    });
}

function CambiarTipoVenta_Pagare() {
    var cod = document.getElementById("selectVenta_Pagare").value;
    if (cod == "Sucursal") {
        //Divs con los campos
        document.getElementById("Div_Suc_Pagare_1").hidden = false;
        document.getElementById("Div_Suc_Pagare_2").hidden = false;
    } else {
        //Divs con los campos
        document.getElementById("Div_Suc_Pagare_1").hidden = true;
        document.getElementById("Div_Suc_Pagare_2").hidden = true;
        //Campos
        document.getElementById("EstadoSucursalPagare").value = "value";
        document.getElementById("MunicipioSucursalPagare").value = "value";
        document.getElementById("NMSucursalPagare").value = "";
        document.getElementById("NumeroSucursalPagare").value = "";
        document.getElementById("FechaVicitaSucursalPagare").value = "";
        document.getElementById("RegionalPagare").value = "";

    }
}



function FinloadBranchOfficePagare(mun, dia) {
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
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSuc_Pagare(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
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
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSuc_Pagare(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
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

            $("#bodyTableSuc_Pagare").html(tableContent);
            $("#myModalSucursales_Pagare").modal("show");
        },
        error: function (reject) {
            console.log(reject);
            //hideLoader();
        }
    });
}

function seleccionarSuc_Pagare(SIRH) {
    for (var i in sucursalesCnc) {
        if (sucursalesCnc[i].SIRH == SIRH) {
            $("#DivisionPagare").val(sucursalesCnc[i].DIVISION);
            $("#RegionalPagare").val(sucursalesCnc[i].DIRECCION);
            $("#NumeroSucursalPagare").val(sucursalesCnc[i].SIRH);
            $("#NMSucursalPagare").val(sucursalesCnc[i].NOMBRE_DISPOSITIVO);
            break;
        }
    }
    $('#myModalSucursales_Pagare').modal('hide');
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

function LoadCombosPaga(ID, CATALOGO, idCombo, dato) {
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
function check_val_paga() {
    if ((document.getElementById('check_pagare').checked) == true) {
        document.getElementById("SavePagare").hidden = false;
        document.getElementById("panelPagare").hidden = false;
        document.getElementById("SaveCalifPaga").hidden = true;
        document.getElementById("panelCalificacionPaga").hidden = true;
    }
    else {
        document.getElementById("SavePagare").hidden = true;
        document.getElementById("panelPagare").hidden = true;
        document.getElementById("SaveCalifPaga").hidden = false;
        document.getElementById("panelCalificacionPaga").hidden = false;
    }
}

//GUARDA DATOS Y LLENA JSON
function saveCalifPaga() {
    var BalconCalif;
    BalconCalif = $("#comboPagaCalif").val;
    var folio = $("#FolioPagare");
    var Calificacion = document.getElementById("comboPagaCalif").value;

    if (Calificacion == 0) {
        alert("Seleccione una Calificacion");
        $("#comboPagaCalif").focus();
        return;
    }
    var json = {
        Folio: folio.val(),
        NumeroCliente: document.getElementById("Cliente").value,
        Calificacion: document.getElementById("comboPagaCalif").value,
    };
    console.log(json);
    saveCalifDataPaga(json);
    datos = json;
}


function saveCalifDataPaga(json) {
    console.log("Entra savePaga calif");
    showLoader();

    var xml = new XMLHttpRequest();
    var url = hostInit + "/Client/saveCalificacion";
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            Calificado("EstadoPagare", "HeadingPagare", "SaveCalifPaga", "SavePagare");
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

    //continuarOfertaPaga();
}

function continuarOfertaPaga() {
    Swal.fire({
        title: 'Deseas continuar con la oferta?',
        //text: "You won't be able to revert this!",
        icon: 'question',
        width: '50%',
        showCancelButton: true,
        confirmButtonColor: '#5564eb',
        cancelButtonColor: '#ff0500',
        confirmButtonText: 'Si, continuar!'
    }).then((result) => {
        if (result.isDismissed) {
            window.location = window.location();
        }
    })
}
