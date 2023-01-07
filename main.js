$(document).ready(function(){
    $("#corpo").on("mousemove", "#nao", function(){


    var left = Math.floor(Math.random()*22)+"rem";
    var top = Math.floor(Math.random()*20)+"rem";

    $("#nao").css("margin-top", top);
    $("#nao").css("margin-left", left);
})
$("#corpo").on("click","#sim",function(){
    alert("Te amo bbS2");
})
});