var sucursalesCnc;
var namePattern = "^[a-z A-Z]{4,30}$";
var emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
var ban = false;
var Estados = new Array();

function checkInput(idInput, pattern) {
    return $(idInput).val().match(pattern) ? true : false;
}

function checkNumber(input) {
    var pattern = "[0-9]";
    return input.val().match(pattern) ? true : false;
}

/*MANEJADOR DE VENTANA DE CARGA*/
function showLoader() {
    $("#carga").show();
    $('#myModal').modal({
        show: 'false'
    });
    $("#loader").css("display", "block");
}

/*ocultar ventana de carga*/
function hideLoader() {
    $("#myModal").modal('hide');
    $("#carga").hide();
    $("#carga").css("display", "none");
    if ($('.modal-backdrop').is(':visible')) {
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    };
}


//esta funcion se llama cuando se logue el usuario
//sirve para asignar escuchadores de evento para la ventana principal donde se muestra el navbar y los collapse
function LoadPrincipal() {
    mouse();
    hideLoader();
    hiddeCollaps();
    $("#Buscar").click(SearchClient);
    var FieldCLientNumber = document.getElementById("NumeroCliente");
    FieldCLientNumber.onkeypress = function (evt) {
        if (evt.key === 'Enter' || evt.keyIdentifier === 'Enter') {
            evt.preventDefault();
            SearchClient();
        }
    }
    $("#FechaNacimiento").datepicker(dataCalendar);
}


//busca los datos de sucursal con base a SIRH
//y lo carga en los campos de la modal que se encuetra en _Principal.cshtml
function LoadDetailsOffice(id) {
    id = (id === '' ? 0 : id);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var response = JSON.parse(xhttp.response);
            if (response != null) {
                document.getElementById("DetalleNombreEmp").value = response.NOMBRE_DISPOSITIVO;
                document.getElementById("DetalleDivision").value = response.DIVISION;
                document.getElementById("DetalleDireccion").value = response.DIRECCION;
                document.getElementById("DetalleDomicilio").value = response.DOMICILIO;
                document.getElementById("DetalleColonia").value = response.COLONIA;
                document.getElementById("DetalleCalle1").value = response.CALLE1;
                document.getElementById("DetalleCalle2").value = response.CALLE2;
                document.getElementById("DetalleDelegacionMunicipio").value = response.DELEG_MUNIC;
                document.getElementById("DetalleAperturaLunesViernes").value = response.LUNES_VIERNES_AP + ' A.M';
                document.getElementById("DetalleCierreLunesViernes").value = response.LUNES_VIERNES_CIE + ' P.M';
                document.getElementById("DetalleAperturaSabados").value = (response.SABADOS_AP === 'NA' ? response.SABADOS_AP : response.SABADOS_AP + ' A.M');
                document.getElementById("DetalleCierreSabados").value = (response.SABADOS_CIE === 'NA' ? response.SABADOS_CIE : response.SABADOS_CIE + ' P.M');
                $("#DetalleSucursal").modal("show");
            } else {
                alert("No se encontraron los datos del SIRH");
            }
        }
    }
    xhttp.open("GET", hostInit + '/Client/FindLoadBranchOfficeForSirh/' + id, true);
    xhttp.send();
}


//busca los datos generales del cliente asi como los datos para cada campaña con las que trabaja
function SearchClient() {
    if ($("#NumeroCliente").val() === "") {
        alert("Ingrese un numero de cliente para realizar búsqueda");
        $("#NumeroCliente").focus();
        return;
    }
    showLoader();

    hiddeCollaps();
    var NumberClient = $("#NumeroCliente").val();
    $("#Cliente").val(NumberClient);

    $.ajax({
        url: hostInit + '/Client/FindDataClient/' + NumberClient,
        type: 'GET',
        contentType: 'application/json;charset=utf-8',
        success: function (response) {
            console.log(response);
            setGeneralData(
                response['NumeroCliente'],     response['Nombre'],          response['ApellidoPaterno'],
                response['ApellidoMaterno'],   response['FechaNacimiento'], response['RFC'],
                response['Calle'],             response['NumeroExterior'],  response['NumeroInterior'],
                response['CodigoPostal'],      response['Colonia'],         response['Estado'],
                response['Municipio'],         response['Celular'],         response['TelefonoCasa']
            );
            showBells(response.Campanias);
            $("#NumeroCliente").val("");
            hideLoader();
            $("#NumeroCliente").focus();
        },
        error: function (error) {
            console.log("Ocurrio un error");
            console.log(error);
            hideLoader();
        }
    });
}


//establece los datos generales del cliente
function setGeneralData(NumeroCliente, Nombres, ApellidoPaterno, ApellidoMaterno, FechaNacimiento,
    RFC, Calle, NumeroExterior, NumeroInterior, CodigoPostal, Colonia, Estado, Municipio, Celular, TelefonoCasa) {
    $("#Cliente").val(NumeroCliente);
    $("#Nombres").val(Nombres);
    $("#ApellidoPaterno").val(ApellidoPaterno);
    $("#ApellidoMaterno").val(ApellidoMaterno);
    $("#FechaNacimiento").val(formatDate(FechaNacimiento));
    $("#RFC").val(RFC);
    $("#Calle").val(Calle);
    $("#NumeroExterior").val(NumeroExterior);
    $("#NumeroInterior").val(NumeroInterior);
    $("#CodigoPostal").val(CodigoPostal);
    $("#Estado").val(Estado);
    $("#Municipio").val(Municipio);
    $("#Colonia").val(Colonia);
    $("#Celular").val(Celular);
    $("#TelefonoCasa").val(TelefonoCasa);

    $("#Nombres").prop('disabled', true);
    $("#ApellidoPaterno").prop('disabled', true);
    $("#ApellidoMaterno").prop('disabled', true);
    $("#FechaNacimiento").prop('disabled', true);
    $("#RFC").prop('disabled', true);
    $("#Calle").prop('disabled', true);
    $("#NumeroExterior").prop('disabled', true);
    $("#NumeroInterior").prop('disabled', true);
    $("#CodigoPostal").prop('disabled', true);
    $("#Estado").prop('disabled', true);
    $("#Municipio").prop('disabled', true);
    $("#Colonia").prop('disabled', true);
}


//recorre el arreglo de campañas para mostrar el collapse y llenar los campos con 
//los datos extraidos de la base
function showBells(array) {
    if ($("#balconBr")) {
        $("#balconBr").remove();
    }
    if ($("#cliBr")) {
        $("#cliBr").remove();
    }
    if ($("#cncBr")) {
        $("#cncBr").remove();
    }
    if ($("#cpcBr")) {
        $("#cpcBr").remove();
    }
    if ($("#disponibleBr")) {
        $("#disponibleBr").remove();
    }
    if ($("#hipoBr")) {
        $("#hipoBr").remove();
    }
    if ($("#pagareBr")) {
        $("#pagareBr").remove();
    }
    if ($("#fondosBr")) {
        $("#fondosBr").remove();
    }
    if ($("#pymeBr")) {
        $("#pymeBr").remove();
    }
    if ($("#redisposicionBr")) {
        $("#redisposicionBr").remove();
    }
    if ($("#tdcpasBr")) {
        $("#tdcpasBr").remove();
    }

    var ban = false;
    $("#Checks").empty();
    $("#Checks").html(html);
    $("#CheckTdcPAP").remove();
    $("#CheckTdcPAS").remove();
    $("#CheckTdcPROSPECTOR").remove();
    var html = '';
    var checkPAP, checkPAS, checkPROS;
    checkPAP = checkPAS = checkPROS = false;
    console.log(array);
    for (var i in array) {
        switch (array[i].NombreCampania) {
            case "BALCON":
                //si no se ha vendido y el usuario logeado es rvt
                if (UserType == 3 || (UserType == 6 && array[i].New != 0) || (UserType == 4 && array[i].New != 0)) {
                    $("#BALCON").after("<br id='balconBr'/>");
                    $("#BALCON").show();//muestra collapse
                    $("#HeadingBalcon").attr("name", "GB");

                    //llama a la funcion SetBalconData que establece los datos de balcon
                    //en sus respectivos campos
                    SetBalconData(
                        array[i].Id, array[i].Folio,
                        array[i].Producto, array[i].Ult4DGT, array[i].TasaAnual, array[i].Cat,
                        array[i].FechaCat, array[i].MontoMaximo, array[i].TipoLlamada,
                        array[i].EstatusVenta, array[i].FechaVisitaSucursal,
                        array[i].Division, array[i].EstadoSucursal, array[i].MunicipioSucursal,
                        array[i].Sucursal, array[i].NumeroSucursal
                    );
                    console.log(EstadoSucursal);
                }
                break;
            case "CLI":
                if (UserType == 3 || (UserType == 6 && array[i].New != 0) || (UserType == 4 && array[i].New != 0)) {
                    $("#CLI").after("<br id='cliBr'/>");
                    $("#CLI").show();//muestra collapse
                    $("#HeadingCli").attr("name", "GA");
                    //llama a la funcion SetCliData que establece los datos de balcon
                    //en sus respectivos campos
                    SetCliData(
                        array[i].Id, array[i].Folio, array[i].NumeroTargeta,
                        array[i].Producto, array[i].LineaAtual, array[i].IncrementoLinea,
                        array[i].LineaNuevaTotal, array[i].BancaElectronica,
                        array[i].TieneAdicionales, array[i].Autenticacion, array[i].IdPlaza,
                        array[i].Piso, array[i].ClienteDesde, array[i].EstatusVenta,
                        array[i].Num_adicionales
                    );

                }
                break;
            case "CNC":
                if (UserType == 3 || (UserType == 6 && array[i].New != 0) || (UserType == 4 && array[i].New != 0)) {
                    $("#CNC").after("<br id='cncBr'/>");
                    $("#CNC").show();//muestra collapse
                    $("#HeadingCnc").attr("name", "GB");

                    //llama a la funcion SetCncData que establece los datos de balcon
                    //en sus respectivos campos
                    //Tasa: actualización 04042019
                    SetCncData(
                        array[i].Id, array[i].Folio, array[i].Linea36, array[i].Pago36,
                        array[i].Linea48, array[i].Pago48, array[i].Linea60, array[i].Pago60,
                        array[i].Plazo, array[i].Tasa, array[i].MontoPromesa, array[i].FechaVicitaSucursal,
                        array[i].Sucursal, array[i].NumeroSucursal, array[i].Division,
                        array[i].DirRegional, array[i].EstatusVenta, array[i].EstadoSucursal,
                        array[i].MunicipioSucursal, array[i].CATCNC, array[i].FechaCATCNC,
                        array[i].Linea24, array[i].Pago24, array[i].Pago18, array[i].Pago72
                    );
                }
                break;

            //(1) Mantenimiento 04 marzo 2019
            case "CPC":
                if (UserType == 3 || (UserType == 6 && array[i].New != 0) || (UserType == 4 && array[i].New != 0)) {
                    $("#CPC").after("<br id='cpcBr'/>");
                    $("#CPC").show();//muestra collapse
                    $("#HeadingCpc").attr("name", "GB");

                    //llama a la funcion SetCpcData que establece los datos de balcon
                    //en sus respectivos campos
                    SetCpcData(array[i].Id, array[i].Folio,
                        array[i].MontoMax24, array[i].Pago24,
                        array[i].MontoMax36, array[i].Pago36,
                        array[i].MontoMax48, array[i].Pago48,
                        array[i].MontoMax60, array[i].Pago60,
                        array[i].Tasa, array[i].Plazo,
                        array[i].MontoPromesa, array[i].FechaVicitaSucursal,
                        array[i].Sucursal, array[i].NumeroSucursal,
                        array[i].Regional, array[i].Division,
                        array[i].EstatusVenta, array[i].EstadoSucursal,
                        array[i].MunicipioSucursal, array[i].Oferta, array[i].CAT,
                        array[i].Fecha_cat
                    );
                }
                break;

            case "DISPONIBLE":
                if (UserType == 3 || (UserType == 6 && array[i].New != 0) || (UserType == 4 && array[i].New != 0)) {
                    $("#DISPONIBLE").after("<br id='disponibleBr' />");
                    $("#DISPONIBLE").show();//muestra collapse
                    $("#HeadingDisponible").attr("name", "GB");

                    //llama a la funcion SetDisponibleData que establece los datos de balcon
                    //en sus respectivos campos
                    SetDisponibleData(array[i].Id, array[i].Folio, array[i].TelTrabajo,
                        array[i].Celular2, array[i].LineaActual, array[i].LineaNueva, array[i].Incremento,
                        array[i].Producto, array[i].Ult4DIG, array[i].TasaAnual, array[i].Cat,
                        array[i].FechaCat, array[i].MontoMaximo, array[i].TipoLlamada,
                        array[i].Gepc, array[i].PlazoDisponible, array[i].MontoDisponible,
                        array[i].Estatus, array[i].FechaVenta, array[i].EstatusVenta, array[i].TipoOferta,
                        array[i].Bancanet, array[i].Adicionales, array[i].NumAdic);
                }

                break;

            case "HIPOTECARIO":
                if (UserType == 3 || (UserType == 6 && array[i].New != 0) || (UserType == 4 && array[i].New != 0)) {
                    $("#HIPOTECARIO").after("<br id='hipoBr'/>");
                    $("#HIPOTECARIO").show();//muestra collapse
                    $("#HeadingHIPO").attr("name", "GB");

                    //llama a la funcion HIpo que establece los datos de balcon
                    //en sus respectivos campos
                    //Tasa: actualización 04042019
                    //console.log(array[i].Id, array[i].Folio);
                    SetHIPOData(array[i].Id, array[i].Folio,
                        array[i].Tipo,
                        array[i].MontoPromesa,
                        //array[i].Tasa,
                        //array[i].CAT,
                        array[i].FechaVicitaSucursal,
                        array[i].Sucursal, array[i].NumeroSucursal, array[i].Division,
                        array[i].DirRegional, array[i].EstatusVenta, array[i].EstadoSucursal,
                        array[i].MunicipioSucursal);
                }
                break;

            case "PAGARE":
                if (UserType == 3 || UserType == 6) {
                    $("#PAGARE").after("<br id='pagareBr'/>");
                    $("#PAGARE").show();
                    console.log(array[i]);
                    console.log("Entra pagare principal")
                    SetPagareData(
                        array[i].Folio, array[i].Id, array[i].FechaVicitaSucursal, array[i].Division,
                        array[i].Regional, array[i].NumeroSucursal, array[i].EstatusVenta,
                        array[i].NMSucursal, array[i].Estado_SucPagare, array[i].Municipio_SucPagare
                    );
                }
                break;
            case "FONDOS":
                if (UserType == 3 || UserType == 6) {
                    $("#FONDOS").after("<br id='fondosBr'/>");
                    $("#FONDOS").show();
                    console.log(array[i]);
                    SetFondosData(
                        array[i].Folio, array[i].Id, array[i].FechaVicitaSucursal, array[i].Division,
                        array[i].Regional, array[i].NumeroSucursal, array[i].EstatusVenta,
                        array[i].NMSucursal, array[i].Estado_SucFondos, array[i].Municipio_SucFondos
                    );
                }
                break;
            case "REDISPOSICION":
                if (UserType == 3 || (UserType == 6 && array[i].New != 0) || (UserType == 4 && array[i].New != 0)) {
                    $("#REDISPOSICION").after("<br id='redisposicionBr'/>");
                    $("#REDISPOSICION").show();//muestra collapse

                    //llama a la funcion SetRedisposicionData que establece los datos de balcon
                    //en sus respectivos campos
                    SetRedisposicionData(array[i].Id, array[i].Folio,
                        array[i].NumeroTargeta, array[i].Producto,
                        array[i].LineaCredito, array[i].TasaOriginal,
                        array[i].PlazoCredito, array[i].MontoDispersion,
                        array[i].Pago36, array[i].Pago48,
                        array[i].Pago60, array[i].Incremento,
                        array[i].LineaActual, array[i].LineaNueva,
                        array[i].CantidadDisponer, array[i].Ultimo3MesesUtilizandoBancaNet,
                        array[i].TieneTDCCitibanamex, array[i].EstatusVenta);
                }
                break;
            //TDC
            case "TDC_PAP_AAC":
                //console.log("TDC ACC");
                document.getElementById("IdTDC").value = array[i].Id;
                $("#Checks").html("<strong>Campaña:</strong>&nbsp;&nbsp;&nbsp;&nbsp;TDC PAP AAC");
                if (!ban) {
                    if (UserType == 3 || (UserType == 4 && array[i].New != 0) || (UserType == 6 && array[i].New != 0)) {
                        $("#TDCPAS").after("<br id='tdcpasBr'/>");
                        $("#TDCPAS").show();//muestra collapse
                        $("#HeadingPas").attr("name", "GA");
                        ban = true;
                        //llama a la funcion SetRedisposicionData que establece los datos de balcon
                        //en sus respectivos campos
                        SetPasData(array[i].Folio, array[i].Razon, array[i].Linea_Credito, array[i].Comentarios,
                            array[i].Celular,
                            array[i].PaisNacimiento, array[i].EntidadFederativa,
                            array[i].PaisNacionalidad, array[i].EdoCivil, array[i].Escolaridad,
                            array[i].NumDependientes, array[i].TipoVivienda, array[i].AniosResidencia,
                            array[i].NomEmp, array[i].CalleEmp, array[i].NumIntEmp,
                            array[i].NumExtEmp, array[i].CodigoPostalEmp, array[i].ColoniaEmp,
                            array[i].EstadoEmp, array[i].DelegacionEmp, array[i].Actividad, array[i].Ocupacion,
                            array[i].TipoEmpleo, array[i].Ext, array[i].AntiguedadAnios, array[i].AntiguedadMeses,
                            array[i].IngresoMensual, array[i].CompIngresos, array[i].Institucion1,
                            array[i].TipoCuenta1, array[i].Terminacion1, array[i].Institucion2,
                            array[i].TipoCuenta2, array[i].Terminacion2, array[i].Institucion3,
                            array[i].TipoCuenta3, array[i].Terminacion3, array[i].MaternoRef1,
                            array[i].PaternoRef1, array[i].NombreRef1, array[i].ParentescoRef1,
                            array[i].TelefonoRef1, array[i].ExtRef1, array[i].MaternoRef2,
                            array[i].PaternoRef2, array[i].NombreRef2, array[i].ParentescoRef2,
                            array[i].TelefonoRef2, array[i].ExtRef2, array[i].FechaVisitaSuc,
                            array[i].Sucursal, array[i].NumeroSucursal,
                            array[i].FolioECS, array[i].RefBuro, array[i].EstatusAutenticacion,
                            array[i].EstatusFrontTMK, array[i].EstatusFrontTMK2, array[i].CausaDeclinacion, array[i].EstatusDeclinacion,
                            array[i].TelefonoProc, array[i].TipoPersona, array[i].TipoTargeta,
                            array[i].TipoTargetaBancaria, array[i].TipoTargetaDepartamental,
                            array[i].TipoTargetaComercial, array[i].SinTDC, array[i].TipoRecibidosNomina,
                            array[i].TipoEstadoCuenta, array[i].LineaCredito, array[i].Antiguedad,
                            array[i].Ingresos, array[i].Buro, array[i].EstatusFinal, array[i].ProcesoPendiente,
                            array[i].Canceladas, array[i].ComentariosProc, array[i].Division,
                            array[i].Regional, array[i].TelefonoEmp, array[i].Genero, array[i].ComprobanteDomicilio,
                            array[i].Producto, array[i].TipoIdentificacion, array[i].email,
                            array[i].EstatusVenta, array[i].Curp, array[i].Razon, array[i].EstadoSuc, array[i].MunicipioSuc,
                            array[i].Telefono, array[i].Tel_Contacto
                        );
                    }
                }
                break;
            case "TDC_PROSPECTOR":
                console.log("TDC PROSPECTOR");
                document.getElementById("IdTDC").value = array[i].Id;
                $("#Checks").html("<strong>Campaña:</strong>&nbsp;&nbsp;&nbsp;&nbsp;TDC PROSPECTOR");
                if (!ban) {
                    if (UserType == 3 || (UserType == 4 && array[i].New != 0) || (UserType == 6 && array[i].New != 0)) {
                        $("#TDCPAS").after("<br id='tdcpasBr'/>");
                        $("#TDCPAS").show();
                        ban = true;
                        SetPasData(array[i].Folio, array[i].Razon, array[i].Linea_Credito, array[i].Comentarios,
                            array[i].Celular, array[i].PaisNacimiento, array[i].EntidadFederativa,
                            array[i].PaisNacionalidad, array[i].EdoCivil, array[i].Escolaridad,
                            array[i].NumDependientes, array[i].TipoVivienda, array[i].AniosResidencia,
                            array[i].NomEmp, array[i].CalleEmp, array[i].NumIntEmp,
                            array[i].NumExtEmp, array[i].CodigoPostalEmp, array[i].ColoniaEmp,
                            array[i].EstadoEmp, array[i].DelegacionEmp, array[i].Actividad, array[i].Ocupacion,
                            array[i].TipoEmpleo, array[i].Ext, array[i].AntiguedadAnios, array[i].AntiguedadMeses,
                            array[i].IngresoMensual, array[i].CompIngresos, array[i].Institucion1,
                            array[i].TipoCuenta1, array[i].Terminacion1, array[i].Institucion2,
                            array[i].TipoCuenta2, array[i].Terminacion2, array[i].Institucion3,
                            array[i].TipoCuenta3, array[i].Terminacion3, array[i].MaternoRef1,
                            array[i].PaternoRef1, array[i].NombreRef1, array[i].ParentescoRef1,
                            array[i].TelefonoRef1, array[i].ExtRef1, array[i].MaternoRef2,
                            array[i].PaternoRef2, array[i].NombreRef2, array[i].ParentescoRef2,
                            array[i].TelefonoRef2, array[i].ExtRef2, array[i].FechaVisitaSuc,
                            array[i].Sucursal, array[i].NumeroSucursal,
                            array[i].FolioECS, array[i].RefBuro, array[i].EstatusAutenticacion,
                            array[i].EstatusFrontTMK, array[i].EstatusFrontTMK2, array[i].CausaDeclinacion, array[i].EstatusDeclinacion,
                            array[i].TelefonoProc, array[i].TipoPersona, array[i].TipoTargeta,
                            array[i].TipoTargetaBancaria, array[i].TipoTargetaDepartamental,
                            array[i].TipoTargetaComercial, array[i].SinTDC, array[i].TipoRecibidosNomina,
                            array[i].TipoEstadoCuenta, array[i].LineaCredito, array[i].Antiguedad,
                            array[i].Ingresos, array[i].Buro, array[i].EstatusFinal, array[i].ProcesoPendiente,
                            array[i].Canceladas, array[i].ComentariosProc, array[i].Division,
                            array[i].Regional, array[i].TelefonoEmp, array[i].Genero, array[i].ComprobanteDomicilio,
                            array[i].Producto, array[i].TipoIdentificacion, array[i].email,
                            array[i].EstatusVenta, array[i].Curp, array[i].Razon, array[i].EstadoSuc, array[i].MunicipioSuc
                        );
                    }
                }
                break;
            case "TDC_PAS":
                console.log("TDC_PASS");
                document.getElementById("IdTDC").value = array[i].Id;
                $("#Checks").html("<strong>Campaña:</strong>&nbsp;&nbsp;&nbsp;&nbsp;TDC PAS");
                if (!ban) {
                    if (UserType == 3 || (UserType == 4 && array[i].New != 0) || (UserType == 6 && array[i].New != 0)) {
                        $("#TDCPAS").after("<br id='tdcpasBr'/>");
                        $("#TDCPAS").show();
                        ban = true;
                        SetPasData(array[i].Folio, array[i].Razon, array[i].Linea_Credito, array[i].Comentarios,
                            array[i].Celular, array[i].PaisNacimiento, array[i].EntidadFederativa,
                            array[i].PaisNacionalidad, array[i].EdoCivil, array[i].Escolaridad,
                            array[i].NumDependientes, array[i].TipoVivienda, array[i].AniosResidencia,
                            array[i].NomEmp, array[i].CalleEmp, array[i].NumIntEmp,
                            array[i].NumExtEmp, array[i].CodigoPostalEmp, array[i].ColoniaEmp,
                            array[i].EstadoEmp, array[i].DelegacionEmp, array[i].Actividad, array[i].Ocupacion,
                            array[i].TipoEmpleo, array[i].Ext, array[i].AntiguedadAnios, array[i].AntiguedadMeses,
                            array[i].IngresoMensual, array[i].CompIngresos, array[i].Institucion1,
                            array[i].TipoCuenta1, array[i].Terminacion1, array[i].Institucion2,
                            array[i].TipoCuenta2, array[i].Terminacion2, array[i].Institucion3,
                            array[i].TipoCuenta3, array[i].Terminacion3, array[i].MaternoRef1,
                            array[i].PaternoRef1, array[i].NombreRef1, array[i].ParentescoRef1,
                            array[i].TelefonoRef1, array[i].ExtRef1, array[i].MaternoRef2,
                            array[i].PaternoRef2, array[i].NombreRef2, array[i].ParentescoRef2,
                            array[i].TelefonoRef2, array[i].ExtRef2, array[i].FechaVisitaSuc,
                            array[i].Sucursal, array[i].NumeroSucursal,
                            array[i].FolioECS, array[i].RefBuro, array[i].EstatusAutenticacion,
                            array[i].EstatusFrontTMK, array[i].EstatusFrontTMK2, array[i].CausaDeclinacion, array[i].EstatusDeclinacion,
                            array[i].TelefonoProc, array[i].TipoPersona, array[i].TipoTargeta,
                            array[i].TipoTargetaBancaria, array[i].TipoTargetaDepartamental,
                            array[i].TipoTargetaComercial, array[i].SinTDC, array[i].TipoRecibidosNomina,
                            array[i].TipoEstadoCuenta, array[i].LineaCredito, array[i].Antiguedad,
                            array[i].Ingresos, array[i].Buro, array[i].EstatusFinal, array[i].ProcesoPendiente,
                            array[i].Canceladas, array[i].ComentariosProc, array[i].Division,
                            array[i].Regional, array[i].TelefonoEmp, array[i].Genero, array[i].ComprobanteDomicilio,
                            array[i].Producto, array[i].TipoIdentificacion, array[i].email,
                            array[i].EstatusVenta, array[i].Curp, array[i].Razon, array[i].EstadoSuc, array[i].MunicipioSuc
                        );
                    }
                }
                break;
            case "INACTIVOS":
                document.getElementById("IdTDC").value = array[i].Id;
                $("#Checks").html("<strong>Campaña:</strong>&nbsp;&nbsp;&nbsp;&nbsp;TDC PAS");
                if (!ban) {
                    if (UserType == 3 || (UserType == 4 && array[i].New != 0) || (UserType == 6 && array[i].New != 0)) {
                        $("#TDCPAS").after("<br id='tdcpasBr'/>");
                        $("#TDCPAS").show();
                        ban = true;
                        SetPasData(array[i].Folio, array[i].Razon, array[i].Linea_Credito, array[i].Comentarios,
                            array[i].Celular, array[i].PaisNacimiento, array[i].EntidadFederativa,
                            array[i].PaisNacionalidad, array[i].EdoCivil, array[i].Escolaridad,
                            array[i].NumDependientes, array[i].TipoVivienda, array[i].AniosResidencia,
                            array[i].NomEmp, array[i].CalleEmp, array[i].NumIntEmp,
                            array[i].NumExtEmp, array[i].CodigoPostalEmp, array[i].ColoniaEmp,
                            array[i].EstadoEmp, array[i].DelegacionEmp, array[i].Actividad, array[i].Ocupacion,
                            array[i].TipoEmpleo, array[i].Ext, array[i].AntiguedadAnios, array[i].AntiguedadMeses,
                            array[i].IngresoMensual, array[i].CompIngresos, array[i].Institucion1,
                            array[i].TipoCuenta1, array[i].Terminacion1, array[i].Institucion2,
                            array[i].TipoCuenta2, array[i].Terminacion2, array[i].Institucion3,
                            array[i].TipoCuenta3, array[i].Terminacion3, array[i].MaternoRef1,
                            array[i].PaternoRef1, array[i].NombreRef1, array[i].ParentescoRef1,
                            array[i].TelefonoRef1, array[i].ExtRef1, array[i].MaternoRef2,
                            array[i].PaternoRef2, array[i].NombreRef2, array[i].ParentescoRef2,
                            array[i].TelefonoRef2, array[i].ExtRef2, array[i].FechaVisitaSuc,
                            array[i].Sucursal, array[i].NumeroSucursal,
                            array[i].FolioECS, array[i].RefBuro, array[i].EstatusAutenticacion,
                            array[i].EstatusFrontTMK, array[i].EstatusFrontTMK2, array[i].CausaDeclinacion, array[i].EstatusDeclinacion,
                            array[i].TelefonoProc, array[i].TipoPersona, array[i].TipoTargeta,
                            array[i].TipoTargetaBancaria, array[i].TipoTargetaDepartamental,
                            array[i].TipoTargetaComercial, array[i].SinTDC, array[i].TipoRecibidosNomina,
                            array[i].TipoEstadoCuenta, array[i].LineaCredito, array[i].Antiguedad,
                            array[i].Ingresos, array[i].Buro, array[i].EstatusFinal, array[i].ProcesoPendiente,
                            array[i].Canceladas, array[i].ComentariosProc, array[i].Division,
                            array[i].Regional, array[i].TelefonoEmp, array[i].Genero, array[i].ComprobanteDomicilio,
                            array[i].Producto, array[i].TipoIdentificacion, array[i].email,
                            array[i].EstatusVenta, array[i].Curp, array[i].Razon, array[i].EstadoSuc, array[i].MunicipioSuc
                        );
                    }
                }
                break;
        }
    }
}

//funcion para ocultar los collapse
function hiddeCollaps() {
    $("#BALCON").hide();
    $("#HeadingBalcon").attr("name", "");
    $("#CLI").hide();
    $("#HeadingCli").attr("name", "");
    $("#CNC").hide();
    $("#HeadingCnc").attr("name", "");
    $("#CPC").hide();
    $("#HeadingCpc").attr("name", "");
    $("#DISPONIBLE").hide();
    $("#HeadingDisponible").attr("name", "");
    $("#HIPOTECARIO").hide();
    $("#HeadingHIPO").attr("name", "");
    $("#PAGARE").hide();
    $("#FONDOS").hide();
    $("#HeadingFondos").attr("name", "");
    $("#PYME").hide();
    $("#REDISPOSICION").hide();
    $("#TDCPAS").hide();
    $("#HeadingPas").attr("name", "");
}

var ban = false;
function mouse() {
}

//carga los estados en el combo especificado como parametro (idComboEstado),
//seleccione el item especificado como parametro (val)
function estados(idComboEstado, val, idMunicipio) {
    $.ajax({
        url: hostInit + '/Client/FindEstados',
        type: 'GET',
        contentType: 'application/json;charset=utf-8',
        success: function (response) {
            //var est = `<option value="0">Seleccione estado</option>`;
            var est = '';
            for (var i = 0; i < response.length; i++) {
                Estados.push(response[i]);
                est += '<option value="' + parseInt(response[i].Valor) + '">' + response[i].Texto + '</option>';
            }
            $("#" + idComboEstado).html(est);
            $("#" + idComboEstado).val(parseInt(val));
            est = '<option value="0">Seleccione municipio</option>';
            $("#" + idMunicipio).html(est);
        },
        error: function (error) {
            console.log("failed");
            console.log(error);
        }
    });
}

//agrega escuchador de eventos cuando se seleccione un item del combo estado y municipio del collapse datos generales
function AddEventsPrincipal() {
    SetEventPersonalData();
    $("#Estado").change(function (evt) {
        var val = $(this).val();
        LoadMunicipios(val, 0, "Municipio");
    });
    $("#Municipio").change(function (evt) {
        var val = $(this).val();
        LoadColonias(val, "Colonia", 0);
    });
}

//carga las colonias del municipio (idMunicipio)
//y los agrega en el combo (combo)
//selecciona el item (value)
function LoadColonias(idMunicipio, combo, value) {
    if (idMunicipio == 0) {
        var est = '<option value="0">Seleccione colonia</option>';
        $("#" + combo).html(est);
        $("#" + combo).val(value);
        return;
    }
    $.ajax({
        url: hostInit + '/Client/FindColoniasMunicipio/' + idMunicipio,
        type: 'GET',
        contentType: 'application/json;charset=utf-8',
        success: function (response) {
            var est = '<option value="0">Seleccione colonia</option>';
            for (var i = 0; i < response.length; i++) {
                est += '<option value="' + parseInt(response[i].Valor) + '">' + response[i].Texto + '</option>';
            }
            $("#" + combo).html(est);
            $("#" + combo).val(value);
        },
        error: function (error) {
            console.log("failed");
            console.log(error);
        }
    });
}

//carga las colonias del municipio (idMunicipio)
//y los agrega en el combo (combo)
//selecciona el item (value)
function LoadColoniasForMunicipio(idMunicipio, input, value) {
    $.ajax({
        url: hostInit + '/Client/FindColoniasMunicipio/' + idMunicipio,
        type: 'GET',
        contentType: 'application/json;charset=utf-8',
        success: function (response) {
            var est = '<option value="0">Seleccione colonia</option>';
            for (var i = 0; i < response.length; i++) {
                est += '<option value="' + parseInt(response[i].Valor) + '">' + response[i].Texto + '</option>';
            }
            $("#" + input).html(est);
            $("#" + input).val(value);
        },
        error: function (error) {
            console.log("failed");
            console.log(error);
        }
    });
}

//carga los municipios
function LoadMunicipios(val, data, idCombo) {
    if (val == 0) {
        var est = '<option value="0">Seleccione municipio</option>';
        $("#" + idCombo).html(est);
        $("#" + idCombo).val(data);
        return;
    }
    $.ajax({
        url: hostInit + '/Client/FindMunicipiosEstado/' + val,
        type: 'GET',
        contentType: 'application/json;charset=utf-8',
        success: function (response) {
            var est = '<option value="0">Seleccione municipio</option>';
            for (var i = 0; i < response.length; i++) {
                est += '<option value="' + response[i].Valor + '">' + response[i].Texto + '</option>';
            }
            $("#" + idCombo).html(est);
            $("#" + idCombo).val(data);
        },
        error: function (error) {
            console.log("failed");
            console.log(error);
        }
    });
}


function LogOut(evt) {
}