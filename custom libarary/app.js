var q = G$("Jerin");
console.log(q);
q.greet().setLang("es").greet(); // we can chain
/*q.HTMLGreet("#greeting"); // To use JQuery and set HTNL value*/

q.setLang("fr").HTMLGreet("#greeting"); 

// Use our library
$("#login").click(function(){
   var greetr = G$("Jerin", "Joseph");
    $("#loginDiv").hide();
    greetr.setLang($("#lang").val()).HTMLGreet("#greeting");
});