var datos;
function SetPymeData(id, FolioPyme, Linea36Pyme, Tasa36Pyme, Pago36Pyme, Linea48Pyme, Tasa48Pyme,
    Pago48Pyme, Linea60Pyme, Tasa60Pyme, Pago60Pyme, PlazoPyme, MontoPromesaPyme, FechaVictimaSucursalPyme,
    SucursalPyme, NumeroSucursalPyme, LineaActualPyme, LineaCLIPyme, CatAmortizablePyme, TasaAmortizablePyme,
    PagoMensualAmortizablePyme, LineaRevolventePyme, LineaTotalPyme, CatRevolventePyme, LineaAmortizablePyme,
    TasaRevolventePyme, DivisionPyme, RegionalPyme, Calificacion) {

    LoadCombosPyme(2, 0, "comboPymeCalif", 0);

    $("#IdPyme").val(id);
    $("#FolioPyme").val(FolioPyme);
    $("#Linea36Pyme").val(Linea36Pyme);
    $("#Tasa36Pyme").val(Tasa36Pyme);
    $("#Pago36Pyme").val(Pago36Pyme);
    $("#Linea48Pyme").val(Linea48Pyme); 
    $("#Tasa48Pyme").val(Tasa48Pyme); 
    $("#Pago48Pyme").val(Pago48Pyme); 
    $("#Linea60Pyme").val(Linea60Pyme); 
    $("#Tasa60Pyme").val(Tasa60Pyme); 
    $("#Pago60Pyme").val(Pago60Pyme); 
    $("#PlazoPyme").val(PlazoPyme); 
    $("#MontoPromesaPyme").val(MontoPromesaPyme);
    $("#SucursalPyme").val(SucursalPyme); 
    $("#NumeroSucursalPyme").val(NumeroSucursalPyme); 
    $("#LineaActualPyme").val(LineaActualPyme); 
    $("#LineaCLIPyme").val(LineaCLIPyme); 
    $("#CatAmortizablePyme").val(CatAmortizablePyme); 
    $("#TasaAmortizablePyme").val(TasaAmortizablePyme); 
    $("#PagoMensualAmortizablePyme").val(PagoMensualAmortizablePyme); 
    $("#LineaRevolventePyme").val(LineaRevolventePyme); 
    $("#LineaTotalPyme").val(LineaTotalPyme); 
    $("#CatRevolventePyme").val(CatRevolventePyme); 
    $("#LineaAmortizablePyme").val(LineaAmortizablePyme); 
    $("#TasaRevolventePyme").val(TasaRevolventePyme);
    $("#DivisionPyme").val(DivisionPyme);
    $("#RegionalPyme").val(RegionalPyme);
    
    $("#StatusSalePyme").html(ComboCatalogo());
    document.getElementById("SavePyme").onclick = function () {
        ValidatePymeData();
    }
    document.getElementById("ValidatePyme").onclick = function () {
        ValidarVentaPyme();
    }
    document.getElementById("check_cpc").onclick = function () {
        check_val_pyme();
    }
    document.getElementById("SaveCalifCPC").onclick = function () {
        saveCalifPyme();
    }

    document.getElementById('DetalleSucursalPYME').addEventListener('click', function () {
        LoadDetailsOffice(document.getElementById('NumeroSucursalPyme').value);
    });

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
            $("#FechaVictimaSucursalPyme").datepicker(cal);
            var day = currentDate.getDate();
            var monthIndex = currentDate.getMonth();
            var year = currentDate.getFullYear();

            var fecha = year + "/" + (monthIndex + 1) + "/" + day;
            $("#FechaVictimaSucursalPyme").val(fecha);
            noVendido("EstadoPyme", "HeadingPyme", "ValidarPyme", "SavePyme");
            setFieldsPyme("");
            break;
        case 0://ya se vendio, no se ha validado
            $("#FechaVictimaSucursalPyme").val(formatDate(FechaVictimaSucursalPyme));
            $("#FechaVictimaSucursalPyme").datepicker(cal);
            noValidado("EstadoPyme", "HeadingPyme", "ValidarPyme", "SavePyme");
            var Id = $("#IdPyme");
            var Linea36Pyme = $("#Linea36Pyme");
            var Tasa36Pyme = $("#Tasa36Pyme");
            var Pago36Pyme = $("#Pago36Pyme");
            var Linea48Pyme = $("#Linea48Pyme");
            var Tasa48Pyme = $("#Tasa48Pyme");
            var Pago48Pyme = $("#Pago48Pyme");
            var Linea60Pyme = $("#Linea60Pyme");
            var Tasa60Pyme = $("#Tasa60Pyme");
            var Pago60Pyme = $("#Pago60Pyme");
            var PlazoPyme = $("#PlazoPyme");
            var MontoPromesaPyme = $("#MontoPromesaPyme");
            var FechaVictimaSucursalPyme = $("#FechaVictimaSucursalPyme");
            var SucursalPyme = $("#SucursalPyme");
            var NumeroSucursalPyme = $("#NumeroSucursalPyme");
            var LineaActualPyme = $("#LineaActualPyme");
            var LineaCLIPyme = $("#LineaCLIPyme");
            var CatAmortizablePyme = $("#CatAmortizablePyme");
            var TasaAmortizablePyme = $("#TasaAmortizablePyme");
            var PagoMensualAmortizablePyme = $("#PagoMensualAmortizablePyme");
            var LineaRevolventePyme = $("#LineaRevolventePyme");
            var LineaTotalPyme = $("#LineaTotalPyme");
            var CatRevolventePyme = $("#CatRevolventePyme");
            var LineaAmortizablePyme = $("#LineaAmortizablePyme");
            var TasaRevolventePyme = $("#TasaRevolventePyme");
            var DivisionPyme = $("#DivisionPyme");
            var RegionalPyme = $("#RegionalPyme");
            var FolioPyme = $("#FolioPyme");

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
                
                Folio: FolioPyme.val(),
                Linea36: Linea36Pyme.val(),
                Tasa36: Tasa36Pyme.val(),
                Pago36: Pago36Pyme.val(),
                Linea48: Linea48Pyme.val(),
                Tasa48: Tasa48Pyme.val(),
                Pago48: Pago48Pyme.val(),
                Linea60: Linea60Pyme.val(),
                Tasa60: Tasa60Pyme.val(),
                Pago60: Pago60Pyme.val(),
                Plazo: PlazoPyme.val(),
                MontoPromesa: MontoPromesaPyme.val(),
                FechaVicitaSucursal: FechaVictimaSucursalPyme.val(),
                Sucursal: SucursalPyme.val(),
                NumeroSucursal: NumeroSucursalPyme.val(),
                LineaActual: LineaActualPyme.val(),
                LineaCLI: LineaCLIPyme.val(),
                CatAmortizable: CatAmortizablePyme.val(),
                TasaAmortizable: TasaAmortizablePyme.val(),
                PagoMenAmortizable: PagoMensualAmortizablePyme.val(),
                LineaRevolvente: LineaRevolventePyme.val(),
                LineaTotal: LineaTotalPyme.val(),
                CatRevolvente: CatRevolventePyme.val(),
                LineaAmortizable: LineaAmortizablePyme.val(),
                TasaRevolvente: TasaRevolventePyme.val(),
                Division: DivisionPyme.val(),
                Regional: RegionalPyme.val(),
                EstatusVenta: PymeEstatusVenta
            };
            break;
        case 1://venta exitosa
            $("#FechaVictimaSucursalPyme").val(formatDate(FechaVictimaSucursalPyme));
            ventaExitosa("EstadoPyme", "HeadingPyme", "ValidarPyme", "SavePyme");
            setFieldsPyme("enabled");
            break;
    }

    //document.getElementById("OpenScriptPyme").onclick = function () {
    //    window.open(hostInit + '/Client/OpenPdf/PYME', '_blank', 'location=no, resizable=no', true);
    //}
}

function ValidarVentaPyme() {
    var UserName = $("#UserPyme");
    var Password = $("#PasswordPyme");

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
    var itemSelect = document.getElementById("StatusSalePyme");
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
                datos['EstatusVenta'] = $("#StatusSalePyme").val();
                $.ajax({
                    url: hostInit + '/Client/SavePymeData',
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    data: JSON.stringify(datos),
                    success: function (response) {
                        if (datos['EstatusVenta'] == 2) {//no venta
                            noVendido("EstadoPyme", "HeadingPyme", "ValidarPyme", "SavePyme");
                        } else {
                            ventaExitosa("EstadoPyme", "HeadingCnc", "ValidarPyme", "SavePyme");
                            setFieldsPyme("disabled");
                            $("#collapse1").collapse('hide');
                        }
                        $("#StatusSalePyme").val(0);
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

function setFieldsPyme(value) {
    $("#Linea36Pyme").prop("disabled", value);
    $("#Tasa36Pyme").prop("disabled", value);
    $("#Pago36Pyme").prop("disabled", value);
    $("#Tasa48Pyme").prop("disabled", value);
    $("#Pago48Pyme").prop("disabled", value);
    $("#Linea60Pyme").prop("disabled", value);
    $("#Tasa60Pyme").prop("disabled", value);
    $("#Pago60Pyme").prop("disabled", value);
    $("#PlazoPyme").prop("disabled", value);
    $("#MontoPromesaPyme").prop("disabled", value);
    $("#FechaVictimaSucursalPyme").prop("disabled", value);
    $("#SucursalPyme").prop("disabled", value);
    $("#NumeroSucursalPyme").prop("disabled", value);
    $("#LineaActualPyme").prop("disabled", value);
    $("#LineaCLIPyme").prop("disabled", value);
    $("#CatAmortizablePyme").prop("disabled", value);
    $("#TasaAmortizablePyme").prop("disabled", value);
    $("#PagoMensualAmortizablePyme").prop("disabled", value);
    $("#LineaRevolventePyme").prop("disabled", value);
    $("#LineaTotalPyme").prop("disabled", value);
    $("#CatRevolventePyme").prop("disabled", value);
    $("#LineaAmortizablePyme").prop("disabled", value);
    $("#TasaRevolventePyme").prop("disabled", value);
    $("#DivisionPyme").prop("disabled", value);
    $("#RegionalPyme").prop("disabled", value);
}

function ValidatePymeData() {
    var Id = $("#IdPyme");
    var Linea36Pyme = $("#Linea36Pyme");
    var Tasa36Pyme = $("#Tasa36Pyme");
    var Pago36Pyme= $("#Pago36Pyme");
    var Linea48Pyme = $("#Linea48Pyme");
    var Tasa48Pyme = $("#Tasa48Pyme");
    var Pago48Pyme = $("#Pago48Pyme");
    var Linea60Pyme = $("#Linea60Pyme");
    var Tasa60Pyme = $("#Tasa60Pyme");
    var Pago60Pyme = $("#Pago60Pyme");
    var PlazoPyme = $("#PlazoPyme");
    var MontoPromesaPyme = $("#MontoPromesaPyme");
    var FechaVictimaSucursalPyme = $("#FechaVictimaSucursalPyme");
    var SucursalPyme = $("#SucursalPyme");
    var NumeroSucursalPyme = $("#NumeroSucursalPyme");
    var LineaActualPyme = $("#LineaActualPyme");
    var LineaCLIPyme = $("#LineaCLIPyme");
    var CatAmortizablePyme = $("#CatAmortizablePyme");
    var TasaAmortizablePyme = $("#TasaAmortizablePyme");
    var PagoMensualAmortizablePyme = $("#PagoMensualAmortizablePyme");
    var LineaRevolventePyme = $("#LineaRevolventePyme");
    var LineaTotalPyme = $("#LineaTotalPyme");
    var CatRevolventePyme = $("#CatRevolventePyme");
    var LineaAmortizablePyme = $("#LineaAmortizablePyme");
    var TasaRevolventePyme = $("#TasaRevolventePyme");
    var DivisionPyme = $("#DivisionPyme");
    var RegionalPyme = $("#RegionalPyme");
    var FolioPyme = $("#FolioPyme");

    if (FolioPyme.val() === "") {
        alert("Debe ingresar el folio del producto");
        Folio.focus();
        return;
    }
    if (Linea36Pyme.val() === "") {
        alert("Debe ingresar la fecha 1");
        Fecha1.focus();
        return;
    }
    if (Tasa36Pyme.val() === "") {
        alert("Ingrese cita");
        Cita.focus();
        return;
    }
    if (Pago36Pyme.val() === "") {
        alert("Debe ingresar CNBT");
        CNBT.focus();
        return;
    }
    if (Linea48Pyme.val() === "") {
        alert("Debe ingresarb producto 1");
        Producto1.focus();
        return;
    }
    if (Tasa48Pyme.val() === "") {
        alert("Debe ingresar producto 2");
        Producto2.focus();
        return;
    }
    if (Pago48Pyme.val() === "") {
        alert("Ingrese producto 3");
        Producto3.focus();
        return;
    }
    if (Linea60Pyme.val() === "") {
        alert("Ingrese linea F");
        LineaF.focus();
        return;
    }
    if (Tasa60Pyme.val() === "") {
        alert("Ingrese oferta");
        Oferta.focus();
        return;
    }
    if (Pago60Pyme.val() === "") {
        alert("Tasa");
        Tasa.focus();
        return;
    }
    if (PlazoPyme.val() === "") {
        alert("Ingrese telefono contacto");
        TelefonoCOntacto.focus();
        return;
    }
    if (MontoPromesaPyme.val() === "") {
        alert("Ingrese telefono");
        Telefono.focus();
        return;
    }
    if (FechaVictimaSucursalPyme.val() === "") {
        alert("Ingrese FechaVictimaSucursalPyme");
        FechaVictimaSucursalPyme.focus();
        return;
    }
    if (SucursalPyme.val() === "") {
        alert("Ingrese domicilio v");
        DomicilioV.focus();
        return;
    }
    if (NumeroSucursalPyme.val() === "") {
        alert("Ingrese referencia");
        Referencia.focus();
        return;
    }
    if (LineaActualPyme.val() === "") {
        alert("Ingrese fecha dos");
        FechaDos.focus();
        return;
    }
    if (LineaCLIPyme.val() === "") {
        alert("Ingrese hora sucursal");
        HoraSucursal.focus();
        return;
    }
    if (CatAmortizablePyme.val() === "") {
        alert("Ingrese sucursal");
        Sucursal.focus();
        return;
    }
    if (TasaAmortizablePyme.val() === "") {
        alert("Ingrese gerencia");
        Gerencia.focus();
        return;
    }

    if (PagoMensualAmortizablePyme.val() === "") {
        alert("Ingrese RFC RVT");
        RFCRVT.focus();
        return;
    }
    if (LineaRevolventePyme.val() === "") {
        alert("Ingrese plaza");
        Plaza.focus();
        return;
    }
    if (LineaTotalPyme.val() === "") {
        alert("Ingrese tipos de venta");
        TiposVenta.focus();
        return;
    }
    if (CatRevolventePyme.val() === "") {
        alert("Ingrese CatRevolventePyme");
        CatRevolventePyme.focus();
        return;
    }

    if (LineaAmortizablePyme.val() === "") {
        alert("Ingrese LineaAmortizablePyme");
        LineaAmortizablePyme.focus();
        return;
    }
    if (TasaRevolventePyme.val() === "") {
        alert("Ingrese TasaRevolventePyme");
        TasaRevolventePyme.focus();
        return;
    }
    if (DivisionPyme.val() === "") {
        alert("Ingrese DivisionPyme");
        DivisionPyme.focus();
        return;
    }
    if (RegionalPyme.val() === "") {
        alert("Ingrese RegionalPyme");
        RegionalPyme.focus();
        return;
    }
    var PymeEstatusVenta = "";
    if (UserType == 6) {//si es valdiador
        PymeEstatusVenta = $("#PymeEstatusVenta").val();
        if (PymeEstatusVenta == 0) {
            alert("Seleccione estatus de la venta");
            $("#PymeEstatusVenta").focus();
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

        Folio: FolioPyme.val(),
        Linea36: Linea36Pyme.val(),
        Tasa36: Tasa36Pyme.val(),
        Pago36: Pago36Pyme.val(),
        Linea48: Linea48Pyme.val(),
        Tasa48: Tasa48Pyme.val(),
        Pago48: Pago48Pyme.val(),
        Linea60: Linea60Pyme.val(),
        Tasa60: Tasa60Pyme.val(),
        Pago60: Pago60Pyme.val(),
        Plazo: PlazoPyme.val(),
        MontoPromesa: MontoPromesaPyme.val(),
        FechaVicitaSucursal: FechaVictimaSucursalPyme.val(),
        Sucursal: SucursalPyme.val(),
        NumeroSucursal: NumeroSucursalPyme.val(),
        LineaActual: LineaActualPyme.val(),
        LineaCLI: LineaCLIPyme.val(),
        CatAmortizable: CatAmortizablePyme.val(),
        TasaAmortizable: TasaAmortizablePyme.val(),
        PagoMenAmortizable: PagoMensualAmortizablePyme.val(),
        LineaRevolvente: LineaRevolventePyme.val(),
        LineaTotal: LineaTotalPyme.val(),
        CatRevolvente: CatRevolventePyme.val(),
        LineaAmortizable: LineaAmortizablePyme.val(),
        TasaRevolvente: TasaRevolventePyme.val(),
        Division: DivisionPyme.val(),
        Regional: RegionalPyme.val(),
        EstatusVenta: PymeEstatusVenta
    };
    datos = json;
    savePymeData(json);
}


function savePymeData(json) {
    showLoader();
    $.ajax({
        url: hostInit + '/Client/SavePymeData',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (response) {
            noValidado("EstadoPyme", "HeadingPyme", "ValidarPyme", "SavePyme");
            hideLoader();
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

function LoadCombosPyme(ID, CATALOGO, idCombo, dato) {
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
function check_val_pyme() {
    if ((document.getElementById('check_pyme').checked) == true) {
        document.getElementById("SavePyme").hidden = false;
        document.getElementById("panelPyme").hidden = false;
        document.getElementById("SaveCalifPyme").hidden = true;
        document.getElementById("panelCalificacionPyme").hidden = true;
    }
    else {
        document.getElementById("SavePyme").hidden = true;
        document.getElementById("panelPyme").hidden = true;
        document.getElementById("SaveCalifPyme").hidden = false;
        document.getElementById("panelCalificacionPyme").hidden = false;
    }
}

//GUARDA DATOS Y LLENA JSON
function saveCalifPyme() {
    var BalconCalif;
    BalconCalif = $("#comboPymeCalif").val;
    var folio = $("#FolioPyme");
    var Calificacion = document.getElementById("comboPymeCalif").value;

    if (Calificacion == 0) {
        alert("Seleccione una Calificacion");
        $("#comboPymeCalif").focus();
        return;
    }
    var json = {
        Folio: folio.val(),
        NumeroCliente: document.getElementById("Cliente").value,
        Calificacion: document.getElementById("comboPymeCalif").value,
    };
    console.log(json);
    saveCalifDataTDC(json);
    datos = json;
}


function saveCalifDataTDC(json) {
    console.log("Entra Pyme calif");
    showLoader();

    var xml = new XMLHttpRequest();
    var url = hostInit + "/Client/saveCalificacion";
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            Calificado("EstadoPyme", "HeadingPyme", "SaveCalifPyme", "SavePyme");
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

    //continuarOfertaRedis();
}

function continuarOfertaRedis() {
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

        }
    })
}
