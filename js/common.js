
$(document).ready(function(){
    $("button.showMenu").click(function(){
    	$("ul#navigation").fadeToggle("slow");
    })
    $("button.showMenu").blur(function(){
    	$("ul#navigation").hide();
    })
});
