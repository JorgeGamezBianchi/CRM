var datos;
function SetCpcData(id, FolioCPC, MontoMaximo24CPC, Pago24CPC,
    MontoMaximo36CPC, Pago36CPC, MontoMaximo48CPC, Pago48CPC,
    MontoMaximo60CPC, Pago60CPC, TasaCPC, PlazoCPC, MontoPromesaCPC,
    FechaVicitaSucursalCPC, SucursalCPC, NumeroSucursalCPC,
    RegionalCPC, DivisionCPC, EstatusVenta, EstadoSucursal, MunicipioSucursal,
    OfertaCPC, CAT, Fecha_cat, Calificacion, Calif, FechaNacCPC, label, ) {

    LoadCombosCPC(2, 0, "comboCPCCalif", 0);
    LoadCombos2(2, 0, "cmbCPCCalif", 0);

    //Modificacion del 19/11/2021 Se puso validacion en los pagos y el plazo, en caso de traer 0 dejar en blanco
    $("#IdCpc").val(id);
    $("#FolioCPC").val(FolioCPC);
    $("#MontoMaximo24CPC").val(MontoMaximo24CPC);
    if (Pago24CPC == 0) {
        $("#Pago24CPC").val("");
    } else {
        $("#Pago24CPC").val(Pago24CPC);
    }
    $("#MontoMaximo36CPC").val(MontoMaximo36CPC);
    if (Pago36CPC == 0) {
        $("#Pago36CPC").val("");
    } else {
        $("#Pago36CPC").val(Pago36CPC);
    }
    $("#MontoMaximo48CPC").val(MontoMaximo48CPC);
    if (Pago48CPC == 0) {
        $("#Pago48CPC").val("");
    } else {
        $("#Pago48CPC").val(Pago48CPC);
    }

    //(1) Mantenimiento 04 marzo 2019
    $("#MontoMaximo60CPC").val(MontoMaximo60CPC);
    if (Pago60CPC == 0) {
        $("#Pago60CPC").val("");
    } else {
        $("#Pago60CPC").val(Pago60CPC);
    }

    $("#TasaCPC").val(TasaCPC);
    if (PlazoCPC == 0) {
        $("#PlazoCPC").val("");
    } else {
        $("#PlazoCPC").val(PlazoCPC);
    }
    $("#MontoPromesaCPC").val(MontoPromesaCPC);
    $("#SucursalCPC").val(SucursalCPC);
    $("#NumeroSucursalCPC").val(NumeroSucursalCPC);
    $("#RegionalCPC").val(RegionalCPC);

    $("#DivisionCPC").val(DivisionCPC);
    document.getElementById("selectVenta").value = "Seleccione...";


    //(1) Mantenimiento 15 marzo 2019
    $("#OfertaCPC").val(OfertaCPC);
    $("#CAT").val(CAT);

    //Mantenimiento 28/10/2021 se agrego la fecha del cat
    $("#FechaCatC").val(Fecha_cat);
    //cargar estados para las sucursales cnc COMENTAR ESO 07/03/2023
    estados("EstadoSucursalCPC", EstadoSucursal, 0);
    LoadMunicipios(EstadoSucursal, MunicipioSucursal, 'MunicipioSucursalCPC');
    $("#EstadoSucursalCPC").change(function (evt) {
        var item = $(this).val();
        LoadMunicipios(item, 0, 'MunicipioSucursalCPC');
    });

    $("#MunicipioSucursalCPC").change(function (evt) {
        var item = $(this).val();
        var fechVicSuc = $("#FechaVicitaSucursalCPC").val();
        if (fechVicSuc === "") {
            alert("Seleccione fecha vicita sucursal");
            $("#FechaVicitaSucursalCPC").focus();
            return;
        }

        if (item === "0") {
            alert("Seleccione un municipio");
            $("#MunicipioSucursalCPC").focus();
            return;
        }

        var dia = diaSemana(fechVicSuc);
        if (dia === 'sab') {
            FinloadBranchOfficeCPC(item, 1);
        } else {
            FinloadBranchOfficeCPC(item, 0);
        }
    })

    $("#StatusSaleCpc").html(ComboCatalogo());
    document.getElementById("SaveCpc").onclick = function () {
        ValidateCpcData();
    };
    document.getElementById("ValidateCpc").onclick = function () {
        ValidarCpc();
    }
    document.getElementById("check_cpc").onclick = function () {
        check_val_cpc();
    }
    document.getElementById("SaveCalifCPC").onclick = function () {
        saveCalifCPC();
    }

    document.getElementById("DetalleSucursalCPC").addEventListener('click', function () {
        LoadDetailsOffice(document.getElementById('NumeroSucursalCPC').value);
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
            var day = currentDate.getDate();
            var monthIndex = currentDate.getMonth();
            var year = currentDate.getFullYear();
            var fecha = year + "/" + (monthIndex + 1) + "/" + day;

            $("#FechaVicitaSucursalCPC").datepicker(cal);
            $("#FechaVicitaSucursalCPC").val(fecha);
            noVendido("EstadoCpc", "HeadingCpc", "ValidarCpc", "SaveCpc");
            setFieldsCpc("");
            break;
        case 0://ya se vendio, no se ha validado
            $("#FechaVicitaSucursalCPC").val(formatDate(FechaVicitaSucursalCPC));
            $("#FechaVicitaSucursalCPC").datepicker(cal);
            noValidado("EstadoCpc", "HeadingCpc", "ValidarCpc", "SaveCpc");

            var Id = $("#IdCpc");
            var FolioCPC = $("#FolioCPC");

            //(1) Mantenimiento 04 marzo 2019
            var MontoMaximo60CPC = $("#MontoMaximo60CPC");
            var Pago60CPC = $("#Pago60CPC");

            var MontoMaximo24CPC = $("#MontoMaximo24CPC");
            var Pago24CPC = $("#Pago24CPC");
            var MontoMaximo36CPC = $("#MontoMaximo36CPC");
            var Pago36CPC = $("#Pago36CPC");
            var MontoMaximo48CPC = $("#MontoMaximo48CPC");
            var Pago48CPC = $("#Pago48CPC");
            var TasaCPC = $("#TasaCPC");
            var PlazoCPC = $("#PlazoCPC");
            var MontoPromesaCPC = $("#MontoPromesaCPC");
            var FechaVicitaSucursalCPC = $("#FechaVicitaSucursalCPC");
            var SucursalCPC = $("#SucursalCPC");
            var NumeroSucursalCPC = $("#NumeroSucursalCPC");
            var RegionalCPC = $("#RegionalCPC");

            var DivisionCPC = $("#DivisionCPC");
            //(1) Mantenimiento 15 marzo 2019
            var OfertaCPC = $("#OfertaCPC");

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

            //(1) Mantenimiento 04 marzo 2019
            //Mantenimiento 15 marzo 2019 Oferta: OfertaCPC.val(),
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
                Folio: FolioCPC.val(),
                MontoMax24: MontoMaximo24CPC.val(),
                Pago24: Pago24CPC.val(),
                MontoMax36: MontoMaximo36CPC.val(),
                Pago36: Pago36CPC.val(),
                MontoMax48: MontoMaximo48CPC.val(),
                Pago48: Pago48CPC.val(),
                MontoMax12: MontoMaximo60CPC.val(),
                Pago12: Pago60CPC.val(),
                Tasa: TasaCPC.val(),
                Plazo: PlazoCPC.val(),
                MontoPromesa: MontoPromesaCPC.val(),
                FechaVicitaSucursal: FechaVicitaSucursalCPC.val(),
                Sucursal: SucursalCPC.val(),
                NumeroSucursal: NumeroSucursalCPC.val(),

                Division: DivisionCPC.val(),
                Oferta: OfertaCPC.val(),

                Regional: RegionalCPC.val(),
                EstatusVenta: EstatusVenta
            };

            break;
        case 1://venta exitosa
            $("#FechaVicitaSucursalCPC").val(formatDate(FechaVicitaSucursalCPC));
            ventaExitosa("EstadoCpc", "HeadingCpc", "ValidarCpc", "SaveCpc");
            setFieldsCpc("enabled");
            break;
    }

    //document.getElementById("OpenScriptCpc").onclick = function () {
    //    window.open(hostInit + '/Client/OpenPdf/CPC', '_blank', 'location=no, resizable=no', true);
    //}
    //ValidarGrupo();
}

function ValidaFechaNac2() {
    let fechaNac = document.getElementById('FechaNacCPC').value;   // FECHA DE DATEPICKER
    let Nacimiento = document.getElementById('FechaNacimiento').value; // FECHA DE BD
    let partes = Nacimiento.split("/");
    let anio = partes[0];
    let mes = partes[1];
    let dia = partes[2];
    var fechaformat = anio + "-" + mes + "-" + dia;

    if (fechaformat == fechaNac) {
        document.getElementById('lblFecha').hidden = false;
        document.getElementById('lblFecha').innerHTML = "FECHA VALIDA";
        document.getElementById('lblFecha').style = "color:green";
    } else {
        document.getElementById('lblFecha').hidden = false;
        document.getElementById('lblFecha').innerHTML = "FECHA NO VALIDA, SOLICITA EN SUCURSAL VALIDAR DATOS";
        document.getElementById('lblFecha').style = "color:red";
    }
}


function setFieldsCpc(value) {
    //$("#MontoMaximo24CPC").prop("disabled", value);
    //$("#Pago24CPC").prop("disabled", value);
    //$("#MontoMaximo36CPC").prop("disabled", value);
    //$("#Pago36CPC").prop("disabled", value);
    //$("#MontoMaximo48CPC").prop("disabled", value);
    //$("#Pago48CPC").prop("disabled", value);

    //(1) Mantenimiento 04 marzo 2019
    //$("#MontoMaximo60CPC").prop("disabled", value);
    //$("#Pago60CPC").prop("disabled", value);

    //$("#TasaCPC").prop("disabled", value);
    //$("#PlazoCPC").prop("disabled", value);
    //$("#MontoPromesaCPC").prop("disabled", value);
    $("#FechaVicitaSucursalCPC").prop("disabled", value);
    $("#SucursalCPC").prop("disabled", value);
    $("#NumeroSucursalCPC").prop("disabled", value);
    $("#RegionalCPC").prop("disabled", value);

    $("#DivisionCPC").prop("disabled", value);
    $("#OfertaCPC").prop("disabled", value);

    $("#EstadoSucursalCpc").prop("disabled", value);
    $("#MunicipioSucursalCpc").prop("disabled", value);
}

//Mantenimiento 15 marzo 2019 Oferta: OfertaCPC.val(),
function ValidateCpcData() {

    var Id = $("#IdCpc");
    var FolioCPC = $("#FolioCPC");
    var MontoMaximo60CPC = $("#MontoMaximo60CPC");
    var Pago60CPC = $("#Pago60CPC");
    var MontoMaximo24CPC = $("#MontoMaximo24CPC");
    var Pago24CPC = $("#Pago24CPC");
    var MontoMaximo36CPC = $("#MontoMaximo36CPC");
    var Pago36CPC = $("#Pago36CPC");
    var MontoMaximo48CPC = $("#MontoMaximo48CPC");
    var Pago48CPC = $("#Pago48CPC");
    var TasaCPC = $("#TasaCPC");
    var PlazoCPC = $("#PlazoCPC");
    var MontoPromesaCPC = $("#MontoPromesaCPC");
    var FechaVicitaSucursalCPC = $("#FechaVicitaSucursalCPC");
    var SucursalCPC = $("#SucursalCPC");
    var NumeroSucursalCPC = $("#NumeroSucursalCPC");
    var RegionalCPC = $("#RegionalCPC");

    var DivisionCPC = $("#DivisionCPC");
    var OfertaCPC = $("#OfertaCPC");
    var SelectVenta = $("#selectVenta");

    if (FolioCPC.val() === "") {
        alert("Debe ingresar el folio del producto");
        FolioCPC.focus();
        return;
    }
    // if (MontoMaximo60CPC.val() === "") {
    // alert("Debe ingresar la fecha 1");
    // MontoMaximo60CPC.focus();
    // return;
    // }
    // if (Pago60CPC.val() === "") {
    // alert("Ingrese producto");
    // Pago60CPC.focus();
    // return;
    // }
    // if (MontoMaximo24CPC.val() === "") {
    // alert("Debe ingresar linea actual");
    // MontoMaximo24CPC.focus();
    // return;
    // }
    // if (Pago24CPC.val() === "") {
    // alert("Debe ingresar liena incremento");
    // Pago24CPC.focus();
    // return;
    // }
    // if (MontoMaximo36CPC.val() === "") {
    // alert("Debe ingresar producto 2");
    // MontoMaximo36CPC.focus();
    // return;
    // }
    // if (Pago36CPC.val() === "") {
    // alert("Ingrese producto 3");
    // Pago36CPC.focus();
    // return;
    // }
    // if (MontoMaximo48CPC.val() === "") {
    // alert("Ingrese linea F");
    // MontoMaximo48CPC.focus();
    // return;
    // }
    // if (Pago48CPC.val() === "") {
    // alert("Ingrese linea TDC");
    // Pago48CPC.focus();
    // return;
    // }

    // if (TasaCPC.val() === "") {
    // alert("Ingrese RFC RVT");
    // TasaCPC.focus();
    // return;
    // }
    // if (PlazoCPC.val() === "") {
    // alert("Ingrese plaza");
    // PlazoCPC.focus();
    // return;
    // }
    // if (MontoPromesaCPC.val() === "") {
    // alert("Agrega el piso");
    // MontoPromesaCPC.focus();
    // return;
    // }

    if (SelectVenta.val() === "Sucursal" || SelectVenta.val() === "Venta sin cita") {

        if (FechaVicitaSucursalCPC.val() === "") {
            alert("Ingrese cliente desde");
            FechaVicitaSucursalCPC.focus();
            return;
        }

        if (SucursalCPC.val() === "") {
            alert("Ingrese plaza");
            SucursalCPC.focus();
            return;
        }
        if (NumeroSucursalCPC.val() === "") {
            alert("Agrega el piso");
            NumeroSucursalCPC.focus();
            return;
        }
        if (RegionalCPC.val() === "") {
            alert("Ingrese RegionalCPC");
            RegionalCPC.focus();
            return;
        }
        if (DivisionCPC.val() === "") {
            alert("Ingrese DivisionCPC");
            DivisionCPC.focus();
            return;
        }
    } else if (SelectVenta.val() === "Seleccione...") {
        alert("Ingrese tipo de venta");
        $("#selectVentaCNC").focus();
        return
    }


    var CpcEstatusVenta = "";
    if (UserType == 6) {//si es validador
        CpcEstatusVenta = $("#CpcEstatusVenta").val();
        if (CpcEstatusVenta == 0) {
            alert("Seleccione estatus de la venta");
            $("#CpcEstatusVenta").focus();
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

    //var cmbCalif = document.getElementById("cmbCPCCalif").value;
    //var label = document.getElementById("lblFecha").value;

    if (Nombres.val() === "") {
        alert("Debe ingresar nombre del cliente");
        Nombres.focus();
        return;
    }
    //if (ApellidoPaterno.val() === "") {
    //    alert("Debe ingresar apellido paterno");
    //    ApellidoPaterno.focus();
    //    return;
    //}
    //if (ApellidoMaterno.val() === "") {
    //    alert("Debe ingresar apellido materno");
    //    ApellidoMaterno.focus();
    //    return;
    //}
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

    //(1) Mantenimiento 04 marzo 2019
    //(1) Mantenimiento 15 marzo 2019: Oferta: OfertaCPC.val(),
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
        Folio: FolioCPC.val(),
        MontoMax24: MontoMaximo24CPC.val(),
        Pago24: Pago24CPC.val(),
        MontoMax36: MontoMaximo36CPC.val(),
        Pago36: Pago36CPC.val(),
        MontoMax48: MontoMaximo48CPC.val(),
        Pago48: Pago48CPC.val(),
        MontoMax60: MontoMaximo60CPC.val(),
        Pago60: Pago60CPC.val(),
        Tasa: TasaCPC.val(),
        Plazo: PlazoCPC.val(),
        MontoPromesa: MontoPromesaCPC.val(),
        FechaVicitaSucursal: FechaVicitaSucursalCPC.val(),
        Sucursal: SucursalCPC.val(),
        NumeroSucursal: NumeroSucursalCPC.val(),
        EstatusVenta: CpcEstatusVenta,

        Division: DivisionCPC.val(),
        Oferta: OfertaCPC.val(),

        Regional: RegionalCPC.val(),
        SeleccionaVenta: SelectVenta.val(),

        //Calificacion = cmbCalif.val(),
        //Label = label.val()


    };
    datos = json;
    saveCpcData(json);
}


function saveCpcData(json) {
    showLoader();
    $.ajax({
        url: hostInit + '/Client/SaveCpcData',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (response) {
            noValidado("EstadoCpc", "HeadingCpc", "ValidarCpc", "SaveCpc");
            hideLoader();
        },
        error: function (error) {
            console.log("Ocurrio un error al guardar los dao");
            hideLoader();
        }
    });
}

function habilitaCombo() {
    var item = document.getElementById("StatusSaleCpc");

    if (item.options[item.selectedIndex].value == 1) {
        cmbCPCCalif.disabled = true;
    }
    else {
        cmbCPCCalif.disabled = false;
    }
}

function ValidarCpc() {
    var UserName = $("#UserCpc");
    var Password = $("#PasswordCpc");

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
    var itemSelect = document.getElementById("StatusSaleCpc");
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

                let autentica = document.getElementById('lblFecha').textContent;
                datos['autentica'] = autentica;

                let califCPC = document.getElementById('cmbCPCCalif').value;
                datos['ID_Calificacion'] = califCPC;
                console.log(califCPC);

                datos['EstatusVenta'] = $("#StatusSaleCpc").val();
                $.ajax({
                    url: hostInit + '/Client/SaveCpcData',
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    data: JSON.stringify(datos),
                    success: function (response) {

                        //if (FechaNacimiento.val() == FechaNacCPC.val()) {
                        if (datos['EstatusVenta'] == 2) {//no venta
                            noVendido("EstadoCpc", "HeadingCpc", "ValidarCpc", "SaveCpc");
                            //ValidarGrupo();
                            var folio = $("#FolioCPC");
                            alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });
                            //MensajeVtaCPC();
                        } else {
                            ventaExitosa("EstadoCpc", "HeadingCpc", "ValidarCpc", "SaveCpc");
                            setFieldsCpc("disabled");
                            $("#collapse3").collapse('hide');
                            var folio = $("#FolioCPC");
                            alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });
                            //MensajeVtaCPC();
                        }
                        $("#StatusSaleCpc").val(0);
                        hideLoader();
                        //} else {
                        //    alert("no autentica por fecha");

                        //}

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

function FinloadBranchOfficeCPC(mun, dia) {
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
                $("#headerTableSucursalCPC").append(
                    '<th id="colSabApCPC" class="small">SABADOS AP</th>' +
                    '<th id="colSabCieCPC" class="small">SABADOS CIE</th>'
                );
                for (var i in response) {
                    tableContent += '<tr>';
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSucCPC(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
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
                $("#colSabApCPC").remove();
                $("#colSabCieCPC").remove();
                for (var i in response) {
                    tableContent += '<tr>';
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSucCPC(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
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

            $("#bodyTableSucCPC").html(tableContent);
            $('#myModalSucursalesCPC').modal('show');
        },
        error: function (reject) {
            console.log(reject);
        }
    });
}

function seleccionarSucCPC(SIRH) {
    for (var i in sucursalesCnc) {
        if (sucursalesCnc[i].SIRH == SIRH) {
            $("#DivisionCPC").val(sucursalesCnc[i].DIVISION);
            $("#RegionalCPC").val(sucursalesCnc[i].DIRECCION);
            $("#NumeroSucursalCPC").val(sucursalesCnc[i].SIRH);
            $("#SucursalCPC").val(sucursalesCnc[i].NOMBRE_DISPOSITIVO);
            break;
        }
    }
    $('#myModalSucursalesCPC').modal('hide');
}

function CambiarTipoVenta() {
    var cod = document.getElementById("selectVenta").value;
    if (cod == "Sucursal" || cod == "Venta sin cita") {
        document.getElementById("divFechaSuc").hidden = false;
        document.getElementById("divEstado").hidden = false;
        document.getElementById("divCompletaSuc1").hidden = false;
        document.getElementById("divRegional").hidden = false;
        document.getElementById("divDivision").hidden = false;

    } else {
        document.getElementById("divCompletaSuc1").hidden = true;
        document.getElementById("divFechaSuc").hidden = true;
        document.getElementById("divEstado").hidden = true;
        document.getElementById("divCompletaSuc1").hidden = true;
        document.getElementById("divRegional").hidden = true;
        document.getElementById("divDivision").hidden = true;
    }
}

function LoadCombos2(ID, CATALOGO, idCombo, dato) {
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


//LoadCombosCPC(2, 0, "comboCPCCalif", Calificacion);
//Combo de calificaciones
function LoadCombosCPC(ID, CATALOGO, idCombo, dato) {
    var est = '<option value="0">SELECCIONE...</option>';
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
            var est = '<option value="0">SELECCIONE...</option>';
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
function check_val_cpc() {
    if ((document.getElementById('check_cpc').checked) == true) {
        document.getElementById("SaveCpc").hidden = false;
        document.getElementById("panelCPC").hidden = false;
        document.getElementById("SaveCalifCPC").hidden = true;
        document.getElementById("panelCalificacionCPC").hidden = true;
    }
    else {
        document.getElementById("SaveCpc").hidden = true;
        document.getElementById("panelCPC").hidden = true;
        document.getElementById("SaveCalifCPC").hidden = false;
        document.getElementById("panelCalificacionCPC").hidden = false;
    }
}

//GUARDA DATOS Y LLENA JSON
function saveCalifCPC() {
    var BalconCalif;
    BalconCalif = $("#comboCPCCalif").val;
    var folio = $("#FolioCPC");
    var Calificacion = document.getElementById("comboCPCCalif").value;

    if (Calificacion == 0) {
        alert("Seleccione una Calificacion");
        $("#comboCPCCalif").focus();
        return;
    }
    var json = {
        Folio: folio.val(),
        NumeroCliente: document.getElementById("Cliente").value,
        Calificacion: document.getElementById("comboCPCCalif").value,
    };
    console.log(json);
    saveCalifDataCPC(json);
    datos = json;
}


function saveCalifDataCPC(json) {
    console.log("Entra saveCPC calif");
    showLoader();

    var xml = new XMLHttpRequest();
    var url = hostInit + "/Client/saveCalificacion";
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            //Calificado("EstadoCpc", "HeadingCpc", "CalificadoCPC", "SaveCalifCPC", "SaveCpc", "lblCalifCPC", "check_cpc");
            Calificado("EstadoCpc", "HeadingCpc", "SaveCalifCPC", "SaveCpc");
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

    //SigueOfertaCPC();
}

function SigueOfertaCPC() {
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

function MensajeVtaCPC() {
    var FolioCPC = document.getElementById("FolioCPC").value;
    Swal.fire({
        title: 'Venta Exitsa!!, FOLIO: ' + document.getElementById("FolioCPC").value,
        text: "Felicidades !",
        icon: 'success',
        width: '50%',
        showCancelButton: false,
        confirmButtonColor: '#5564eb',
        cancelButtonColor: '#ff0500'
    })
}