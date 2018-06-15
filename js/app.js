//fakeloader
$("#fakeloder").fakeLoader({
    timeToHide: 1000,
    spinner: "spinner2",
    bgColor: "#000",
});
$(document).ready(function(){
	$(document).foundation()
    $("#feedback").click(function(event){
        event.preventDefault();
        requisitarArquivo();
    });  
    //slideOut
    var slideout = new Slideout({
        'panel': document.getElementById("panel"),
        'menu': document.getElementById("menu"),
        'padding': 256,
        'tolerance': 70
    });
    slideout.disableTouch();
    $(".toggle-button").click(function(){
        slideout.toggle();
    });
    $(".links-menu").click(function(){
        slideout.close();
        slideout.on("close",function(){
        if($("#click").prop("class") == "clicado"){
            $("#click").removeClass("clicado").addClass("click-me");
        }     
        }); 
    });
    //efeito botao
    $("#click").click(function (){
        slideout.toggle();  
        if($(this).prop("class") == "click-me"){
            $(this).removeClass("click-me").addClass("clicado");
        }else{
            $(this).removeClass("clicado").addClass("click-me");
        }
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
            theme: $.sweetModal.THEME_MIXED
        });
    });
    $("#trailer-jovem").click(function () {
        $.sweetModal({
            title: "Jovens titãs em ação",
            content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/g29xj3Fn26o?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
            theme: $.sweetModal.THEME_MIXED
        });
    });
    $("#trailer-deadpool").click(function () {
        $.sweetModal({
            title: "Deadpool 2",
            content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/1P9OzWX6nzE?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
            theme: $.sweetModal.THEME_MIXED
        });
    });
    $("#trailer-homemForm").click(function () {
        $.sweetModal({
            title: "Homem-formiga e a Vespa",
            content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/0HGBv7s1Y7E?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
            theme: $.sweetModal.THEME_MIXED
        });
    });
    $("#trailer-xmen").click(function () {
        $.sweetModal({
            title: "X-men: Fênix Negra",
            content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/f4S5xrQBwZA?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
            theme: $.sweetModal.THEME_MIXED
        });
    });
    $("#trailer-venom").click(function () {
        $.sweetModal({
            title: "Venom",
            content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/u9Mv98Gr5pY?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
            theme: $.sweetModal.THEME_MIXED
        });
    });

    $("#trailer-homemAranha").click(function () {
        $.sweetModal({
            title: "Homem-Aranha no Aranhaverso",
            content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/fg1gDSPVNSk' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
            theme: $.sweetModal.THEME_MIXED
        });
    });
    $("#trailer-aquaman").click(function () {
        $.sweetModal({
            title: "Aquaman",
            content: "<iframe width='100%' height='450' src='https://www.youtube.com/embed/XhnZPqTxjIE' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
            theme: $.sweetModal.THEME_MIXED
        });
    });
    //photobox
    $('#photobox').photobox('a',{
        time:3000,
        autoplay:true,
        captionTmpl:'DESENVOLVEDORES DO SITE'
    });
})