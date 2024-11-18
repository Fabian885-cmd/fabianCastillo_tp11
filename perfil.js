
    let perfil= "auto";

    perfil = perfil.trim().toLowerCase();

    if(perfil === ""){
        return console.log("Debe especificar el perfil del usuario");
    }
    else if(perfil === "administrador"){
        return console.log("Usted tiene todos los privilegiosde uso del sistema");
    }
    else if(perfil === "asistente"){
        return console.log("mensaje: “Usted sólo tiene permisos de registrar,modificar y consultar datos");
    }
    else if(perfil === "invitado"){
        return console.log("Usted sólo tiene permisos de consultar datos");
    }
    else{
        console.log("Debe especificar un perfil válido")
    }

