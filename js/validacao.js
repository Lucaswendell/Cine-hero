$("#form").submit(function(event){
    if($("#nome").val() == ""){
        event.preventDefault();
        $("#nomeS").text("Campo NOME vazio! Por favor digite seu nome.").show().fadeOut(5000);
    }
    if($("#E-mail").val() == ""){
        event.preventDefault();
        $("#emailS").text("Campo E-MAIL vazio! Por favor digite seu E-mail.").show().fadeOut(5000);
    }
    if($("#E-mail").val() != "" && $("#nome").val() != ""){
        event.preventDefault();
        $.sweetModal({
            icon : $.sweetModal.ICON_SUCCESS,
            content : "Enviado com sucesso.",
            timeout : 3000,
            showCloseButton : false,
            theme : $.sweetModal.THEME_DARK
        })
    }
});