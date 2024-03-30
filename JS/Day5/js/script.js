//! (1)Using Toggle and ID
$(document).ready(function () {
    $("#btn1").click(function () {
        $("#first").toggle();
    });
});

//!(2) Using Hide and (3) Show With Class
$(document).ready(function () {
    $(".hide").click(function () {
        $("#second").hide();
    });
    $(".show").click(function () {
        $("#second").show();
    });
});

//!(4) Using Enabled and (5) Disabled
$(document).ready(function () {
    $(":enabled").attr("placeholder", "Default Message");
});

//!(6) Selecting First p Tag Only by Child
$(document).ready(function(){
    $("p:first-child").append(" -- This is Attached to first child only").css("color", "red");
});

//!(7)Selected Option BG-Color is Red
$(document).ready(function(){
    $(":selected").css("background-color","red");
});

//!(8) Border to Image
$(document).ready(function(){
    $(":image").css("border","solid 5px blue");
})

//!(9) Border to Input Field
$(document).ready(function(){
    $(":file").css("border","solid 5px red");
})

//!(10) Reset Button
$(document).ready(function(){
    $(":reset").click(function(){
        $("#remove").val("Congrats! You are pro in resetting things")
    })
})