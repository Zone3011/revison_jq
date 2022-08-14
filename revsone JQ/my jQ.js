$(document).ready(function () {
    // sentex is this $('selecter').action()
    $('p').click(function () {
        // console.log("moona")
        // $(this).hide()
        $(this).css("background-color", "green")

    });
});
// there are 3 main type of selecter
//  1,id means # and name of id
$('.1').click(function () {
    alert("click on p1")


});

//  2,class means . and name of id 
$("#2").click(function () {
    confirm("click on p2")
});
//  3,Element selecter means name of tag that worke in all enlment 
$("p").click(function () {
    prompt("you click on p tag")
});
// 4 click * so click on every element
$("*").click(function () {
    $("p").html("mona is grate ")
});
// 5 name of tag.classname
$("p.1").click(function () {
    $(".nirav").css("background-color", "black")
});
// 6 name of possispn
$("P:first").click(function () {
    $(".nirav").css("background-color", "blue")
});


