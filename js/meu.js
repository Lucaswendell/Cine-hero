//fakeloader
$("#fakeloder").fakeLoader({
    timeToHide: 2000,
    spinner: "spinner2",
    bgColor: "#000",
});    
// foundation
$(document).foundation();
//slideOut
var slideout = new Slideout({
    'panel': document.getElementById("panel"),
    'menu': document.getElementById("menu"),
    'padding': 256,
    'tolerance': 70
});
$("#clicando").click(function(){
        if($(this).prop("class") == "toggle-button clicado"){
            $(this).removeClass("clicado").addClass("edai");
            $(".span").css("background","transparent");
            $(".spanAntes").css("tranform","translate(0,20px) rotate(45deg)");
        }else{
            $(".span").css("background","#fff");
            $(".spanAntes").css("tranform","translate(0,20px) rotate(45deg)");
            $(this).removeClass("edai").addClass("clicado");
        }
        $("span:before").css("transform","translate(0,20px) rotate(45deg)");
});
$(".toggle-button").click(function(){
    slideout.toggle();
});
$(".linksMenu").click(function(){
    slideout.close();
    
});
slideout.on("open",function(){
    $(".menuBotao").css("margin-left","250px");
});
slideout.on("close",function(){
      $(".menuBotao").css("margin-left","0"); 
});
//scroll UP
$.scrollUp({
    scrollDistance: 700,
    animationSpeed: 100,
    animation: "fade",
    scrollForm: "top",
    scrollImg: true,
    zIndex: 100
});
//paralax
$('.parallax-window').parallax();
//trailer
$("#trailer").click(function () {
    $.sweetModal({
        title: "Os vingadores: guerra infinita",
        content: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/DPOw2hfgCHI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        theme: $.sweetModal.THEME_DARK
    });
});
$("#trailer-jovem").click(function () {
    $.sweetModal({
        title: "Jovens titãs em ação",
        content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/g29xj3Fn26o?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
        theme: $.sweetModal.THEME_DARK
    });
});
$("#trailer-deadpool").click(function () {
    $.sweetModal({
        title: "Deadpool 2",
        content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/1P9OzWX6nzE?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
        theme: $.sweetModal.THEME_DARK
    });
});
$("#trailer-homemForm").click(function () {
    $.sweetModal({
        title: "Homem-formiga e a Vespa",
        content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/0HGBv7s1Y7E?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
        theme: $.sweetModal.THEME_DARK
    });
});
$("#trailer-xmen").click(function () {
    $.sweetModal({
        title: "X-men: Fênix Negra",
        content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/f4S5xrQBwZA?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
        theme: $.sweetModal.THEME_DARK
    });
});
$("#trailer-venom").click(function () {
    $.sweetModal({
        title: "Venom",
        content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/u9Mv98Gr5pY?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
        theme: $.sweetModal.THEME_DARK
    });
});

$("#trailer-homemAranha").click(function () {
    $.sweetModal({
        title: "Homem-Aranha no Aranhaverso",
        content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/fg1gDSPVNSk' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
        theme: $.sweetModal.THEME_DARK
    });
});
$("#trailer-aquaman").click(function () {
    $.sweetModal({
        title: "Aquaman",
        content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/XhnZPqTxjIE' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
        theme: $.sweetModal.THEME_DARK
    });
});
//photobox
$('#photobox').photobox('a',{
    time:1000,
    autoplay:true,
    captionTmpl:'DESENVOLVEDORES DO SITE'
});
//verificação
$("#form").submit(function (event) {
    if ($("#nome").val() == "") {
        $("#nomeS").css("color", "red").text("Nome não informado!").show().fadeOut(5000);
        event.preventDefault();// "nao envia o formulario"
    }else
    if ($("#E-mail").val() == "") {
        $("#emailS").css("color", "red").text("E-mail não informado!").show().fadeOut(5000);
        event.preventDefault();// "nao envia o formulario"
    }else
    if($("#text").val() == ""){
        $("#text").attr("placeholder","Digite sua sugestão ou duvida.");
        event.preventDefault();// "nao envia o formulario"
    }else{
        $.sweetModal({
            content: "Enviado com sucesso!!",
            icon: $.sweetModal.ICON_SUCCESS,
            theme: $.sweetModal.THEME_DARK
        });
        event.preventDefault();// "nao envia o formulario"
    }
}); 