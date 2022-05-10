$("#rank-select1").on("change", function(){
    var changerank = $("#rank-select1").val();
    switch (changerank){
        case 'rankvalue-bronze':
            $("#level-select1").empty();
            $("#level-select1").append('<option value="levelvalue-bronze1">Đồng I</option>');
            $("#level-select1").append('<option value="levelvalue-bronze2">Đồng II</option>');
            $("#level-select1").append('<option value="levelvalue-bronze3">Đồng III</option>');
            $("#level-select1").append('<option value="levelvalue-bronze4">Đồng IV</option>');
            $("#rank-pic1").attr("src","images/bronzei.png");
            $(".row.dark-border1").css("background-image", "linear-gradient(-90deg, #212427 66%, #2B2825)");
            $("#change-text").empty();
            $("#change-text").append('<input type="checkbox" value="add-one-more-victory-inrank-bronze"> Thêm một trận thắng ở <span class="text-orange-color">rank đồng</span>');
        break;
        case 'rankvalue-silver':
            $("#level-select1").empty();
            $("#level-select1").append('<option value="levelvalue-silver1">Bạc I</option>');
            $("#level-select1").append('<option value="levelvalue-silver2">Bạc II</option>');
            $("#level-select1").append('<option value="levelvalue-silver3">Bạc III</option>');
            $("#level-select1").append('<option value="levelvalue-silver4">Bạc IV</option>');
            $("#rank-pic1").attr("src","images/silveri.png");
            $(".row.dark-border1").css("background-image", "linear-gradient(-90deg, #212427 66%, #303537)");
            $("#change-text").empty();
            $("#change-text").append('<input type="checkbox" value="add-one-more-victory-inrank-silver"> Thêm một trận thắng ở <span class="text-orange-color">rank bạc</span>');
        break;
        case 'rankvalue-gold':
            $("#level-select1").empty();
            $("#level-select1").append('<option value="levelvalue-gold1">Vàng I</option>');
            $("#level-select1").append('<option value="levelvalue-gold2">Vàng II</option>');
            $("#level-select1").append('<option value="levelvalue-gold3">Vàng III</option>');
            $("#level-select1").append('<option value="levelvalue-gold4">Vàng IV</option>');
            $("#rank-pic1").attr("src","images/goldi.png");
            $(".row.dark-border1").css("background-image", "linear-gradient(-90deg, #212427 66%, #433F2A)");
            $("#change-text").empty();
            $("#change-text").append('<input type="checkbox" value="add-one-more-victory-inrank-gold"> Thêm một trận thắng ở <span class="text-orange-color">rank vàng</span>');
        break;
        case 'rankvalue-iron':
            $("#level-select1").empty();
            $("#level-select1").append('<option value="levelvalue-iron1">Sắt I</option>');
            $("#level-select1").append('<option value="levelvalue-iron2">Sắt II</option>');
            $("#level-select1").append('<option value="levelvalue-iron3">Sắt III</option>');
            $("#level-select1").append('<option value="levelvalue-iron4">Sắt IV</option>');
            $("#rank-pic1").attr("src","images/ironi.png");
            $(".row.dark-border1").css("background-image", "linear-gradient(-90deg, #212427 66%, #353533)");
            $("#change-text").empty();
            $("#change-text").append('<input type="checkbox" value="add-one-more-victory-inrank-iron"> Thêm một trận thắng ở <span class="text-orange-color">rank sắt</span>');
        break;
        default:
        break;
    }
});

$("#level-select1").on("change",function(){
    var changelevel = $("#level-select1").val();
    switch(changelevel){
        case 'levelvalue-bronze1':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/bronzei.png");
        break;
        case 'levelvalue-bronze2':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/bronzeii.png");
        break;
        case 'levelvalue-bronze3':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/bronzeiii.png");
        break;
        case 'levelvalue-bronze4':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/bronzeiv.png");
        break;
        default:
        break;
    }
})

$("#level-select1").on("change",function(){
    var changelevel = $("#level-select1").val();
    switch(changelevel){
        case 'levelvalue-silver1':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/silveri.png");
        break;
        case 'levelvalue-silver2':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/silverii.png");
        break;
        case 'levelvalue-silver3':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/silveriii.png");
        break;
        case 'levelvalue-silver4':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/silveriv.png");
        break;
        default:
        break;
    }
})

$("#level-select1").on("change",function(){
    var changelevel = $("#level-select1").val();
    switch(changelevel){
        case 'levelvalue-gold1':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/goldi.png");
        break;
        case 'levelvalue-gold2':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/goldii.png");
        break;
        case 'levelvalue-gold3':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/goldiii.png");
        break;
        case 'levelvalue-gold4':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/goldiv.png");
        break;
        default:
        break;
    }
})

$("#level-select1").on("change",function(){
    var changelevel = $("#level-select1").val();
    switch(changelevel){
        case 'levelvalue-iron1':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/ironi.png");
        break;
        case 'levelvalue-iron2':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/ironii.png");
        break;
        case 'levelvalue-iron3':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/ironiii.png");
        break;
        case 'levelvalue-iron4':
            $("#rank-pic1").empty();
            $("#rank-pic1").attr("src","images/ironiv.png");
        break;
        default:
        break;
    }
})

$("#rank-select2").on("change", function(){
    var changerank = $("#rank-select2").val();
    switch (changerank){
        case 'rankvalue-bronze':
            $("#level-select2").empty();
            $("#level-select2").append('<option value="levelvalue-bronze1">Đồng I</option>');
            $("#level-select2").append('<option value="levelvalue-bronze2">Đồng II</option>');
            $("#level-select2").append('<option value="levelvalue-bronze3">Đồng III</option>');
            $("#level-select2").append('<option value="levelvalue-bronze4">Đồng IV</option>');
            $("#rank-pic2").attr("src","images/bronzei.png");
            $(".row.dark-border2").css("background-image", "linear-gradient(-90deg, #212427 66%, #2B2825)");
        break;
        case 'rankvalue-silver':
            $("#level-select2").empty();
            $("#level-select2").append('<option value="levelvalue-silver1">Bạc I</option>');
            $("#level-select2").append('<option value="levelvalue-silver2">Bạc II</option>');
            $("#level-select2").append('<option value="levelvalue-silver3">Bạc III</option>');
            $("#level-select2").append('<option value="levelvalue-silver4">Bạc IV</option>');
            $("#rank-pic2").attr("src","images/silveri.png");
            $(".row.dark-border2").css("background-image", "linear-gradient(-90deg, #212427 66%, #303537)");
        break;
        case 'rankvalue-gold':
            $("#level-select2").empty();
            $("#level-select2").append('<option value="levelvalue-gold1">Vàng I</option>');
            $("#level-select2").append('<option value="levelvalue-gold2">Vàng II</option>');
            $("#level-select2").append('<option value="levelvalue-gold3">Vàng III</option>');
            $("#level-select2").append('<option value="levelvalue-gold4">Vàng IV</option>');
            $("#rank-pic2").attr("src","images/goldi.png");
            $(".row.dark-border2").css("background-image", "linear-gradient(-90deg, #212427 66%, #433F2A)");
        break;
        case 'rankvalue-iron':
            $("#level-select2").empty();
            $("#level-select2").append('<option value="levelvalue-iron1">Sắt I</option>');
            $("#level-select2").append('<option value="levelvalue-iron2">Sắt II</option>');
            $("#level-select2").append('<option value="levelvalue-iron3">Sắt III</option>');
            $("#level-select2").append('<option value="levelvalue-iron4">Sắt IV</option>');
            $("#rank-pic2").attr("src","images/ironi.png");
            $(".row.dark-border2").css("background-image", "linear-gradient(-90deg, #212427 66%, #353533)");
        break;
        default:
        break;
    }
});

$("#level-select2").on("change",function(){
    var changelevel = $("#level-select2").val();
    switch(changelevel){
        case 'levelvalue-bronze1':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/bronzei.png");
        break;
        case 'levelvalue-bronze2':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/bronzeii.png");
        break;
        case 'levelvalue-bronze3':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/bronzeiii.png");
        break;
        case 'levelvalue-bronze4':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/bronzeiv.png");
        break;
        default:
        break;
    }
})

$("#level-select2").on("change",function(){
    var changelevel = $("#level-select2").val();
    switch(changelevel){
        case 'levelvalue-silver1':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/silveri.png");
        break;
        case 'levelvalue-silver2':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/silverii.png");
        break;
        case 'levelvalue-silver3':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/silveriii.png");
        break;
        case 'levelvalue-silver4':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/silveriv.png");
        break;
        default:
        break;
    }
})

$("#level-select2").on("change",function(){
    var changelevel = $("#level-select2").val();
    switch(changelevel){
        case 'levelvalue-gold1':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/goldi.png");
        break;
        case 'levelvalue-gold2':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/goldii.png");
        break;
        case 'levelvalue-gold3':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/goldiii.png");
        break;
        case 'levelvalue-gold4':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/goldiv.png");
        break;
        default:
        break;
    }
})

$("#level-select2").on("change",function(){
    var changelevel = $("#level-select2").val();
    switch(changelevel){
        case 'levelvalue-iron1':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/ironi.png");
        break;
        case 'levelvalue-iron2':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/ironii.png");
        break;
        case 'levelvalue-iron3':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/ironiii.png");
        break;
        case 'levelvalue-iron4':
            $("#rank-pic2").empty();
            $("#rank-pic2").attr("src","images/ironiv.png");
        break;
        default:
        break;
    }
})

$("#button2").on("click",function(){
    $("#pic-step").empty();
    $("#pic-step").attr("src","images/STEP_HOW_BUY_2.png");
    $("#button2").css("background-image", "linear-gradient(to right, #D54E4E, #FF9155)");
    $("#button3").css("background", "none");
    $("#button1").css("background", "none");
})

$("#button3").on("click",function(){
    $("#pic-step").empty();
    $("#pic-step").attr("src","images/STEP_HOW_BUY_3.png");
    $("#button3").css("background-image", "linear-gradient(to right, #D54E4E, #FF9155)");
    $("#button2").css("background", "none");
    $("#button1").css("background", "none");
})

$("#button1").on("click",function(){
    $("#pic-step").empty();
    $("#pic-step").attr("src","images/STEP_HOW_BUY_1.png");
    $("#button1").css("background-image", "linear-gradient(to right, #D54E4E, #FF9155)");
    $("#button2").css("background", "none");
    $("#button3").css("background", "none");
})

$(".nav-link.dangnhap").on("click",function(){
    $(".login-wrapper").fadeIn();
})

$(".close").on("click",function(){
    $(".login-wrapper").css("display","none");
})

$(".button").on("click",function(){
    $(".login-wrapper").fadeIn();
})

