var datos;
function SetDisponibleData(id, FolioD, TelefonoTrabajoD,
    Celular2D, LineaActualD, LineaNuevaD,
    IncrementoD, ProductoD, Ult4DgtD,
    TasaAnualD, CatD, FechaCatD,
    MontoMaximoD, TipoDeLlamadaD, GEPCD,
    PlazoDisponibleD, MontoDisponibleD, StatusD,
    FechaVentaDisponible, EstatusVenta, TipoOferta, bancanet, adicionales, Num_Adicionales, Calificacion,
    FechaVicitaSucursalDis, SucursalDis, NumeroSucursalDis, EstadoSucursal, MunicipioSucursal,) {

    LoadCombosDisp(48, 0, "comboDispCalif", 0);



    document.getElementById('TipoOfertaD').value = TipoOferta;
    if (TipoOferta == 'Disponible Referenciacion') {
        document.getElementById('datosSuc').hidden = false;
        document.getElementById('datosSuc2').hidden = false;
        document.getElementById('TipoOfertaD').disabled = true;
    }
    else {
        document.getElementById('datosSuc').hidden = true;
        document.getElementById('datosSuc2').hidden = true;
        document.getElementById('TipoOfertaD').disabled = true;
    }

    $("#SucursalDisp").val(SucursalDis);
    $("#NumeroSucursalDisp").val(NumeroSucursalDis);

    //cargar estados para las sucursales cnc COMENTAR ESO 07/03/2023
    estados("EstadoSucursalDisp", EstadoSucursal, 0);
    LoadMunicipios(EstadoSucursal, MunicipioSucursal, 'MunicipioSucursalDisp');
    $("#EstadoSucursalDisp").change(function (evt) {
        var item = $(this).val();
        LoadMunicipios(item, 0, 'MunicipioSucursalDisp');
    });

    $("#MunicipioSucursalDisp").change(function (evt) {
        var item = $(this).val();
        var fechVicSuc = $("#FechaVicitaSucursalDisp").val();
        if (fechVicSuc === "") {
            alert("Seleccione fecha vicita sucursal");
            $("#FechaVicitaSucursalDisp").focus();
            return;
        }

        if (item === "0") {
            alert("Seleccione un municipio");
            $("#MunicipioSucursalDisp").focus();
            return;
        }

        var dia = diaSemana(fechVicSuc);
        if (dia === 'sab') {
            FinloadBranchOfficeDis(item, 1);
        } else {
            FinloadBranchOfficeDis(item, 0);
        }
    })

    $("#qProducto").html(TipoOferta);   //Cambio 23032019
    $("#IdDisponible").val(id);
    $("#FolioD").val(FolioD);
    $("#TelefonoTrabajoD").val(TelefonoTrabajoD);
    $("#Celular2D").val(Celular2D);
    $("#LineaActualD").val(LineaActualD);
    $("#LineaNuevaD").val(LineaNuevaD);
    $("#IncrementoD").val(IncrementoD);
    $("#ProductoD").val(ProductoD);
    $("#TasaAnualD").val(TasaAnualD);
    $("#Ult4DgtD").val(Ult4DgtD);
    $("#CatD").val(CatD);
    $("#FechaCatD").val(FechaCatD);
    document.getElementById('FechaCatD').value = FechaCatD;
    console.log(FechaCatD);
    //$("#FechaCatD").val(formatDate(FechaCatD)); Se comento por formato de fecha 
    $("#FechaVentaDisponible").val(formatDate(FechaVentaDisponible));
    $("#MontoMaximoD").val(MontoMaximoD);
    loadTipoLlamadaDisponible(TipoDeLlamadaD);
    loadPlazos(PlazoDisponibleD);
    $("#GEPCD").val(GEPCD);
    $("#PlazoDisponibleD").val(PlazoDisponibleD);
    $("#MontoDisponibleD").val(MontoDisponibleD);
    $("#StatusD").val(StatusD);
    $("#lblNumAdic").text("" + Num_Adicionales);

    //Reinicia modal en caso de cargar otro numero de empleado 
    document.getElementById('DivAutentica').hidden = true;
    document.getElementById('DivCredVal').hidden = false;

    //Desabilita el boton de guardar del modal de validacion
    document.getElementById('btnGuardar').disabled = true;

    //Regresa los valores de los combos de autenticacion a 0
    document.getElementById('cmbPreg1Auten').value = 0;
    document.getElementById('cmbPreg2Auten').value = 0;

    $("#StatusSaleDisponible").html(ComboCatalogo());
    document.getElementById('lblResp1').value = bancanet;
    document.getElementById('lblResp2').value = adicionales

    document.getElementById("SaveDisponible").onclick = function () {
        ValidarDatosDisponible();
    }


    /// hasta aqui
    document.getElementById("ValidateDisponible").onclick = function () {
        ValidarVentaDisponible();
    }
    document.getElementById("check_disp").onclick = function () {
        check_val_disp();
    }
    document.getElementById("SaveCalifDisp").onclick = function () {
        saveCalif5();
    }

    document.getElementById('MontoMaximoD').addEventListener('keyup', function () {
        //validamos campo
        var montoMax = this.value;
        if (montoMax < 5000) {
            document.getElementById('MensajeMontoMaximo').innerHTML = '<strong>Monto muy bajo</strong>';
            return;
        }
        if (montoMax > MontoDisponibleD) {
            document.getElementById('MensajeMontoMaximo').innerHTML = '<strong>Monto muy alto</strong>';
            return;
        }
        document.getElementById('MensajeMontoMaximo').innerHTML = '';
    });

    var cal = dataCalendar;
    //$("#FechaCatD").datepicker(dataCalendarCopy);
    $("#FechaVentaDisponible").datepicker(dataCalendarCopy);
	if (datos === undefined)
	{
	}
	else 	
	{
		delete datos;
	//	document.getElementById('cmbRepPlazo').value = 0;
        document.getElementById('cmbPreg1Auten').value = 0;
        document.getElementById('cmbPreg2Auten').value = 0;
		//document.getElementById('cmbRepPlazo').disabled = false;//se activa el combo de Plazo
		document.getElementById('cmbPreg1Auten').disabled = true;//se desactiva el combo de bancanet
		document.getElementById('cmbPreg2Auten').disabled = true;//se desactiva el combo de adicionales
		
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

            $("#FechaVicitaSucursalDisp").datepicker(cal);
            $("#FechaVicitaSucursalDisp").val(fecha);
            noVendido("EstadoDisponible", "HeadingDisponible", "ValidarDisponible", "SaveDisponible");
            setFieldsDisponible("");
            break;
        case 0://ya se vendio, no se ha validado
            $("#FechaVicitaSucursalDisp").val(formatDate(FechaVicitaSucursalDis));
            $("#FechaVicitaSucursalDisp").datepicker(cal);
            noValidado("EstadoDisponible", "HeadingDisponible", "ValidarDisponible", "SaveDisponible");

            var Id = $("#IdDisponible");
            var FolioD = $("#FolioD");
            var TelefonoTrabajoD = $("#TelefonoTrabajoD");
            var Celular2D = $("#Celular2D");
            var LineaActualD = $("#LineaActualD");
            var LineaNuevaD = $("#LineaNuevaD");
            var IncrementoD = $("#IncrementoD");
            var ProductoD = $("#ProductoD");
            var Ult4DgtD = $("#Ult4DgtD");
            var TasaAnualD = $("#TasaAnualD");
            var CatD = $("#CatD");
            var FechaCatD = $("#FechaCatD");
            var MontoMaximoD = $("#MontoMaximoD");
            var TipoDeLlamadaD = $("#TipoDeLlamadaD");
            var GEPCD = $("#GEPCD");
            var PlazoDisponibleD = $("#PlazoDisponibleD");
            var MontoDisponibleD = $("#MontoDisponibleD");
            var StatusD = $("#StatusD");
            var FechaVentaDisponible = $("#FechaVentaDisponible");

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

            var FechaVicitaSucursalDis = $("#FechaVicitaSucursalDisp");
            var SucursalDis = $("#SucursalDisp");
            var NumeroSucursalDis = $("#NumeroSucursalDisp");
            //var bancanet = document.getElementById('lblResp1').value;
            //var adicionales = document.getElementById('lblResp2').value;
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

                Id: Id.val(),
                Folio: FolioD.val(),
                TelTrabajo: TelefonoTrabajoD.val(),
                Celular1: Celular2D.val(),
                LineaActual: LineaActualD.val(),
                LineaNueva: LineaNuevaD.val(),
                Incremento: IncrementoD.val(),
                Producto: ProductoD.val(),
                Ult4DIG: Ult4DgtD.val(),
                TasaAnual: TasaAnualD.val(),
                Cat: CatD.val(),
                FechaCat: FechaCatD.val(),
                MontoMaximo: MontoMaximoD.val(),
                TipoLlamada: TipoDeLlamadaD.val(),
                Gepc: GEPCD.val(),
                PlazoDisponible: PlazoDisponibleD.val(),
                MontoDisponible: MontoDisponibleD.val(),
                Estatus: StatusD.val(),
                Celular2: Celular2D.val(),
                FechaVenta: FechaVentaDisponible.val(),
                TipoOferta: document.getElementById('TipoOfertaD').value,
                Bancanet: document.getElementById('lblResp1').value,
                Adicionales: document.getElementById('lblResp2').value,
                FechaVicitaSucursal: FechaVicitaSucursalDis.val(),
                Sucursal: SucursalDis.val(),
                NumeroSucursal: NumeroSucursalDis.val()

            };
            break;
        case 1://venta exitosa
            $("#FechaVicitaSucursalDisp").val(formatDate(FechaVicitaSucursalDis));
            ventaExitosa("EstadoDisponible", "HeadingDisponible", "ValidarDisponible", "SaveDisponible");
            setFieldsDisponible("enabled");
            break;
    }

    //document.getElementById("OpenScriptDisponible").onclick = function () {
    //    window.open(hostInit + '/Client/OpenPdf/DISPONIBLE', '_blank', 'location=no, resizable=no', true);
    //}
    //ValidarGrupo();
}

function loadTipoLlamadaDisponible(value) {

    $.ajax({
        url: hostInit + '/Client/loadTipoLlamada',
        contentType: 'application/json;charset=utf-8',
        success: function (resolve) {
            for (var i in resolve) {
                document.getElementById("TipoDeLlamadaD").options[i] = new Option(resolve[i].Texto, resolve[i].Valor);
            }
            var val = (value === "" || value == null) ? 0 : value;
            document.getElementById("TipoDeLlamadaD").value = val;
        },
        error: function (reject) {
            console.log(reject);
        }
    });
}

function loadPlazos(value) {
    $.ajax({
        url: hostInit + '/Client/loadPlazos',
        contentType: 'application/json;charset=utf-8',
        success: function (resolve) {
            for (var i in resolve) {
                document.getElementById("PlazoDisponibleD").options[i] = new Option(resolve[i].Texto, resolve[i].Valor);
               // document.getElementById("cmbRepPlazo").options[i] = new Option(resolve[i].Texto, resolve[i].Valor);
            }
            var val = (value === "" || value == null) ? 0 : value;
            document.getElementById("PlazoDisponibleD").value = val;
        },
        error: function (reject) {
            console.log(reject);
        }
    });
}

function setFieldsDisponible(value) {
    //$("#TelefonoTrabajoD").prop("disabled", value);
    //$("#Celular2D").prop("disabled", value);
    //$("#LineaActualD").prop("disabled", value);
    //$("#LineaNuevaD").prop("disabled", value);
    //$("#IncrementoD").prop("disabled", value);
    //$("#ProductoD").prop("disabled", value);
    //$("#Ult4DgtD").prop("disabled", value);
    //$("#TasaAnualD").prop("disabled", value);
    //$("#CatD").prop("disabled", value);
    //$("#FechaCatD").prop("disabled", value);
    $("#MontoMaximoD").prop("disabled", value);
    $("#TipoDeLlamadaD").prop("disabled", value);
    $("#GEPCD").prop("disabled", value);
    $("#PlazoDisponibleD").prop("disabled", value);

    $("#FechaVicitaSucursalDisp").prop("disabled", value);
    $("#SucursalDisp").prop("disabled", value);
    $("#NumeroSucursalDisp").prop("disabled", value);

    $("#EstadoSucursalDisp").prop("disabled", value);
    $("#MunicipioSucursalDisp").prop("disabled", value);
    //$("#MontoDisponibleD").prop("disabled", value);
    //$("#StatusD").prop("disabled", value);
    //$("#FechaVentaDisponible").prop("disabled", value);
}

function ValidarVentaDisponible() {
    var UserName = $("#UserDisponible");
    var Password = $("#PasswordDisponible");

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

    document.getElementById('cmbPreg1Auten').disabled = false;
    //var itemSelect = document.getElementById("StatusSaleDisponible");
    //if (itemSelect.options[itemSelect.selectedIndex].value == 0) {
    //    alert("Debe seleccionar un estado de la venta al validar");
    //    return;
    //}
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
            if (response['Tipo'] == 6 || response['Tipo'] == 4 ) {
                datos['EstatusVenta'] = $("#StatusSaleDisponible").val(); //Modificar
                document.getElementById('DivAutentica').hidden = false;
                document.getElementById('DivCredVal').hidden = true;
              

                $("#ValidateDisponible").hide();
                hideLoader();
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


function FinloadBranchOfficeDis(mun, dia) {
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
            sucursalesDis = new Array();
            if (dia == 1) {
                $("#headerTableSucursalDIS").append(
                    '<th id="colSabApDIS" class="small">SABADOS AP</th>' +
                    '<th id="colSabCieDIS" class="small">SABADOS CIE</th>'
                );
                for (var i in response) {
                    tableContent += '<tr>';
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSucDIS(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
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
                    sucursalesDis.push(response[i]);
                }
            } else {
                $("#colSabApDIS").remove();
                $("#colSabCieDIS").remove();
                for (var i in response) {
                    tableContent += '<tr>';
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSucDIS(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
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
                    sucursalesDis.push(response[i]);
                }
            }

            $("#bodyTableSucDIS").html(tableContent);
            $('#myModalSucursalesDIS').modal('show');
        },
        error: function (reject) {
            console.log(reject);
        }
    });
}

function seleccionarSucDIS(SIRH) {
    for (var i in sucursalesDis) {
        if (sucursalesDis[i].SIRH == SIRH) {
            //$("#DivisionDisp").val(sucursalesDis[i].DIVISION);
            //$("#RegionalDisp").val(sucursalesDis[i].DIRECCION);
            $("#NumeroSucursalDisp").val(sucursalesDis[i].SIRH);
            $("#SucursalDisp").val(sucursalesDis[i].NOMBRE_DISPOSITIVO);
            break;
        }
    }
    $('#myModalSucursalesDIS').modal('hide');
}


function ValidarDatosDisponible() {
    var Id = $("#IdDisponible");
    var FolioD = $("#FolioD");
    var TelefonoTrabajoD = $("#TelefonoTrabajoD");
    var Celular2D = $("#Celular2D");
    var LineaActualD = $("#LineaActualD");
    var LineaNuevaD = $("#LineaNuevaD");
    var IncrementoD = $("#IncrementoD");
    var ProductoD = $("#ProductoD");
    var Ult4DgtD = $("#Ult4DgtD");
    var TasaAnualD = $("#TasaAnualD");
    var CatD = $("#CatD");
    var FechaCatD = $("#FechaCatD");
    var MontoMaximoD = $("#MontoMaximoD");
    var TipoDeLlamadaD = $("#TipoDeLlamadaD");
    var GEPCD = $("#GEPCD");
    var PlazoDisponibleD = $("#PlazoDisponibleD");
    var MontoDisponibleD = $("#MontoDisponibleD");
    var StatusD = $("#StatusD");
    var FechaVentaDisponible = $("#FechaVentaDisponible");
    var desc_producto = document.getElementById('TipoOfertaD');

    var FechaVicitaSucursalDis = $("#FechaVicitaSucursalDisp");
    var SucursalDis = $("#SucursalDisp");
    var NumeroSucursalDis = $("#NumeroSucursalDisp");

    if (FolioD.val() === "") {
        alert("Debes de ingresar un folio valido");
        FolioD.focus();
        return;
    }
    if (TelefonoTrabajoD.val() === "") {
        TelefonoTrabajoD.val("0")
    }
    if (Celular2D.val() === "") {
        Celular2D.val("0")
    }
    if (LineaActualD.val() === "") {
        alert("Debe de ingresar una linea actual de negocios");
        LineaAatualD.focus();
        return;
    }
    if (LineaNuevaD.val() === "") {
        alert("Debe de ingresar una linea nueva de negocios");
        LineaNuevaD.focus();
        return;
    }
    if (IncrementoD.val() === "") {
        alert("Debe de ingresar un incremento");
        IncrementoD.focus();
        return;
    }
    if (ProductoD.val() === "") {
        alert("Debe de ingresar un producto");
        ProductoD.focus();
        return;
    }
    if (Ult4DgtD.val() === "") {
        alert("Debe de ingresar un utl valido");
        Ult4DgtD.focus();
        return;
    }
    if (TasaAnualD.val() === "") {
        alert("Debe de ingresar una tasa anual");
        TasaAnualD.focus;
        return;
    }
    if (CatD.val() === "") {
        alert("Ingrese un Cat valido");
        CatD.focus();
        return;
    }
    if (FechaCatD.val() === "") {
        alert("ingrese fecha cat");
        FechaCatD.focus();
        return;
    }
    if (MontoMaximoD.val() === "") {
        alert("Ingrese un monto maxico");
        MontoMaximoD.focus();
        return;
    }
    //if (TipoDeLlamadaD.val() == "0") {
    //    alert("Ingrese un tipo de llamada valido");
    //    TipoDeLlamadaD.focus();
    //    return;
    //}
    //if (GEPCD.val() === "") {
    //    alert("Ingrese un gep valido");
    //    GEPCD.focus();
    //    return;
    //}
    if (FechaVicitaSucursalDis.val() === "") {
        alert("Ingrese cliente desde");
        FechaVicitaSucursalDis.focus();
        return;
    }

    //if (SucursalDis.val() === "") {
    //    alert("Ingrese Sucursal");
    //    SucursalDis.focus();
    //    return;
    //}
    //if (NumeroSucursalDis.val() === "") {
    //    alert("Agrega el piso");
    //    NumeroSucursalDis.focus();
    //    return;
    //}
    if (PlazoDisponibleD.val() == "0") {
        alert("Ingrese un plazo disponible");
        PlazoDisponibleD.focus();
        return;
    }
    if (MontoDisponibleD.val() === "") {
        alert("Ingrese un monto disponible");
        MontoDisponibleD.focus();
        return;
    }
    if (parseInt(MontoMaximoD.val()) > parseInt(MontoDisponibleD.val())) {
        console.log(MontoMaximoD.val() + "  " + MontoDisponibleD.val());
        alert("El monto máximo no debe pasar el monto disponible");
        MontoMaximoD.focus();
        return;
    }

    if (parseInt(MontoDisponibleD.val()) < parseInt(MontoMaximoD.val())) {
        alert('El monto maximo debe ser menor igual a monto disponible');
        MontoMaximoD.focus();
        return;
    } else if (parseInt(MontoMaximoD.val()) < 5000) {
        alert('El monto maximo no puede estar debajo de 5000');
        MontoMaximoD.focus();
        return;
    }

    var DisponibleEstatusVenta = "";
    if (UserType == 6) {//si es valdiador
        DisponibleEstatusVenta = $("#DisponibleEstatusVenta").val();
        if (DisponibleEstatusVenta == 0) {
            alert("Seleccione estatus de la venta");
            $("#DisponibleEstatusVenta").focus();
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


        Id: Id.val(),
        Folio: FolioD.val(),
        TelTrabajo: TelefonoTrabajoD.val(),
        Celular1: Celular2D.val(),
        LineaActual: LineaActualD.val(),
        LineaNueva: LineaNuevaD.val(),
        Incremento: IncrementoD.val(),
        Producto: ProductoD.val(),
        Ult4DIG: Ult4DgtD.val(),
        TasaAnual: TasaAnualD.val(),
        Cat: CatD.val(),
        FechaCat: FechaCatD.val(),
        MontoMaximo: MontoMaximoD.val(),
        TipoLlamada: TipoDeLlamadaD.val(),
        Gepc: GEPCD.val(),
        PlazoDisponible: PlazoDisponibleD.val(),
        MontoDisponible: MontoDisponibleD.val(),
        Estatus: StatusD.val(),
        Celular2: Celular2D.val(),
        EstatusVenta: DisponibleEstatusVenta,
        FechaVenta: FechaVentaDisponible.val(),
        TipoOferta: desc_producto.value,
        Bancanet: document.getElementById('lblResp1').value,
        Adicionales: document.getElementById('lblResp2').value,

        FechaVicitaSucursal: FechaVicitaSucursalDis.val(),
        Sucursal: SucursalDis.val(),
        NumeroSucursal: NumeroSucursalDis.val(),
    };
    datos = json;
    SalvarDatosDisponible(json);
}

function SalvarDatosDisponible(json) {
    showLoader();
    $.ajax({
        url: hostInit + "/Client/SaveDisponibleData",
        type: 'POST',
        contentType: 'Application/json;charset=UTF8',
        data: JSON.stringify(json),
        success: function (response) {
            console.log(response);
            //cambiar color
            noValidado("EstadoDisponible", "HeadingDisponible", "ValidarDisponible", "SaveDisponible");
            hideLoader();
           // ValidarGrupo();
        },
        error: function (error) {
            console.log("ocurrio un error al guardar sus datos");
            hideLoader();
        }
    });
}

//Valida los check en el modal de validacion 
function CheckCli() {
    if (document.getElementById('chkCli').checked) {
        document.getElementById('DivPlazo').hidden = true;
        document.getElementById('btnGuardar').hidden = false;
        document.getElementById('ValidateDisponible').hidden = true;
    } else {
        document.getElementById('DivPlazo').hidden = false;
        document.getElementById('btnGuardar').hidden = true;
        document.getElementById('ValidateDisponible').hidden = false;
    }
}

//Valida el radio seleccionado en la validacion
function CheckTipo() {
    var t = $('input[name="tipo"]:checked').val();
    //pendiente
    if (t == "Tradicional") {
        document.getElementById('DivElec').hidden = false;
        document.getElementById('DivAdi').hidden = false;
    } else {
        document.getElementById('DivElec').hidden = true;
        document.getElementById('DivAdi').hidden = true;
    }
}

//Valida que los plazos seleccionados coincidan
function ValidarPlazos() {
    if (document.getElementById('cmbRepPlazo').value != document.getElementById('PlazoDisponibleD').value) {
        document.getElementById('respuestaAuten').innerHTML = "ERROR, LOS PLAZOS DEBEN COINCIDIR";
      //  document.getElementById('cmbRepPlazo').value = "0"
    } else {
        document.getElementById('respuestaAuten').innerHTML = "RESPUESTA";
        document.getElementById('btnGuardar').disabled = false;
        document.getElementById('cmbPreg1Auten').disabled = false;
    }
}


//Valida el guardar datos
function ValidarAutentica() {
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
    var GEPCD = $("#GEPCD");
    var MontoMaximoD = $("#MontoMaximoD");
    var MontoDisponibleD = $("#MontoDisponibleD");
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
    //if (NumeroInterior.val() === "") {
    //    alert("Ingrese numero interior");
    //    NumeroInterior.focus();
    //    return;
    //}
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

    //if (GEPCD.val() === "") {
    //    alert("Ingrese un gep valido");
    //    GEPCD.focus();
    //    return;
    //}

    if (document.getElementById('FechaCatD').value === "") {
        alert("ingrese fecha cat");
        document.getElementById('FechaCatD').focus();
        return;
    
    //} else if (document.getElementById('TipoDeLlamadaD').value == "0") {
    //    alert("Ingrese un tipo de llamada valido");
    //    document.getElementById('TipoDeLlamadaD').focus();
    //    return;
    } else if (document.getElementById('PlazoDisponibleD').value == "0") {
        alert("Ingrese un plazo disponible");
        document.getElementById('PlazoDisponibleD').focus();
        return;
    } else if (parseInt(MontoMaximoD.val()) > parseInt(MontoDisponibleD.val())) {
        console.log(MontoMaximoD.val() + "  " + MontoDisponibleD.val());
        alert("El monto máximo no debe pasar el monto disponible");
        MontoMaximoD.focus();
        return;
    } else if (parseInt(MontoDisponibleD.val()) < parseInt(MontoMaximoD.val())) {
        alert('El monto maximo debe ser menor igual a monto disponible');
        MontoMaximoD.focus();
        return;
    } else if (parseInt(MontoMaximoD.val()) < 5000) {
        alert('El monto maximo no puede estar debajo de 5000');
        MontoMaximoD.focus();
        return;
    } else {
        var t = $('input[name="tipo"]:checked').val();

        var Id = $("#IdDisponible");
        var FolioD = $("#FolioD");
        var TelefonoTrabajoD = $("#TelefonoTrabajoD");
        var Celular2D = $("#Celular2D");
        var LineaActualD = $("#LineaActualD");
        var LineaNuevaD = $("#LineaNuevaD");
        var IncrementoD = $("#IncrementoD");
        var ProductoD = $("#ProductoD");
        var Ult4DgtD = $("#Ult4DgtD");
        var TasaAnualD = $("#TasaAnualD");
        var CatD = $("#CatD");
        var FechaCatD = $("#FechaCatD");
        var MontoMaximoD = $("#MontoMaximoD");
        var TipoDeLlamadaD = $("#TipoDeLlamadaD");
        var GEPCD = $("#GEPCD");
        var PlazoDisponibleD = $("#PlazoDisponibleD");
        var MontoDisponibleD = $("#MontoDisponibleD");
        var StatusD = $("#StatusD");
        var FechaVentaDisponible = $("#FechaVentaDisponible");

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

        var datos = {
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

            Id: Id.val(),
            Folio: FolioD.val(),
            TelTrabajo: TelefonoTrabajoD.val(),
            Celular1: Celular2D.val(),
            LineaActual: LineaActualD.val(),
            LineaNueva: LineaNuevaD.val(),
            Incremento: IncrementoD.val(),
            Producto: ProductoD.val(),
            Ult4DIG: Ult4DgtD.val(),
            TasaAnual: TasaAnualD.val(),
            Cat: CatD.val(),
            FechaCat: FechaCatD.val(),
            MontoMaximo: MontoMaximoD.val(),
            TipoLlamada: TipoDeLlamadaD.val(),
            Gepc: GEPCD.val(),
            PlazoDisponible: PlazoDisponibleD.val(),
            MontoDisponible: MontoDisponibleD.val(),
            Estatus: StatusD.val(),
            Celular2: Celular2D.val(),
            FechaVenta: FechaVentaDisponible.val(),
            TipoOferta: document.getElementById('TipoOfertaD').value,
            Bancanet: document.getElementById('lblResp1').value,
            Adicionales: document.getElementById('lblResp2').value
        }
        if (t == "mobil") {
            datos['autentica'] = "";
            //Se va directo sin autenticacion
            $.ajax({
                url: hostInit + '/Client/SaveDisponibleData',
                type: 'POST',
                contentType: 'application/json;charset=utf-8',
                data: JSON.stringify(datos),
                success: function (response) {
                    $("#HeadingDisponible").css("background-color", "#969696");
                    $("#EstadoDisponible").html("Validado");
                    $("#ValidarDisponible").hide();
                    setFieldsDisponible("disabled");

                    if (datos['EstatusVenta'] == 2) {//no venta
                        noVendido("EstadoDisponible", "HeadingDisponible", "ValidarDisponible", "SaveDisponible");
                        //ValidarGrupo();
                    } else {
                        ventaExitosa("EstadoDisponible", "HeadingDisponible", "ValidarDisponible", "SaveDisponible");
                        setFieldsBalcon("disabled");
                        $("#collapse10").collapse('hide');
                        $("#modalDisponible").hide()
                        hideLoader();
                        var folio = $("#FolioD");
                        alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });
                        //Mensaje("Venta Exitosa Folio: " + FolioD.val());
                    }
                    $("#StatusSaleDisponible").val(0);
                    hideLoader();
                },
                error: function (error) {
                    console.log("Ocurrio un error al guardar los dao");
                    hideLoader();
                }
            });
        } else {
            if (document.getElementById('cmbPreg1Auten').value == 0 && document.getElementById('cmbPreg2Auten').value == 0) {
                //guarda con autenticacion y fecha visita a sucursal
                document.getElementById('respuestaAuten').innerHTML = "DEBE CONTESTAR LAS PREGUNTAS DE AUTENTICACIÓN";
            } else {
                let autentica = document.getElementById('respuestaAuten').textContent;
                datos['autentica'] = autentica;
                console.log(datos);
                $.ajax({
                    url: hostInit + '/Client/SaveDisponibleData',
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    data: JSON.stringify(datos),
                    success: function (response) {
                        $("#HeadingDisponible").css("background-color", "#969696");
                        $("#EstadoDisponible").html("Validado");
                        $("#ValidarDisponible").hide();
                        setFieldsDisponible("disabled");

                        if (datos['EstatusVenta'] == 2) {//no venta
                            noVendido("EstadoDisponible", "HeadingDisponible", "ValidarDisponible", "SaveDisponible");
                            //ValidarGrupo();
                        } else {
                            ventaExitosa("EstadoDisponible", "HeadingDisponible", "ValidarDisponible", "SaveDisponible");
                            setFieldsBalcon("disabled");
                            $("#collapse10").collapse('hide');
                            $("#modalDisponible").hide()
                            hideLoader();

                            var folio = $("#FolioD");
                            alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });

                            //Mensaje("Venta Exitosa Folio: " + FolioD.val());
                            document.getElementById('DivAutentica').hidden = true;
                            document.getElementById('DivCredVal').hidden = false;
                            //document.getElementById('ValidateDisponible').style = 'display: block';
                            document.getElementById('ValidateDisponible').hidden = false;
                            $("#ValidateDisponible").show();
                            document.getElementById('btnGuardar').disabled = true;
                            hideLoader();
                        }
                        $("#StatusSaleDisponible").val(0);
                        hideLoader();
                    },
                    error: function (error) {
                        console.log("Ocurrio un error al guardar los datos");
                        hideLoader();
                    }
                });
            }
        }
    }
}

//Valida pregunta 1 de autenticacion
function ValidarPregunta1() {
    var p = document.getElementById('cmbPreg1Auten').value;
    var r = document.getElementById('lblResp1').value;
    document.getElementById('btnGuardar').disabled = false;
    if (p == 2 && r == 2) {
        document.getElementById('respuestaAuten').innerHTML = "AUTENTICO";
        document.getElementById('cmbPreg2Auten').disabled = true;
        document.getElementById('btnGuardar').disabled = false;
    } else if (p == 1 && r == 1) {
        document.getElementById('respuestaAuten').innerHTML = "AUTENTICO";
        document.getElementById('cmbPreg2Auten').disabled = true;
        document.getElementById('btnGuardar').disabled = false;
    } else {
        document.getElementById('respuestaAuten').innerHTML = "NO AUTENTICO, INTENTE CON LA PREGUNTA 2";
        document.getElementById('cmbPreg2Auten').disabled = false;
    }
    document.getElementById('cmbPreg1Auten').disabled = true;
}

//Valida pregunta 2 de autenticacion
function ValidarPregunta2() {
    var p = document.getElementById('cmbPreg2Auten').value;
    var r = document.getElementById('lblResp2').value;
    if (p == 2 && r == 2) {
        document.getElementById('respuestaAuten').innerHTML = "AUTENTICO";
        document.getElementById('btnGuardar').disabled = false;
    } else if (p == 1 && r == 1) {
        document.getElementById('respuestaAuten').innerHTML = "AUTENTICO";
        document.getElementById('btnGuardar').disabled = false;
    } else {
        document.getElementById('respuestaAuten').innerHTML = "NO AUTENTICO";
        document.getElementById('btnGuardar').disabled = false;
    }
    document.getElementById('cmbPreg2Auten').disabled = true;
}

//function ValidarPregunta1() {
//    var p = document.getElementById('cmbPreg1Auten').value;
//    var r = document.getElementById('lblResp1').value;
//    if (p == 2 && r == 2) {
//        document.getElementById('respuestaAuten').hidden = false;
//        document.getElementById('respuestaAuten').innerHTML = "AUTENTICA";
//        document.getElementById('respuestaAuten').style = "color:green";
//        document.getElementById('cmbBancaDisp').disabled = true;//se deshabilita el combo de bancanet
//        document.getElementById('cmbAdicionalesDisp').disabled = true; //se activa el combo de adicionales
//        //document.getElementById('ValidateCli').disabled = false;//se habilita el combo de bancanet
//    } else {
//        document.getElementById('respuestaAuten').hidden = false;
//        document.getElementById('respuestaAuten').innerHTML = "NO AUTENTICA";
//        document.getElementById('respuestaAuten').style = "color:red";
//        document.getElementById('cmbBancaDisp').disabled = true;//se desabilita el combo de bancanet
//        document.getElementById('ValidateCli').disabled = false; //Se habilita el boton para guardar
//        document.getElementById('cmbAdicionalesDisp').disabled = false;
//    }
//}

//function PreguntaAdicionalesDisp() {
//    var p = document.getElementById('cmbAdicionalesDisp').value;
//    //var b = document.getElementById('cmbBancaE').value;
//    if (p == document.getElementById('TieneAdicionalesCli').value /*&& b == document.getElementById('BancaElectronicaCli').value*/) {
//        document.getElementById('respuestaAuten').hidden = false;
//        document.getElementById('respuestaAuten').innerHTML = "AUTENTICA";
//        document.getElementById('respuestaAuten').style = "color:green";
//        document.getElementById('ValidateCli').disabled = false;
//        document.getElementById('cmbAdicionalesDisp').disabled = true; //Se deshabilita el combo
//    } else {
//        document.getElementById('respuestaAuten').hidden = false;
//        document.getElementById('respuestaAuten').innerHTML = "NO AUTENTICA";
//        document.getElementById('respuestaAuten').style = "color:red";
//        document.getElementById('ValidateCli').disabled = false;
//        document.getElementById('cmbAdicionalesDisp').disabled = true; //Se deshabilita el combo
//    }
//}







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

function LoadCombosDisp(ID, CATALOGO, idCombo, dato) {
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
function check_val_disp() {
    if ((document.getElementById('check_disp').checked) == true) {
        document.getElementById("SaveDisponible").hidden = false;
        document.getElementById("panelDisp").hidden = false;
        document.getElementById("SaveCalifDisp").hidden = true;
        document.getElementById("panelCalificacionDisp").hidden = true;
    }
    else {
        document.getElementById("SaveDisponible").hidden = true;
        document.getElementById("panelDisp").hidden = true;
        document.getElementById("SaveCalifDisp").hidden = false;
        document.getElementById("panelCalificacionDisp").hidden = false;
    }
}

//GUARDA DATOS Y LLENA JSON
function saveCalif5() {
    var BalconCalif;
    BalconCalif = $("#comboDispCalif").val;
    var folio = $("#FolioD");
    var Calificacion = document.getElementById("comboDispCalif").value;

    if (Calificacion == 0) {
        alert("Seleccione una Calificacion");
        $("#comboDispCalif").focus();
        return;
    }
    var json = {
        Folio: folio.val(),
        NumeroCliente: document.getElementById("Cliente").value,
        Calificacion: document.getElementById("comboDispCalif").value,
    };
    console.log(json);
    saveCalifDataDisp(json);
    datos = json;
}


function saveCalifDataDisp(json) {
    showLoader();
    var xml = new XMLHttpRequest();
    var url = hostInit + "/Client/saveCalificacion";
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            Calificado("EstadoDisponible", "HeadingDisponible", "SaveCalifDisp", "SaveDisponible");
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

    //continuarOfertaDisp();
}

//function Mensaje(mensaje) {
//    var folio = $("#FolioD");
//    Swal.fire({
//        title: 'Venta Exitsa!!  FOLIO: ' + folio.val(),
//        text: "Felicidades !",
//        icon: 'info',
//        width: '50%',
//        showCancelButton: false,
//        confirmButtonColor: '#5564eb',
//        cancelButtonColor: '#ff0500',
//        //confirmButtonText: 'Si, continuar!'
//    })
//}
