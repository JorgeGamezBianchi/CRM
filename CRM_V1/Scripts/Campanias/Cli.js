var datos;


function SetCliData(id, FolioCli, NumeroDeTargetaCli, ProductoCli, LineaActualCli, LineaIncrementoCli,
    LineaNuevaTotalCli, BancaElectronicaCli, TieneAdicionalesCli, AutenticacionCli,
    PlazaCli, PisoCli, ClienteDesdeCli, EstatusVenta, Num_adicionales, Calificacion) {

    LoadCombosCLI(48, 0, "comboCLICalif", 0);

    console.log(EstatusVenta + "Estatus");
    loadAdicionales(TieneAdicionalesCli);
    $("#IdCli").val(id);
    $("#FolioCli").val(FolioCli);
    $("#NumeroTargetaCli").val(NumeroDeTargetaCli);
    $("#ProductoCli").val(ProductoCli);
    $("#LineaActualCli").val(LineaActualCli);
    $("#LineaIncrementoCli").val(LineaIncrementoCli);
    $("#LineaNuevaTotalCli").val(LineaNuevaTotalCli);
    $("#BancaElectronicaCli").val(BancaElectronicaCli);
    $("#AutenticacionCli").val(AutenticacionCli);
    $("#PlazaCli").val(PlazaCli);
    $("#PisoCli").val(PisoCli);
    $("#ClienteDesdeCli").val(formatDate(ClienteDesdeCli));
    $("#StatusSaleCli").html(ComboCatalogo());
    $("#ClienteDesdeCli").datepicker(dataCalendar);

    $("#NumAdic").text(Num_adicionales); //Manda la cantidad de adicionales del cliente
    //Setea los combos de autenticación
    document.getElementById('cmbAdicionales').value = 0;
    document.getElementById('cmbBancaE').value = 0;
    document.getElementById("ValidateCli").onclick = function () {
        ValidarCli();
    }
    document.getElementById("SaveCli").onclick = function () {
        ValidateCliData();
    }
    document.getElementById("check_cli").onclick = function () {
        check_val_Cli();
    }
    document.getElementById("SaveCalifCLI").onclick = function () {
        saveCalif2();
    }

    console.log(datos);
    if (datos === undefined) {
    }
    else {
        delete datos;
        document.getElementById('cmbBancaE').value = 0;
        document.getElementById('cmbAdicionales').value = 0;
        document.getElementById('cmbBancaE').disabled = false;//se activa el combo de bancanet
        document.getElementById('lblAutentica').hidden = true;
    }
    switch (EstatusVenta) {
        case -1://no se ha tocado
        //case 2://no venta
        //    noVendido("EstadoCli", "HeadingCli", "ValidarCli", "SaveCli");
        //    //$("#EstadoCli").html("");
        //    //$("#HeadingCli").css("background-color", "");
        //    //$("#ValidarCli").show();
        //    //$("#SaveCli").hide();
        //    setFieldsCli("");
        //    break;
        case 0://ya se vendio, no se ha validado
            //noValidado("EstadoCli", "HeadingCli", "ValidarCli", "SaveCli");
            $("#EstadoCli").html("");
            $("#HeadingCli").css("background-color", "");
            $("#ValidarCli").show();
            $("#SaveCli").hide();
            var Id = $("#IdCli");
            var FolioCli = $("#FolioCli");
            var NumeroDeTargetaCli = $("#NumeroTargetaCli");
            var ProductoCli = $("#ProductoCli");
            var LineaActualCli = $("#LineaActualCli");
            var LineaIncrementoCli = $("#LineaIncrementoCli");
            var LineaNuevaTotalCli = $("#LineaNuevaTotalCli");
            var BancaElectronicaCli = $("#BancaElectronicaCli");
            var TieneAdicionalesCli = $("#TieneAdicionalesCli");
            var AutenticacionCli = $("#AutenticacionCli");
            var PlazaCli = $("#PlazaCli");
            var PisoCli = $("#PisoCli");
            var ClienteDesdeCli = $("#ClienteDesdeCli");

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

            //var Autentica = document.getElementById('lblAutentica').innerHTML;
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
                Municipio: document.getElementById('Municipio').value,
                Estado: Estados.val(),
                Celular: Celular.val(),
                TelefonoCasa: TelefonoCasa.val(),

                Folio: FolioCli.val(),
                NumeroTargeta: document.getElementById('NumeroTargetaCli').value,
                Producto: ProductoCli.val(),
                LineaAtual: LineaActualCli.val(),
                IncrementoLinea: LineaIncrementoCli.val(),
                LineaNuevaTotal: LineaNuevaTotalCli.val(),
                BancaElectronica: BancaElectronicaCli.val(),
                TieneAdicionales: TieneAdicionalesCli.val(),
                Autenticacion: AutenticacionCli.val(),
                IdPlaza: PlazaCli.val(),
                Piso: PisoCli.val(),
                ClienteDesde: ClienteDesdeCli.val(),
                EstatusVenta: EstatusVenta
            };
            break;

        case 1://venta exitosa
            ventaExitosa("EstadoCli", "HeadingCli", "ValidarCli", "SaveCli");
            setFieldsCli("enabled");
            break;

        case 2://no venta
            noVendido("EstadoCli", "HeadingCli", "ValidarCli", "SaveCli");
            //$("#EstadoCli").html("");
            //$("#HeadingCli").css("background-color", "");
            //$("#ValidarCli").show();
            //$("#SaveCli").hide();
            setFieldsCli("");
            break;
    }

    //document.getElementById("OpenScriptCli").onclick = function () {
    //    window.open(hostInit + '/Client/OpenPdf/CLI', '_blank', 'location=no, resizable=no', true);
    //}


}

function loadAdicionales(value) {
    $.ajax({
        url: hostInit + '/Client/ListaAdicionales',
        contentType: 'application/json;charset=utf-8',
        success: function (response) {
            var adicionalesItems = '';
            for (var i in response) {
                adicionalesItems += '<option value="' + response[i].Valor + '">' + response[i].Texto + '</option>';
            }
            $("#TieneAdicionalesCli").html(adicionalesItems);
            $("#TieneAdicionalesCli").val(value);
        },
        error: function (error) {
            console.log("error en lista adicionales");
            console.log(error);
        }
    });
}

function ValidarCli() {
    var UserName = $("#UserCli");
    var Password = $("#PasswordCli");

    var Id = $("#IdCli");
    var FolioCli = $("#FolioCli");
    var NumeroDeTargetaCli = $("#NumeroTargetaCli");
    var ProductoCli = $("#ProductoCli");
    var LineaActualCli = $("#LineaActualCli");
    var LineaIncrementoCli = $("#LineaIncrementoCli");
    var LineaNuevaTotalCli = $("#LineaNuevaTotalCli");
    var BancaElectronicaCli = $("#BancaElectronicaCli");
    var TieneAdicionalesCli = $("#TieneAdicionalesCli");
    var AutenticacionCli = $("#AutenticacionCli");
    var PlazaCli = $("#PlazaCli");
    var PisoCli = $("#PisoCli");
    var ClienteDesdeCli = $("#ClienteDesdeCli");

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
    //var itemSelect = document.getElementById("StatusSaleCli");
    //if (itemSelect.options[itemSelect.selectedIndex].value == 0) {
    //    alert("Debe seleccionar un estado de la venta al validar");
    //    return;
    //}
    if (FolioCli.val() === "") {
        alert("Debe ingresar el folio del producto");
        FolioCli.focus();
        return;
    }
    if (NumeroDeTargetaCli.val() === "") {
        alert("Debe ingresar la fecha 1");
        NumeroDeTargetaCli.focus();
        return;
    }
    if (ProductoCli.val() === "") {
        alert("Ingrese producto");
        ProductoCli.focus();
        return;
    }
    if (LineaActualCli.val() === "") {
        alert("Debe ingresar linea actual");
        LineaActualCli.focus();
        return;
    }
    if (LineaIncrementoCli.val() === "") {
        alert("Debe ingresar liena incremento");
        LineaIncrementoCli.focus();
        return;
    }
    if (LineaNuevaTotalCli.val() === "") {
        alert("Debe ingresar producto 2");
        LineaNuevaTotalCli.focus();
        return;
    }
    if (BancaElectronicaCli.val() === "") {
        alert("Ingrese producto 3");
        BancaElectronicaCli.focus();
        return;
    }
    if (TieneAdicionalesCli.val() === 0) {
        alert("Ingrese linea F");
        TieneAdicionalesCli.focus();
        return;
    }
    if (AutenticacionCli.val() === "") {
        alert("Ingrese linea TDC");
        AutenticacionCli.focus();
        return;
    }
    if (PlazaCli.val() === "") {
        alert("Ingrese plaza");
        PlazaCli.focus();
        return;
    }
    if (PisoCli.val() === "") {
        alert("Agrega el piso");
        PisoCli.focus();
        return;
    }
    if (ClienteDesdeCli.val() === "") {
        alert("Ingrese cliente desde");
        ClienteDesdeCli.focus();
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

    ///asignacion de variable datos
    var Id = $("#IdCli");
    var FolioCli = $("#FolioCli");
    var NumeroDeTargetaCli = $("#NumeroTargetaCli");
    var ProductoCli = $("#ProductoCli");
    var LineaActualCli = $("#LineaActualCli");
    var LineaIncrementoCli = $("#LineaIncrementoCli");
    var LineaNuevaTotalCli = $("#LineaNuevaTotalCli");
    var BancaElectronicaCli = $("#BancaElectronicaCli");
    var TieneAdicionalesCli = $("#TieneAdicionalesCli");
    var AutenticacionCli = $("#AutenticacionCli");
    var PlazaCli = $("#PlazaCli");
    var PisoCli = $("#PisoCli");
    var ClienteDesdeCli = $("#ClienteDesdeCli");

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

    //var Autentica = document.getElementById('lblAutentica').innerHTML;
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
        Municipio: document.getElementById('Municipio').value,
        Estado: Estados.val(),
        Celular: Celular.val(),
        TelefonoCasa: TelefonoCasa.val(),

        Folio: FolioCli.val(),
        NumeroTargeta: document.getElementById('NumeroTargetaCli').value,
        Producto: ProductoCli.val(),
        LineaAtual: LineaActualCli.val(),
        IncrementoLinea: LineaIncrementoCli.val(),
        LineaNuevaTotal: LineaNuevaTotalCli.val(),
        BancaElectronica: BancaElectronicaCli.val(),
        TieneAdicionales: TieneAdicionalesCli.val(),
        Autenticacion: AutenticacionCli.val(),
        IdPlaza: PlazaCli.val(),
        Piso: PisoCli.val(),
        ClienteDesde: ClienteDesdeCli.val(),
        EstatusVenta: 0

    };
    ////


    //console.log(datos);
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
                let Autentica = document.getElementById('lblAutentica').textContent;
                //datos['EstatusVenta'] = $("#StatusSaleCli").val();
                datos['Autentica'] = Autentica;
               
                $.ajax({
                    url: hostInit + '/Client/SaveCliData',
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    data: JSON.stringify(datos),
                    success: function (response) {
                        if (response == 2) {//no venta
                            //noVendido("EstadoCli", "HeadingCli", "ValidarCli", "SaveCli");
                            alert("Venta no puede ser procesada, folio existente en ventas");
                        } else {
                            ventaExitosa("EstadoCli", "HeadingCli", "ValidarCli", "SaveCli");
                            //ValidarGrupoA();
                            setFieldsCli("disabled");
                            $("#collapse8").collapse('hide');
                            // alert("Venta exitosa de incremento de linea\n Folio: " + FolioCli.val());
                            var folio = $("#FolioCli");
                            alertify.alert('VENTA EXITOSA!', 'FOLIO:' + folio.val(), function () { alertify.success('VENTA GUARDADA!'); });
                            //MensajeVtaCLI();

                            document.getElementById('cmbBancaE').value = 0;
                            document.getElementById('cmbAdicionales').value = 0;
                        }
                        $("#StatusSaleCli").val(0);
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

function setFieldsCli(value) {
    $("#NumeroTargetaCli").prop("disabled", value);
    $("#ProductoCli").prop("disabled", value);
    $("#LineaActualCli").prop("disabled", value);
    $("#LineaIncrementoCli").prop("disabled", value);
    $("#LineaNuevaTotalCli").prop("disabled", value);
    $("#BancaElectronicaCli").prop("disabled", value);
    $("#TieneAdicionalesCli").prop("disabled", value);
    $("#AutenticacionCli").prop("disabled", value);
    $("#PlazaCli").prop("disabled", value);
    $("#PisoCli").prop("disabled", value);
    $("#ClienteDesdeCli").prop("disabled", value);
}

function ValidateCliData() {
    var Id = $("#IdCli");
    var FolioCli = $("#FolioCli");
    var NumeroDeTargetaCli = $("#NumeroTargetaCli");
    var ProductoCli = $("#ProductoCli");
    var LineaActualCli = $("#LineaActualCli");
    var LineaIncrementoCli = $("#LineaIncrementoCli");
    var LineaNuevaTotalCli = $("#LineaNuevaTotalCli");
    var BancaElectronicaCli = $("#BancaElectronicaCli");
    var TieneAdicionalesCli = $("#TieneAdicionalesCli");
    var AutenticacionCli = $("#AutenticacionCli");
    var PlazaCli = $("#PlazaCli");
    var PisoCli = $("#PisoCli");
    var ClienteDesdeCli = $("#ClienteDesdeCli");

    if (FolioCli.val() === "") {
        alert("Debe ingresar el folio del producto");
        FolioCli.focus();
        return;
    }
    if (NumeroDeTargetaCli.val() === "") {
        alert("Debe ingresar la fecha 1");
        NumeroDeTargetaCli.focus();
        return;
    }
    if (ProductoCli.val() === "") {
        alert("Ingrese producto");
        ProductoCli.focus();
        return;
    }
    if (LineaActualCli.val() === "") {
        alert("Debe ingresar linea actual");
        LineaActualCli.focus();
        return;
    }
    if (LineaIncrementoCli.val() === "") {
        alert("Debe ingresar liena incremento");
        LineaIncrementoCli.focus();
        return;
    }
    if (LineaNuevaTotalCli.val() === "") {
        alert("Debe ingresar producto 2");
        LineaNuevaTotalCli.focus();
        return;
    }
    if (BancaElectronicaCli.val() === "") {
        alert("Ingrese producto 3");
        BancaElectronicaCli.focus();
        return;
    }
    if (TieneAdicionalesCli.val() === 0) {
        alert("Ingrese linea F");
        TieneAdicionalesCli.focus();
        return;
    }
    if (AutenticacionCli.val() === "") {
        alert("Ingrese linea TDC");
        AutenticacionCli.focus();
        return;
    }
    if (PlazaCli.val() === "") {
        alert("Ingrese plaza");
        PlazaCli.focus();
        return;
    }
    if (PisoCli.val() === "") {
        alert("Agrega el piso");
        PisoCli.focus();
        return;
    }
    if (ClienteDesdeCli.val() === "") {
        alert("Ingrese cliente desde");
        ClienteDesdeCli.focus();
        return;
    }

    var CliEstatusVenta = "";
    if (UserType == 6) {//si es valdiador
        CliEstatusVenta = $("#CliEstatusVenta").val();
        if (CliEstatusVenta == 0) {
            alert("Seleccione estatus de la venta");
            $("#CliEstatusVenta").focus();
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

        Folio: FolioCli.val(),
        NumeroTargeta: NumeroDeTargetaCli.val(),
        Producto: ProductoCli.val(),
        LineaAtual: LineaActualCli.val(),
        IncrementoLinea: LineaIncrementoCli.val(),
        LineaNuevaTotal: LineaNuevaTotalCli.val(),
        BancaElectronica: BancaElectronicaCli.val(),
        TieneAdicionales: TieneAdicionalesCli.val(),
        Autenticacion: AutenticacionCli.val(),
        IdPlaza: PlazaCli.val(),
        Piso: PisoCli.val(),
        ClienteDesde: ClienteDesdeCli.val(),
        EstatusVenta: CliEstatusVenta,

    };
    datos = json;

    saveCliData(json);

}


function saveCliData(json) {
    showLoader();
    $.ajax({
        url: hostInit + '/Client/SaveCliData',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (response) {
            hideLoader();
            noValidado("EstadoCli", "HeadingCli", "ValidarCli", "SaveCli");
            //ValidarGrupoA();
        },
        error: function (error) {
            console.log("Ocurrio un error al guardar los dao");
            hideLoader();
        }
    });
}


function PreguntaBancaElec() {

    var p = document.getElementById('cmbBancaE').value;
    //document.getElementById('btnGuardar').disabled = false;
    if (p == document.getElementById('BancaElectronicaCli').value) {
        document.getElementById('lblAutentica').hidden = false;
        document.getElementById('lblAutentica').innerHTML = "AUTENTICA";
        document.getElementById('lblAutentica').style = "color:green";
        document.getElementById('cmbBancaE').disabled = true;//se deshabilita el combo de bancanet
        document.getElementById('cmbAdicionales').disabled = true; //se activa el combo de adicionales
        document.getElementById('ValidateCli').disabled = false;//se habilita el combo de bancanet
        document.getElementById('btnGuardar').disabled = false;
    } else {
        document.getElementById('lblAutentica').hidden = false;
        document.getElementById('lblAutentica').innerHTML = "NO AUTENTICA";
        document.getElementById('lblAutentica').style = "color:red";
        document.getElementById('cmbBancaE').disabled = true;//se desabilita el combo de bancanet
        document.getElementById('ValidateCli').disabled = false; //Se habilita el boton para guardar
        document.getElementById('cmbAdicionales').disabled = false;
    }
}

function PreguntaAdicionales() {
    var p = document.getElementById('cmbAdicionales').value;
    //var b = document.getElementById('cmbBancaE').value;
    if (p == document.getElementById('TieneAdicionalesCli').value /*&& b == document.getElementById('BancaElectronicaCli').value*/) {
        document.getElementById('lblAutentica').hidden = false;
        document.getElementById('lblAutentica').innerHTML = "AUTENTICA";
        document.getElementById('lblAutentica').style = "color:green";
        document.getElementById('ValidateCli').disabled = false;
        document.getElementById('cmbAdicionales').disabled = true; //Se deshabilita el combo
    } else {
        document.getElementById('lblAutentica').hidden = false;
        document.getElementById('lblAutentica').innerHTML = "NO AUTENTICA";
        document.getElementById('lblAutentica').style = "color:red";
        document.getElementById('ValidateCli').disabled = false;
        document.getElementById('cmbAdicionales').disabled = true; //Se deshabilita el combo
    }
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

function LoadCombosCLI(ID, CATALOGO, idCombo, dato) {
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
function check_val_Cli() {
    if ((document.getElementById('check_cli').checked) == true) {

        document.getElementById("SaveCli").hidden = false;
        document.getElementById("panelCLI").hidden = false;
        document.getElementById("SaveCalifCLI").hidden = true;
        document.getElementById("panelCalificacionCLI").hidden = true;
    }
    else {
        document.getElementById("SaveCli").hidden = true;
        document.getElementById("panelCLI").hidden = true;
        document.getElementById("SaveCalifCLI").hidden = false;
        document.getElementById("panelCalificacionCLI").hidden = false;
    }
}



//GUARDAR DATOS Y LLENAR JSON
function saveCalif2() {
    var BalconCalif;
    BalconCalif = $("#comboCLICalif").val;
    var folio = $("#FolioCli");
    var Calificacion = document.getElementById("comboCLICalif").value;

    if (Calificacion == 0) {
        alert("Seleccione una Calificacion");
        $("#comboCLICalif").focus();
        return;
    }
    var json = {
        Folio: folio.val(),
        NumeroCliente: document.getElementById("Cliente").value,
        Calificacion: document.getElementById("comboCLICalif").value,
    };
    console.log(json);
    saveCalifDataCli(json);
    datos = json;
}

function saveCalifDataCli(json) {
    showLoader();
    var xml = new XMLHttpRequest();
    var url = hostInit + "/Client/saveCalificacion";
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            Calificado("EstadoCli", "HeadingCli", "SaveCalifCLI", "SaveCli");
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

    //SigueOfertaCLI();
}

function MensajeVtaCLI() {
    var FolioCli = document.getElementById("FolioCli").value;
    Swal.fire({
        title: 'Venta Exitsa!!, FOLIO: ' + document.getElementById("FolioCli").value,
        text: "Felicidades !",
        icon: 'success',
        width: '50%',
        showCancelButton: false,
        confirmButtonColor: '#5564eb',
        cancelButtonColor: '#ff0500'
    })
}

function SigueOfertaCLI() {
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