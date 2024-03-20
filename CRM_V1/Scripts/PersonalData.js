function SetEventPersonalData() {
    $("#GuardarDatosGenerales").click(ValidatePersonalData);
    $("#BuscarDireccion").click(function () {
        if ($("#CodigoPostal").val() != "") {
            $.ajax({
                url: hostInit + '/Client/FindDireccion/' + $("#CodigoPostal").val(),
                type: 'GET',
                success: function (response) {
                    console.log(response);
                    if (response == null || response.length <= 0) {
                        alert("El codigo postal no existe, rellene los campos manualmente");
                        return;
                    }
                    $("#Estado").val(response[0].ClaveEstado);
                    LoadMunicipios(response[0].ClaveEstado, response[0].ClaveDelMun, 'Municipio');
                    var items = '<option value="0">Seleccione una colonia</option>';
                    for (var i in response) {
                        items += '<option value="'+response[i].idCodigo+'">'+response[i].Colonia+'</option>';
                    }
                    $("#Colonia").html(items);
                    $("#Colonia").val(0);
                },
                error: function (error) {
                    alert("Algo fallo al buscar estado, municipio, colonia");
                }
            });
        } else {
            alert("Ingrese un codigo postal");
            $("#CodigoPostal").focus();
            return;
        }
    });
}

function SetPersonalData(NumeroCliente, Nombre, ApellidoPaterno, ApellidoMaterno,
    FechaNacimiento, RFC, Calle, NumeroExterior, NumeroInterior, CodigoPostal, Colonia, Estado, Municipio,
    Celular, TelefonoCasa) {
    $("#Cliente").val(NumeroCliente);
    $("#Nombres").val(Nombre);
    $("#ApellidoPaterno").val(ApellidoPaterno);
    $("#ApellidoMaterno").val(ApellidoMaterno);
    $("#FechaNacimiento").val(FechaNacimiento);
    $("#RFC").val(RFC);
    $("#Calle").val(Calle);
    $("#NumeroExterior").val(NumeroExterior);
    $("#NumeroInterior").val(NumeroInterior);
    $("#CodigoPostal").val(CodigoPostal);
    $("#Colonia").val(Colonia);
    $("#Estado").val(Estado);
    $("#Municipio").val(Municipio);
    $("#Celular").val(Celular);
    $("#TelefonoCasa").val(TelefonoCasa);
}

function ValidatePersonalData() {
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
    if (Colonia.val() === "") {
        alert("Ingrese Colonia");
        Colonia.focus();
        return;
    }
    if (Municipios.val() == 0) {
        alert("Seleccione un municipio");
        Municipios.focus();
        return;
    }
    if (Estados.val() == 0) {
        alert("Seleccione un estado");
        Estados.focus();
        return;
    }
    savePersonalData();
}