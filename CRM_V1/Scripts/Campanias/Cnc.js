var datos;

function SetCncData(id, FolioCNC,
    Linea36CNC, Pago36CNC,
    Linea48CNC, Pago48CNC,
    Linea60CNC, Pago60CNC,
    PlazoCNC, TasaCNC, MontoPromesaCNC, FechaVisitaSucursalCNC,
    SucursalCNC, NumeroSucursalCNC, DivisionCNC, RegionalCNC,
    EstatusVenta, Estado, Municipio, CATCNC, FechaCATNCN,
    Linea24, Pago24, Pago18CNC, Pago72CNC, Calif) {

    LoadCombosCNC(29, 0, "comboCNCCalif", 0);
    LoadCombos3(29, 0, "cmbCNCCalif", 0);
    $("#IdCampana").val(id);
    $("#FolioCNC").val(FolioCNC);
    $("#Linea24CNC").val(Linea36CNC);
    $("#Linea36CNC").val(Linea36CNC);
    $("#Linea48CNC").val(Linea36CNC);
    $("#Linea60CNC").val(Linea36CNC);
    $("#Pago36CNC").val(Pago36CNC);
    $("#Pago48CNC").val(Pago48CNC);
    $("#Pago60CNC").val(Pago60CNC);
    $("#Pago24CNC").val(Pago24);
    $("#Pago18CNC").val(Pago18CNC);
    $("#Pago72CNC").val(Pago72CNC);
    $("#PlazoCNC").val(PlazoCNC);
    $("#TasaCNC").val(TasaCNC);
    $("#MontoPromesaCNC").val(MontoPromesaCNC);
    $("#SucursalCNC").val(SucursalCNC);
    $("#NumeroSucursalCNC").val(NumeroSucursalCNC);
    $("#DivisionCNC").val(DivisionCNC);
    $("#RegionalCNC").val(RegionalCNC);
    $("#CATCNC").val(CATCNC);
    $("#FechaCATCNC").val(FechaCATNCN);
    document.getElementById("selectVentaCNC").value = "Seleccione...";

    $("#StatusSaleCnc").html(ComboCatalogo());

    document.getElementById("SaveCnc").onclick = function () {
        ValidateCncData();
    }
    document.getElementById("ValidateCnc").onclick = function () {
        ValidarCnc();
    }
    document.getElementById("check_cnc").onclick = function () {
        check_val_cnc();
    }
    document.getElementById("SaveCalifCNC").onclick = function () {
        saveCalif3();
    }
    document.getElementById("DetalleSucursalCNC").addEventListener("click", function () {
        LoadDetailsOffice(document.getElementById("NumeroSucursalCNC").value);
    });

    var cal = dataCalendar;
    if (datos === undefined) {
    }
    else {
        delete datos;
    }
    switch (EstatusVenta) {
        case -1://no se ha tocado
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
            $("#FechaVisitaSucursalCNC").val(formatDate(FechaVisitaSucursalCNC));
            $("#FechaVisitaSucursalCNC").datepicker(cal);
            noValidado("EstadoCnc", "HeadingCnc", "ValidarCnc", "SaveCnc");
            var Id = $("#IdCampana");
            var FolioCNC = $("#FolioCNC");
            var Linea36CNC = $("#Linea36CNC");
            var Pago36CNC = $("#Pago36CNC");
            var Linea48CNC = $("#Linea48CNC");
            var Pago48CNC = $("#Pago48CNC");
            var Linea60CNC = $("#Linea60CNC");
            var Pago60CNC = $("#Pago60CNC");
            var PlazoCNC = $("#PlazoCNC");
            var TasaCNC = $("#TasaCNC");
            var MontoPromesaCNC = $("#MontoPromesaCNC");
            var FechaVisitaSucursalCNC = $("#FechaVisitaSucursalCNC");
            var SucursalCNC = $("#SucursalCNC");
            var NumeroSucursalCNC = $("#NumeroSucursalCNC");
            var Division = $("#DivisionCNC");
            var Regional = $("#RegionalCNC");
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
                Folio: FolioCNC.val(),
                Linea36: Linea36CNC.val(),
                Pago36: Pago36CNC.val(),
                Linea48: Linea48CNC.val(),
                Pago48: Pago48CNC.val(),
                Linea60: Linea60CNC.val(),
                Pago60: Pago60CNC.val(),
                Plazo: PlazoCNC.val(),
                Tasa: TasaCNC.val(),
                MontoPromesa: MontoPromesaCNC.val(),
                FechaVicitaSucursal: FechaVisitaSucursalCNC.val(),
                Sucursal: SucursalCNC.val(),
                NumeroSucursal: NumeroSucursalCNC.val(),
                Division: Division.val(),
                DirRegional: Regional.val()
            };
            break;
        case 1://venta exitosa
            $("#FechaVisitaSucursalCNC").val(formatDate(FechaVisitaSucursalCNC));
            ventaExitosa("EstadoCnc", "HeadingCnc", "ValidarCnc", "SaveCnc");
            setFieldsCnc("enabled");
            break;
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
            $("#FechaVisitaSucursalCNC").datepicker(cal);
            var day = currentDate.getDate();
            var monthIndex = currentDate.getMonth();
            var year = currentDate.getFullYear();

            var fecha = year + "/" + (monthIndex + 1) + "/" + day;
            $("#FechaVisitaSucursalCNC").val(fecha);
            noVendido("EstadoCnc", "HeadingCnc", "ValidarCnc", "SaveCnc");
            setFieldsCnc("");
            break;
    }

    //cargar estados para las sucursales cnc
    estados("EstadoSucursalSelect", Estado, 0);
    LoadMunicipios(Estado, Municipio, 'MunicipioSucursalSelect');
    $("#EstadoSucursalSelect").change(function (evt) {
        var item = $(this).val();
        LoadMunicipios(item, 0, 'MunicipioSucursalSelect');
    });

    $("#MunicipioSucursalSelect").change(function (evt) {
        var item = $(this).val();
        var fechVicSuc = $("#FechaVisitaSucursalCNC").val();
        if (fechVicSuc === "") {
            alert("Seleccione fecha visita sucursal");
            $("#FechaVisitaSucursalCNC").focus();
            return;
        }

        if (item === "0") {
            alert("Seleccione un municipio");
            $("#MunicipioSucursalSelect").focus();
            return;
        }

        var dia = diaSemana(fechVicSuc);
        if (dia === 'sab') {
            FinloadBranchOfficeCNC(item, 1);
        } else {
            FinloadBranchOfficeCNC(item, 0);
        }
    });
    //ValidarGrupo();
}


function seleccionarSuc(SIRH) {
    for (var i in sucursalesCnc) {
        if (sucursalesCnc[i].SIRH == SIRH) {
            $("#DivisionCNC").val(sucursalesCnc[i].DIVISION);
            $("#RegionalCNC").val(sucursalesCnc[i].DIRECCION);
            $("#NumeroSucursalCNC").val(sucursalesCnc[i].SIRH);
            $("#SucursalCNC").val(sucursalesCnc[i].NOMBRE_DISPOSITIVO);
            break;
        }
    }
    $('#myModalSucursales').modal('hide');
}

function FinloadBranchOfficeCNC(mun, dia) {
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
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSuc(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
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
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSuc(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
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

            $("#bodyTableSuc").html(tableContent);
            $("#myModalSucursales").modal("show");
        },
        error: function (reject) {
            console.log(reject);
            //hideLoader();
        }
    });
}

function setFieldsCnc(value) {
    $("#FechaVisitaSucursalCNC").prop("disabled", value);
    $("#SucursalCNC").prop("disabled", value);
    $("#NumeroSucursalCNC").prop("disabled", value);
    $("#DivisionCNC").prop("disabled", value);
    $("#RegionalCNC").prop("disabled", value);
    $("#EstadoSucursalSelect").prop("disabled", value);
    $("#MunicipioSucursalSelect").prop("disabled", value);
}

function ValidateCncData() {
    var Id = $("#IdCampana");
    var FolioCNC = $("#FolioCNC");
    var Linea36CNC = $("#Linea36CNC");
    var Pago36CNC = $("#Pago36CNC");
    var Linea48CNC = $("#Linea48CNC");
    var Pago48CNC = $("#Pago48CNC");
    var Linea60CNC = $("#Linea60CNC");
    var Pago60CNC = $("#Pago60CNC");
    var PlazoCNC = $("#PlazoCNC");
    var TasaCNC = $("#TasaCNC");
    var MontoPromesaCNC = $("#MontoPromesaCNC");
    var FechaVisitaSucursalCNC = $("#FechaVisitaSucursalCNC");
    var SucursalCNC = $("#SucursalCNC");
    var NumeroSucursalCNC = $("#NumeroSucursalCNC");
    var Division = $("#DivisionCNC");
    var Regional = $("#RegionalCNC");
    var Linea24CNC = $("#Linea24CNC");
    var Pago24CNC = $("#Pago24CNC");
    var SelectVentaCNC = $("#selectVentaCNC");

    if (FolioCNC.val() === "") {
        alert("Debe ingresar el folio del producto");
        FolioCNC.focus();
        return;
    }
    if (Linea36CNC.val() === "") {
        alert("Ingrese linea 36");
        Linea36CNC.focus();
        return;
    }
    if (Pago36CNC.val() === "") {
        alert("Ingrese pago 36");
        Pago36CNC.focus();
        return;
    }
    if (Linea48CNC.val() === "") {
        alert("Ingrese linea 48");
        Linea48CNC.focus();
        return;
    }
    if (Pago48CNC.val() === "") {
        alert("Ingrese pago 48");
        Pago48CNC.focus();
        return;
    }
    if (Linea60CNC.val() === "") {
        alert("Ingrese linea 60");
        Linea60CNC.focus();
        return;
    }
    if (Pago60CNC.val() === "") {
        alert("Ingrese pago 60");
        Pago60CNC.focus();
        return;
    }
    if (PlazoCNC.val() === "") {
        alert("Ingrese plazo");
        PlazoCNC.focus();
        return;
    }
    if (MontoPromesaCNC.val() === "") {
        alert("Ingrese monto promesa");
        MontoPromesaCNC.focus();
        return;
    }

    if (SelectVentaCNC.val() === "Sucursal" || SelectVentaCNC.val() === "Venta sin cita") {
        if (FechaVisitaSucursalCNC.val() === "") {
            alert("Ingrese fecha visita sucursal");
            FechaVisitaSucursalCNC.focus();
            return;
        }
        if (SucursalCNC.val() === "") {
            alert("Ingrese sucursal");
            SucursalCNC.focus();
            return;
        }
        if (NumeroSucursalCNC.val() === "") {
            alert("Ingrese numero sucursal");
            NumeroSucursalCNC.focus();
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
    } else if (SelectVentaCNC.val() === "Seleccione...") {
        alert("Ingrese tipo de venta");
        $("#selectVentaCNC").focus();
        return
    }


    var CncEstatusVenta = "";
    if (UserType == 6) {//si es valdiador
        CncEstatusVenta = $("#CncEstatusVenta").val();
        if (CncEstatusVenta == 0) {
            alert("Seleccione estatus de la venta");
            $("#CncEstatusVenta").focus();
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
    var SeleccionaventaCNC = $("#selectVentaCNC");

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
        Folio: FolioCNC.val(),
        Linea36: Linea36CNC.val(),
        Pago36: Pago36CNC.val(),
        Linea48: Linea48CNC.val(),
        Pago48: Pago48CNC.val(),
        Linea60: Linea60CNC.val(),
        Pago60: Pago60CNC.val(),
        Plazo: PlazoCNC.val(),
        Tasa: TasaCNC.val(), 
        MontoPromesa: MontoPromesaCNC.val(),
        FechaVicitaSucursal: FechaVisitaSucursalCNC.val(),
        Sucursal: SucursalCNC.val(),
        NumeroSucursal: NumeroSucursalCNC.val(),
        Division: Division.val(),
        DirRegional: Regional.val(),
        EstatusVenta: CncEstatusVenta,
        Linea24: Linea24CNC.val(),
        Pago24: Pago24CNC.val(),
        SeleccionaVentaCNC: SeleccionaventaCNC.val()
    };
    datos = json;
    console.log(json);
    saveCncData(json);
}

function saveCncData(json) {
    showLoader();
    $.ajax({
        url: hostInit + '/Client/SaveCncData',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (response) {
            //cambiar color
            noValidado("EstadoCnc", "HeadingCnc", "ValidarCnc", "SaveCnc");
            hideLoader();
            //ValidarGrupo();
        },
        error: function (error) {
            console.log("Ocurrio un error al guardar los datos");
            hideLoader();
        }
    });
}

function ValidarCnc() {
    var UserName = $("#UserCnc");
    var Password = $("#PasswordCnc");
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
    var itemSelect = document.getElementById("StatusSaleCnc");
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

                let autentica = document.getElementById('lblFechaCNC').textContent;
                datos['autentica'] = autentica;

                let califCNC = document.getElementById('cmbCNCCalif').value;
                datos['ID_Calificacion'] = document.getElementById('cmbCNCCalif').value;
                // alert(document.getElementById('cmbCNCCalif').value);

                datos['EstatusVenta'] = $("#StatusSaleCnc").val();
                $.ajax({
                    url: hostInit + '/Client/SaveCncData',
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    data: JSON.stringify(datos),
                    success: function (response) {
                        if (response == true) {
                            if (datos['EstatusVenta'] == 2) {//no venta
                                noVendido("EstadoCnc", "HeadingCnc", "ValidarCnc", "SaveCnc");
                                var folio = $("#FolioCNC");
                                alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });
                                //MensajeVtaCNC();
                                //ValidarGrupo();
                            } else {
                                ventaExitosa("EstadoCnc", "HeadingCnc", "ValidarCnc", "SaveCnc");
                                setFieldsCnc("disabled");
                                $("#collapse2").collapse('hide');
                                var folio = $("#FolioCNC");
                                alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });
                                //MensajeVtaCNC();
                            }
                            $("#StatusSaleCnc").val(0);
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

function CambiarTipoVentaCNC() {
    var cod = document.getElementById("selectVentaCNC").value;
    if (cod == "Sucursal" || cod == "Venta sin cita") {
        document.getElementById("visitaSucursalCNC").hidden = false;
        document.getElementById("divEstadoCNC").hidden = false;
        document.getElementById("divMunicipioCNC").hidden = false;
        document.getElementById("divSucursal2CNC").hidden = false;

    } else {
        document.getElementById("visitaSucursalCNC").hidden = true;
        document.getElementById("divEstadoCNC").hidden = true;
        document.getElementById("divMunicipioCNC").hidden = true;
        document.getElementById("divSucursal2CNC").hidden = true;
    }
}

function LoadCombos3(ID, CATALOGO, idCombo, dato) {
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

function LoadCombosCNC(ID, CATALOGO, idCombo, dato) {
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



////VALIDAR CHECKBOX DE SI/NO VENTA
function check_val_cnc() {
    if ((document.getElementById('check_cnc').checked) == true) {
        document.getElementById("SaveCnc").hidden = false;
        document.getElementById("panelCNC").hidden = false;
        document.getElementById("SaveCalifCNC").hidden = true;
        document.getElementById("panelCalificacionCNC").hidden = true;
    }
    else {
        document.getElementById("SaveCnc").hidden = true;
        document.getElementById("panelCNC").hidden = true;
        document.getElementById("SaveCalifCNC").hidden = false;
        document.getElementById("panelCalificacionCNC").hidden = false;
    }
}

//GUARDAR DATOS Y LLENAR JSON
function saveCalif3() {
    var BalconCalif;
    BalconCalif = $("#comboCNCCalif").val;
    var folio = $("#FolioCNC");
    var Calificacion = document.getElementById("comboCNCCalif").value;

    if (Calificacion == 0) {
        alert("Seleccione una Calificacion");
        $("#comboCNCCalif").focus();
        return;
    }
    var json = {
        Folio: folio.val(),
        NumeroCliente: document.getElementById("Cliente").value,
        Calificacion: document.getElementById("comboCNCCalif").value,
    };
    console.log(json);
    saveCalifDataCNC(json);
    datos = json;
}


function saveCalifDataCNC(json) {
    showLoader();

    var xml = new XMLHttpRequest();
    var url = hostInit + "/Client/saveCalificacion";
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            Calificado("EstadoCnc", "HeadingCnc", "SaveCalifCNC", "SaveCnc");
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
}

function SigueOfertaCNC() {
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

function ValidaFechaNacCNC() {
    //Console.log("entro al evento onchange del piker");

    let fechaNac = document.getElementById('FechaNacCNC').value;   // de base 
    let Nacimiento = document.getElementById('FechaNacimiento').value; // de 

    let partes = Nacimiento.split("/");
    let anio = partes[0];
    let mes = partes[1];
    let dia = partes[2];

    var fechaformat = anio + "-" + mes + "-" + dia;

    if (fechaformat == fechaNac) {
        document.getElementById('lblFechaCNC').hidden = false;
        document.getElementById('lblFechaCNC').innerHTML = "FECHA VALIDA";
        document.getElementById('lblFechaCNC').style = "color:green";
    } else {
        document.getElementById('lblFechaCNC').hidden = false;
        document.getElementById('lblFechaCNC').innerHTML = "FECHA NO VALIDA, SOLICITA EN SUCURSAL VALIDAR DATOS";
        document.getElementById('lblFechaCNC').style = "color:red";
    }
}

function EstatusVenta() {
    var seleccion = document.getElementById("StatusSaleCnc").value;
    console.log(seleccion);
    if (seleccion == 1) {
        cmbCNCCalif.hidden = false;
        cmbCNCCalif.disabled = true;
        ValidateCnc.disabled = false;
    }
    else {
        cmbCNCCalif.disabled = false;
    }
}


function MensajeVtaCNC() {

    var FolioCNC = document.getElementById("FolioCNC").value;

    Swal.fire({
        title: 'Venta Exitsa!!  FOLIO: ' + document.getElementById("FolioCNC").value,
        text: "Felicidades !",
        icon: 'success',
        width: '50%',
        showCancelButton: false,
        confirmButtonColor: '#5564eb',
        cancelButtonColor: '#ff0500',
    })
}