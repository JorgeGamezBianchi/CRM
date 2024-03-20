var continuar;
var ban = false;
var datosTdc;
function SetPasData(FolioPas, RazonPas, Linea_Credito, ComentariosPas, CelularPas, PaisDeNacimientoPas,
    EntidadFederativaPas, PaisNacionalidadPas, EstadoCivilPas, EscolaridadPas, NumeroDependientesPas,
    TipoDeViviendaPas, AniosResidenciaPas, NombrePas, CallePas, NumeroInteriorPas,
    NumeroExteriorPas, CodigoPostalPas, ColoniaPas, EstadoPas, DelegacionPas,
    ActividadPas, OcupacionPas, TipoDeEmpPas, ExtPas, AntiguedadAniosPas,
    AntiguedadMesesPas, IngresoMensualPas, CompIngresosPas, Institucion1Pas, TipoDeCuenta1Pas,
    Terminacion1Pas, Institucion2Pas, TipoDeCuenta2Pas, Terminacion2Pas, Institucion3Pas,
    TipoDeCuenta3Pas, Terminacion3Pas, MaternoRef1Pas, PaternoRef1Pas, NombreRef1Pas,
    ParentescoRef1Pas, TelefonoRef1Pas, ExtRef1Pas, MaternoRef2Pas, PaternoRef2Pas,
    NombreRef2Pas, ParentescoRef2Pas, TelefonoRef2Pas, ExtRef2Pas, VicitaSucursalPas,
    SucursalPas, NumeroSucursalPas, FolioECSPas, RefBuroPas, EstatusAutenticacionPas,
    EstatusFrontTMKPas, EstatusFrontTMKPas2, CausaDeclinacionPas, EstatusDeclinacionPas, TelefonoProcPas,
    TipoDePersonaPas, TipoDeTargetaPas, TipoDeTargetaBancariaPas, TipoDeTargDepartPas, TipoDeTargetaComercialPas,
    SinTDCPas, TiposRecibidosNominaPas, TipoEstadoCuentaPas, LineaCreditoPas, AntiguedadPas,
    IngresosPas, BuroPas, EstatusFinalPas, ProcesoPendientePas, CanceladasPas,
    ComentariosProcPas, Division, Regional, TelefonoEmpPas, Genero,
    ComprobanteDomicilioPas, ProductoPas, TipoIdentificacionPas, email, EstatusVenta,
    Curp, Razon, Estado_TDC, Municipio_TDC, Telefono, Tel_Contacto, FechaCAT_TDC, Calificacion, DatosGenerales) {

    LoadCombosTdc(48, 0, "comboTDCCalif", 0);

    $("#frmDatos").val(DatosGenerales);

    //*****cargar los combos*****
    //cargar genero
    LoadCombos(15, 6, "GeneroPas", (Genero == undefined) ? 0 : Genero);
    //cargar pais nacimiento
    LoadCombos(-1, -1, "PaisNacimientoPas", PaisDeNacimientoPas);
    //cargar entidad federativa
    estados("EntidadFederativaPas", EntidadFederativaPas, EntidadFederativaPas);
    //cargar pais nacionalidad
    LoadCombos(-1, -1, "PaisNacionalidadPas", PaisNacionalidadPas);
    //cargar pais nacionalidad procesos
    LoadCombos(-1, -1, "PaisNacionalidadPasProcesos", PaisNacionalidadPas);
    //cargar ESTADO CIVIL
    LoadCombos(15, 7, "EstadoCivilPas", EstadoCivilPas);
    //cargar ESCOLARIDAD
    LoadCombos(54, 6, "EscolaridadPas", EscolaridadPas);
    //cargar TIPO VIVIENDA
    LoadCombos(54, 4, "TipoViviendaPas", TipoDeViviendaPas);
    //cargar ACTIVIDAD
    LoadCombos(15, 12, "ActividadPas", ActividadPas);
    //cargar OCUPACION
    LoadCombos(15, 13, "OcupacionPas", OcupacionPas);
    //cargar TIPO EMP
    LoadCombos(15, 14, "TipoDeEmpPas", TipoDeEmpPas);
    //cargar COMP INGRESOS
    LoadCombos(15, 15, "CompIngresosPas", CompIngresosPas);
    //cargar INSTITUCION 1
    LoadCombos(15, 16, "Institucion1Pas", Institucion1Pas);
    //cargar TIPO DE CUENTA 1
    LoadCombos(15, 17, "TipoDeCuenta1Pas", TipoDeCuenta1Pas);
    //cargar INSTITUCION 2
    LoadCombos(15, 16, "Institucion2Pas", Institucion2Pas);
    //cargar TIPO DE CUENTA 2
    LoadCombos(15, 17, "TipoDeCuenta2Pas", TipoDeCuenta2Pas);
    //cargar INSTITUCION 3
    LoadCombos(15, 16, "Institucion3Pas", Institucion3Pas);
    //cargar TIPO DE CUENTA 3
    LoadCombos(15, 17, "TipoDeCuenta3Pas", TipoDeCuenta3Pas);
    //cargar PATERNO REF 1
    LoadCombos(15, 18, "ParentescoRef1Pas", ParentescoRef1Pas);
    //cargar PATERNO REF 2
    LoadCombos(15, 18, "ParentescoRef2Pas", ParentescoRef2Pas);
    //cargar REF  BURO
    LoadCombos(15, 21, "RefBuroPas", RefBuroPas);
    //cargar ESTATUS AUTENTICACION
    LoadCombos(15, 22, "EstatusAutenticacionPas", EstatusAutenticacionPas);
    //cargar ESTATUS FRONT TMK
    LoadCombos(15, 23, "EstatusFrontTMKPas", EstatusFrontTMKPas);
    //cargar ESTATUS FRONT TMK2
    LoadCombos(15, 23, "EstatusFrontTMKPas2", EstatusFrontTMKPas2); //Cambio 21-03-2019
    //cargar ESTATUS DECLINACION
    LoadCombos(15, 24, "EstatusDeclinacionPas", EstatusDeclinacionPas);
    //cargar TIPO DE PERSONA
    LoadCombos(15, 36, "TipoDePersonaPas", TipoDePersonaPas);
    //cargar TIPO DE TARGETA
    LoadCombos(15, 37, "TipoDeTargetaPas", TipoDeTargetaPas);
    //cargar SIN TDC
    LoadCombos(15, 40, "SinTDCPas", SinTDCPas);
    //cargar TIPO DE RECIBO NOMINA
    LoadCombos(15, 41, "TiposRecibosNominaPas", TiposRecibidosNominaPas);
    //cargar LINEA CREDITO
    LoadCombos(-9, -9, "LineaCreditoPas", LineaCreditoPas);//PENDIENTE
    //cargar ANTIGUEDAD
    LoadCombos(-9, -9, "AntiguedadPas", AntiguedadPas);//PENDIENTE
    //cargar INGRESOS
    LoadCombos(-9, -9, "IngresosPas", IngresosPas);//PENDIENTE
    //cargar BURO
    LoadCombos(15, 19, "BuroPas", BuroPas);
    //cargar ESTATUS FINAL
    LoadCombos(15, 26, "EstatusFinalPas", (EstatusVenta == -1) ? 0 : EstatusVenta);
    //cargar PROCESO PENDIENTE
    LoadCombos(15, 27, "ProcesoPendientePas", ProcesoPendientePas);
    //cargar PROCESO PENDIENTE
    LoadCombos(15, 28, "CanceladosPas", CanceladasPas);
    //cargar COMPROBANTE DOMICLIIO
    LoadCombos(15, 11, "ComprobanteDomicilioPas", ComprobanteDomicilioPas);
    LoadCombos(15, 10, "TipoIdentificacionPas", TipoIdentificacionPas);
    LoadCombos(15, 38, "TipoDeTargetaBancariaPas", TipoDeTargetaBancariaPas);
    LoadCombos(15, 46, "TipoDeTargetaComercialPas", TipoDeTargetaComercialPas);
    LoadCombos(15, 39, "TipoTargDeparPas", TipoDeTargDepartPas);
    LoadCombos(15, 40, "SinTDCPas", SinTDCPas);
    LoadCombos(15, 41, "TiposRecibosNominaPas", TiposRecibidosNominaPas);
    LoadCombos(15, 42, "TipoDeEstadoCuentaPas", TipoEstadoCuentaPas);
    LoadCombos(15, 43, "LineaCreditoPas", LineaCreditoPas);
    LoadCombos(15, 45, "AntiguedadPas", AntiguedadPas);
    LoadCombos(15, 44, "IngresosPas", IngresosPas);

    if (EstatusVenta == -1) {
        LoadCombos(15, 3, "ProductoPas", 0);
        $("#DescripcionPas").val(ProductoPas);
    }
    else {
        LoadCombos(15, 3, "ProductoPas", ProductoPas);
    }

    estados("EstadoEmpPas", EstadoPas, 0);
    estados("EstadoSucursal", Estado_TDC, Municipio_TDC);
    LoadMunicipios(Estado_TDC, Municipio_TDC, "MunicipioSucursal");
    LoadMunicipios(EstadoPas, DelegacionPas, "DelegacionPas");
    LoadColoniasForMunicipio(DelegacionPas, "ColoniaPas", ColoniaPas);
    $("#AntiguedadAnosPas").val(AntiguedadAniosPas);
    $("#FolioPas").val(FolioPas);
    $("#TelefonoRef1Pas").val(TelefonoRef1Pas);
    $("#RazonPas").val(RazonPas);
    $("#ExtRef1Pas").val(ExtRef1Pas);
    $("#ComentariosPas").val(ComentariosPas);
    $("#MaternoRef2Pas").val(MaternoRef2Pas);
    $("#TdcCelular").val(CelularPas);
    $("#PaternoRef2Pas").val(PaternoRef2Pas);
    $("#TipoDeTargetaComercialPas").val(TipoDeTargetaComercialPas);
    $("#NombreRef2Pas").val(NombreRef2Pas);
    $("#PaisDeNacimientoPas").val(PaisDeNacimientoPas);
    $("#EntidadFederativaPas").val(EntidadFederativaPas);
    $("#TelefonoRef2Pas").val(TelefonoRef2Pas);
    $("#PaisNacionalidadPas").val(PaisNacionalidadPas);
    $("#ExtRef2Pas").val(ExtRef2Pas);
    $("#SucursalPas").val(SucursalPas);
    $("#NumeroDependientesPas").val(NumeroDependientesPas);
    $("#NumeroSucursalPas").val(NumeroSucursalPas);
    $("#FolioECSPas").val(FolioECSPas);
    $("#AniosResidenciaPas").val(AniosResidenciaPas);
    $("#NombrePas").val(NombrePas);
    $("#CallePas").val(CallePas);
    $("#NumeroInteriorPas").val(NumeroInteriorPas);
    $("#CausaDeclinacionPas").val(CausaDeclinacionPas);
    $("#NumeroExteriorPas").val(NumeroExteriorPas);
    $("#CodigoPostalPas").val(CodigoPostalPas);
    $("#TelefonoProcPas").val(TelefonoProcPas);
    $("#TipoDeTargetaBancariaPas").val(TipoDeTargetaBancariaPas);
    $("#ExtPas").val(ExtPas);
    $("#TipoEstadoCuentaPas").val(TipoEstadoCuentaPas);
    
    $("#AntiguedadMesesPas").val(AntiguedadMesesPas);
    $("#AntiguedadPas").val(AntiguedadPas);
    $("#IngresoMensualPas").val(IngresoMensualPas);
    $("#IngresosPas").val(IngresosPas);
    $("#Terminacion1Pas").val(Terminacion1Pas);
    $("#ComentariosProcPas").val(ComentariosProcPas);
    $("#Terminacion2Pas").val(Terminacion2Pas);
    $("#Terminacion3Pas").val(Terminacion3Pas);
    $("#MaternoRef1Pas").val(MaternoRef1Pas);
    $("#PaternoRef1Pas").val(PaternoRef1Pas);
    $("#NombreRef1Pas").val(NombreRef1Pas);
    $("#DivisionPas").val(Division);
    $("#RegionalPas").val(Regional);
    $("#TelefonoEmpPas").val(TelefonoEmpPas);
    $("#ProductoPas").val(ProductoPas);
    $("#EmailPas").val(email);
    $("#LINEA").val(Linea_Credito);
    $("#TdcTelefono").val(Telefono);
    $("#TelContactoTDC").val(Tel_Contacto);//modificacion del 08/02/2022
    document.getElementById("TdcPassGuardar").onclick = function () {
        ValidarDatosPas();
    }
    document.getElementById("check_tdc").onclick = function () {
        check_val_tdc();
    }
    document.getElementById("SaveCalifTDC").onclick = function () {
        saveCalif11();
    }

    document.getElementById('DetalleSucursalTDC').addEventListener('click', function () {
        LoadDetailsOffice(document.getElementById('NumeroSucursalPas').value);
    });

    if (TipoDeTargetaPas == 0) {
        $("#TipoDeTargetaBancariaPas").prop("disabled", "disabled");
    }
    $("#TipoDeTargetaPas").change(function (evt) {
        var item = $(this).val();
			if (datosTdc === undefined)
			{
			}
			else 	
			{
				delete datosTdc;
			}
		
        switch (item) {
            case "1":
                $("#TargetaComercial").hide();
                $("#TargetaDepartamental").hide();
                $("#TargetaBancaria").show();
                $("#TipoDeTargetaBancariaPas").prop("disabled", "");
                break;
            case "2":
                $("#TargetaDepartamental").show();
                $("#TargetaComercial").hide();
                $("#TargetaBancaria").hide();
                $("#TargetaBancaria").prop("disabled", "disabled");
                break;
            case "3":
                $("#TargetaComercial").show();
                $("#TargetaDepartamental").hide();
                $("#TargetaBancaria").hide();
                $("#TargetaBancaria").prop("disabled", "disabled");
                break;
            default:
                $("#TargetaComercial").hide();
                $("#TargetaDepartamental").hide();
                $("#TargetaBancaria").show();
                $("#TipoDeTargetaBancariaPas").prop("disabled", "disabled");
                break;
        }
    });

    if (SinTDCPas == 0) {
        $("#TiposRecibosNominaPas").prop("disabled", "disabled");
    }

    $("#SinTDCPas").change(function (evt) {
        var item = $(this).val();
        switch (item) {
            case "1":
                //$("#DivTDC").addClass("col-md-4").removeClass("col-md-8");
                $("#RecibosNomina").show();
                $("#EstadoCuenta").hide();
                $("#TiposRecibosNominaPas").prop("disabled", "");
                break;
            case "2":
                //$("#DivTDC").addClass("col-md-4").removeClass("col-md-8");
                $("#EstadoCuenta").show();
                $("#RecibosNomina").hide();
                break;
            default:
                //$("#DivTDC").addClass("col-md-8").removeClass("col-md-4");
                $("#EstadoCuenta").hide();
                $("#RecibosNomina").show();
                $("#TiposRecibosNominaPas").prop("disabled", "disabled");
                break;
        }
    });

    $("#CampoOpcionCurp").removeClass("col-md-3");
    $("#OpcCurp").change(function (evt) {
        var item = $(this).val();
        if (item == 1) {
            loadOptionCurp(item, Curp);
        } else {
            loadOptionCurp(item, Razon);
        }
    });

    document.getElementById("BuscarDireccionTDC").onclick = function () {
        //$("#BuscarDireccionTDC").click(function () {
        if ($("#CodigoPostalPas").val() != "") {
            $.ajax({
                url: hostInit + '/Client/FindDireccion/' + $("#CodigoPostalPas").val(),
                type: 'GET',
                success: function (response) {
                    if (response.length <= 0) {
                        alert("El código postal no existe");
                        return;
                    }
                    $("#EstadoEmpPas").val(response[0].ClaveEstado);
                    LoadMunicipios(response[0].ClaveEstado, response[0].ClaveDelMun, "DelegacionPas");
                    var items = '<option value="0">Seleccione una colonia</option>';
                    for (var i in response) {
                        items += '<option value="' + response[i].idCodigo + '">' + response[i].Colonia + '</option>';
                    }
                    $("#ColoniaPas").html(items);
                    $("#ColoniaPas").val(0);
                },
                error: function (error) {
                    alert("Algo fallo al buscar estado, municipio, colonia");
                }
            });
        } else {
            alert("Ingrese un codigo postal");
            $("#CodigoPostalPas").focus();
            return;
        }
    }

    $("#EstadoEmpPas").change(function (evt) {
        var val = $(this).val();
        LoadMunicipios(val, 0, "DelegacionPas");
    });

    $("#EstadoSucursal").change(function (evt) {
        var val = $(this).val();
        LoadMunicipios(val, 0, "MunicipioSucursal");
    });

    $("#DelegacionPas").change(function (evt) {
        var val = $(this).val();
        LoadColoniasForMunicipio(val, "ColoniaPas", 0);
    });

    $('[data-toggle="tab"]').click(function (evt) {
        evt.preventDefault();
        $(this).css("outline", "0px");
    });

    //quitar active a tabs y agregarlo a datosPersonales
    $("#procesos").removeClass("in active");
    $("#sucursal").removeClass("in active");
    $("#informacionCliente").removeClass("in active");
    $("#informacionLaboral").removeClass("in active");
    $("#referenciasBancarias").removeClass("in active");
    $("#referenciasPersonales").removeClass("in active");
    $("#tabInfoCliente").removeClass("in active");
    $("#tabInfoLaboral").removeClass("active");
    $("#tabRefBancarias").removeClass("active");
    $("#tabRefPersonales").removeClass("active");
    $("#tabSucursal").removeClass("active");
    $("#tabProcesos").removeClass("active");

    $("#datosCliente").addClass("in active");
    $("#datosPer").addClass("active");
    $("#tabProcesos").remove();

    if (UserType == 4 || EstatusVenta == 1) {
        //activar procesos
        $("#tabSucursal").after('<li id="tabProcesos"><a data-toggle="tab" href="#procesos"><strong>Procesos</strong></a></li>');
    }
    $("#EstadoSucursal").change(function (evt) {
        var item = $(this).val();
        LoadMunicipios(item, 0, "MunicipioSucursal");
    });

    $("#MunicipioSucursal").change(function (evt) {
        var item = $(this).val();
        var fechVicSuc = $("#FechaVicitaSucursalPas").val();
        if (fechVicSuc === "") {
            alert("Seleccione fecha vicita sucursal");
            $("#FechaVicitaSucursalPas").focus();
            return;
        }

        if (item === "0") {
            alert("Seleccione un municipio");
            $("#MunicipioSucursal").focus();
            return;
        }

        var dia = diaSemana(fechVicSuc);
        if (dia === 'sab') {
            FinloadBranchOfficeTDC(item, 1);
        } else {
            FinloadBranchOfficeTDC(item, 0);
        }
    });

    $("#ValidarPas").click(function () {
        $("#modalTdc").modal("show");
    });

    var ValidateTdc = document.getElementById("ValidateTdc");
    ValidateTdc.onclick = function () {
        ValidarVentaTdc();
    };

    if (EstatusVenta == 0 || EstatusVenta == 1 || EstatusVenta == 2) {
        if (Curp === null || Curp === "") {
            $("#OpcCurp").val(2);
            loadOptionCurp(2, Razon);
        } else {
            $("#OpcCurp").val(1);
            loadOptionCurp(1, Curp);
        }
    } else {
        $("#OpcCurp").val(0);
        loadOptionCurp(0, 0);
    }
    ban = false;


    document.getElementById("GuardarValidarPas").style.display = 'none';
    //guardar como validador
    document.getElementById("GuardarValidarPas").onclick = function () {

        var folio = $("#FolioPas");
        alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });
        
        //MensajeVtaTDC();
        ValidarDatosPas();
        //ValidarGrupoA();
    }

    //para pintar el collapse con base al estado
    var cal = dataCalendar;
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
            $("#FechaVicitaSucursalPas").datepicker(cal);
            var day = currentDate.getDate();
            var monthIndex = currentDate.getMonth();
            var year = currentDate.getFullYear();

            var fecha = year + "/" + (monthIndex + 1) + "/" + day;
            $("#FechaVicitaSucursalPas").val(fecha);
            noVendido("EstatusPas", "HeadingPas", "ValidarPas", "TdcPassGuardar");
            //ValidarGrupoA();
            setFieldsTdc("");
            break;
        case 0://ya se vendio, no se ha validado
        case 3://estatus venta pendiente
            $("#FechaVicitaSucursalPas").val(formatDate(VicitaSucursalPas));
            $("#FechaVicitaSucursalPas").datepicker(cal);
            noValidado("EstatusPas", "HeadingPas", "ValidarPas", "TdcPassGuardar");
            //ValidarGrupoA();
            break;
        case 1://venta exitosa
            $("#FechaVicitaSucursalPas").val(formatDate(VicitaSucursalPas));
            ventaExitosa("EstatusPas", "HeadingPas", "ValidarPas", "TdcPassGuardar");

            var folio = $("#FolioPas");
            alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });

            //MensajeVtaTDC();
            setFieldsTdc("disabled");
            //ValidarGrupoA();
            break;

    }


    if (UserType == 4) {
        //quitar active a tabs y agregarlo a datosPersonales
        $("#informacionCliente").removeClass("in active");
        $("#informacionLaboral").removeClass("in active");
        $("#referenciasBancarias").removeClass("in active");
        $("#referenciasPersonales").removeClass("in active");
        $("#sucursal").removeClass("in active");
        $("#tabInfoCliente").removeClass("active");
        $("#tabInfoLaboral").removeClass("active");
        $("#tabRefBancarias").removeClass("active");
        $("#tabRefPersonales").removeClass("active");
        $("#tabSucursal").removeClass("active");
        $("#datosCliente").removeClass("in active");
        $("#datosPer").removeClass("active");
        $("#tabProcesos").addClass("active");
        $("#procesos").addClass("in active");

        document.getElementById("GuardarValidarPas").style.display = 'inline';
        noValidado("EstatusPas", "HeadingPas", "ValidarPas", "TdcPassGuardar");
        document.getElementById("ValidarPas").style.display = 'none';
    }

    //document.getElementById("OpenScriptTdc").onclick = function () {
    //    window.open(hostInit + '/Client/OpenPdf/TDC', '_blank', 'location=no, resizable=no', true);
    //}

}

function loadOptionCurp(item, option) {
    switch (parseInt(item)) {
        case 1:
            var div =
                '<div class="form-group row">' +
                '<div class="col-md-12">' +
                '<div id="DivCurp">' +
                '<label class="control-label">Curp:</label>' +
                '<input type="text" placeholder="Curp" class="form-control" id="CurpPas" maxlength="18"/>' +
                '</div>' +
                '</div>' +
                '</div>';
            if (!$("#CampoOpcionCurp").hasClass("col-md-3")) {
                $("#CampoOpcionCurp").addClass("col-md-3");
            }
            $("#CampoOpcionCurp").html(div);
            $("#CurpPas").val(option);
            break;
        case 2:
            var div =
                '<div class="form-group row">' +
                '<div class="col-md-12">' +
                '<div id="DivRazon">' +
                '<label class="control-label">Razon:</label>' +
                '<select class="form-control" id="RazonPas"></select>' +
                '</div>' +
                '</div>' +
                '</div>';
            if (!$("#CampoOpcionCurp").hasClass("col-md-3")) {
                $("#CampoOpcionCurp").addClass("col-md-3");
            }
            $("#CampoOpcionCurp").html(div);
            LoadCombos(27, 1, "RazonPas", option);
            break;
        default:
            $("#CampoOpcionCurp").removeClass("col-md-3");
            $("#CampoOpcionCurp").html("");
            break;
    }
}

function loadCatalogoCombo(array, idCombo, dato) {
    var items = "";
    for (var i in array) {
        items += '<option value="' + array[i].Valor + '">' + array[i].Texto + '</option>';
    }
    $("#" + idCombo).html(items);
    $("#" + idCombo).val(dato);
    return;
}

function setFieldsTdc(value) {
    $("#RazonPas").prop("disabled", value);
    $("#ComentariosPas").prop("disabled", value);
    $("#CelularPas").prop("disabled", value);
    $("#PaisNacimientoPas").prop("disabled", value);
    $("#EntidadFederativaPas").prop("disabled", value);
    $("#PaisNacionalidadPas").prop("disabled", value);
    $("#EstadoCivilPas").prop("disabled", value);
    $("#EscolaridadPas").prop("disabled", value);
    $("#NumeroDependientesPas").prop("disabled", value);
    $("#TipoViviendaPas").prop("disabled", value);
    $("#AniosResidenciaPas").prop("disabled", value);
    $("#NombrePas").prop("disabled", value);
    $("#CallePas").prop("disabled", value);
    $("#NumeroInteriorPas").prop("disabled", value);
    $("#NumeroExteriorPas").prop("disabled", value);
    $("#CodigoPostalPas").prop("disabled", value);
    $("#ColoniaPas").prop("disabled", value);
    $("#EstadoEmpPas").prop("disabled", value);
    $("#DelegacionPas").prop("disabled", value);
    $("#ActividadPas").prop("disabled", value);
    $("#OcupacionPas").prop("disabled", value);
    $("#TipoDeEmpPas").prop("disabled", value);
    $("#ExtPas").prop("disabled", value);
    $("#AntiguedadAnosPas").prop("disabled", value);
    $("#AntiguedadMesesPas").prop("disabled", value);
    $("#IngresoMensualPas").prop("disabled", value);
    $("#CompIngresosPas").prop("disabled", value);
    $("#Institucion1Pas").prop("disabled", value);
    $("#TipoDeCuenta1Pas").prop("disabled", value);
    $("#Terminacion1Pas").prop("disabled", value);
    $("#Institucion2Pas").prop("disabled", value);
    $("#TipoDeCuenta2Pas").prop("disabled", value);
    $("#Terminacion2Pas").prop("disabled", value);
    $("#Institucion3Pas").prop("disabled", value);
    $("#TipoDeCuenta3Pas").prop("disabled", value);
    $("#Terminacion3Pas").prop("disabled", value);
    $("#MaternoRef1Pas").prop("disabled", value);
    $("#PaternoRef1Pas").prop("disabled", value);
    $("#NombreRef1Pas").prop("disabled", value);
    $("#ParentescoRef1Pas").prop("disabled", value);
    $("#TelefonoRef1Pas").prop("disabled", value);
    $("#ExtRef1Pas").prop("disabled", value);
    $("#MaternoRef2Pas").prop("disabled", value);
    $("#PaternoRef2Pas").prop("disabled", value);
    $("#NombreRef2Pas").prop("disabled", value);
    $("#ParentescoRef2Pas").prop("disabled", value);
    $("#TelefonoRef2Pas").prop("disabled", value);
    $("#ExtRef2Pas").prop("disabled", value);
    $("#FechaVicitaSucursalPas").prop("disabled", value);
    $("#SucursalPas").prop("disabled", value);
    //$("#NumeroSucursalPas").prop("disabled", value);
    $("#FolioECSPas").prop("disabled", value);
    $("#RefBuroPas").prop("disabled", value);
    $("#EstatusAutenticacionPas").prop("disabled", value);

    //Actualizado 22 03 2019 a peticion de Enrique
    //$("#EstatusFrontTMKPas").prop("disabled", value);

    $("#CausaDeclinacionPas").prop("disabled", value);
    $("#EstatusDeclinacionPas").prop("disabled", value);
    $("#TelefonoProcPas").prop("disabled", value);
    $("#TipoDePersonaPas").prop("disabled", value);
    $("#TipoDeTargetaPas").prop("disabled", value);
    $("#TipoDeTargetaBancariaPas").prop("disabled", value);
    $("#TipoTargDeparPas").prop("disabled", value);
    $("#TipoDeTargetaComercialPas").prop("disabled", value);
    $("#SinTDCPas").prop("disabled", value);
    $("#TiposRecibosNominaPas").prop("disabled", value);
    $("#TipoDeEstadoCuentaPas").prop("disabled", value);
    $("#LineaCreditoPas").prop("disabled", value);
    $("#AntiguedadPas").prop("disabled", value);
    $("#IngresosPas").prop("disabled", value);
    $("#BuroPas").prop("disabled", value);
    $("#EstatusFinalPas").prop("disabled", value);
    $("#ProcesoPendientePas").prop("disabled", value);
    $("#CanceladosPas").prop("disabled", value);
    $("#ComentariosProcPas").prop("disabled", value);
    $("#FechaVicitaSucursalPas").prop("disabled", value);
    $("#CurpPas").prop("disabled", value);
    $("#DivisionPas").prop("disabled", value);
    $("#RegionalPas").prop("disabled", value);
    $("#TelefonoEmpPas").prop("disabled", value);
    $("#GeneroPas").prop("disabled", value);
    $("#ComprobanteDomicilioPas").prop("disabled", value);
    $("#ProductoPas").prop("disabled", value);
    $("#TipoIdentificacionPas").prop("disabled", value);
    $("#EmailPas").prop("disabled", value);
    $("#OpcCurp").prop("disabled", value);
    $("#CurpPas").prop("disabled", value);
    $("#BuscarDireccionTDC").prop("disabled", value);
    $("#LINEA").prop("disabled", value);
    
    $("#EstadoSucursal").prop("disabled", value);

    $("#MunicipioSucursal").prop("disabled", value);
    $("#EstatusFrontTMKPas2").prop("disabled", value);
   
    $("#PaisNacionalidadPasProcesos").prop("disabled", value);
}

//área de validaciones 
function ValidarDatosPas() {
    var FolioPas = $("#FolioPas");
    var RazonPas = $("#RazonPas");

    var ComentariosPas = $("#ComentariosPas");
    var CelularPas = $("#CelularPas");
    var PaisDeNacimientoPas = $("#PaisNacimientoPas");
    var EntidadFederativaPas = $("#EntidadFederativaPas");
    var PaisNacionalidadPas = $("#PaisNacionalidadPas");
    var EstadoCivilPas = $("#EstadoCivilPas");
    var EscolaridadPas = $("#EscolaridadPas");
    var NumeroDependientesPas = $("#NumeroDependientesPas");
    var TipoDeViviendaPas = $("#TipoViviendaPas");
    var AniosResidenciaPas = $("#AniosResidenciaPas");
    var NombrePas = $("#NombrePas");
    var CallePas = $("#CallePas");
    var NumeroInteriorPas = $("#NumeroInteriorPas");
    var NumeroExteriorPas = $("#NumeroExteriorPas");
    var CodigoPostalPas = $("#CodigoPostalPas");
    var ColoniaPas = $("#ColoniaPas");
    var EstadoPas = $("#EstadoEmpPas");
    var DelegacionPas = $("#DelegacionPas");
    var ActividadPas = $("#ActividadPas");
    var OcupacionPas = $("#OcupacionPas");
    var TipoDeEmpPas = $("#TipoDeEmpPas");
    var ExtPas = $("#ExtPas");
    var AntiguedadAniosPas = $("#AntiguedadAnosPas");
    var AntiguedadMesesPas = $("#AntiguedadMesesPas");
    var IngresoMensualPas = $("#IngresoMensualPas");
    var CompIngresosPas = $("#CompIngresosPas");
    var Institucion1Pas = $("#Institucion1Pas");
    var TipoDeCuenta1Pas = $("#TipoDeCuenta1Pas");
    var Terminacion1Pas = $("#Terminacion1Pas");
    var Institucion2Pas = $("#Institucion2Pas");
    var TipoDeCuenta2Pas = $("#TipoDeCuenta2Pas");
    var Terminacion2Pas = $("#Terminacion2Pas");
    var Institucion3Pas = $("#Institucion3Pas");
    var TipoDeCuenta3Pas = $("#TipoDeCuenta3Pas");
    var Terminacion3Pas = $("#Terminacion3Pas");
    var MaternoRef1Pas = $("#MaternoRef1Pas");
    var PaternoRef1Pas = $("#PaternoRef1Pas");
    var NombreRef1Pas = $("#NombreRef1Pas");
    var ParentescoRef1Pas = $("#ParentescoRef1Pas");
    var TelefonoRef1Pas = $("#TelefonoRef1Pas");
    var ExtRef1Pas = $("#ExtRef1Pas");
    var MaternoRef2Pas = $("#MaternoRef2Pas");
    var PaternoRef2Pas = $("#PaternoRef2Pas");
    var NombreRef2Pas = $("#NombreRef2Pas");
    var ParentescoRef2Pas = $("#ParentescoRef2Pas");
    var TelefonoRef2Pas = $("#TelefonoRef2Pas");
    var ExtRef2Pas = $("#ExtRef2Pas");
    var VicitaSucursalPas = $("#FechaVicitaSucursalPas");
    var SucursalPas = $("#SucursalPas");
    var NumeroSucursalPas = $("#NumeroSucursalPas");
    var FolioECSPas = $("#FolioECSPas");
    var RefBuroPas = $("#RefBuroPas");
    var EstatusAutenticacionPas = $("#EstatusAutenticacionPas");

    var EstatusFrontTMKPas = $("#EstatusFrontTMKPas");
    var EstatusFrontTMKPas2 = $("#EstatusFrontTMKPas2");    //Cambio 21032019

    var CausaDeclinacionPas = $("#CausaDeclinacionPas");
    var EstatusDeclinacionPas = $("#EstatusDeclinacionPas");
    var TelefonoProcPas = $("#TelefonoProcPas");
    var TipoDePersonaPas = $("#TipoDePersonaPas");
    var TipoDeTargetaPas = $("#TipoDeTargetaPas");
    var TipoDeTargetaBancariaPas = $("#TipoDeTargetaBancariaPas");
    var TipoDeTargDepartPas = $("#TipoTargDeparPas");
    var TipoDeTargetaComercialPas = $("#TipoDeTargetaComercialPas");
    var SinTDCPas = $("#SinTDCPas");
    var TiposRecibidosNominaPas = $("#TiposRecibosNominaPas");
    var TipoEstadoCuentaPas = $("#TipoDeEstadoCuentaPas");
    var LineaCreditoPas = $("#LineaCreditoPas");
    var AntiguedadPas = $("#AntiguedadPas");
    var IngresosPas = $("#IngresosPas");
    var BuroPas = $("#BuroPas");

    var EstatusFinalPas = $("#EstatusFinalPas");
    var ProcesoPendientePas = $("#ProcesoPendientePas");
    var CanceladasPas = $("#CanceladosPas");
    var ComentariosProcPas = $("#ComentariosProcPas");
    var FechaVicitaSucursalPas = $("#FechaVicitaSucursalPas");
    var CurpPas = $("#CurpPas");
    var Division = $("#DivisionPas");
    var Regional = $("#RegionalPas");
    var TelefonoEmpPas = $("#TelefonoEmpPas");
    var Genero = $("#GeneroPas");
    var ComprobanteDomicilioPas = $("#ComprobanteDomicilioPas");
    var ProductoPas = $("#ProductoPas");
    //var ProductoPas = $("#DescripcionPas");
    var TipoIdentificacionPas = $("#TipoIdentificacionPas");
    var email = $("#EmailPas");
    var CelularTdc = $("#TdcCelular");
    var TelefonoTdc = $("#TdcTelefono");
    var Tel_Contacto = $("#TelContactoTDC"); //Telefono de contacto para aviso de privacidad. 08/02/2022
    if (FolioPas.val() === "") {
        alert("Debe ingresar un numero de folio");
        FolioPas.focus();
        return;
    }
    /*if (RazonPas.val() === "") {
        alert("Debe ingresar una razon valida");
        RazonPas.focus();
        return;
    }*/
    if (ComentariosPas.val() === "") {
        alert("Debe de ingresar un comentario");
        ComentariosPas.focus();
		return;
    }
    if (CelularPas.val() === "") {
        alert("Ingrese un numero de celular");
        CelularPas.focus();
        return;
    }
 
    //=============================
    if (PaisDeNacimientoPas.val() == 0) {
        alert("Debe ingresar un pais de nacimiento");
        PaisDeNacimientoPas.focus();
        return;
    }
    if (EntidadFederativaPas.val() == 0) {
        alert("Debe ingresar una entidad federativa");
        EntidadFederativaPas.focus();
        return;
    }
    if (PaisNacionalidadPas.val() == 0) {
        alert("Debe de ingresar un pais de nacionalidad");
        PaisNacionalidadPas.focus();
        return;
    }
    if (EstadoCivilPas.val() == 0) {
        alert("Ingrese Estado civil");
        EstadoCivilPas.focus();
        return;
    }
    if (EscolaridadPas.val() == 0) {
        alert("Ingrese su escolaridad");
        EscolaridadPas.focus();
        return;
    }
    //============================
    if (NumeroDependientesPas.val() === "") {
        alert("Debe ingresar un numero de dependientes");
        NumeroDependientesPas.focus();
        return;
    }
    if (TipoDeViviendaPas.val() == 0) {
        alert("Debe ingresar un tipo de vivienda");
        TipoDeViviendaPas.focus();
        return;
    }
    if (AniosResidenciaPas.val() === "") {
        alert("Debe de ingresar los años de residencia");
        AniosResidenciaPas.focus();
        return;
    }
    if (TelefonoTdc.val() === "") {
        alert("Ingrese un numero de celular");
        TelefonoTdc.focus();
        return;
    }

    if (CelularTdc.val() === "") {
        alert("Ingrese un numero de celular");
        CelularTdc.focus();
        return;
    }
   

    if (NombrePas.val() === "") {
        alert("Ingrese un nombre de empresa");
        NombrePas.focus();
        return;
    }
    if (CallePas.val() === "") {
        alert("Ingrese nombre de la calle");
        CallePas.focus();
        return;
    }
    if (NumeroInteriorPas.val() === "") {
        alert("Ingrese numero interior");
        NumeroInteriorPas.focus();
        return
    }
    //==============================
    if (NumeroExteriorPas.val() === "") {
        alert("Debe ingresar un numero exterior");
        NumeroExteriorPas.focus();
        return;
    }
    if (CodigoPostalPas.val() === "") {
        alert("Debe ingresar un codigo postal");
        CodigoPostalPas.focus();
        return;
    }
    if (ColoniaPas.val() === "") {
        alert("Debe de ingresar la colonia");
        ColoniaPas.focus();
        return;
    }
    if (EstadoPas.val() === "") {
        alert("Ingrese un nombre de empresa");
        EstadoPas.focus();
        return;
    }
    if (DelegacionPas.val() === "") {
        alert("Ingrese nombre de la delegacion");
        DelegacionPas.focus();
        return;
    }
    if (ActividadPas.val() == 0) {
        alert("Ingrese una actividad");
        ActividadPas.focus();
        return;
    }
    if (OcupacionPas.val() == 0) {
        alert("Ingrese una ocupacion");
        OcupacionPas.focus();
        return;
    }
    if (TipoDeEmpPas.val() == 0) {
        alert("Ingrese el tipo de empresas");
        TipoDeEmpPas.focus();
        return;
    }
    if (ExtPas.val() === "") {
        alert("Debe ingresar un numero de extencion");
        ExtPas.focus();
        return;
    }
    if (AntiguedadAniosPas.val() === "") {
        alert("ingrese su antiguedad en años");
        AntiguedadAniosPas.focus();
        return;
    }
    if (AntiguedadMesesPas.val() === "") {
        alert("Ingrese su antiguedad en meses");
        AntiguedadMesesPas.focus();
        return;
    }
    if (IngresoMensualPas.val() === "") {
        alert("agregue su  ingreso mensual");
        IngresoMensualPas.focus();
        return;
    }
    if (CompIngresosPas.val() == 0) {
        alert("Ingrese su comprobante de ingresos");
        CompIngresosPas.focus();
        return;
    }
    /*if (Institucion1Pas.val() == 0) {
        alert("Ingrese una institucion");
        Institucion1Pas.focus();
        return;
    }
    //===============================
    if (TipoDeCuenta1Pas.val() == 0) {
        alert("Debe ingresar un tipo de cuenta");
        TipoDeCuenta1Pas.focus();
        return;
    }
    if (Terminacion1Pas.val() === "") {
        alert("Debe ingresar un numero de terminacion");
        Terminacion1Pas.focus();
        return;
    }
    if (Institucion2Pas.val() == 0) {
        alert("ingrese el nombre de la institucion");
        Institucion2Pas.focus();
        return;
    }
    if (TipoDeCuenta2Pas.val() == 0) {
        alert("Ingrese su tipo de cuenta");
        TipoDeCuenta2Pas.focus();
        return;
    }
    if (Terminacion2Pas.val() === "") {
        alert("agregue su  terminacion");
        Terminacion2Pas.focus();
        return;
    }
    if (Institucion3Pas.val() == 0) {
        alert("Ingrese su nombre de institucion");
        Institucion3Pas.focus();
        return;
    }
    if (TipoDeCuenta3Pas.val() == 0) {
        alert("Ingrese un tipo de cuenta");
        TipoDeCuenta3Pas.focus();
        return;
    }
    //========================
    if (Terminacion3Pas.val() === "") {
        alert("ingrese su terminacion 3");
        Terminacion3Pas.focus();
        return;
    }*/
    if (MaternoRef1Pas.val() === "") {
        alert("Debe ingresar un apellido materno de referencia");
        MaternoRef1Pas.focus();
        return;
    }
    if (PaternoRef1Pas.val() === "") {
        alert("debe ingresar un apellido paterno de referencia");
        PaternoRef1Pas.focus();
        return;
    }
    if (NombreRef1Pas.val() === "") {
        alert("debe de ingresar un nombre de referencia");
        NombreRef1Pas.focus();
        return;
    }
    if (ParentescoRef1Pas.val() == 0) {
        alert("Agregue Parentesco Referencia 1");
        ParentescoRef1Pas.focus();
    }
    if (TelefonoRef1Pas.val() === "") {
        alert("Ingrese numero telefonico de referencia");
        TelefonoRef1Pas.focus();
        return;
    }
    if (ExtRef1Pas.val() === "") {
        alert("Ingrese la extencion de referencia");
        ExtRef1Pas.focus();
        return;
    }
    if (MaternoRef2Pas.val() === "") {
        alert("Ingrese apellido materno de referencia 2");
        MaternoRef2Pas.focus();
        return;
    }
    //========================
    if (PaternoRef2Pas.val() === "") {
        alert("ingrese su apellido paterno de referencia 2");
        PaternoRef2Pas.focus();
        return;
    }
    if (NombreRef2Pas.val() === "") {
        alert("ingrese el nombre de referencia 2");
        NombreRef2Pas.focus();
        return;
    }
    if (ParentescoRef2Pas.val() == 0) {
        alert("ingrese el parentesco de la referencia 2");
        ParentescoRef2Pas.focus();
        return;
    }
    if (TelefonoRef2Pas.val() === "") {
        alert("debe de ingresar telefono de  referencia 2");
        TelefonoRef2Pas.focus();
        return;
    }
    if (ExtRef2Pas.val() === "") {
        alert("agregue su  extencion de referencia 2");
        ExtRef2Pas.focus();
        return;
    }
    if (VicitaSucursalPas.val() === "") {
        alert("Ingrese su visita a sucursal");
        VicitaSucursalPas.focus();
        return;
    }
    if (SucursalPas.val() === "") {
        alert("Ingrese la extencion de referencia");
        SucursalPas.focus();
        return;
    }
    if (NumeroSucursalPas.val() === "") {
        alert("Ingrese numero de sucursal");
        NumeroSucursalPas.focus();
        return;
    }

    //Actualización 22 03 2019; deshabilitado a peticion de Enrique
    //if (EstatusFrontTMKPas.val() == 0) {
    //    alert("ingrese su status TMK");
    //    EstatusFrontTMKPas.focus();
    //    return;
    //}

    if (UserType == 4) {
        if (EstatusFrontTMKPas2.val() == 0) {
            alert("ingrese su status TMK2");
            EstatusFrontTMKPas2.focus();
            return;
        }
    }

    if (AntiguedadPas.val() === "") {
        alert("ingrese la antiguedad ");
        AntiguedadPas.focus();
        return;
    }
    if (IngresosPas.val() === "") {
        alert("ingrese los ingresos");
        IngresosPas.focus();
        return;
    }
    if (Division.val() === "") {
        alert("ingrese Division");
        Division.focus();
        return;
    }
    if (Regional.val() === "") {
        alert("ingrese Regional");
        Regional.focus();
        return;
    }
    if (TelefonoEmpPas.val() === "") {
        alert("ingrese TelefonoEmpPas");
        TelefonoEmpPas.focus();
        return;
    }
    if (Genero.val() == 0) {
        alert("ingrese Genero");
        Genero.focus();
        return;
    }
    if (ComprobanteDomicilioPas.val() == 0) {
        alert("ingrese ComprobanteDomicilioPas");
        ComprobanteDomicilioPas.focus();
        return;
    }
    if (ProductoPas.val() === "") {
        alert("ingrese ProductoPas");
        ProductoPas.focus();
        return;
    }
    if (TipoIdentificacionPas.val() == 0) {
        alert("ingrese TipoIdentificacionPas");
        TipoIdentificacionPas.focus();
        return;
    }
    if (email.val() === "") {
        alert("ingrese email");
        email.focus();
        return;
    }
    if (FechaVicitaSucursalPas.val() === "") {
        alert("Seleccione fecha vicita sucursal");
        FechaVicitaSucursalPas.focus();
        return;
    }


    //si el usuario es 
    if (UserType == 4) {
        if (EstatusFinalPas.val() == 0) {
            alert("Seleccione un estado de la venta");
            EstatusFinalPas.focus();
            return;
        }
    }

    //=============================
    /*if (FolioECSPas.val() === "") {
        alert("ingrese su numero de folio");
        FolioECSPas.focus();
        return;
    }*/
    /*if (RefBuroPas.val() == 0) {
        alert("ingrese elburo de referencia");
        RefBuroPas.focus();
        return;
    }*/
    /*if (EstatusAutenticacionPas.val() == 0) {
        alert("ingrese el status de autentificacion");
        EstatusAutenticacionPas.focus();
        return;
    }*/
    /*if (CausaDeclinacionPas.val() === "") {
        alert("ingrese su causa de declinacion");
        CausaDeclinacionPas.Focus();
        return;
    }*/
    /*if (EstatusDeclinacionPas.val() == 0) {
        alert("Ingrese su visita a sucursal");
        EstatusDeclinacionPas.Focus();
        return;
    }*/
    /*if (TelefonoProcPas.val() === "") {
        alert("Ingrese el numero de telefono ");
        TelefonoProcPas.Focus();
        return;
    }*/
    //=========================
    /*if (TipoDePersonaPas.val() == 0) {
        alert("ingrese el tipo de Persona");
        TipoDePersonaPas.focus();
        return;
    }*/
    /*if (TipoDeTargetaPas.val() == 0) {
        alert("ingrese el tipo de targeta");
        TipoDeTargetaPas.focus();
        return;
    }*/
    /*if (TipoDeTargetaBancariaPas.val() === "") {
        alert("ingrese el tipo de targeta bancaria");
        TipoDeTargetaBancariaPas.focus();
        return;
    }*/
    /*if (TipoDeTargDepartPas.val() == 0) {
        alert("ingrese un  tipo de targeta departamental");
        TipoDeTargDepartPas.Focus();
        return;
    }*/
    /*if (TipoDeTargetaComercialPas.val() === "") {
        alert("ingrese un tipo  de targeta comercial");
        TipoDeTargetaComercialPas.Focus();
        return;
    }*/
    /*if (SinTDCPas.val() == 0) {
        alert("Ingrese su TDC");
        SinTDCPas.focus();
        return;
    }*/
    /*if (TiposRecibidosNominaPas.val() == 0) {
        alert("Ingrese el tipo de recibos");
        TiposRecibidosNominaPas.Focus();
        return;
    }*/
    /*if (TipoDeTargetaPas.val() === "") {
        alert("ingrese el tipo de targeta");
        TipoDeTargetaPas.focus();
        return;
    }*/
    /*if (TipoDeTargetaBancariaPas.val() === "") {
        alert("ingrese el tipo de targeta bancaria");
        TipoDeTargetaBancariaPas.focus();
        return;
    }*/
    /*if (TipoDeTargetaComercialPas.val() === "") {
        alert("ingrese un tipo  de targeta comercial");
        TipoDeTargetaComercialPas.Focus();
        return;
    }*/
    /*if (TipoEstadoCuentaPas.val() === "") {
        alert("ingrese el tipo de estado de cuenta");
        TipoEstadoCuentaPas.focus();
        return;
    }*/
    /*if (LineaCreditoPas.val() === "") {
        alert("ingrese linea de credito");
        LineaCreditoPas.focus();
        return;
    }*/

    /*if (BuroPas.val() == 0) {
        alert("ingrese el buro de credito");
        BuroPas.focus();
        return;
    }*/
    /*if (EstatusFinalPas.val() == 0) {
        alert("Ingrese su status final");
        EstatusFinalPas.focus();
        return;
    }*/
    /*if (ProcesoPendientePas.val() == 0) {
        alert("Ingrese el proceso pendiente");
        ProcesoPendientePas.focus();
        return;
    }*/
    /*if (CanceladasPas.val() == 0) {
        alert("ingrese canceladas");
        CanceladasPas.focus();
        return;
    }*/
    /*if (ComentariosProcPas.val() === "") {
        alert("ingrese los comentarios");
        ComentariosProcPas.focus();
        return;
    }*/

    /*if (CurpPas.val() === "") {
        alert("Ingrese CurpPas");
        CurpPas.focus();
        return;
    }*/
    //var TdcEstatusVenta = "0";
    /*if (UserType == 6) {//si es valdiador
        TdcEstatusVenta = $("#TdcEstatusVenta").val();
        if (TdcEstatusVenta == 0) {
            alert("Seleccione estatus de la venta");
            TdcEstatusVenta.focus();
            return;
        }
    }*/


    // Modificacion para aviso de privacidad 08/02/2022
    if (Tel_Contacto.val() == "") {
        alert("Debe ingresar el teléfono de contacto");
        Tel_Contacto.focus();
        return;
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
    //var Celular = $("#Celular");
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
    /*var arr = new Array();
    var band = false;
    if ($("#CheckTdcPAS").val() != undefined) {        
        if ($("#CheckTdcPAS").prop("checked")) {
            arr.push($("#CheckTdcPAS").val());
            band = true;
        }
    }
    if ($("#CheckTdcPROSPECTOR").val() != undefined) {
        if ($("#CheckTdcPROSPECTOR").prop("checked")) {
            arr.push($("#CheckTdcPROSPECTOR").val());
            band = true;
        }
    }
    if ($("#CheckTdcPAP").val() != undefined) {
        if ($("#CheckTdcPAP").prop("checked")) {
            arr.push($("#CheckTdcPAP").val());
            band = true;
        }
    }
    if (!band) {
        alert("Elige un TDC");
        $("#CheckTdcPAS").focus();
        return;
    }*/
    var json = {
        Id: document.getElementById('IdTDC').value,
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
        Celular: CelularTdc.val(),
        TelefonoCasa: TelefonoCasa.val(),
        Telefono: TelefonoTdc.val(),
        Folio: FolioPas.val(),
        Razon: RazonPas.val(),
        Comentarios: ComentariosPas.val(),
        PaisNacimiento: PaisDeNacimientoPas.val(),
        EntidadFederativa: EntidadFederativaPas.val(),
        PaisNacionalidad: PaisNacionalidadPas.val(),
        EdoCivil: EstadoCivilPas.val(),
        Escolaridad: EscolaridadPas.val(),
        NumDependientes: NumeroDependientesPas.val(),
        TipoVivienda: TipoDeViviendaPas.val(),
        AniosResidencia: AniosResidenciaPas.val(),
        NombreEmpresa: NombrePas.val(),
        CalleEmp: CallePas.val(),
        NumIntEmp: NumeroInteriorPas.val(),
        NumExtEmp: NumeroExteriorPas.val(),
        CodigoPostalEmp: CodigoPostalPas.val(),
        ColoniaEmp: ColoniaPas.val(),
        EstadoEmp: EstadoPas.val(),
        DelegacionEmp: DelegacionPas.val(),
        Actividad: ActividadPas.val(),
        Ocupacion: OcupacionPas.val(),
        TipoEmpleo: TipoDeEmpPas.val(),
        Telefono: TelefonoCasa.val(),
        Ext: ExtPas.val(),
        AntiguedadAnios: AntiguedadAniosPas.val(),
        AntiguedadMeses: AntiguedadMesesPas.val(),
        IngresoMensual: IngresoMensualPas.val(),
        CompIngresos: CompIngresosPas.val(),
        Institucion1: Institucion1Pas.val(),
        TipoCuenta1: TipoDeCuenta1Pas.val(),
        Terminacion1: Terminacion1Pas.val(),
        Institucion2: Institucion2Pas.val(),
        TipoCuenta2: TipoDeCuenta2Pas.val(),
        Terminacion2: Terminacion2Pas.val(),
        Institucion3: Institucion3Pas.val(),
        TipoCuenta3: TipoDeCuenta3Pas.val(),
        Terminacion3: Terminacion3Pas.val(),
        MaternoRef1: MaternoRef1Pas.val(),
        PaternoRef1: PaternoRef1Pas.val(),
        NombreRef1: NombreRef1Pas.val(),
        ParentescoRef1: ParentescoRef1Pas.val(),
        TelefonoRef1: TelefonoRef1Pas.val(),
        ExtensionReferencia1: ExtRef1Pas.val(),
        MaternoRef2: MaternoRef2Pas.val(),
        PaternoRef2: PaternoRef2Pas.val(),
        NombreRef2: NombreRef2Pas.val(),
        ParentescoRef2: ParentescoRef2Pas.val(),
        TelefonoRef2: TelefonoRef2Pas.val(),
        ExtensionReferencia2: ExtRef2Pas.val(),
        FechaVisitaSuc: VicitaSucursalPas.val(),
        Sucursal: SucursalPas.val(),
        NumSucursal: NumeroSucursalPas.val(),
        FolioECS: FolioECSPas.val(),
        RefBuro: RefBuroPas.val(),
        EstatusAutenticacion: EstatusAutenticacionPas.val(),

        EstatusFrontTMK: EstatusFrontTMKPas.val(),
        EstatusFrontTMK2: EstatusFrontTMKPas2.val(),

        CausaDeclinacion: CausaDeclinacionPas.val(),
        EstatusDeclinacion: EstatusDeclinacionPas.val(),
        TelefonoProc: TelefonoProcPas.val(),
        TipoPersona: TipoDePersonaPas.val(),
        TipoTargeta: TipoDeTargetaPas.val(),
        TipoTargetaBancaria: TipoDeTargetaBancariaPas.val(),
        TipoTargetaDepartamental: TipoDeTargDepartPas.val(),
        TipoTargetaComercial: TipoDeTargetaComercialPas.val(),
        SinTDC: SinTDCPas.val(),
        TipoRecibidosNomina: TiposRecibidosNominaPas.val(),
        TipoEstadoCuenta: TipoEstadoCuentaPas.val(),
        LineaCredito: LineaCreditoPas.val(),
        Antiguedad: AntiguedadPas.val(),
        Ingresos: IngresosPas.val(),
        Buro: BuroPas.val(),
        EstatusFinal: EstatusFinalPas.val(),
        ProcesoPendiente: ProcesoPendientePas.val(),
        Canceladas: CanceladasPas.val(),
        ComentariosProc: ComentariosProcPas.val(),
        EstatusVenta: EstatusFinalPas.val(),
        Division: Division.val(),
        Regional: Regional.val(),
        TelefonoEmp: TelefonoEmpPas.val(),
        Genero: Genero.val(),
        ComprobanteDomicilio: ComprobanteDomicilioPas.val(),
        Producto: ProductoPas.val(),
        TipoIdentificacion: TipoIdentificacionPas.val(),
        email: email.val(),
        Curp: CurpPas.val(),
        Tel_Contacto: Tel_Contacto.val()
    };
    salvarDatosProspector(json);

}

function LoadCombos(ID, CATALOGO, idCombo, dato) {
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
        url: hostInit + "/Client/Catalogos",
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

function salvarDatosProspector(json) {
    showLoader();
    $.ajax({
        url: hostInit + "/Client/SaveTdc",
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(json),
        success: function (response) {
            if (response == true) {
                if (json['EstatusVenta'] == 1) {//venta exitosa
                    ventaExitosa("EstatusPas", "HeadingPas", "ValidarPas", "TdcPassGuardar");
                    document.getElementById("GuardarValidarPas").style.display = 'none';
                    MensajeVtaTDC();
                    setFieldsTdc("disabled");

                    $("#collapse4").collapse('hide');
                } else if (json['EstatusVenta'] == 2) {//No venta
                    noVendido("EstatusPas", "HeadingPas", "ValidarPas", "TdcPassGuardar");
                    document.getElementById("GuardarValidarPas").style.display = 'none';
                    //ValidarGrupoA();
                } else if (json['EstatusVenta'] == 3) {//pendiente
                    noValidado("EstatusPas", "HeadingPas", "ValidarPas", "TdcPassGuardar");
                    //ValidarGrupoA();
                    $("#tabAutenticacion").after('<li><a data-toggle="tab" href="#procesos" id="tabProcesos"><strong>Procesos</strong></a></li>');

                } else {
                    noValidado("EstatusPas", "HeadingPas", "ValidarPas", "TdcPassGuardar");
                    //ValidarGrupoA();

                    var folio = $("#FolioPas");
                    alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });

                    MensajeVtaTDC();
                    $("#tabAutenticacion").after('<li><a data-toggle="tab" href="#procesos" id="tabProcesos"><strong>Procesos</strong></a></li>');

                }
            } else {
                alert("Ocurrio un error");
            }
            hideLoader();

        },
        error: function (error) {
            console.log(error);
            console.log("Ocurrio un error al guardar los datos");
            hideLoader();
        }
    });
}

function FinloadBranchOfficeTDC(mun, dia) {
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
            $("#colSabApTDC").remove();
            $("#colSabCieTDC").remove();
            if (dia == 1) {
                $("#headerTableSucursalTDC").append(
                    '<th id="colSabApTDC"> SABADOS AP</th>' +
                    '<th id="colSabCieTDC">SABADOS CIE</th>'
                );
                for (var i in response) {
                    //tableContent += '<tr><td><button class="btn btn-info" onclick="seleccionarSuc(' + response[i].SIRH + ')">ok</button></td>';
                    tableContent += '<tr>';
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSucTDC(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
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
                for (var i in response) {
                    tableContent += '<tr>';
                    //tableContent += '<tr><td><button class="btn btn-info" onclick="seleccionarSuc(' + response[i].SIRH + ')">ok</button></td>';
                    tableContent += '<td class="small"><a style="cursor: pointer" onclick="seleccionarSucTDC(' + response[i].SIRH + ')">' + response[i].SIRH + '<a></td>';
                    //tableContent += '<td class="small">' + response[i].SIRH + '</td>';
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

            $("#bodyTableSucTDC").html(tableContent);
            $('#myModalSucursalesTDC').modal('show');
        },
        error: function (reject) {
        }
    });
}

function seleccionarSucTDC(SIRH) {
    for (var i in sucursalesCnc) {
        if (sucursalesCnc[i].SIRH == SIRH) {
            $("#DivisionPas").val(sucursalesCnc[i].DIVISION);
            $("#RegionalPas").val(sucursalesCnc[i].DIRECCION);
            $("#NumeroSucursalPas").val(sucursalesCnc[i].SIRH);
            $("#SucursalPas").val(sucursalesCnc[i].NOMBRE_DISPOSITIVO);
            break;
        }
    }
    $('#myModalSucursalesTDC').modal('hide');
}

function ValidarVentaTdc() {
    var UserName = $("#UserTdc");
    var Password = $("#PasswordTdc");

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
            if (response['Tipo'] == 4 || response['Tipo'] == 6) {
                //if (response['Tipo'] == 6) {
                $("#tabSucursal").after('<li id="tabProcesos"><a data-toggle="tab" href="#procesos">Procesos</a></li>');
                //quitar active a tabs y agregarlo a datosPersonales
                $("#informacionCliente").removeClass("in active");
                $("#informacionLaboral").removeClass("in active");
                $("#referenciasBancarias").removeClass("in active");
                $("#referenciasPersonales").removeClass("in active");
                $("#sucursal").removeClass("in active");
                $("#tabInfoCliente").removeClass("active");
                $("#tabInfoLaboral").removeClass("active");
                $("#tabRefBancarias").removeClass("active");
                $("#tabRefPersonales").removeClass("active");
                $("#tabSucursal").removeClass("active");
                $("#datosCliente").removeClass("in active");
                $("#datosPer").removeClass("active");
                $("#tabProcesos").addClass("active");
                $("#procesos").addClass("in active");

                var folio = $("#FolioPas");
                alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });

                //MensajeVtaTDC();
                document.getElementById("GuardarValidarPas").style.display = 'inline';
                noValidado("EstatusPas", "HeadingPas", "ValidarPas", "TdcPassGuardar");
                //ValidarGrupoA();
                document.getElementById("ValidarPas").style.display = 'none';
            } else {
                alert("No tiene los privilegios de procesos");
            }
            UserName.val("");
            Password.val("");
            hideLoader();
        },
        error: function (error) {
            alert("error al entrar como validador");
            hideLoader();
            $("#modalTdc").modal("hide");
        }
    });

}



//--Metodo para el Aviso de privacidad (API)
function LlamarAPI_AvisoPrivacidad() {
    var num = document.getElementById('TelContactoTDC').value;
    var folio = document.getElementById('FolioPas').value;
    if (num != "") {
        
       
        var json = {
            num: num,
            folio: folio
        }
        $.ajax({
            url: hostInit + "/User/Aviso",
            type: 'POST',
            crossDomain: 'true',
            contentType: 'application/json;charset=utf-8',
            data: JSON.stringify(json),
            success: function (response) {
                console.log(response);
                if (response['statusCode'] == 200 && response['message'] == 'Reproduciendo audio') {

                    //Muestra el modal y manipula los elementos DOM para mostrar los mensajes del correcto llamado de la API
                    $("#ModalAvisoTDC").modal("show"); //Se muestra el modal

                    //Se muestra el titulo y el contador al lanzar de manera correcta el aviso
                    document.getElementById('TituloModal_AvisoTdcOK').hidden = false;
                    document.getElementById('DivAVisoOK').hidden = false;

                    //Se esconden el titulo y mensaje de Error del aviso
                    document.getElementById('TituloModal_AvisoTdcNOT').hidden = true; 
                    document.getElementById('DivAVisoNOT').hidden = true; 
                    updateClock();
                } else {
                    $("#ModalAvisoTDC").modal("show"); //Se muestra el modal

                    //Se ocultan el titulo y el contador al lanzar de manera correcta el aviso
                    document.getElementById('TituloModal_AvisoTdcOK').hidden = true;
                    document.getElementById('DivAVisoOK').hidden = true;

                    //Se esconden el titulo y mensaje de Error del aviso
                    document.getElementById('TituloModal_AvisoTdcNOT').hidden = false;
                    document.getElementById('DivAVisoNOT').hidden = false; 
                    console.error("Respuesta de API:" + response['message']);
                }
            },
            error: function (error) {
                alert("Error al reproducir Aviso de Privacidad");
            }
        });

    } else {
        alert('Se tiene que llenar el campo de Teléfono de contacto');
        document.getElementById('TelContactoTDC').focus();
    }
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

function LoadCombosTdc(ID, CATALOGO, idCombo, dato) {
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
function check_val_tdc() {
    if ((document.getElementById('check_tdc').checked) == true) {
        document.getElementById("TdcPassGuardar").hidden = false;
        document.getElementById("panelTDC").hidden = false;
        document.getElementById("SaveCalifTDC").hidden = true;
        document.getElementById("panelCalificacionTDC").hidden = true;
    }
    else {
        document.getElementById("TdcPassGuardar").hidden = true;
        document.getElementById("panelTDC").hidden = true;
        document.getElementById("SaveCalifTDC").hidden = false;
        document.getElementById("panelCalificacionTDC").hidden = false;
    }
}

//GUARDA DATOS Y LLENA JSON
function saveCalif11() {
    var BalconCalif;
    BalconCalif = $("#comboTDCCalif").val;
    var folio = $("#FolioPas");
    var Calificacion = document.getElementById("comboTDCCalif").value;

    if (Calificacion == 0) {
        alert("Seleccione una Calificacion");
        $("#comboTDCCalif").focus();
        return;
    }
    var json = {
        Folio: folio.val(),
        NumeroCliente: document.getElementById("Cliente").value,
        Calificacion: document.getElementById("comboTDCCalif").value,
    };
    console.log(json);
    saveCalifDataTDC(json);
    datos = json;
}


function saveCalifDataTDC(json) {
    console.log("Entra TDC calif");
    showLoader();

    var xml = new XMLHttpRequest();
    var url = hostInit + "/Client/saveCalificacion";
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            //Calificado("EstatusPas", "HeadingPas", "CalificadoTDC", "SaveCalifTDC", "TdcPassGuardar", "lblTDC", "check_tdc");
            Calificado("EstatusPas", "HeadingPas", "SaveCalifTDC", "TdcPassGuardar");
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

    //SigueOfertaTDC();
}

function continuarOfertaTDC() {
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

function MensajeVtaTDC() {
    var FolioTDC = document.getElementById("FolioPas").value;
    Swal.fire({
        title: 'Venta Exitosa!!, FOLIO: ' + document.getElementById("FolioPas").value,
        text: "Felicidades!",
        icon: 'success',
        width: '50%',
        showCancelButton: false,
        confirmButtonColor: '#5564eb',
        cancelButtonColor: '#ff0500'
    })
}

//function MensajeVtaTDC2() {
//    var FolioTDC = document.getElementById("FolioPas").value;
//    alert('Venta Exitosa!!, FOLIO: ' + document.getElementById("FolioPas").value);
//}

function SigueOfertaTDC() {
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