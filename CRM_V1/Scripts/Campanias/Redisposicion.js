var datosRedis;
function SetRedisposicionData(id, FolioRedisposicion,
    NumeroTargetaRedisposicion, ProductoRedisposicion,
    LineaCreditoRedisposicion, TasaOriginalRedisposicion,
    PlazoCreditoRedisposicion, MontoDisperionRedisposicion,
    Pago36Redisposicion, Pago48Redisposicion,
    Pago60Redisposicion, IncrementoRedisposicion,
    LineaActualRedisposicion, LineaNuevaRedisposicion,
    CantidadDisponerRedisposicion, Ultimos3MesesRedisposicion,
    TieneTDCCitibanamexRedisposicion, EstatusVenta, Calificacion) {

    LoadCombosRedis(49, 0, "comboRedisCalif", 0);

    $("#IdRedisposicion").val(id);
    $("#FolioRedisposicion").val(FolioRedisposicion);
    $("#NumeroTargetaRedisposicion").val(NumeroTargetaRedisposicion);
    $("#ProductoRedisposicion").val(ProductoRedisposicion);
    $("#LineaCreditoRedisposicion").val(LineaCreditoRedisposicion);
    $("#TasaOriginalRedisposicion").val(TasaOriginalRedisposicion);
    $("#PlazoCreditoRedisposicion").val(PlazoCreditoRedisposicion);
    $("#MontoDisperionRedisposicion").val(MontoDisperionRedisposicion);
    $("#Pago36Redisposicion").val(Pago36Redisposicion);
    $("#Pago48Redisposicion").val(Pago48Redisposicion);
    $("#Pago60Redisposicion").val(Pago60Redisposicion);
    $("#IncrementoRedisposicion").val(IncrementoRedisposicion);
    $("#LineaActualRedisposicion").val(LineaActualRedisposicion);
    $("#LineaNuevaRedisposicion").val(LineaNuevaRedisposicion);
    $("#CantidadDisponerRedisposicion").val(CantidadDisponerRedisposicion);
    $("#Ultimos3MesesRedisposicion").val(Ultimos3MesesRedisposicion);
    $("#TieneTDCCitibanamexRedisposicion").val(TieneTDCCitibanamexRedisposicion);
    
    $("#StatusSaleRedisposicion").html(ComboCatalogo());
    document.getElementById("SaveRedisposicion").onclick = function () {
        ValidateRedisposicionData();
    }
    document.getElementById("ValidateRedisposicion").onclick = function () {
        ValidarVentaRedisposicion();
    }
    document.getElementById("check_cpc").onclick = function () {
        check_val_redis();
    }
    document.getElementById("SaveCalifCPC").onclick = function () {
        saveCalifRedis();
    }



	if (datosRedis === undefined)
	{
	}
	else 	
	{
		delete datosRedis;
	}
    switch (EstatusVenta) {
        case -1://no se ha tocado
        case 2://no venta
            noVendido("EstadoRedisposicion", "HeadingRedisposicion", "ValidarRedisposicion", "SaveRedisposicion");
            setFieldsRedisposocion("");
            break;
        case 0://ya se vendio, no se ha validado
            noValidado("EstadoRedisposicion", "HeadingRedisposicion", "ValidarRedisposicion", "SaveRedisposicion");
            var Id = $("#IdRedisposicion");
            var FolioRedisposicion = $("#FolioRedisposicion");
            var NumeroTargetaRedisposicion = $("#NumeroTargetaRedisposicion");
            var ProductoRedisposicion = $("#ProductoRedisposicion");
            var LineaCreditoRedisposicion = $("#LineaCreditoRedisposicion");
            var TasaOriginalRedisposicion = $("#TasaOriginalRedisposicion");
            var PlazoCreditoRedisposicion = $("#PlazoCreditoRedisposicion");
            var MontoDisperionRedisposicion = $("#MontoDisperionRedisposicion");
            var Pago36Redisposicion = $("#Pago36Redisposicion");
            var Pago48Redisposicion = $("#Pago48Redisposicion");
            var Pago60Redisposicion = $("#Pago60Redisposicion");
            var IncrementoRedisposicion = $("#IncrementoRedisposicion");
            var LineaActualRedisposicion = $("#LineaActualRedisposicion");
            var LineaNuevaRedisposicion = $("#LineaNuevaRedisposicion");
            var CantidadDisponerRedisposicion = $("#CantidadDisponerRedisposicion");
            var Ultimos3MesesRedisposicion = $("#Ultimos3MesesRedisposicion");
            var TieneTDCCitibanamexRedisposicion = $("#TieneTDCCitibanamexRedisposicion");

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
            datosRedis = {
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

                Folio: FolioRedisposicion.val(),
                NumeroTargeta: NumeroTargetaRedisposicion.val(),
                Producto: ProductoRedisposicion.val(),
                LineaCredito: LineaCreditoRedisposicion.val(),
                TasaOriginal: TasaOriginalRedisposicion.val(),
                PlazoCredito: PlazoCreditoRedisposicion.val(),
                MontoDispersion: MontoDisperionRedisposicion.val(),
                Pago36: Pago36Redisposicion.val(),
                Pago48: Pago48Redisposicion.val(),
                Pago60: Pago60Redisposicion.val(),
                Incremento: IncrementoRedisposicion.val(),
                LineaActual: LineaActualRedisposicion.val(),
                LineaNueva: LineaNuevaRedisposicion.val(),
                CantidadDisponer: CantidadDisponerRedisposicion.val(),
                Ultimo3MesesUtilizandoBancaNet: Ultimos3MesesRedisposicion.val(),
                TieneTDCCitibanamex: TieneTDCCitibanamexRedisposicion.val(),
            };
            break;
        case 1://venta exitosa
            ventaExitosa("EstadoRedisposicion", "HeadingRedisposicion", "ValidarRedisposicion", "SaveRedisposicion");
            setFieldsRedisposocion("enabled");
            break;
    }

    //document.getElementById("OpenScriptRedisposicion").onclick = function () {
    //    window.open(hostInit + '/Client/OpenPdf/REDISPOSICION', '_blank', 'location=no, resizable=no', true);
    //}
}

function ValidarVentaRedisposicion() {
    var UserName = $("#UserRedisposicion");
    var Password = $("#PasswordRedisposicion");

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
    var itemSelect = document.getElementById("StatusSaleRedisposicion");
    if (itemSelect.options[itemSelect.selectedIndex].value == 0) {
        alert("Debe seleccionar un estado de la venta al validar");
        return;
    }
    showLoader();
    $.ajax({
        url: hostInit + "/User/LogIn",
        type: 'POST',
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
                datosRedis['EstatusVenta'] = $("#StatusSaleRedisposicion").val();
                $.ajax({
                    url: hostInit + '/Client/SaveRedisposicionData',
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    data: JSON.stringify(datosRedis),
                    success: function (response) {
                        if (response == true) {
                            if (datosRedis['EstatusVenta'] == 2) {//no venta
                                noVendido("EstadoRedisposicion", "HeadingRedisposicion", "ValidarRedisposicion", "SaveRedisposicion");
                            } else {
                                ventaExitosa("EstadoRedisposicion", "HeadingRedisposicion", "ValidarRedisposicion", "SaveRedisposicion");
                                setFieldsRedisposocion("disabled");
                                $("#collapse7").collapse('hide');
                            }
                        } else {
                            alert("Error al validar la venta");
                        }
                        
                        $("#StatusSaleRedisposicion").val(0);
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
            console.log(error);
            hideLoader();
        }
    });
}

function setFieldsRedisposocion(value) {
    $("#NumeroTargetaRedisposicion").prop("disabled", value);
    $("#ProductoRedisposicion").prop("disabled", value);
    $("#LineaCreditoRedisposicion").prop("disabled", value);
    $("#TasaOriginalRedisposicion").prop("disabled", value);
    $("#PlazoCreditoRedisposicion").prop("disabled", value);
    $("#MontoDisperionRedisposicion").prop("disabled", value);
    $("#Pago36Redisposicion").prop("disabled", value);
    $("#Pago48Redisposicion").prop("disabled", value);
    $("#Pago60Redisposicion").prop("disabled", value);
    $("#IncrementoRedisposicion").prop("disabled", value);
    $("#LineaActualRedisposicion").prop("disabled", value);
    $("#LineaNuevaRedisposicion").prop("disabled", value);
    $("#CantidadDisponerRedisposicion").prop("disabled", value);
    $("#Ultimos3MesesRedisposicion").prop("disabled", value);
    $("#TieneTDCCitibanamexRedisposicion").prop("disabled", value);
}

function ValidateRedisposicionData() {
    var Id = $("#IdRedisposicion");
    var FolioRedisposicion = $("#FolioRedisposicion");
    var NumeroTargetaRedisposicion = $("#NumeroTargetaRedisposicion");
    var ProductoRedisposicion = $("#ProductoRedisposicion");
    var LineaCreditoRedisposicion = $("#LineaCreditoRedisposicion");
    var TasaOriginalRedisposicion = $("#TasaOriginalRedisposicion");
    var PlazoCreditoRedisposicion = $("#PlazoCreditoRedisposicion");
    var MontoDisperionRedisposicion = $("#MontoDisperionRedisposicion");
    var Pago36Redisposicion = $("#Pago36Redisposicion");
    var Pago48Redisposicion = $("#Pago48Redisposicion");
    var Pago60Redisposicion = $("#Pago60Redisposicion");
    var IncrementoRedisposicion = $("#IncrementoRedisposicion");
    var LineaActualRedisposicion = $("#LineaActualRedisposicion");
    var LineaNuevaRedisposicion = $("#LineaNuevaRedisposicion");
    var CantidadDisponerRedisposicion = $("#CantidadDisponerRedisposicion");
    var Ultimos3MesesRedisposicion = $("#Ultimos3MesesRedisposicion");
    var TieneTDCCitibanamexRedisposicion = $("#TieneTDCCitibanamexRedisposicion");

    if (FolioRedisposicion.val() === "") {
        alert("Debe ingresar el folio del producto");
        FolioRedisposicion.focus();
        return;
    }
    if (NumeroTargetaRedisposicion.val() === "") {
        alert("Debe ingresar la fecha 1");
        NumeroTargetaRedisposicion.focus();
        return;
    }
    if (ProductoRedisposicion.val() === "") {
        alert("Ingrese cita");
        ProductoRedisposicion.focus();
        return;
    }
    if (LineaCreditoRedisposicion.val() === "") {
        alert("Debe ingresar CNBT");
        LineaCreditoRedisposicion.focus();
        return;
    }
    if (TasaOriginalRedisposicion.val() === "") {
        alert("Debe ingresarb producto 1");
        TasaOriginalRedisposicion.focus();
        return;
    }
    if (PlazoCreditoRedisposicion.val() === "") {
        alert("Debe ingresar producto 2");
        PlazoCreditoRedisposicion.focus();
        return;
    }
    if (MontoDisperionRedisposicion.val() === "") {
        alert("Ingrese linea F");
        MontoDisperionRedisposicion.focus();
        return;
    }
    if (Pago36Redisposicion.val() === "") {
        alert("Ingrese linea TDC");
        Pago36Redisposicion.focus();
        return;
    }

    if (Pago48Redisposicion.val() === "") {
        alert("Ingrese oferta");
        Pago48Redisposicion.focus();
        return;
    }
    if (Pago60Redisposicion.val() === "") {
        alert("Tasa");
        Pago60Redisposicion.focus();
        return;
    }
    if (IncrementoRedisposicion.val() === "") {
        alert("Ingrese telefono contacto");
        IncrementoRedisposicion.focus();
        return;
    }
    if (LineaActualRedisposicion.val() === "") {
        alert("Ingrese telefono");
        LineaActualRedisposicion.focus();
        return;
    }
    if (LineaNuevaRedisposicion.val() === "") {
        alert("Ingrese fecha 3");
        LineaNuevaRedisposicion.focus();
        return;
    }
    if (CantidadDisponerRedisposicion.val() === "") {
        alert("Ingrese domicilio v");
        CantidadDisponerRedisposicion.focus();
        return;
    }
    if (Ultimos3MesesRedisposicion.val() === "") {
        alert("Ingrese referencia");
        Ultimos3MesesRedisposicion.focus();
        return;
    }
    if (TieneTDCCitibanamexRedisposicion.val() === "") {
        alert("Ingrese fecha dos");
        TieneTDCCitibanamexRedisposicion.focus();
        return;
    }

    var RedisposicionEstatusVenta = "";
    if (UserType == 6) {//si es valdiador
        RedisposicionEstatusVenta = $("#RedisposicionEstatusVenta").val();
        if (RedisposicionEstatusVenta == 0) {
            alert("Seleccione estatus de la venta");
            $("#RedisposicionEstatusVenta").focus();
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

        Folio: FolioRedisposicion.val(),
        NumeroTargeta: NumeroTargetaRedisposicion.val(),
        Producto: ProductoRedisposicion.val(),
        LineaCredito: LineaCreditoRedisposicion.val(),
        TasaOriginal: TasaOriginalRedisposicion.val(),
        PlazoCredito: PlazoCreditoRedisposicion.val(),
        MontoDispersion: MontoDisperionRedisposicion.val(),
        Pago36: Pago36Redisposicion.val(),
        Pago48: Pago48Redisposicion.val(),
        Pago60: Pago60Redisposicion.val(),
        Incremento: IncrementoRedisposicion.val(),
        LineaActual: LineaActualRedisposicion.val(),
        LineaNueva: LineaNuevaRedisposicion.val(),
        CantidadDisponer: CantidadDisponerRedisposicion.val(),
        Ultimo3MesesUtilizandoBancaNet: Ultimos3MesesRedisposicion.val(),
        TieneTDCCitibanamex: TieneTDCCitibanamexRedisposicion.val(),
        EstatusVenta: RedisposicionEstatusVenta
    };
    datos = json;
    saveRedisposicionData(json);
}


function saveRedisposicionData(json) {
    showLoader();
    $.ajax({
        url: hostInit + '/Client/SaveRedisposicionData',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (response) {
            noValidado("EstadoRedisposicion", "HeadingRedisposicion", "ValidarRedisposicion", "SaveRedisposicion");
            hideLoader();
        },
        error: function (error) {
            console.log("Ocurrio un error al guardar los dao");
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

function LoadCombosRedis(ID, CATALOGO, idCombo, dato) {
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
function check_val_redis() {
    if ((document.getElementById('check_redis').checked) == true) {
        document.getElementById("SaveRedisposicion").hidden = false;
        document.getElementById("panelRedis").hidden = false;
        document.getElementById("SaveCalifRedis").hidden = true;
        document.getElementById("panelCalificacionRedis").hidden = true;
    }
    else {
        document.getElementById("SaveRedisposicion").hidden = true;
        document.getElementById("panelRedis").hidden = true;
        document.getElementById("SaveCalifRedis").hidden = false;
        document.getElementById("panelCalificacionRedis").hidden = false;
    }
}

//GUARDA DATOS Y LLENA JSON
function saveCalifRedis() {
    var BalconCalif;
    BalconCalif = $("#comboRedisCalif").val;
    var folio = $("#FolioRedisposicion");
    var Calificacion = document.getElementById("comboRedisCalif").value;

    if (Calificacion == 0) {
        alert("Seleccione una Calificacion");
        $("#comboRedisCalif").focus();
        return;
    }
    var json = {
        Folio: folio.val(),
        NumeroCliente: document.getElementById("Cliente").value,
        Calificacion: document.getElementById("comboRedisCalif").value,
    };
    console.log(json);
    saveCalifDataRedis(json);
    datos = json;
}


function saveCalifDataRedis(json) {
    console.log("Entra saveCPC calif");
    showLoader();

    var xml = new XMLHttpRequest();
    var url = hostInit + "/Client/saveCalificacion";
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            Calificado("EstadoRedisposicion", "HeadingRedisposicion", "SaveCalifRedis", "SaveRedisposicion");
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

    //continuarOfertaTDC();
}

function continuarOfertaTDC() {
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
