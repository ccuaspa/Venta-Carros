
$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval:2000
    });

    $('#masInfoR4').on('show.bs.modal', function(e){
        console.log("El modal Reanult 4 se esta mostrando")
        $('#masInfoR4Btn').removeClass('bg-primary');
        $('#masInfoR4Btn').addClass('bg-dark');
        $('#masInfoR4Btn').prop('disabled', true);
    });
    $('#masInfoR4').on('shown.bs.modal', function(e){
        console.log("El modal Reanult 4 se mostro")
    });
    $('#masInfoR4').on('hide.bs.modal', function(e){
        console.log("El modal Reanult 4 se oculta")
        $('#masInfoR4Btn').removeClass('bg-dark');
        $('#masInfoR4Btn').addClass('bg-primary');
        $('#masInfoR4Btn').prop('disabled', false);
    });
    $('#masInfoR4').on('hidden.bs.modal', function(e){
        console.log("El modal Reanult 4 se oculto")
    });


    $('#contacto').on('show.bs.modal', function(e){
        console.log("El modal contacto se esta mostrando")
        $('#contactoBtn').removeClass('bg-info');
        $('#contactoBtn').addClass('bg-dark');
        $('#contactoBtn').prop('disabled', true);
    });
    $('#contacto').on('shown.bs.modal', function(e){
        console.log("El modal contacto se mostro")
    });
    $('#contacto').on('hide.bs.modal', function(e){
        console.log("El modal contacto se oculta")
        $('#contactoBtn').removeClass('bg-dark');
        $('#contactoBtn').addClass('bg-info');
        $('#contactoBtn').prop('disabled', false);
    });
    $('#contacto').on('hidden.bs.modal', function(e){
        console.log("El modal contacto se oculto")
    });
});